---
title: How to create a WebStore
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Community
article: false
---

## Web Store

- Log onto **ADempiere** with **Admin Role**
- Go to the **Web Store** window and create **New Record**

![1](/assets/img/community/functional-howtos/Webstore_window.jpeg)

For the purpose of our exercise, we will modify the following:

- **URL** – valid FQDN i.e. [http://www.yourdomain.com](http://www.yourdomain.com)
- **Web Context** – context root to web store i.e. /newstore
- **Stylesheet** – aesthetics of the web store can be changed by modifying the specified file in Cascade Style Sheet (CSS) format
- **Price List** – the range of products available to the webstore is restricted by the Price List and whether or not the product is
- **Web Parameter 1** – Site Logo i.e. Adempiere120x60.gif
- **Web Parameter 2** – heading on content page
- **Web Parameter 3** – HTML code to customize the vertical side bar
- **Web Parameter 4/5/6** - HTML code for footers
- Click on the Record Info button on the bottom right of the window. Make a note of the W_Store_ID as you will need it later to complete the setup.

![1](/assets/img/community/functional-howtos/Webstore_RecordID.jpg)

## Application Server

- Shutdown the Application Server

## WebStore Template

The WebStore template is stored under the archive file 

~~~
$ADEMPIERE_HOME/lib/adempiereWebStore.war.
~~~

![1](/assets/img/community/functional-howtos/AdempiereWebStore_war.jpg)

## Creating the WebStore WAR files

- Rename the directory **adempiere.ear** under the path otherwise that can be overwritten during 

~~~
$ADEMPIERE_HOME\jboss\server\adempiere\deploy
~~~

- **RUN_setup**
- Run the silent setup (**RUN_silentsetup**) to create **WAR** file for the New Web Store
- Rename the newly created EAR directory from **adempiere.ear** to something like **adempiereNEWSTORE.ear**
- Modify the new web context in file **.\adempiereNEWSTORE\META-INF\application.xml**
- Modify the web store ID in the file **.\adempiereNEWSTORE.ear\adempiereWebStore.war\WEB-INF\web.xml** to point to **ID# 1000000** (in this example only).

## Application Server

- Run Adempiere Server

~~~
Notice difference in Price List and company logo 
~~~

- Standard Adempiere Web Store

![1](/assets/img/community/functional-howtos/Webstore_Gardenworld.jpg)

- New Web Store

![1](/assets/img/community/functional-howtos/Webstore_NewStore.jpg)

## Product Images

Product images are definable from the Image URL field on Product window
