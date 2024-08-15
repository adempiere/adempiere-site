---
title: How to document?
icon: list
star: 9
sticky: 9
tag:
  - Product
  - ADempiere
  - Documentation
article: false
author: Jesús Albujas
---

**ADempiere** is an open-source project that values and appreciates community contributions. If you want to add valuable information to the documentation, here is a step-by-step guide.

## Requirements:

1. Git
2. Visual Studio Code
3. NVM (Node Version Manager)
4. Node.js 14.x or later

---

### How to Install Git?

1. To download Git, you must have an account created.

If you want to install **Git** on Linux through a binary installer, you can generally do so using your distribution's package management tool. For example, on **Fedora**, you can use yum:

```shell
yum install git
```

On a Debian-based distribution like Ubuntu, you can use apt-get:

```shell
sudo apt-get install git
```

For additional options, the **Git** website has installation instructions for different types of Unix. You can find this information [here](http://git-scm.com/download/linux).

To configure Git to use your GitHub account when making commits, there are some settings you need to check and adjust.

```shell
git config --global user.name "YourGitHubUsername"

git config --global user.email "YourGitHubEmailAddress"
```

Make sure to replace **"YourGitHubUsername"** and **"YourGitHubEmailAddress"** with your GitHub credentials.

The **--global** option sets these settings globally, meaning they will apply to all your repositories.

- Verify Git's current configuration:
You can check Git's current configuration by running the following commands in your terminal:

```
git config user.name
git config user.email
```

These commands will show you the username and email address configured in Git.

---

### How to Download Visual Studio Code?

To download **VS Code**, go to its official page [here](https://code.visualstudio.com/).

- If you're using a Red Hat-based system like Fedora or Red Hat Enterprise Linux, you should select the **.rpm** file.

- If you're using a Debian-based system like Ubuntu, Linux Mint, or Debian, then you should select the **.deb** file.

![vscode](/assets/img/product/how-to-install/vscode.png)

To install it, simply click on the package:

![package-deb](/assets/img/product/how-to-install/package-deb.png)

![install](/assets/img/product/how-to-install/install-package.png)

And that's it! You will have Visual Studio Code installed.

![vs-installed](/assets/img/product/how-to-install/vs-installed.png)

It is recommended to install the following extensions to work comfortably:

1. Git Graph
2. Git History
3. Git Tree Compare
4. Git Lens
5. Markdown Preview Github Styling
6. Markdownlint
7. Github Pull Requests And Issues

---

#### GitHub Pull Requests And Issues

Finally, it is essential to configure authentication in Git through VS Code to interact with GitHub. To do this, follow these steps:

1. Open VS Code.
2. Go to Accounts.
3. Select Sign in with GitHub....
4. This will redirect you to the official GitHub page. Make sure you have previously logged in to GitHub to link the account successfully.

![sign-in](/assets/img/product/how-to-install/sign-in-en.png)

---

### How to Install NVM and Node.js?

- Run the following command to download and install NVM:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

- Update the profile:

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads bash completion for nvm 
```

- Install Node.js

```shell
nvm install 20.10.0
```

---

## Forking the Official ADempiere Documentation Repository

You can find the repository by clicking [here](https://github.com/adempiere/adempiere-site).

To fork the repository, follow these steps:

Click the "Fork" button in the upper right corner of the page.

![go-to-fork](/assets/img/product/how-to-install/go-to-fork.png)

You will be redirected to the **Create a new fork** section. Uncheck the option to only copy the `main` branch and click **Create fork**.

![create-new-fork](/assets/img/product/how-to-install/create-new-fork.png)

With these steps, the fork will have been created.

---

### Download Cloned Repository

1. Copy the link of the cloned repository.

![copy-link](/assets/img/product/how-to-install/copy-link.png)

2. Go to the terminal and write the following command, for example:


```shell
git clone https://github.com/your-user/adempiere-site
```

3. Open **Visual Studio Code** > **Open Folder**

![open-folder](/assets/img/product/how-to-install/open-folder.png)

Look for the repository and open it.

![select-folder](/assets/img/product/how-to-install/select-folder.png)

Visual Studio Code shows a message the first time it opens a folder. Here Visual Studio Code asks if it should be trusted or not.

- If you select **No, I don't trust the authors**, Visual Studio Code will open the workspace in restricted mode.

- If you select **Yes, I trust the authors**, Visual Studio Code will trust the current workspace and enable all the editor features you are used to.

Activate the checkbox and select **Yes, I trust the authors**.

![trust-authors](/assets/img/product/how-to-install/trust-authors.png)

---

### How to Commit from Visual Studio Code?

Go to **Git Graph** > **Right-click on main** > **Create Branch**

![create-branch](/assets/img/product/how-to-install/create-branch.png)

Name the branch. This created branch is where you will work, meaning, create or modify files, insert images, among other functions.

![name-branch](/assets/img/product/how-to-install/name-branch.png)

For example, documentation files are located in src, as shown in the image.

![files](/assets/img/product/how-to-install/files.png)

Add information to a file.

![changes](/assets/img/product/how-to-install/changes.png)

When making a change to a file, you must validate that it is correct. To do this, build the page to visualize the changes.

Press **ctrl + j** to display the terminal from Visual Studio Code and install the dependencies:

```shell
# Using npm
npm install

# Or using yarn
yarn install
```

Subsequently, run to run the page:

```shell
npm run dev:vite
```

Here you can visualize the changes.

![changed-successfully](/assets/img/product/how-to-install/changed-successfully.png)

To commit, go to Source Control > and you will see the file that underwent changes > You can add a message and then commit. Once the commit is done, you must go to your repository on Github where you will see the option to make a pull request, this being the final step, and there is nothing left but to wait for it to be accepted by an administrator.

![commit](/assets/img/product/how-to-install/commit.png)
