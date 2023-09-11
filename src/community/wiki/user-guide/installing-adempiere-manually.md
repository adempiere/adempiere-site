---
title: Installing ADempiere Manually
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - User Guide
article: false
---

## General Installation Instructions

The installation process is similar across operating systems with a few minor exceptions.

This installation instruction is intended for initial installations where the database, application server and client all run on the same machine and a desktop or GUI interface is being used.

For more complex installations or command-line installations, see [Installation Steps](a).
If you already have an ADempiere installation running and you want to update to a newer version, see [Upgrading and Migration](a).
An installation can take as little as 15 or 20 minutes.

## Downloads

Before you begin, download each of the following packages:

- Java SE Development Kit - Get the latest from http://www.oracle.com/. You only need the JDK without JavaFX, EE or NetBeans bundles.
- A database. Either
  - Postgre SQL - Get the latest Windows install from http://www.postgresql.org/download/ OR
  - Oracle - A free "express" version is available from Oracle at http://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/index.html
- ADempiere Latest Release - Download the latest ADempiere from here.
- ADempiere Patches - From http://sourceforge.net/projects/adempiere/files/ADempiere Patches/ download the patches for the version of ADempiere downloaded above. The patches come in two files, a *_patches_*.jar and a *_migra_*.[zip|tar]. You will need both.

## Install the Pre-Requisites

### JAVA

Install the JAVA JDK with the default installation settings. Say OK to install the follow-on JRE as well. Carefully note the full path for the JDK directory (e.g: C:\Program Files\java\jdk1.5.0_19) and the JRE directory that you have just installed.

::: info Note:

There may well be a number of JDK and JRE directories, so choose the right one! The JDK should include the JRE.

:::

The ADempiere scripts rely on the existence of a system environment variable JAVA_HOME. When the scripts call java, they use the full path as $JAVA_HOME/bin/java so it is important that this variable exist.

Following the instructions for your system, add a new System Variable JAVA_HOME for your new JDK directory:

JAVA_HOME use C:\Program Files\Java\jdk1.7.0_25 (or whatever your JDK directory is called)
Append the following JDK path to the system path: %JAVA_HOME%\bin or $JAVA_HOME/bin

### Database

::: info Note:

You can use an existing Oracle or PostgreSQL database if you already have one installed. If so, gather the passwords for the postgres or system user, check the environment variable and path, verify that the service is running and move on to the next step.

:::

Install database software according to the installation instructions for your system using the defaults to keep things simple. Keep track of passwords and ports since you will need this information in the ADempiere setup.

The ADempiere scripts will need to find the database command line utilities, so set your path to point to the "bin" directory of the database install. You can do this in the same way JAVA_HOME was used above. Create an environment variable such as DATABASE_HOME set to the database install directory, and add DATABASE_HOME/bin to your path according to the methods for your system.

::: danger Caution!

If for some twisted reason you also have Oracle running on the same machine as PostgreSQL, be aware that the two databases include some executables with the same name. If you have both POSTGRES_HOME and the equivalent ORACLE_HOME on the path, you might have errors when running some of the ADempiere scripts. Try to keep the path pointing to one or the other database at a time and switch between the two as required.

:::

### Install the ADempiere Software

There is no install script. Just extract the ADempiere archive to a suitable location: (e.g. c:\ or /u01/). For reference, call this directory $ADEMPIERE_ROOT. You should end up with the files in a folder like $ADEMPIERE_ROOT\Adempiere. For reference, call this folder $ADEMPIERE_HOME.

::: info Note:

Avoid spaces in the directory path. The batch scripts do not like directory names with spaces. If using a $ADEMPIERE_ROOT with multiple directories, avoid directory names with spaces.

:::

### Apply the Patches

Patches are a combination of *.jar files, which replace *.jar files in the $ADEMPIERE_HOME\lib directory, and migration scripts which update the database. In the Patches directory on Source Forge, there may be more than one type of *.jar that needs patching. If you downloaded one or more patch files, replace the existing file with the downloaded one, changing its name to match. For example, copy the *_patches_*.jar file to $ADEMPIERE_HOME\lib\patches.jar, overwriting the existing file. See the detailed instructions in [Patches Installation](a).

::: info Note:
It is a good idea to rename the existing *.jar file to something like patches.jar.old before you replace it with the the new file

:::

### Apply Customizations, Packages and other Files

If you have a customization.jar with customized code or a packages.jar file with supporting *.jar files, add them to the $ADEMPIERE_HOME\lib directory, overwriting the existing files.

## Initial ADempiere Setup

A setup utility in ADempiere will prepare the software for use and create environment variables needed in the following steps.

::: info 	Note:
The setup utility will need to make changes to environment variables. Execute the utility with sufficient permissions to do so.

:::

Navigate to $ADEMPIERE_HOME and execute RUN_setup.[sh|bat].

::: info Note:
In linux systems you may need to change the executable rights of the *.sh files in the $ADEMPIERE_HOME directory.
:::

If this is the first time you are installing ADempiere, a licence and security keys dialogs will appear. Accept the defaults.

The setup dialog will appear.

