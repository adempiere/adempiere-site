---
title: Launching the ADempiere Application
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - User Guide
article: false
---

There are two ways of accessing the ADempiere Application: through a java software client that runs on the user's computer or through a web user interface (webui) which can be accessed through a browser. Both these applications communicate with the ADempiere Application Server. This article describes how to install the client software and launch the client application.

## Windows Installer

If you used the [Windows Installer](a) for 380LTS+ for a demo, both the client application and the webui can be access using the shortcuts in the start menu. To log in, see [Logging In to the Client](a). Read [Finding Your Way Around](a) and then explore the [Garden World](a) demo client.

![AD-Start](/assets/img/community/user-guide/ADempiereStartMenu.png)

## Prerequisites

Before running the client, ensure the the ADempiere Application Server is running on the Server computer. See [Launching the Application Server](a) for details. For computers with Windows operating systems, it is helpful to install the application server as a service. The Windows installer does this for you automatically. The service is not installed to start automatically so you may need to go to the Control Panel, System and Security, Administrative Tools, Services and start the service or set it to run automatically.

Each client/remote computer will need to have Java installed Visit [http://www.java.com/](http://www.java.com/) to download and install the latest version.

::: info Note:

The Client software is automatically installed on the Server as part of the Server Install process. Depending on your operating system and installation process, you can access the Client software on the Server from a shell directly `(<Adempiere_Home>/utils/RUN_ADempiere.bat/sh)` or via a system menu or desktop shortcut. You can also use the process described below.

:::

## Accessing the Application Server

To access the ADempiere Application Server from a browser, point your browser to your server URL `(http://<your server name, IP or URL>:<your port number>/admin e.g. http://myservername:8080/admin)`

![user-guide](/assets/img/community/user-guide/Adempiere_Home.png)

## Running ADempiere as a Web Application

The ADempiere Client can be accessed as a web application from the application server. The server page lists several methods:

- ADempiere ZK webUI - contributed by Posterita and consistently supported by the community.
- ADempiere old UI HTML (alpha) (alternative)
- Web Based Point of Sale (POS)

The ZK webUI is the most popular as it represents ADempiere being used in a cloud. The webui can be accessed directly with the url `(http://<your server name, IP or URL>:<your port number>/webui e.g. http://myservername:8080/webui)`

The Windows installer will have created a link to the webui for you in the Windows Start Menu.

## Installing the ADempiere Client

If you are using a single computer, the ADempiere Client software is already installed along with the Application Server.

To install the ADempiere client on a remote computer, you have two options:

- [Web Start](launching-the-adempiere-application.md)
- [Local Install](launching-the-adempiere-application.md)

### Option 1: Web Start

The WebStart option automatically makes sure that the client computer will use the latest version. This is very handy in large installations as you will only need to update the software on the server and all the clients will automatically update their local copies the next time the client is launched.

- From the Application Server web page, click on the WebStart button and you will see the WebStart Dialog:

![webstart-down-progress](/assets/img/community/user-guide/Webstart_download_progress.jpg)

- You may need to associate the jnlp file which the WebStart uses with the appropriate java application. If so you will see a window like the one below. Click on "Do this automatically for files like this from now on.":

![jnlp](/assets/img/community/user-guide/Webstart_jnlp_file.jpg)

::: info Note:

You can change the association for JNLP files in the Advanced properties of the Java Control Panel `(Control Panel{{#if: Java | →Java }}{{#if: Advanced | →Advanced }}{{#if: | → }})`.

:::

- Then you will see the Security window. Click on "Always trust content from this publisher.":

![web-start-digit](/assets/img/community/user-guide/Webstart_digital_sig.jpg)

- The very first time the application starts, you will see a license dialog.

![web-start-license](/assets/img/community/user-guide/Webstart_license.jpg)

- The application will start once you accept the license terms. Move on to [Logging In to the Client](a).

::: info Note:

In windows, the Web Start installs a menu link in your start menu. You can restart the application by clicking this link. The next time you start the application by clicking on Web Start, the application will check for a newer version on the Application Server and automatically download it if it exists. After downloading the application will start automatically.

:::

### Option 2: Local Install

A local install makes a local copy of the client software that is not automatically updated. In order to perform the Local Install:

- click on the *zip* link and
  - extract the file content to a local directory.

Refer to the [Manual Installation](a) Instructions for your operating system as the installation process is similar to the installation of the server software. Specifically, you will need to set the following system environment variables:

- **JAVA_HOME**
- **ADEMPIERE_HOME**
- **PATH**

#### Start the ADempiere Client

If you've used the Windows Installer, use the shortcut for ADempiere in the Start Menu.

Start the ADempiere Client via the script RUN_Adempiere (.bat or .sh) . Then you will see the ADempiere Login window:

Move on to [Logging In to the Client](https://wiki.adempiere.net/Logging_In_to_the_Client) for log in instructions.

## Troubleshooting Tips

If you did not set the environment variables, you might receive an error message that the **JAVA_HOME** or **ADEMPIERE_HOME** variable has not been set.

Windows...

- Set the JAVA_HOME system environment variable to your java installation directory e.g. C:\jdk1.5.0_05
- Set the ADEMPIERE_HOME system environment variable to C:\Adempiere

- Set the JAVA_HOME system environment variable to /usr/lib/jvm/java-6-sun/jre if that's where your java is.
For Debian based systems do this to check

~~~
   ls -l /etc/alternatives/java 
~~~

Use this command

~~~
export JAVA_HOME=/usr/lib/jvm/java-6-sun/jre    
~~~

You can also set this in **~/.bashrc** so it is set on each login.

- Set the **ADEMPIERE_HOME** system environment variable to /opt/Adempiere if that is the local directory you unzipped to.
- Make the shell script that starts Adempiere client runable, by giving it the eXecute attribute for All users.

~~~
chmod a+x /opt/Adempiere/RUN_Adempiere.sh
~~~

- Add %JAVA_HOME%\bin;%ADEMPIER_HOME%\lib; to your PATH system environment variable.

