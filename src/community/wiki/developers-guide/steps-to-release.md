---
title: Steps to Release
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
  - Releasing New Versions
article: false
---

Archive for versions 3.3.0 through 3.5.2a [Steps_To_Release_Archive](https://wiki.adempiere.net/Steps_To_Release_Archive)

Archive for versions 3.4.2s through 3.6.0LTS [Steps_To_Release_Archive2](https://wiki.adempiere.net/Steps_To_Release_Archive2)

To Do | Done By
-- | --
Release Version | [3.8.0LTS](https://wiki.adempiere.net/Release_380LTS)
Target Date | 2013/10/14
Release Date | 2015/01/01
Prepare wiki release from svn log.Sample [Release_320](https://wiki.adempiere.net/Release_320) | Done [Release 380LTS](https://wiki.adempiere.net/Release_380LTS)
Change sources to point new versionbase/src/org/compiere/Adempiere.javalaunch/Adempiere.xmlserverRoot/src/web/adempiere.htmlserverRoot/src/web/adempiere.jnlputils/adempiereDirectTemplate.jnlputils_dev/build.properties | 7141, 7817, 8039
Create new postgres seedFresh build & installRUN_ImportAdempiereRUN_MigrationXMLRUN_ExportReferencejar the Adempiere_pg.dmp and Adempiere.log into Adempiere_pg.jarupload Adempiere_pg.jar seed into release/data/seed | pending
Create the new oracle seedFresh build & installRUN_ImportAdempiereRUN_MigrationXMLRUN_ExportReferencejar the Adempiere.dmp and Adempiere.log into Adempiere.jarupload Adempiere.jar seed into release/data/seedNOTE: This could also be done using the migration tool to copy the postgres seed to oracle | pending
Upload Reference databases to Source Forge | pending
Change and compile new Launch4j | 8040
Generate complete model for new version (core and e-evolution) (be careful not to include customizations)To realize which package and where to put the generated classes execute the following querySELECT DISTINCT e.entitytype, COALESCE(e.modelpackage, 'org.compiere.model')FROM ad_entitytype e, ad_table tWHERE t.entitytype = e.entitytypeORDER BY 1 | pending
Rename current-release (i.e. 320-release) to current-next (i.e. 320-330) | Done
Create directory next-release (i.e. 330-release) | Done
HG Flow finish feature for the release branch and merge with development/master | pending
Apply tag to the release revision in the master branch | pending
Create new release package | pending
Compile the new version to make installer (RUN_build) | pending
Test an installation with the installerTest the installTest the webstoreTest the client | pending
Upload to sourceforge as current release (all, including MD5) | pending
Edit english and spanish wikipedia pagesen wikipedia Adempierees wikipedia AdempiereComparison of accounting software (if LTS) | pending
Edit other languages wikipedia pageRomânaDeutschFrançais??? |  
Prepare a new AVARed1 (Howto Create AVA) |  
Prepare new windows installer |  
Update Live Demos | pending
Update Daily Build |  
Edit freshmeat (advise to Sempre)Currently administered by semprehttp://freshmeat.net/projects/adempiere |  
Press release | pending
Change wiki [Template:LASTRELEASE](https://wiki.adempiere.net/Template:LASTRELEASE) |  
Upload wiki manuals (for LTS versions) | pending
Upload wiki screenshots (for LTS versions) |  
[Update javadoc ](http://www.adempiere.com/javadoc/) |  
[Update schemaspy](http://www.adempiere.com/schemaspy/) | pending
(desirable) update db/ddlutils model and data following instructions from [Migration/DDLUtils](https://wiki.adempiere.net/Migration/DDLUtils) -f build-ddl.xml writeSchemaToFileant -f build-ddl.xml splitSchemaFileByTableant -f build-ddl.xml writeDataToFileant -f build-ddl.xml splitDataFileByTable | (Needed with the migration tool?)

## See Also

- [Steps To Release HowTo](https://wiki.adempiere.net/Steps_To_Release_HowTo)