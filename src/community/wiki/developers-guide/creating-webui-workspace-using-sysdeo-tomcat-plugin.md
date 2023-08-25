---
title: Creating WebUI Workspace using Sysdeo Tomcat Plugin
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Setting up Adempiere ZK Web UI workspace

July 23, 2008

Contributed by: [Ivanceras](https://wiki.adempiere.net/User:Ivanceras)

## Part I. Set up the sysdeo tomcat plugin

1. Download the sysdeo tomcat plugin here [[1]](http://www.eclipsetotale.com/tomcatPlugin/tomcatPluginV321.zip) and unzipped it to your plugin directory of your Eclipse IDE.
Note: You must already have a tomcat installation in your computer.
2. Restart your eclipse IDE, in order to activate the sysdeo tomcat plugin.
3. Open Window>Preference>Tomcat, Set the tomcat home folder

![setting-up-zk](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_2b97953b.png)

## Part II. Set up the Adempiere Java Project and the zkwebui tomcat project

4. Set up the Adempiere source as a Java Project. Make sure you’ve checked out the Adempiere trunk stable version, it has zkwebui source folder. If you are using other version, you should copy the zkwebui folder into your Adempiere source folder.

![setting-up-2](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_m5357d2a9.png)

5. Make a Tomcat project with source pointing to the zkwebui folder of the Adempiere source tree,

![setting-up-3](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_de84289.png)

- name it as zkwebui

![setting-up-4](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_m54c85aef.png)

- Your IDE should have the two projects as shown.

![setting-up-5](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_9120855.png)

6. Open the Window > Preferences>Tomcat>Advanced and include the Adempiere_stable as Tomcat classpath

![setting-up-6](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_m4bbe82ea.png)

7. In Tomcat>Source Path, check all the two projects as Java source path.

![setting-up-7](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_m3004edba.png)

8. Edit some of the Files in the zkwebui folder( ie: Desktop.java) of the Adempiere tree, to see if it really works.

- Note: Editing the zkwebui project also changes the source in the main Adempiere project, since they point to the same source folder.

![setting-up-8](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_m4fa53f55.png)

9. Restart Sysdeo Tomcat plugin and open the project in the browser

![setting-up-9](/assets/img/community/developers-guide/Setting_up_the_ZK_webui_html_m1507f78b.png)\

Document version: [[2]](http://adempiere.com/wiki/images/5/5f/Setting_up_the_ZK_webui.doc)

## Special Thanks

- Low Heng Sin, for creating the improvement to the Adempiere WebUI and for guiding me how to set the zkwebui.
- See also [Creating WebUI Workspace using Eclipse Webtool](creating-webui-workspace-using-eclipse-webtool.md) on editing ZK Ajax by Low Heng Sin.

