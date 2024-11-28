+++
date = '2024-11-01T19:17:55-03:00'
draft = true
title = 'How to sync your Obsidian vault using GitHub: A complete guide'
+++
# How to sync your Obsidian vault using GitHub: A complete guide

Also published at [dev.to](https://dev.to/padiazg/how-to-sync-your-obsidian-vault-using-github-a-complete-guide-2l08)

## Introduction

Obsidian has become a powerful tool for note-taking and personal knowledge management, but one question often comes up: "How can I sync my notes across devices?" While Obsidian offers a paid sync service, there's a robust alternative using GitHub that's both free and secure. In this guide, I'll walk you through setting up GitHub synchronization for your Obsidian vault, whether you're on desktop or mobile.

## Prerequisites

Before we begin, you'll need:
- An Obsidian installation
- A GitHub account
- Basic familiarity with Git concepts (though I'll explain the essential commands)

## Setting Up Your GitHub Repository

1. Create a private GitHub repository to store your notes
2. Generate a personal access token:
   - Navigate to GitHub *Settings* → *Developer Settings* → *Personal access tokens* → *Fine-grained tokens*
   - Set the following permissions:
     - **Read** access to metadata
     - **Read** and **Write** access to code and commit statuses

> **Pro Tip**: While classic tokens work too, fine-grained tokens offer better security through more precise permission control.

## Creating Your Obsidian Vault

To ensure a smooth setup, we'll start fresh:

1. Create a new vault in Obsidian
2. Choose your preferred name and location
3. Remove any default files (like Welcome.md)

## Installing and Configuring the Git Plugin

1. Enable community plugins in Obsidian:
   - Go to *Vault's setup* → *Community plugins*
   - Toggle "Turn on community plugins"
2. Install the Git plugin by Vinzent:
   - Navigate to *Browse* → search for "Git"
   - Install and enable the plugin
   
Don't worry if you see a message about not finding a valid Git repository—that's expected at this stage.

## Repository Setup Methods

### Mobile Setup

Mobile devices use a JavaScript implementation of Git called isomorphic-git, making the setup process slightly different:

1. In Git plugin settings, scroll to **Authentication/commit author**
2. Enter your GitHub username
3. Paste your personal access token
4. Use the command palette to find "git clone an existing remote repo"
5. Enter your repository's HTTPS URL
6. Select "Vault Root" as the clone directory
7. Choose "NO" when asked about existing .obsidian directory

### Desktop Setup

For desktop users, you can use terminal commands for a more traditional Git setup:

```shell
cd your/vault/folder
rm *
git init
git branch -m master
git remote add origin https://<your-personal-token>@github.com/username/repo.git
git pull origin master
```
## Important: Managing .gitignore
To prevent synchronization conflicts, create a .gitignore file with these entries:
```
.obsidian
.trash
.vscode
conflict-files-obsidian-git.md
```
On mobile, use the "git edit .gitignore" command from the palette to add these entries.

## Daily Synchronization Workflow
Once everything is set up, syncing becomes straightforward:

1. Open Git source control (via UI or command palette)
2. Stage changed files using the + icon
3. Commit changes with the check icon
4. Push changes using the upload icon
5. Pull updates using the download icon

For convenience, there's a "Commit-and-sync" button that combines staging, committing, and syncing into one action.

## Conclusion
Setting up GitHub synchronization for Obsidian might seem daunting at first, but it offers a powerful and free way to keep your notes in sync across devices. This setup not only provides version control for your notes but also gives you complete control over your data. With the workflow established here, you can focus on what matters most: capturing and developing your ideas in Obsidian while maintaining a reliable backup of your knowledge base.
Remember to regularly sync your changes and keep your access token secure. Happy note-taking!