You will need to change:

- Change Database Server from `<your-computer-name>` to localhost
- Set Database Type according to your installed database: oracle, oracleXE, or postgresql
- Change Database Name from xe to adempiere (You can use another name here if you like)
- Set DB Admin Password to postgres (or whatever you entered above for the database administrator)
- Set Database Password to adempiere
- Do not change anything in the Mail Server settings. These can be set up later.

You may also need to change the following:

- Change Adempiere Home to $ADEMPIERE_HOME (e.g., C:\Adempiere) if it has been set to the wrong location.
- Set Application Server Web Port to 8080 and SSL to 8443 (instead of 443). Access to ports 80 and 443 is often restricted to system administrators. If these ports are already in use, you can choose other open ports. Check your system documentation for how to find open/available ports.

### Press the Test button

When the Test completes without errors and the Save button (bottom, right) is activated, click the Save button. Wait a few minutes until the Adempiere Server Setup screen disappears and the deployment is finished.

::: info Note:
The database does not have a user adempiere or a database adempiere at this point, so these tests will not be checked. The user and database will be created in the next step.

:::

If you are having problems, see the detailed instructions on this dialog in the pages [InstallServer](a) and [ServerSetupHelp](a)

::: info Note:
The setup process will have created several files in the $ADEMPIERE_HOME and $ADEMPIERE_HOME\utils directories with names like adempiere.properties, adempiereEnv.properties and myEnvironment.bat. The adempiere.properties file can be copied to a new name and a different properties file created to, for example, create a sandbox version of the database with a database name like adempiere_sandbox.

:::

### Import ADempiere Data

::: caution Caution!
The following script will DROP any existing adempiere database. Do not run this command if you already have data loaded.

:::

In a shell, navigate to $ADEMPIERE_HOME\utils and execute 'RUN_ImportAdempiere.[sh|bat]'.

See [CreateDatabase](a) for more information.

### Apply Migration Scripts

The database installed above will be at the state of the release version and will have all migration scripts applied. You may need to apply migration scripts which were downloaded with the patches.

If you are not installing patches, skip this step.

### SQL - Prior to Release 3.8.0

The migration scripts can be found in the *_migra_*.[zip|tar] file downloaded above. Unzip the contents to a convenient directory. The scripts can be applied in a number of ways, using database tools or the command line. Refer to the documentation for your database.

### XML - Since Release 3.8.0
The XML migration scripts to apply should be saved in the $ADEMPIERE_HOME\migrations directory. These scripts will be included in *_migra_*.zip file. Unzip the contents to $ADEMPIERE_HOME\migrations. To apply the scripts, execute the command $ADEMPIERE_HOME\utils\RUN_MigrateXML.[sh|bat] from a shell.

## Run ADempiere

### Start the Application Server

In a shell, navigate to $ADEMPIERE_HOME\utils. Execute 'RUN_Server2.[sh|bat]' and wait for the server to fully start - it will end this phase with "INFO [Server] JBoss .... Started in xx:xx:xx ms", which will take around 30 seconds to 3 minutes depending on your computer.

### Starting the Application Server Automatically

