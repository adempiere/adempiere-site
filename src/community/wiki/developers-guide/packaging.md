---
title: 2Pack Anatomy
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

~~~
Adempiere Packaging System Anatomy 
   (Soheil Qanbari)
This is definitely based on the [OsLab.org](http://www.oslabs.org/index.php?option=com_content&task=view&id=14) Approach
~~~

## Introduction

The ideal solution is a tool that:

- Kept development in Adempiere
- Created a package that contains all of the necessary data dictionary settings for a custom modification to accurately reproduce it to another Adempiere instance.
- The packages were easily transportable.
- Took minimal effort to generate/regenerate packages

## Current Functionality at a high level

Functionality of the initial release includes but not limited to:

- Simple to use. Generation of a package is as simple as selecting the menu item from a drop-down box, naming the package, and clicking the "Export Package" button.
- Simple to update a package. Click on the "Export Package" button to regenerate the package after making changes to your application, while still in Adempiere.
- Package support files are automatically included in the compressed package file. This includes the Pack In application.
- Most of Adempiere's dictionary elements are supported in the initial release of 2Pack.
- Tables, columns, and fields in the database are created from the instructions contained in the XML file and processed by Pack In.
- Ability to support multiple Adempiere Versions.
- Automatically generate install documentation for the user.
- Automatically generate an error log in a formatted XML file for the end-users during package creation. (Easy review of what was changed or created in Adempiere as well as what had errors)
- Ability to rollback any installed package. Original dictionary settings are backed up in a separate table before package update. These settings can then be easily reapplied if necessary.
- Ability to distribute custom .java source code for any user-defined custom functionality such as callouts and functions. This includes the ability to replace or add new .java files or snippets of code. Any original code that is changed is automatically backed up before applying the custom code. The code can be returned to the original state if required by using the package rollback feature as described above.
- Import packages directly while in Adempiere. There is no need to build packages at a command line level other than the original installation of 2Pack.

## High level of 2Pack’s flow

![aps](/assets/img/community/developers-guide/APS.jpg)

## Steps to create a package

~~~
 Steps to create a package:
 
    1. Develop application or module in Adempiere:

     1.1. Develop your customization in Adempiere as you normally do. It can be as simple as a 
          report or as complex as an entire Manufacturing Module. 

    2. Using 2Pack:

     2.1. Create the package:

       2.1.1. Complete the Package Details. Automatically listed are all the common objects to be                     
              included in a package as defined in the first step. Also enter the additional 
              objects necessary to transfer the customization to other instances. Such as the 
              application or module, a window, or table, selection of master or transactional data
              or custom code files or code snippets. When all details have been entered its time 
              to generate the package. Simply click the generate button on the head window.

     2.2. Share the package:

       2.2.1. When the package is generated, two compressed files are created, one in a .zip                   
              format and the other in a tar.gz format. These files contain the complete code 
              necessary to build and install the customization on any Adempiere installation. 
              Simply distribute these files to your targeted user.
~~~

## The Anatomy of a Package

~~~
Definition: A package is a self-contained set of files that allow a user's customization to be 
transferred from one Adempiere instance to another Adempiere instance.The following is a detail
look at the layout of a package as created by 2Pack.
 
         1. {Adempieresource}/packages/{package name}/ Contains the user executed files that 
            launch the Ant build process or generates the model files. The build.xml file controls
            the Ant build process as well as contains the necessary connection settings for the 
            Adempiere database. 
              • Build.xml – Ant build file to control that controls the package build process 
              • RUN_build (.sh and .bat) – User executable that starts the build process
              • GenerateModel (.sh and .bat) – User executable that starts the build process for 
                the model files.
              • OSLabs.gif – Splash screen graphics for build process. (Replace with your own) 
        2.{Adempieresource}/packages/{package name}/lib Contains the jar files for the package. 
        3.{Adempieresource}/packages/{package name}/dict This directory has one file, 
          AdempiereAD.xml. This file contains all the necessary data dictionary settings to create
          the module as well as how and where the files in the /dist will be copied. 
        4.{Adempieresource}/packages/{package name}/dist/{version} Contains all .java files to be 
          distributed to Adempiere’s source code as well as other files, such as templates, images
          or other documents. 
        5.{Adempieresource}/packages/{package name}/doc This directory contains the install 
          instructions generated by Pack In. It also contains the installation logs created during
          the installation of the package. 
        6.{Adempieresource}/packages/{package name}/backup This directory is created during the 
          original installation of the package. This directory will backup any files overridden 
          during the installation process. If it becomes necessary to reverse this package then 
          any files overridden will be restored to their original state. This feature is only 
          available if Pack In has been installed.
~~~

## Type of Exports

~~~
  This section reviews the types of exports available in the Pack Out.

         1. Application/Module – This allows the user to export all objects associated with an 
            application or an entire module including windows, fields, field groups, tables and 
            columns, menus, references, reports, forms for an example. No other selection is 
            required for the Application Dictionary.
         2. File/Code – This allows the user to export a custom code java or other file required            
            by the application exported or the packaging process.
         3. Role – This allows the user to export a role that includes all the necessary access 
            rights as defined in that role.
         4. Code Snippet – This allow the user to replace a piece of code/text within a file.
         5. Table – Allows the user to export a table. This is useful when a table is not 
            referenced by the Application Dictionary but by only the custom code.
         6. Data – Allow the user to export master or transactional data via a SQL Select 
            Statement.
         7. Window – Allows the user to include a custom or modified window the package. This will
            export all objects associated with the window's settings as defined in the application
            dictionary
         8. Import Format – Allow the user to include in the package a custom import format.
         9. Process/Report – This allow the user to export a process or a report to be included in
            the package.
         10. Report View – This allows the user to export a ReportView to a package.
         11. Form – Allow the user to export a custom form to a package.
         12. SQL Statement – Allows the user to process a SQL Statement in the processing of the 
             package. Can be used for example to add / drop indexes, constraints, functions or 
             procedures.
         13. Workflow – This allow the user to export a workflow to be included in the package (since Release_320)
         14. Dynamic Validation Rule (since Release_320)
         15. Message (since Release_330)
         16. PrintFormat (since Release_330)
         
         NOTE: Workbench export support was dropped
~~~

## See Also

- [2Pack](https://wiki.adempiere.net/2Pack)
- [2Pack Any Table](https://wiki.adempiere.net/2Pack_Any_Table)