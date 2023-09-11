---
title: Windows Installer
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - User Guide
article: false
---

- [**Windows x64 Installer Download**](https://bintray.com/artifact/download/mckayerp/ADempiere-444-Window-Install-Test/alpha/Adempiere_380LTS_2_win_x64.exe)

- [**Windows x32 Installer Download**](https://bintray.com/artifact/download/mckayerp/ADempiere-444-Window-Install-Test/alpha/Adempiere_380LTS_2_win_x32.exe)

The ADempiere windows installer will install and configure ADempiere and all the necessary supporting software so you can run the client software or use the web user interface easily from the shortcuts in the Windows Start menu.

The installer is designed to allow potential users of ADempiere to evaluate the software without the fuss of a manual install. The installation is not intended to represent a proper production implementation. Please see [Installing ADempiere Manually](a) for more information on the installation requirements and [Installation Steps](a) for instructions for a multi-server production implementation.

The installer does the following tasks for you:

- Checks your system for the necessary software and provides you the opportunity to choose to use existing compatible versions of Java and Postgres if you already have them installed.
- Collects configuration settings to use to setup the software.
- Downloads and installs the ADempiere software.
- Downloads and installs other supporting software (if required)(Java Development Kit, PosgtreSQL database).
- Sets up the environment and ADempiere.
- Imports and migrates the database.

The ADempiere application server is installed as a Windows service. A few minutes after the installation is completed, the client software or the web UI can be accessed through the shortcuts in the Windows Start Menu. The service is not installed to start automatically after a reboot so you may need to go to the Control Panel, System and Security, Administrative Tools, Services and start the service or configure it to run automatically.

## Installation Options

In most cases, the default options presented by the installer will work correctly, making the install process simple.

- Installation Directory (Defaults to c:\). The installation directory can be changed to any other directory as long as there are no spaces in the full path. The root directory of a drive is preferred. Adempiere will be added in a folder "Adempiere" in the installation directory (e.g. c:\Adempiere)

- Setup options: If you already have a version of PostrgreSQL installed, the installer will attempt to use it. You will be presented with some setup options which you may need to configure for your Postgres install:

  - PostgreSQL port, system user and password. These default to 5432, postgres and postgres respectively. If an existing install of PostgreSQL is being used, these may need to be updated.
  - ADempiere password, web port and SSL port. These default to adempiere, 8080 and 8443 respectively. These can be changed if the ports are already in use.

## Troubleshooting

If you are having issues, please join the [ADempiere chat](http://www.adempiere.net/web/guest/chat-on-line) and ask for assistance. The installer will leave a number of log files in the installation directory (C:\Adempiere) which may be of help.

Common problems include:

- Existing installations of JAVA or PostgreSQL that are configured differently than expected. Either uninstall these applications or proceed with a manual install.
- Ports required by ADempiere are already in use by another system. Different ports should be used in the Options. Stop the server and delete the adempiere.properties file in the user home directory if it exists. Rerun the installer and select different ports in the Options page.
- An existing install of the ADempiere server is running
- A file adempiere.properties exists in the user home directory from a previous install using different settings. This file can be renamed or deleted.
