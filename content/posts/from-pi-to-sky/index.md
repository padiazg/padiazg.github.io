+++
date = '2024-09-17T16:17:09-03:00'
draft = false
title = 'From Pi to Sky: How My Kubernetes Cluster Evolved Beyond Raspberry'
+++
Also published at [dev.to](https://dev.to/padiazg/from-pi-to-sky-how-my-kubernetes-cluster-evolved-beyond-raspberry-nf2)

Ever embarked on a project that seemed straightforward at first, only to find yourself tumbling down a rabbit hole of challenges and discoveries? That's exactly what happened when I decided to breathe new life into my ageing Kubernetes cluster. What began as a simple upgrade turned into an odyssey through the world of single-board computers, operating systems, and DIY ingenuity.
It all started a few years ago with a Raspberry Pi 2, four Raspberry Pi Zeros, and a cluster hat from 8086.net. Little did I know that this modest setup would lead me on a journey spanning multiple hardware platforms, wrestling with ARM architectures, and ultimately crafting my own solutions to keep my cluster alive and kicking.
In this post, I'll take you through the twists and turns of my cluster resurrection project. From the initial roadblocks of discontinued support to the thrill of discovering alternative hardware, and finally, to the satisfaction of creating custom solutions. Whether you're a fellow tinkerer, a Kubernetes enthusiast, or simply curious about the world of single-board computing, buckle up – this tale of perseverance and problem-solving might just inspire your next tech adventure.

## A bit of history
### The Initial Setup
It all began a few years ago when I stumbled upon the cluster hats from 8086.net. Intrigued by the possibility of creating my own Kubernetes cluster, I decided to take the plunge. That old Raspberry Pi 2 Model B that had been gathering dust in a drawer finally would have a purpose!
For the cluster nodes, there's nothing to think about, just got some Raspberry Pi Zeros. Little did I know that acquiring these tiny powerhouses would be my first hurdle. Due to their popularity and supply constraints, most suppliers had implemented a strict one-per-customer limit. Undeterred, I embarked on a quest that led me to four different suppliers just to obtain the necessary quartet of Zeros. 

![cluster-hat-and-four-raspberry-pi-zeros](image-01.avif)

With all the hardware in hand, I assembled my cluster. The Raspberry Pi 2 served as the controller, while the four Zeros, neatly arranged on the cluster hats, formed the nodes. I opted for K3s, a lightweight Kubernetes distribution perfect for my modest hardware. For a while, everything hummed along smoothly. My little cluster was up and running, handling tasks and teaching me the ins and outs of Kubernetes management.

![all-boards-assembled](image-02.avif)

### The Fall of 32-bit and the Quest for Alternatives
The bliss was short-lived. As technology marched forward, K8s and K3s made the decision to drop support for ARM 32-bit architectures. Suddenly, my trusty Raspberry Pi Zeros were obsolete for this purpose. I found myself at a crossroads – should I abandon the project or find a way to adapt?
My first instinct was to look at the Raspberry Pi Zero 2 W, a 64-bit capable successor. However, I quickly ran into familiar problems: high prices and purchase limits. It was déjà vu all over again.

### Enter the Banana Pi
In my search for alternatives, I stumbled upon the Banana Pi M2 Zero. These boards were not only drop-in replacements with the same form factor and pinout as the Pi Zeros, but they also sported 64-bit processors. Best of all, they were significantly cheaper and had no quantity limitations. 

![orange-pi-on-cluster-hat](image-03.avif)
Thanks to a helpful thread on the Cluster Hat's Google Groups page, I found pre-built images and enough information to get the Banana Pis up and running as nodes. My cluster was back in business, now with 64-bit capable nodes.

### The Final Evolution: Orange Pi CM4
Recently, I decided it was time for the controller board to join the 64-bit party. In the spirit of exploration (and, admittedly, for the fun of it), I opted for an Orange Pi CM4 with a base board to replace the ageing Raspberry Pi 2. The form factor and pinout matched, making it a perfect candidate.
However, this final upgrade proved to be the most challenging. There were no pre-built images for using the Orange Pi as a controller with the cluster hat. I found myself diving deep into the differences between Raspbian/Raspberry Pi OS and the various operating systems available for the Orange Pi.

### The Home Stretch: Custom Solutions
Over the next couple of weeks, I immersed myself in learning the intricacies of operating systems for Orange Pi and Banana Pi. I spent countless hours refactoring and updating the original scripts provided by Cluster Hat. It was a journey of discovery, frustration, and ultimately, triumph.
The result of this labor was the creation of two GitHub repositories containing scripts to smoothly create images for both the Orange Pi CM4 controller and the Banana Pi M2 Zero nodes. What started as a simple cluster project had evolved into a deep dive into single-board computing, operating systems, and custom software solutions.

## Hands on!
### Controller board
The main components used on the controller board:
* [Orange Pi CM4 4G32G+CM4 Base Board](https://www.aliexpress.us/item/3256805807016286.html): RK3566 CPU, 4G DDR4 RAM, 32G eMMC on-board storage
* [A 128G 2242 M.2 NVME PCIe 3.0x4 SSD card](https://www.aliexpress.us/item/3256806166171564.html) (optional, I plan to use it for PVC provisioning on Kubernetes)
* 3.5mm pitch screw terminal. For independently powering the hat, see [here](3.5mm pitch screw terminal)

#### Get the images
##### From the repo
Download the images from  the [releases](https://github.com/padiazg/clusterhat-orangepi-cm4/releases) page on the repo and skip to the [Burn it](#burn-it-opi) section below

##### Build them yourself
You might want to fine-tune or customize the images.
```shell
# clone the repo
$ git clone git@github.com:padiazg/clusterhat-orangepi-cm4.git
$ cd clusterhat-orangepi-cm4

# create the required folders
$ mkdir -p build/dest build/img build/mnt
```
Download a base image from [here](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/service-and-support/Orange-Pi-CM4-1.htm) into the `build/img` folder, I use the [Ubuntu Jammy server](https://drive.google.com/file/d/1Y4KED4elo9A2YaJaRleE6WL5iy5carfV/view?usp=drive_link) image as it was the most updated and flawless from the options available.
> I don't provide a shell example for it as there's no way, I think, to download a Google Drive file straightforwardly with wget or curl  

Time to create the images
```shell
$ cd build

# you need sudo because of losetup and mount used in the scripts
$ sudo ./create.sh Orangepicm4_1.0.6

# once the script has finished the images should be in build/dest
$ ls -l dest
```

#### Burn it
Burn the image into an SD card by using any method you're comfortable with: Raspberry Pi Imager, Balena Etcher, dd
```shell
# list the block storages to find your SD
$ lsblk
AME          MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
sda             8:0    0 698,6G  0 disk  
└─sda1          8:1    0 698,6G  0 part  /home/pato/vaults/backup
sdb             8:16   0 931,5G  0 disk  
└─sdb1          8:17   0 931,5G  0 part  /home/pato/vaults/mis-cosas
sdc             8:32   1  29,7G  0 disk  
└─sdc1          8:33   1  29,4G  0 part  
zram0         251:0    0    16G  0 disk  [SWAP]
nvme0n1       259:0    0 931,5G  0 disk  
├─nvme0n1p1   259:1    0  1022M  0 part  /boot/efi
├─nvme0n1p2   259:2    0     4G  0 part  /recovery
├─nvme0n1p3   259:3    0 922,5G  0 part  /
└─nvme0n1p4   259:4    0     4G  0 part  
  └─cryptswap 252:0    0     4G  0 crypt [SWAP]


# the SD is at /dev/sdc in this example 
$ sudo umount /dev/sdc 
$ sudo dd bs=1M if=build/dest/Orangepicm4_1.0.6-1-ubuntu_jammy_server_linux5.10.160-ClusterCTRL-CNAT.img of=/dev/sdc status=progress
```

#### Boot and access the controller
Place the SD card into the board and power it. 
Find out what's the IP address assigned to the board, there are many ways but here's one:
```shell
$ sudo nmap -sS 192.168.1.0/24
...
Nmap scan report for pi.hole (192.168.1.100)
Host is up (0.00018s latency).
Not shown: 994 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
53/tcp   open  domain
80/tcp   open  http
81/tcp   open  hosts2-ns
443/tcp  open  https
8443/tcp open  https-alt
MAC Address: DC:A6:32:BB:97:30 (Raspberry Pi Trading)

Nmap scan report for clusterhat-01.local.patodiaz.io (192.168.1.110)
Host is up (0.00045s latency).
Not shown: 995 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
111/tcp  open  rpcbind
2049/tcp open  nfs
5555/tcp open  freeciv
8000/tcp open  http-alt
MAC Address: 00:00:A4:ED:A7:29 (Acorn Computers Limited)

Nmap scan report for cnat.local (192.168.1.235)
Host is up (0.00056s latency).
Not shown: 995 closed ports
PORT      STATE SERVICE
22/tcp    open  ssh
111/tcp   open  rpcbind
2049/tcp  open  nfs
5555/tcp  open  freeciv
49175/tcp open  unknown
MAC Address: 00:00:A4:FD:FF:FD (Acorn Computers Limited)
...
```
> I leverage Pi-hole's DHCP capabilities to implement MAC address-based static IP assignment for key devices within my local network. This approach allows for consistent addressing of critical nodes. Furthermore, I utilize Pi-hole's local DNS functionality to pair each of these static IP addresses with a corresponding domain name, facilitating easier identification and access to these devices across the network.

You should be able to access the controller now. The default username and password is "pi:clusterctrl"
```shell
$ ssh pi@192.168.1.213
```

#### Boot from eMMC
You might also want to use the eMMC storage, so you don't need a SD card to boot. In such a case, you still need the SD to boot the board and copy the OS to the eMMC. This procedure is described in the manual found [here](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/service-and-support/Orange-Pi-CM4-1.html)

Create a bootable SD. Use any base image, or those you created or downloaded from the repo, as long as it can boot the board.
Copy the image to the SD 
```shell
# mount the SD card to copy the image
$ mount /dev/sdc /mnt/p2

$ cp dest/Orangepicm4_1.0.6-1-ubuntu_jammy_server_linux5.10.160-ClusterCTRL-CNAT.img /mnt/p2/home/your_user
```
Boot the board with the SD, then copy the image to the eMMC
```shell
# identify the eMMC device
$ ls /dev/mmcblk*boot0 | cut -c1-12**
/dev/mmcblk0

# clear the device, use the device from the prior step
$ sudo dd bs=1M if=/dev/zero of=/dev/mmcblk0 count=5000 status=progress

# copy the image
$ sudo dd bs=1M \
	if=Orangepicm4_1.0.6-1-ubuntu_jammy_server_linux5.10.160-ClusterCTRL-CNAT.img \
	of=/dev/mmcblk0 \
	status=progress

# reboot
$ sync && reboot
```
Unplug the SD to allow the board to boot from the eMMC.

### The nodes
As nodes, I'm using four [Banana Pi M2 Zero](https://www.aliexpress.us/item/3256803540350120.html). The reasons are that they are cheap, the CPU has four 64-bit cores, and there's no restriction on how many I can buy at once, amongst other improvements you can check on their [wiki](https://wiki.banana-pi.org/Banana_Pi_BPI-M2_ZERO)
The instructions for creating the images are pretty much the same as those for the controller, so I'll try not to make it longer.

#### Get the images
##### From the repo
Download the images from  the [releases](https://github.com/padiazg/clusterhat-bananapi-m2-zero/releases) page on the repo and skip to the [Burn it](#burn-it-bpi) section below

##### Build them yourself
```shell
# clone the repo
$ git clone git@github.com:padiazg/clusterhat-orangepi-cm4.git
$ cd clusterhat-orangepi-cm4

# create the required folders
$ mkdir -p build/dest build/img build/mnt
```
To get a base image for the BPi M2 Zero that works well with the cluster hat is a bit trickier, mostly because of kernel support for usb-otg which is fundamental for the nodes.
Download the Debian Bullseye base image from [here](https://github.com/TuryRx/Banana-pi-m2-zero-Images) into the `build/img` folder, here's a direct [link](https://www.mediafire.com/file/ahqfobon44htbud/Armbian_22.08.0-trunk_Bananapim2zero_bullseye_current_5.15.43_Server.rar/file). This one works as expected, and is the most updated I could successfully make it work.

I use a custom setting to create images prepared to work with a CNAT controller because it is what I use in my infra. I'll explain later the differences between using a CNAT and a CBRIDGE controller.

I create a *config-local.sh* file next to the config.sh file
```shell
#!/bin/sh
UPGRADE=1
GROWLITE="2G"
CNAT_IMAGES=1
```

Now create the images
```shell
$ cd build

$ sudo ./create.sh Armbian_22.08.0  

# the images should be in build/dest
$ ls -l dest
```
#### Burn it
```shell
# list the block storages to find your SD
$ lsblk

# SD is at /dev/sdc for this example 
$ sudo umount /dev/sdc 
$ sudo dd bs=1M if=build/dest/Armbian_22.08.0-1-trunk_Bananapim2zero_bullseye_current_5.15.43-ClusterCTRL-p1-CNAT.img of=/dev/sdc status=progress
```
#### Boot and access the node
Place the SD card into the node. To start the node we need to use the `clusterctrl` tool.
Please read the [cluster-hat control page](https://clusterctrl.com/setup-control) to get familiarized with the basic tasks

At the controller
```shell
# get some info about the cluster-hat
$ clusterctrl status

# start the P1 node
$ clusterctrl on p1

# stop the P1 node
$ clusterctrl off p1
```
Let's explain a bit the networking 
```shell
## the network interfaces
$ ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 00:00:a4:ed:a7:29 brd ff:ff:ff:ff:ff:ff
6: wlan0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 54:78:c9:0d:8c:34 brd ff:ff:ff:ff:ff:ff
7: brint: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000
    link/ether ce:90:04:cf:0c:74 brd ff:ff:ff:ff:ff:ff
11: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000
    link/ether 00:00:a4:ed:a7:29 brd ff:ff:ff:ff:ff:ff
39: ethpi2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UNKNOWN mode DEFAULT group default qlen 1000
    link/ether 00:22:82:ff:fe:02 brd ff:ff:ff:ff:ff:ff
41: ethpi3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UNKNOWN mode DEFAULT group default qlen 1000
    link/ether 00:22:82:ff:fe:03 brd ff:ff:ff:ff:ff:ff
42: ethpi4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UNKNOWN mode DEFAULT group default qlen 1000
    link/ether 00:22:82:ff:fe:04 brd ff:ff:ff:ff:ff:ff
...

# the addresses assigned to each one
$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:00:a4:ed:a7:29 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.110/24 brd 192.168.1.255 scope global dynamic eth0
       valid_lft 80240sec preferred_lft 80240sec
    inet6 fe80::200:a4ff:feed:a729/64 scope link 
       valid_lft forever preferred_lft forever
3: brint: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether ce:90:04:cf:0c:74 brd ff:ff:ff:ff:ff:ff
    inet 172.19.180.254/24 brd 172.19.180.255 scope global brint
       valid_lft forever preferred_lft forever
4: br0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 00:00:a4:ed:a7:29 brd ff:ff:ff:ff:ff:ff
    inet 172.19.181.254/24 brd 172.19.181.255 scope global br0
       valid_lft forever preferred_lft forever
    inet6 fe80::200:a4ff:feed:a729/64 scope link 
       valid_lft forever preferred_lft forever
5: ethpi1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UNKNOWN group default qlen 1000
    link/ether 00:22:82:ff:fe:01 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::222:82ff:feff:fe01/64 scope link 
       valid_lft forever preferred_lft forever
6: ethpi2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UNKNOWN group default qlen 1000
    link/ether 00:22:82:ff:fe:02 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::222:82ff:feff:fe02/64 scope link 
       valid_lft forever preferred_lft forever
7: ethpi3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UNKNOWN group default qlen 1000
    link/ether 00:22:82:ff:fe:03 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::222:82ff:feff:fe03/64 scope link 
       valid_lft forever preferred_lft forever
8: ethpi4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel master br0 state UNKNOWN group default qlen 1000
    link/ether 00:22:82:ff:fe:04 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::222:82ff:feff:fe04/64 scope link 
       valid_lft forever preferred_lft forever
...
```
The `ethpix` interfaces are added to the `br0` bridge, they share the `171.19.181.0/24` network:

```shell
# the controller
$ ping 172.19.181.254

# the P1 node
$ ping 172.19.181.1

# the P2 node
$ ping 172.19.181.2

# the P3 node
$ ping 172.19.181.3

# the P4 node
$ ping 172.19.181.4
```
Worth mentioning that the mac-addresses of each node follow the pattern `00:22:82:ff:fe:0x` where `x` is a number between 1 and 4 matching the node number. This is very useful when assigning IP addresses based on the mac-addresses, especially if we are in a CBRIDGE configuration.

 You should be able to ssh any of the nodes using the info above
```shell
$ ssh pi@172.19.181.1 # P1
$ ssh pi@172.19.181.2 # P2
# and so on
```

### Difference between CBRIDGE and CNAT
The main difference between the two is how nodes get an IP address, and how the cluster components access the network.
At both configurations the br0 network is configured and each node is assigned the internal ip addresses as mentioned before, but the main difference is how the traffic is routed to the rest of the network and other networks like the internet.

In a CBRIDGE configuration the nodes get bridged through the controller network and access the network directly. Each node will get an ip address either manually or via an DHCP present in the network, as if it is a device directly connected to the network. 
In the other hand, in a CNAT configuration, the nodes traffic is nated and the controller acts as a router hiding the nodes from the outside.

## Conclusion: Lessons Learned and the Road Ahead

![Image description](image-04.avif)
As I sit back and reflect on this journey, from those first Raspberry Pi Zeros to the current setup with Banana Pi nodes and an Orange Pi controller, I'm struck by how much I've learned and how far this project has come.  
What started as a simple desire to build a Kubernetes cluster became a crash course in hardware compatibility, operating system intricacies, and the importance of community knowledge. Each obstacle - from supply constraints to architecture changes - pushed me to think creatively and expand my skillset.  
Perhaps the most valuable lesson was the reminder that in the world of technology, change is the only constant. The ability to adapt, whether it's finding alternative hardware or writing custom scripts, is crucial. This project also reinforced the power of open-source communities. Without the shared knowledge and pre-built images from other enthusiasts, many of the hurdles would have been much harder to overcome.  
The two GitHub repositories I've created for image creation are not just the end result of this project, but also my contribution back to the community that helped me along the way. I hope that other tinkerers and cluster enthusiasts will find them useful in their own journeys.  
Looking ahead, I'm excited about the possibilities this upgraded cluster opens up. With more powerful, 64-bit capable nodes and a controller, I can explore more complex Kubernetes deployments and perhaps even venture into edge computing scenarios. By the way, I already have two Orange Pi Zero 2W with 2GB RAM each, even more powerful than the Banana Pi M2 Zero,and also just saw there are some Radxa ZERO 3W with 4G of RAM, both of them bringing new challenges to this project.  
This project may have started with a handful of Pis and a dream, but it's grown into so much more. It's a testament to the joy of problem-solving, the power of perseverance, and the endless possibilities when you're willing to think outside the (Raspberry Pi) box.  
So, what's next? Who knows - but I'm certain it will involve more tinkering, learning, and pushing the boundaries of what's possible with these amazing single-board computers. The sky's the limit! 