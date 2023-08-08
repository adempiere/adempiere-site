---
title: Creating a New Seed Database
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
  - Releasing New Versions
article: false
---

One of the key task in a release is migrating the seed databases to the release version. The seed database then becomes the "reference database" that can be used to migrate production databases to the release version.

::: warning Caution!

This process is intended for seed database generation. While it may work for migrating production databases, it is not recommended to do so. The steps are based on the assumption that everything is done in order and the database is in a known state to start with. With a production database, this may not be the case and errors can be created. For production databases, use the Migrate tool which can be launched with $ADEMPIERE_HOME/utils/RUN_Migrate.[sh/bat].

:::

### Since Release 3.8.0

The following process can be followed to update the seed:
1. Clean/purge your repository and update to the state of the release.
2. Update the project repository adempiere/migration/build.properties file to set the "release" variable correctly for the release. For example release="380lts".
3. Ensure the migration folders are named correctly - follow the same pattern as the previous releases. The project adempiere/migration folder will contain a number of folders of the form `<old>-<new>` with sub-
folders for each database and for the XML files. The build process will copy any directory that includes the release string - for example /370lts-380lts/* and /380lts-release/* - as long as the directory and sub-
folders contain sql or xml files. The build/install process will copy these directories to $ADEMPIERE_HOME/migration/*.
4. Compile a build of the software at the release version.
5. Install the software and RUN_Setup to configure it for the target database
6. From the previous release, copy the seed file - either Adempiere.jar or Adempiere_pg.jar to the $ADEMPIERE_HOME/data directory - overwrite the ones installed.
7. Import the previous seed into the database with RUN_ImportAdempiere.[sh|bat] - this will put the database in the state of the previous release. Don't use the current seed if its been updated during development.
Rather, return to a known release state and migrate from there. This is similar to what users will experience in the field so its best to make sure it works.
8. Apply any SQL as indicated below. Following 380 there shouldn't be any SQL, but if features with SQL were added to the release, there may be some to apply. Check the $AEMPIERE_HOME/migration folder
for sub-folders related to the databases.
9. Import the xml migration files as follows:
   1. From the command line, execute the batch file RUN_MigrateXML.[sh|bat]. This will import all XML files that were installed in the $ADEMPIERE_HOME/migration directory by the build & install
process. The command can be run multiple times without harm.
   2. From the client, if it can run with the past seed, you can also log in as the System Administrator and use the process "Import Migrations from XML". Point the File Name dialog at the
$AEMPIERE_HOME/migration folder and select the "Apply" check box. You can run the process without selecting apply, but there may be errors if newer migration files depend on the application of
older ones. You can run the process multiple times without harm.
1.  Verify the logs show no error messages. If necessary, fix errors in the XML or code and repeat the import and migrate process until there are no errors.
2.  Export the new seed database using RUN_DBExport.[sh|bat]
3.  Rename the .dmp file to Adempiere.dmp for Oracle and Adempiere_pg.dmp for Postgres. Do the same for the log file.
4.  Jar the .dmp and log file to into Adempiere.jar or Adempiere_pg.jar.
5.  Execute RUN_ImportAdempiere.[sh|bat] and verify that the database loads without error.
6.  Start the client and verify that there are no errors or warnings about database/software version differences.
7.  Repeat the process with the other database. Hopefully, there will be no errors, otherwise, you'll have to fix them and redo the first database.
8.  Copy the new seed files to the repository adempiere/data/seed directory, replacing the files that are there.
9.  Commit the new seed files and any corrections that were made to the xml or code.
10. Update the wiki [Steps to Release](./steps-to-release.md)

In summary:

~~~
RUN_ImportAdempiere
RUN_MigrateXML
RUN_DBExport
~~~

### Previous to 3.8.0 Applying SQL Migration Files

Prior to release 3.8.0, the migrations were applied by SQL files which can be applied in a number of ways. The key points are:

- the scripts should be applied in order. The files should have names that start with numbers (023_xxx.sql for example) and they should be applied in ascending order.
- unlike the xml migrations, there is no way to roll-back the SQL changes once they have been applied. Back up a production database before you apply the SQL.

Since 3.15, the SQL files are stored in the project `adempiere/migration/<old>-<new>/` folder in sub-folders for each database.

Applying the SQL is easy with any of a number of SQL tools (i.e. you can use dbvisualizer, Toad, sqlplus or [sqldeveloper](http://www.oracle.com/technology/products/database/sql_developer/index.html) to Oracle, or you can use [pgAdmin](http://www.pgadmin.org/) if your database is PostgreSQL). Its also possible to use the command line database tools.

Perhaps the easiest way is to use the ANT build process in Eclipse. In the project repository adempiere/migration directory, copy the oracle.properties.template to oracle.properties (or the same with postgres.properties.template) and edit the file accordingly. Then, in each folder that contains the sql files, you should find an ANT build.xml file. Execute this as an ant build and it will apply the sql in the proper order. You can copy the build.xml file to other directories if you need to as long as the directory is below the migration directory.

Following the application of the sql files, there may be a folder called PostMigration in the same folder as the SQL files. Apply all the scripts contained in this folder. Finally, run the scripts in the adempiere/migration/processes_post_migration folder for the respective database.

Through the entire process, ensure each script is executed without errors.

One of the challenges of migrating a database with SQL is knowing what SQL files were applied previously. When generating a new seed, always start from the previous seed.
