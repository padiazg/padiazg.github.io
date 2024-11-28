+++
date = '2024-11-13T19:22:31-03:00'
draft = false
title = 'Setting up a local Kubernetes environment with Multipass and bridge networking'
+++
Also published at [dev.to](https://dev.to/padiazg/setting-up-a-local-kubernetes-environment-with-multipass-and-bridge-networking-4cpa)

## Introduction
Preparing for the Certified Kubernetes Application Developer (CKAD) certification requires a reliable environment for hands-on practice. While cloud providers are often recommended, setting up a local environment can be more cost-effective and provide valuable learning opportunities. In this guide, I'll walk you through creating a robust local Kubernetes environment using Ubuntu's Multipass and bridge networking.

## Why Local Setup?
When I started preparing for my CKAD certification, I wanted an environment that would:
- Provide consistent networking between nodes
- Allow full control over the infrastructure
- Minimize costs compared to cloud solutions
- Offer flexibility for experimentation

## Hardware Requirements
Before getting started, ensure your system meets these minimum requirements:

**Minimum Requirements:**
- CPU: 4 cores (8 threads recommended)
- RAM: 16GB minimum, 32GB recommended
- Storage: 100GB free space (SSD recommended)

**My Test Environment:**
- CPU: AMD Ryzen 5 3600 (6 cores, 12 threads)
- RAM: 64GB DDR4
- Storage: 1TB SSD + 1TB HDD + 750GB HDD

Note: While you can run this setup on lower specifications, you might experience performance issues when running multiple containers and services.

## System Compatibility
This guide has been tested on:
- Ubuntu 24.10 (host system)
- Ubuntu 22.04 LTS (Jammy) for VMs
- Multipass 1.14.1
- LXD 5.21.2 LTS

> While the steps should work on other Ubuntu versions (20.04+), you might encounter slight differences in network interface names or default configurations. If you're using Ubuntu 22.04 or earlier, you may need to modify the networkd configuration syntax slightly.

## Network Architecture
Before we dive into the setup, let's understand the network architecture we'll be creating:


![practice-environment-network-diagram](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/972ftbl5glnl5hkndtzm.png)


Our setup creates multiple network interfaces:
- Bridge Network (br0): Primary network for Kubernetes communication
- Host Network (enp37s0): Connection to external network
- VM Networks: Each VM gets two interfaces
  - enp5s0: Multipass default network
  - enp6s0: Bridge network interface

## Setting Up the Network Bridge
Our first task is creating a dedicated network bridge for our Kubernetes nodes. We'll use `systemd-networkd` for this purpose, which provides a robust and modern networking stack.

### 1. Preparing the Network Environment
First, we need to disable NetworkManager and enable systemd-networkd:

```bash
# Disable NetworkManager
sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager

# Enable systemd-networkd
sudo systemctl enable systemd-networkd 
sudo systemctl start systemd-networkd 

# Configure DNS resolution
sudo systemctl enable systemd-resolved
sudo systemctl start systemd-resolved
sudo rm /etc/resolv.conf 
sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
```

### 2. Configuring the Bridge
We'll create a bridge network with the following specifications:
- Network: 172.19.180.0/24
- Gateway: 172.19.180.254
- DHCP Range: 172.19.180.1 - 172.19.180.253

Create two configuration files in `/etc/systemd/network`:

Bridge device definition (`50-br0.netdev`):
```ini
[NetDev]
Name=br0
Kind=bridge
```

Bridge network configuration (`51-br0-bind.network`):
```ini
[Match]
Name=br0

[Network]
Address=172.19.180.254/24
IPForward=yes
ConfigureWithoutCarrier=yes
DHCPServer=yes

[DHCPServer]
PoolSize=253
EmitRouter=yes
EmitDNS=yes
DNS=8.8.8.8

DefaultLeaseTimeSec=600
MaxLeaseTimeSec=7200

[DHCPServerStaticLease]
MACAddress=52:54:00:ab:cd:01
Address=172.19.180.1

[DHCPServerStaticLease]
MACAddress=52:54:00:ab:cd:02
Address=172.19.180.2
```

### 3. Enabling IP Forwarding
To allow communication between nodes and the internet:

```bash
# enable IP forwarding in the kernel
$ sysctl -w net.ipv4.ip_forward=1
$ sysctl -w net.ipv6.conf.default.forwarding=1

# check
$ sysctl net.ipv4.ip_forward
net.ipv4.ip_forward = 1

$ sysctl net.ipv6.conf.default.forwarding
net.ipv6.conf.default.forwarding = 1
```

Set forwarding rule for iptables
```shell
# Configure iptables to allow forwarding
sudo iptables -P FORWARD ACCEPT
# allow nat forwarding to our bridge
sudo iptables -t nat -A POSTROUTING -o <host-nic> -j MASQUERADE
```
### Optional: Make it permanent
Ubuntu comes with ***ufw*** installed by default but it adds lots of restrictions and issues with Multipass regarding DHCP and traffic forwarding so we are going to use plain iptables to manage the firewall rules and make it persistent.
> Disclaimer: Follow this steps only if you are sure and did your research about how it will affect your system as they will change the firewall manager for your host. Take this as a suggestion if it works for you.
```shell
# to persist the rules after restarts, it will uninstall ufw in the process and save the existing rules
$ sudo apt-get install iptables-persistent

# set default FOrWARD policy to ACCEPT
$ sudo iptables -P FORWARD ACCEPT

# allow nat forwarding for our brigde network. change enp37s0 with your host interface 
$ sudo iptables -t nat -A POSTROUTING -o enp37s0 -j MASQUERADE

# save the rules
$ sudo netfilter-persistent save

# check rules
$ sudo iptables -L
$ sudo iptables -t nat -L
```

## Creating Virtual Machines with Multipass
Multipass provides a lightweight way to create Ubuntu VMs. We'll configure it to work with our bridge network.

### 1. Setting Up Multipass with LXD
```bash
snap install lxd
snap connect multipass:lxd lxd
multipass set local.driver=lxd
```

### 2. Launching Kubernetes Nodes
```bash
# Control plane node
multipass launch jammy \
    --name ckad-cp \
    --cpus 2 \
    --memory 8G \
    --disk 20G \
    --network name=br0,mode=auto,mac=52:54:00:ab:cd:01

# Worker node
multipass launch jammy \
    --name ckad-wn0 \
    --cpus 2 \
    --memory 8G \
    --disk 20G \
    --network name=br0,mode=auto,mac=52:54:00:ab:cd:02
```

### 3. Optimizing Network Configuration
To ensure Kubernetes uses the correct network interface, we need to adjust the interface priorities on each node. Here's a quick way to do it using `yq`:

```bash
# Install yq
sudo wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -O /usr/bin/yq \
&& sudo chmod +x /usr/bin/yq

# Update netplan configuration
sudo cp /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.old
sudo yq '.network.ethernets.default.match.macaddress as $default | 
        .network.ethernets.extra0.match.macaddress as $extra | 
        .network.ethernets.default.match.macaddress = $extra | 
        .network.ethernets.extra0.match.macaddress = $default' \
    /etc/netplan/50-cloud-init.yaml.old | 
    sudo tee /etc/netplan/50-cloud-init.yaml

# Restart the node
sudo reboot
```

## Troubleshooting Guide

### Common Issues and Solutions

1. **Bridge Network Not Coming Up**
   ```bash
   # Check bridge status
   ip link show br0
   # If DOWN, try:
   sudo ip link set br0 up
   ```

2. **VMs Can't Reach Internet**
   - Verify IP forwarding:
     ```bash
     sysctl net.ipv4.ip_forward
     ```
   - Check iptables rules:
     ```bash
     sudo iptables -L -v -n
     ```
   - Verify DNS resolution:
     ```bash
     dig @8.8.8.8 google.com
     ```

3. **DHCP Not Working on Bridge**
   - Check systemd-networkd logs:
     ```bash
     journalctl -u systemd-networkd
     ```
   - Verify bridge configuration:
     ```bash
     networkctl status br0
     ```

4. **VM Network Priority Issues**
   - Verify interface metrics:
     ```bash
     ip route show
     ```
   - Check netplan configuration:
     ```bash
     cat /etc/netplan/50-cloud-init.yaml
     ```

### Verification Steps

After setup, verify your environment:

1. **Network Connectivity**
   ```bash
   # From VMs
   ping 172.19.180.254  # Should reach bridge
   ping 8.8.8.8         # Should reach internet
   ```

2. **Interface Priority**
   ```bash
   # Should show bridge interface as priority
   ip route | grep default
   ```

3. **DNS Resolution**
   ```bash
   # Should resolve correctly
   nslookup kubernetes.io
   ```

## Performance Optimization Tips

1. **VM Resource Allocation**
   - Don't overcommit CPU cores
   - Leave at least 4GB RAM for host system
   - Use SSD for VM storage when possible

2. **Network Performance**
   - Enable jumbo frames if your network supports it:
     ```bash
     sudo ip link set br0 mtu 9000
     ```
   - Adjust network buffer sizes:
     ```bash
     sudo sysctl -w net.core.rmem_max=16777216
     sudo sysctl -w net.core.wmem_max=16777216
     ```

## Conclusion
With this setup, you now have a robust local environment for CKAD preparation. The bridge network configuration ensures reliable communication between nodes, while Multipass provides easy VM management. This environment strikes a balance between functionality and resource efficiency, making it perfect for learning Kubernetes administration.

Remember to monitor system resources during heavy testing, and consider adjusting VM resources based on your workload requirements. While this setup requires more initial configuration than cloud-based alternatives, it provides valuable hands-on experience with networking and system administration concepts that will serve you well in your Kubernetes journey.

Next steps would be to install Kubernetes components and configure your cluster following the provided documentation by the course.

*Happy practicing!*

## Additional Resources
- [Multipass Documentation](https://multipass.run/docs)
- [systemd-networkd Documentation](https://www.freedesktop.org/software/systemd/man/systemd-networkd.service.html)
- [CKAD Curriculum](https://github.com/cncf/curriculum)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)