In Windows, if you would like to run the server as a service, in a shell, navigate to $ADEMPIERE_HOME\utils\windows and run Adempiere_Service_Install.bat. You will need to open the Services Window (Control Panel{{#if: Administrative Tools | →Administrative Tools }}{{#if: Services | →Services }}{{#if: | → }}) to set the properties so the service starts automatically or manually. Note that this won't work Windows Server 2013 until the ADempiere software is upgraded.

In linux, you can use nohup or an equivalent tool.

## [Launching the ADempiere Application](launching-the-adempiere-application.md)

'**Congratulations!**'

At this point, your installation is complete and you can move on to [Launching the ADempiere Application](launching-the-adempiere-application.md).

## Uninstall or Revert to Previous Version

To uninstall the software, simple delete the $ADEMPIERE_HOME directory. To delete the database, use the database administrator to drop the adempiere database and user.

To revert to the previous version, delete the $ADEMPIERE_HOME directory and copy the previous version to $ADEMPIERE_HOME. Restore the backed-up copy of the database using $ADEMPIER_HOME\utils\RUN_DBRestore.[sh|bat].

## System Specific Installations

The following links provide detailed instructions for manual installations on various operating systems.

### Windows

- [Adempiere Install for Windows & PostgreSQL](a) Updated for version 3.8.0. (Original page contributed by Bepivin)
- [How To Install on Oracle 10gXE / WinXP or Win2003 Server](http://www.infotechaccountants.com/topicsar/16200001.htm) (From [Information Technology Accountants](http://www.infotechaccountants.com/) WebSite) (Arabic)
- [How To Install on Oracle 10gXE / WinXP](http://tyarli.googlepages.com/adempiere2) (From Tyarli's Home Page)

### Linux-General

- [ADempiere via .deb/RPM/apt-get/yum](a)
- Using IzPack Installer ( Outdated ) [PostgreSQL & Linux](a)
- Install ADempiere 3.5.3a on Linux (Chinese):[ADempiere安装指南-3.5.3a (Linux)](http://hi.erp100.com/space-53704-do-blog-id-6766689.html)

### Linux-Debian/Ubuntu

- [Installing ADempiere 3.7.0 on Ubuntu 11.04](a)
- [Debian and PostgreSQL Install](a)
- [Install on Ubuntu 10.04 LTS](a)
- [Install on Ubuntu 8.04](a) by [Gabriel](https://wiki.adempiere.net/User:Gabriel)
- [Install on Ubuntu 8.10](a) by [Tamás Magyar](https://wiki.adempiere.net/User:Magyusz)
- [ADempiere with Postgresql on Ubuntu 9.04 Jaunty](a)
- [ADempiere Dedicated Server](a) or utilizing Ubuntu Linux Server Edition just for ADempiere
- Install on Debian (Chinese): [在Debian及Postgres上安装Adempiere](a)
- Install on Ubuntu 7.10 (Chinese): [在Ubuntu 7.10上安装Adempiere](a)

### Linux-RedHat/Fedora

- [Install ADempiere 3.6.0 on Fedora 13 with PostgreSQL](a) ([Snantachai](https://wiki.adempiere.net/User:Snantachai))
- [Install on Fedora 10 with PostgreSQL](a) ([Wariola](https://wiki.adempiere.net/User:Wariola))
- [Install Adempiere 3.5.4 on Centos 5.4 / PostgreSQL 8.4.2](a) by [Michael Judd](https://wiki.adempiere.net/User:Juddm)
- [Adempiere 3.3.0 and PostgreSQL 8.1.9 Installation on CentOS 4.5 (Thai)](https://wiki.adempiere.net/Adempiere_3.3.0_and_PostgreSQL_8.1.9_Installation_on_CentOS_4.5_(Thai)) by [Sureeraya L.](https://wiki.adempiere.net/User:Sureeraya)
- [How to install Adempiere on CentOS 5.1 (Xen) with Postgres](https://wiki.adempiere.net/How_to_install_Adempiere_on_CentOS_5.1_(Xen)_with_Postgres) by [Michael Judd](https://wiki.adempiere.net/User:Juddm)

### Linux-Other

- [Install on Mandriva 2009 (Spanish)](a) by Ana María Orozco and Javier Andrés Cárdenas
- [SLES10 (64 bit) and PostgreSQL](a) (by Terence Ng)
- [How to Install ADempiere on P-Series with IBM JAVA & SLES 64bit](a) by - [Leroy P.](https://wiki.adempiere.net/index.php?title=User:Python&action=edit&redlink=1)

### Open Source OS

- [How to Install and Run ADempiere on OpenSolaris and Glassfish](a) by [Bahman M.](https://wiki.adempiere.net/User:Bmovaqar) and [Praneet Tiwari](https://wiki.adempiere.net/User:Praneet)
- [How To Run ADempiere on FreeBSD](a) by [Bahman M.](https://wiki.adempiere.net/User:Bmovaqar)

### IBM

[Installation Guide for ADempiere using WebSphere Application Server](a) by [Grant Q](https://wiki.adempiere.net/User:Grantq)
[Installation Guide for ADempiere on IBM i](a) by [Grant Q](https://wiki.adempiere.net/User:Grantq)

## Other

[How to install Adempiere with Postgres on MacOSX 10.5](a)

## Installation From Trunk (SVN)

- [Manual Installation From Trunk](a)
- [AdempiereERP and its pre-requisites complete installation from Trunk (SVN)](a) [(in ppt format)](http://vulms.vu.edu.pk/Courses/cs619/Downloads/VOSS_ADempiere_Installation_Guide_Windows.zip) VOSS Com AdempiereERP installation guide is a complete, comprehensive and sequential installation guide of AdempiereERP and its pre-requisites for Windows platform. The unique and prominent feature of this installation guide is that it has information to install all components or prerequisites of AdempiereERP in a single file. Contributed by [VOSSCom](https://wiki.adempiere.net/User:Vosscom) ([Virtual University](http://www.vu.edu.pk/) (of Pakistan) Open Source Software Community)

## OS and DB Setup

Manual postgres setup in linux

## Step By Step Series

contributed by [Alejandro Falcone](https://wiki.adempiere.net/User:Afalcone)

[InstallServer](https://wiki.adempiere.net/InstallServer) for setup at server after Database is done
[Launching the ADempiere Application](https://wiki.adempiere.net/Launching_the_ADempiere_Application) for client side where remote PC users can login
[InitialClientSetup](https://wiki.adempiere.net/ManPageX_InitialClientSetup) starting the Business Client Setup

## Application Server Setup

- Alternate setup using [Glassfish](http://blogs.sun.com/praneet/entry/running_adempiere_in_glassfish) by Praneet Tiwari.
- ADempiere on [OpenSolaris and Glassfish](http://www.adempiere.com/index.php/How_to_Run_ADempiere_on_OpenSolaris#Running_ADempiere_3.53_on_OpenSolaris_2008.05_with_Glassfish_Application_Server) by [Praneet Tiwari](https://wiki.adempiere.net/User:Praneet).

