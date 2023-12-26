---
title: Eclipse IDE
category:
  - Eclipse IDE
  - IDE
star: 9
sticky: 9
article: false
author: Yamel Senih
---

![Eclipse IDE](/assets/img/docs/develop-guide/getting-started/eclipse-ide-opening.png)

::: tip Eclipse version

Eclipse IDE for Java Developers (includes Incubating components)

Version: 2021-12 (4.22.0)
Build id: 20211202-1639

:::

## Eclipse IDE

The Eclipse IDE is famous for our Java Integrated Development Environment (IDE), but we have a number of pretty cool IDEs, including our C/C++ IDE, JavaScript/TypeScript IDE, PHP IDE, and more.

You can easily combine multiple languages support and other features into any of our default packages, and the Eclipse Marketplace allows for virtually unlimited customization and extension.

You can download it [here](https://www.eclipse.org/downloads/packages/release/2022-09/r/eclipse-ide-enterprise-java-and-web-developers)

### Create a new Project
After cloning the repository you should open eclipse and create a new project, for it just press `Shift+Alt+N` or go to `File` -> `New`, after it select **Java Project**.

::: tip Workspace

Note that the eclipse workspace is the location of sources config, tou can select other location of repository also

:::

My workspace is `/opt/Development/workspace-jdk-11` and I jus clone the ADempiere inside these route.

![Create New Project](/assets/img/docs/develop-guide/getting-started/create-project.png)

### Building project
For build project just select the adempiere project and after it go to `Project` -> `Clean` -> Press button `Clean`

![Clean Project](/assets/img/docs/develop-guide/getting-started/clean-project.png)

### Change the Perspective
Now we need change the eclipse perspective to **Java EE**, it allows that you can see the `adempiere` project like a web project.

Go to menu `Window` -> `Perspective` -> `Open Perpective` -> `Other...`, after it select **Java EE** 

![Java EE](/assets/img/docs/develop-guide/getting-started/java-ee-perspective.png)


### Creating Tomcat Server
The tomcat server is a popular server and ADempiere can run over it.


::: tip Supported servers

ADempiere can run over Tomcat, Wildfly and Jetty

:::


- Go to `Servers` panel and press "No servers are available. Click this link to create new server..." option

![Select Servers](/assets/img/docs/develop-guide/getting-started/select-servers.png)

- Select `Apache` folder and `Tomcat v10.0 Server`, also you can change the Server name, I change it to `My Tomcat Server`. Press `Next`

![Create Tomcat Server](/assets/img/docs/develop-guide/getting-started/create-tomcat-server-name.png)


- After previous step you must define the server install dir and others, note that I use `/opt/Development/workspace-jdk-11` as install dir but exist a error "Unknown version of Tomcat was specified.", the eclipse wizard help to install, just press **Download and Install...** and acept the apache license. Finally just press **Finish** button.

![Installing tomcat](/assets/img/docs/develop-guide/getting-started/installing-tomcat.png)

![Acept Apache License](/assets/img/docs/develop-guide/getting-started/acept-apache-license.png)

- Note that now exist a server with name **My Tomcat Server**, please make double click over it; Now you can see the server setup.

![Server Created](/assets/img/docs/develop-guide/getting-started/server-created.png)

![Server Setup](/assets/img/docs/develop-guide/getting-started/server-setup.png)

- Now we have a server with default tomcat features. This server is basically a tomcat without ADempiere setup, for get all features from ADempiere just change the **Conmfiguration path** by the default ADempiere path located in `adempiere/tomcat/conf`

![Change Tomcat path](/assets/img/docs/develop-guide/getting-started/tomcat-default-config.png)

- Select **Modules** tab and after it press **Add Web Module...** button

![Select ADempiere Module](/assets/img/docs/develop-guide/getting-started/adempiere-modules.png)

- Select **adempiere** and press **Ok**

![Add ADempiere Module](/assets/img/docs/develop-guide/getting-started/add-adempiere-module.png)

- See the ADempiere Module enabled and press `Ctrl+S` for save setup file

![See Module](/assets/img/docs/develop-guide/getting-started/see-adempiere-module-added.png)


- After it press **Open Launch Configuration** and see the dialog for launch 

- ![Launch Configuration](/assets/img/docs/develop-guide/getting-started/launch-dialog.png) and select **Debug Configurations...** option, the follows press **Classpath** tab.

- Press **User Entries** and after it press **Add External Jars...** button

![Launch Configuration](/assets/img/docs/develop-guide/getting-started/launch-dialog.png)


- Go to `/opt/Development/workspace-jdk-11/apache-tomcat-10.0.13/lib` and select all libraries.

![Add all tomcat libraries](/assets/img/docs/develop-guide/getting-started/launcher-tomcat-add-lib.png)

- Press **Add Jars...** button and select all libraries from **adempiere** project located in `adempiere/tools/lib`

![Add Jars from ADempiere](/assets/img/docs/develop-guide/getting-started/add-jars-from-adempiere.png)

- Repease the previous step for the folders:
  - `adempiere/tools/lib/discord`
  - `adempiere/tools/lib/openid`
  - `adempiere/tools/lib/storefront`
  - `adempiere/JasperReportTools/lib`

- Press **Add Projects...** and select **adempiere**

![Add all tomcat libraries](/assets/img/docs/develop-guide/getting-started/add-adempiere-project.png)

- Press **Debug** button

Now is ready

