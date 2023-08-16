---
title: Development Terms
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

This page is a wiki version of [Flash_Cards_for_learning_how_to_develop_in_Adempiere](https://wiki.adempiere.net/Flash_Cards_for_learning_how_to_develop_in_Adempiere) by [User:Wght](https://wiki.adempiere.net/User:Wght)

## Application Dictionary

- What is in the Application Dictionary?
    - Elements, Tables, Columns, References, Windows, Tabs, Fields, etc

- What are the two ways to modify functionality in Adempiere?
  1. Source code 2. Application Dictionary using metadata
- What is Red1's opinion of the Application Dictionary?
  - That AD is the most important developer tool given by Adempiere.
- What is important to know about the strategy to add/change functionality from Adempiere?
  - You shouldn't change any logic of other codes that are highly integrated and abstract. Most functional changes are capable via the Application Dictionary (AD) and Callouts or Procedures. Adempiere's claim of 98% programming not-needed rulse is believable, as we are not concerned about integration work here but normal debugging and business rules changes.
- How is a business module defined in Adempiere?
  - Any business module is first defined by its table-column structure in the AD. You then define certain validation rules. Then you develop detailed business logic in the Callouts and push-button Processes. SQL procedures may be created if the logic is strictly document based.
- How may you look at an SQL Procedure?
    An SQL Procedure is then an extension at the process level.

## Documents Management

- What is meant by a push button?
  - The process buttons that appear in many windows that is pressed to begin a process on the record. Such processes play around with doc action and doc status values in the record.
- How is much of the document handling logic controlled?
  - Much of the document handling logic is controlled by values in the Document Type such GL Type and Base Type.
- How is much of the user access and personalized behavior controlled?
  - Much of the user access and personalized behavior is controlled by Roles and Preferences.
- How are the processed document's accounting consequences handled?
  - The processed document's accounting sequence is handled by the Doc_*.java classes to effect the General Ledger and the accounting books.
- What are the typical development tasks that a new module may go through?
  - "RULES ENGINE Setup in the Application Dictionary (AD)

## Rule Engine

- What is important to know about the RULES ENGINE Setup in the Application Dictionary (AD) development task in creating a new module in Adempiere?
  - Table-Column structure
  - Input handling and validation rules
  - Document Type & Print Format
  - Define Default Accounts
  - Workflow Process
  - Callout definition and process-button definition consolidated via Report & Process
  - Final Consolidation in Windows under the Menu tree

- What is important to know about the development task Development Work in creating a new module in Adempiere?

* "* Place the codes in repsective containers
* Callouts in org.compiere.model package of BASE
* Process Actions in org.compiere.process of BASE
* SQLs in db/database/procedures of folder tree
* Tide to definition in AD
* Reuse the FACTORY aspects of Adempiere to minimize impact."

- What is important to know about the development task Review integrative logic between RULES ENGINE and FACTORIES in creating a new module in Adempiere?

The ending point on reuse may have minimal design impact if we correctly weave our model into the present integrative adaptors. For example, if we want to explorre with a Payroll module, the final figures accounts posting can be done via the default accounts-id schmea in the Business Partner Cateogry and inducted into the present Accounts Payable model (Invoice of expenses, in this case - wages). Other regulartory fitures or books have to be reviewd during accounts posting, whether coding flows are correct. All said, that reuse point may be the 90% headache! If you do not integrate and link your own suite then your codes are out of the architecture and much of the features of the architecture such as security, access control, user preferences, window design and report generation may be lost from your separated codes. For experts, you can follow the pattern of Adempiere codes to create different functional modules.

## Database & SQL

- What must be done after altering source code or SQL Queries?

We must compile and rebuild the code before such changes can take affect by executing RUN_build.sh.

- What is important to understand about debugging SQL in Adempiere?

"There is significant source in the form of independent SQL procedures, views, triggers, and functions that exist at the database level. As a result of moving away from Oracle, the triggers have been removed from the database domain and put into the source code domain, as of version 251d. The trigger code is now part of the model classes. The base class for all of them PO, provides a method called beforeSave(). This method is called when save() is called on any derivate of PO. Final model classes can implement this method to perform any ""trigger"" operations. As a consequence, all updates should be done by means of the Adempeire persistence engine, as there are no ""real"" database triggers.

SQL routines that still exist, such as procedures are generated by source i.e. /adempiere/trunk/db/database/Procedures which create themselves as stored procedures in the database."

- What is an example of a where clause in an sql statement in Adempiere?

"""Where AD_Client_ID=?"" and putting Env.getAD_Client_ID(ctx) for the ?."

- What is important in understanding tracing SQL Procedures?

To know what SQL independent codes to debug, you first trace from the AD. Login as Ssytem, look for them within the Table & Column, to first trace which AD Report & Process it is refering to. Then go to that AD Report & Process to find it. SQL are easily identified as ending in *.sql. Now you know which business application process is tied to which SQL. Make sure you get the right one before debugging. You do not need to compile source yet, to test the codes, on your database. You confirm the perfection of your codes in Toad itself. When you are ready to compile, save the procedure or replace the ones in.. adempiere\trunk\db\database\Procedures.

## Callout

- How may you look at a callout?
A callout can be looked at as an extension at the field level.

- What is important to understand about modifying a Callout in Adempiere?
Adempiere tries to absorb user changes by its model of Application Dictionary. However whenever the AD is insufficient to do that, the next promising option is modifying or createing new callouts.

- What is important to understand in searching for a particular Callout?

Callouts are attached in context to fields of any table defined in Adempiere's AD Table & Column. Under the Column Tab you will find the Callout field which will call the Callout class whenver the field undergoes input activity. Callout can change the values of other fields in the same Window in scope or in use at that time. Callout can also be used to do data processing but may be clumsy if that overlaps with the proper Java components. Then the app design is looked at again for more elegant planning of changes.

- What can examples of callouts be viewed?

Examples of callouts can be viewed via Base resource and expanding org.compiere.model tree.

- What is important to understand about defining the callout?

The callout implements the CalloutEngine interface and uses the Window context. As its in Java, you can call any imported method to be reused for your purpose. But the main methods inherent in a Callout is the getValue and setValue methods which correspond to the field in context. You can think of th eCallout as trying to give you something of an excel spreadsheet.

- What is important to know about opening a callout?

When you open the right Callout java class, usually its CalloutSystem.java for creating new small snippets. Bigger snippets may have to be in its own class for tidiness.

- What does a callout allow us to do?

The Callout allows us to take the values of fields of any window in context to be manipulated before putting them back to the fields.

- What is important to understand about creating a form as opposed to implementing the same functionality via dictionary windows, buttons+processes, and/or callouts?

"A form uses all custom code. Another problem with using forms is that they do not readily translate to the adempiere web client. In Adempiere forms are panels where you need to write all the code to show and manage visual components and database interactions.
Forms have an inherent problem because they're written swing mixing all code (mostly not following MVC model) - they are hard to migrate to web UI client."

## Debugging

- What cannot be debugged in eclipse?

Certain codes for Web Store and CServer.jar cannot be debugged in Eclilpse. JBoss is integreated into Adempiere to give it the enterprise heavy duty servicing of web clients and multiple client access to the Adempiere server. CServer codes are also inclusive of the accounts posting and commitment, thus is critical to be resolved by JBoss for more transactional and secured performance. You can still amend Web and accounts code, just that you can't test them in Eclipse and have to compile them and run as binary to do that.

- What is interesting in understanding identifying a problem in Adempiere?

To understand if its a business rule or logic that you have mishandled is not easy as you'll need Adempiere subject matter knowledge.
What is important to understand about debugging Adempiere?
Set the log4j level etc...

- What does integrating new procedures into Compiere involve?

To integrate new procedures into Compiere will involve creating the necessary Report & Process in the AD, and calling that from the Table & Column part. You can refer to Compiere's own present examples to see how its done.

In understanding the source code of Adempiere, where would one look to debug code dealing with the GUI or interface? org.compiere.grid packages. In understanding the source code of Adempiere, where would one look to debug code dealing with the database interface? org.compiere.db

## Model Class

- What does GenerateModel.java do?

Generating new table-field interface of setter and getters are done through GenerateModel.java. This is done after any new changes tables & column in the AD. The rules that you define in the AD will be incorporated during running of GenerateModel, which has a main method to run on its own. After that you can examine the generated codes which are X_*.java. They are located in org.compiere.model of the dbPort base in Eclipse. You cannot amend the codes direactly as they will be overwritten whenever you regenerate. Try to change your business rules in the AD instead.

- What was necessary to run GenerateModel?

"echo $CLASSPATH
/work/adempiere/trunk/adempiere/Adempiere/jboss/server/adempiere/deploy/adempiere.ear/Adempiere.jar:/usr/local/bin/jdk1.5.0_11/jre/lib/javaws.jar:/work/adempiere/trunk/_Project-ID-AdempiereJasper/lib/log4j.jar:/work/adempiere/trunk//adempiere/Adempiere/jboss/server/adempiere/lib/jboss-j2ee.jar:/work/adempiere/trunk/adempiere/Adempiere/jboss/server/adempiere/deploy/adempiere.ear/AdempiereSLib.jar
java org.compiere.util.GenerateModel /work/adempiere/trunk/extend/src/org/compiere/model/

Should see:
13:14:55.179 GenerateModel.writeToFile: /work/adempiere/trunk/extend/src/org/compiere/model/X_XX_Material2.java - 4.5117188 kB
13:14:55.180 GenerateModel.main: Generated = 1

Remember to set table to Maintained User or this won't work."

- What is important about understanding where the logic is really sst in Adempiere?

Definitely not in X_*.java. Uusally not in M_*.java unless its a logic bug. Specific business logic is mostly done in org.compiere.process classes. You can guess them easily from their namesakes i.e. InvoiceGenerate.java.

## Managing Code

- If your making code changes and want an easy way to go back to what you had previously how can that be done?

Usually it is just making backups of CClient.jar and ExpDat.dmp before replacing them. When an error is detected you have the option of using back the backup set. Before you intend to touch a java class save the contents in another place. Leave a readme.txt note stating why its there.

- What kinds of changes will be placed in the CClient.jar?

Usually changes to the non web-store and accounts posting codes will be placed in the CClient.jar.

- What is interesting to know about pushing out the CClient.jar to webstart people?

Placeing the CClient.jar in Adempiere\lib directory of your targe live production environment will cause the LAN clients using webstart to automatically refresh themselves when they login as a check will be done to compare with their caches, and will reload again the jars.

- What is important to understand about deploying the CServer.jar?

Changes to the accounts posting will impact the CServer. Deploying this is more hassle that CClient.jar. Basically is like redoing it as a full setup. You thus have to delete the old Adempiere directory and its subfolders. Then you compile and build to reproduce Admpiere. Then RUN_setup.sh and proceed as normal.

## 2Pack & AD2XML

- What is the XML2AD and what does it do?

XML2AD is a tool that imports several XML files into the database in order to modify the Application Dictionary of ADempiere/Compiere.

- What is the AD2XML tool and what does it do?

"AD 2 XML is based on Open Source tool ""DB sql 2 xml"" (http://dbsql2xml.sourceforge.net/)

It has been modified it in order to be applicable to create xml files readable by XML 2 AD and ADCK."

- What is the SuperUser password for compiere 253b?

  "Syspalma
  Remember to use a role of System Administrator if you want to modify the Application Dictionary!"

- Where can the 2pack users guide be downloaded from?

  http://www.oslabs.org/index.php?option=com_remository&Itemid=29&func=select&id=4

- **What is important to understand about how 2pack imports a package?**
  
  Tables, columns, and fields in the database are created from the instructions as contained in the XML file and processed by PackIn.

- **What happens if 2pack has a problem with importing a 2pack package?**
  
  2pack will automatically generate an error log in a formatted XML for the end users during package creation. (Easy review of what was changed or created in Compiere as well as what had errors)

- **In 2pack, what is important to understand if a package that was imported causes problems?**
  
  2pack has the ability to rollback any installed package. Original dictionary settings are backed up in a separate table for package update. These settings can then easily be reapplied if necessary.

- **In 2pack is it possible to distribute java code in a 2pack package?**
  
  2pack offers the ability to distribute custom .java source code for any user-defined custom functionality such as callouts and functions. This includes the ability to replace or add new .java files or snippets of code. Any original code that is changed is backed up automatically before applying the custom code. The code can be returned to the original code if required by use of the package rollback feature as described above.

- **Is it possible to import a 2pack module while running Adempiere?**
  
  Yes, there is no need to build packages at a command line level other than the original installation of 2Pack.

- **What are the high level steps involved with creating a package with 2pack?**
  1. Develop application or module in Adempiere as normal
  2. Install PackOut on local instance
  3. Create package using PackOut
  4. Distribute package to other instances
  
- **What is the simplest 2pack package that you could make and then how to export/import?**
  1. Menu->Application Dictionary->Application Packaging->Common Package Details
  2. Create a new entry with:
     - Client: System
     - Organization: *
     - Line No: 10
     - Type: File - Code or other
     - File Name: test.txt
     - File_Directory: /root
     - Target_Directory: /lib/
     - Destination Directory: `<blank>`
     - DBType: All Database Types
     - Description: test file
  3. Save
  4. Menu->Application Dictionary->Application Packaging->PackOut - Create a package
  5. Create a new package with:
     - Client: System
     - Organization: *
     - Name of Package: test2packpackage
     - PK_Version: 1.0
     - Registered Email: whatever@whatever.com
     - email address: whatever@whatever.com
     - Creation Directory: packages/
     - Version: 1.0
     - Release No: No specific release
     - Description of Package: Test 2pack package
     - Instructions: Just cat test.txt and you should see test
     - AD_Package_Type: XML File
  6. Save
  7. Create a packages directory off of your $ADEMPIERE_HOME
  8. Click on Package Details
  9. Choose the record you created in step 2
  10. Click on Export Package
     You should now see:
     $ADEMPIERE/packages/test2packpackage.zip
  11. To import the package go to:
      Menu->Application Dictionary->Application Packaging->PackIn Import a package
  12. Create a new record with:
      - Client: System
      - Organization: *
      - AD_Package_Source_Type: full path to test2package.zip
      - AD_Package_Dir: full path to where you want the package to be expanded my directory packages
  13. Save and click on PackIn
  14. You should now see test.txt on your hard drive.

- **What are the 3 types of workflow that Adempiere provides?**
  1. General Workflow
  2. Document Process Workflow
  3. Document Value Workflow

## Worflow

- **What does the general workflow do?**
  Provides guidance and step-by-step instructions for achieving a task. Examples: Setup Wizards or Month End procedures. A user starts them from the menu.

- **What does the document process workflow do?**
  Started when processing any document. You would extend these workflow types for approval situations. Example: Special approval for orders over a certain amount.

- **What does the document value workflow do?**
  The workflow is automatically started when any entity fulfills a user-defined condition. Example: Start credit approval for a new Business Partner.

- **What are the actions an Adempiere workflow node (step) can have?**
  - Automatic Process
  - User Action
  - Set Variable
  - User Choice
  - Wait (Sleep)

- **What does the automatic process Adempiere workflow node (step) action do?**
  Any Process, report, task, Workflow, document action.

- **What does the user action Adempiere workflow node (step) action do?**
  Any Window, Form - User needs to confirm Completion.

- **What does the user choice Adempiere workflow node (step) action do?**
  Any Choice (e.g. approval), List selection.

- **What does the wait (sleep) Adempiere workflow node (step) action do?**
  Can also be used for Start/End/etc.

- **What is important to know about Adempiere workflow node (step) transitions?**
  Transition between nodes can optionally have conditions. Multiple transitions from a node allow parallel processing. This allows modeling of very complex scenarios.
