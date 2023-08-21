---
title: Centralized ID Management
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

See also: [Migration](a) & [Generating_Migration_Scripts](a)

## Installation

Before Adempiere 3.3.1 you need to execute the script [033_centralized_id_sysconfig.sql](http://adempiere.svn.sourceforge.net/viewvc/*checkout*/adempiere/trunk/migration/330-trunk/033_centralized_id_sysconfig.sql)

## Configuration

You need to configure the parameters in the System Configurator Window:

![01_Centralized](/assets/img/community/developers-guide/01_Centralized_ID.gif)

Specially the parameters:

DICTIONARY_ID_USER = Your committer sourceforge ID

![02_Centralized](/assets/img/community/developers-guide/02_Centralized_ID.gif)

and

DICTIONARY_ID_PASSWORD = Your committer assigned password
For password assignment procedure please ask in adempiere forums.

![03_Centralized](/assets/img/community/developers-guide/03_Centralized_ID.gif)

## Development

Firstly, please configure the comment in the System Configurator window related to the enhancement, bug or feature request you're solving, example:

![04_Centralized](/assets/img/community/developers-guide/04_Centralized_ID.gif)

When you're ready to develop a trunk enhancement, bug or feature request that requires official dictionary ID's, you need to open a system session and check the flag "Dictionary Maintenance" in Preferences window. Please note this parameter is not saved between sessions - so you need to check it any time you are going to develop something new for the trunk:

![05_Centralized](/assets/img/community/developers-guide/05_Centralized_ID.gif)

After this you just continue creating the needed dictionary objects and Adempiere will assign the ID's from the centralized website.

{Note|The URL to the ID server is being protected to prevent hacking. If you need to use it, please contact one of the ADev Board members. They will be able to set you up.}

## Use in Adempiere

Set the url to the server provided as: `http://<id server url>/cgi-bin/get_ID`

## The Log

If you want to review the log of used ID's for a table, you can navigate to the site:

`http://<id server url>/cgi-bin/showlog?AD_Reference`

Please replace the AD_Reference name with the table you want to see.

IMPORTANT NOTE: When in "Dictionary Maintenance" mode all records for clients System and GardenWorld will get centralized IDs

## For Projects with Distributed Developers

If you conduct project with distributed developers - with distributed development databases, then you have the same problem as Adempiere Committers to synchronize the dictionary ID's

This implementation can help also for these projects.

You just need to install the cgi scripts provided in:
[http://adempiere.svn.sourceforge.net/viewvc/adempiere/contributions/stuff/POC_Central_System_IDs/linux/](http://adempiere.svn.sourceforge.net/viewvc/adempiere/contributions/stuff/POC_Central_System_IDs/linux/)

Set up a data directory ../data relative to cgi-bin directory for your project:
[http://adempiere.svn.sourceforge.net/viewvc/adempiere/contributions/stuff/POC_Central_System_IDs/linux/data/Adempiere/](http://adempiere.svn.sourceforge.net/viewvc/adempiere/contributions/stuff/POC_Central_System_IDs/linux/)

Register your developers in the file data/PROJECT_NAME/RegisteredDevelopers.pwd

And set the system configurator parameters for project usage:

~~~
PROJECT_ID_USE_CENTRALIZED_ID = Y  (default is N)
PROJECT_ID_WEBSITE = with the website provided for the centralized ID management
PROJECT_ID_PROJECT = name of the project set up
PROJECT_ID_USER = your user name for the project
PROJECT_ID_PASSWORD = your password committer for the project
PROJECT_ID_COMMENTS = the comment for the development you're attending
~~~

This will assign centralized ID's for all tables that have EntityType column, in the seed those are:

~~~
AD_Column
AD_Element
AD_EntityType
AD_Field
AD_FieldGroup
AD_Form
AD_Image
AD_InfoColumn
AD_InfoWindow
AD_Menu
AD_Message
AD_ModelValidator
AD_Modification
AD_Process
AD_Process_Para
AD_Reference
AD_Ref_List
AD_Ref_Table
AD_ReplicationStrategy
AD_ReplicationTable
AD_ReportView
AD_Tab
AD_Table
AD_Task
AD_Val_Rule
AD_WF_NextCondition
AD_WF_Node
AD_WF_NodeNext
AD_WF_Node_Para
AD_WF_Responsible
AD_Window
AD_Workbench
AD_WorkbenchWindow
AD_Workflow
PA_ColorSchema
PA_MeasureCalc
~~~

## FAQ

1. I will need to migrate some internal modifications to trunk, more exactly some columns that have internal allocated IDs (> 1000000). What is the best way to get IDs from IDs server without creating the columns (because i already have them, i just need to change the IDs) ?

~~~
http://<id server url>/cgi-bin/get_ID?PROJECT=Adempiere&USER=your_user&PASSWORD=your_password&TABLE=AD_Column&ALTKEY=&COMMENT=Comment
Dissected  :-) NOTE: The table names are case sensitive
http
//<id server url>/ : the website providing the ID's where cgi shells are installed. Request the URL from the ADev Board.
cgi-bin/get_ID
the shell that reserves ID's get_ID
?PROJECT=Adempiere
the project Adempiere (centralized ID can be used to manage IDs for other projects but it needs some setup)
&USER=your_user
your assigned user (normally the same as sourceforge)
&PASSWORD=your_password
your assigned password
&TABLE=AD_Column
the table you want to reserve ID (in this example AD_Column - case sensitive!)
&ALTKEY=
unused at this moment, to save alternate key for tables like Value
&COMMENT=Comment -- the comments on the reservation
The result of the call is a page with the assigned ID.
To review the log you can call:
http://<id server url>/cgi-bin/showtaillog?AD_Column (NOTE: Or use showlog for full log, recommended is to use showtaillog)
That's it, call the showlog.cgi with the table as parameter.
~~~

