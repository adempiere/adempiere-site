---
title: Initialize the Database
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

After having installed the database and setup the ADempiere Application Server, the database needs to be initialized prior to launching the Application Server and any client software.

::: info 
![image](https://github.com/adempiere/adempiere-site/assets/134967453/2a3d33b8-d2d9-4c38-900c-2967c0a7e5fa)
  Note: The utility scripts provided with the Application software need to have access to the database functions in order to run. In a network installation, you may have to copy the database executable files to the Application Server machine, install a local copy of the database on the application server or manually install the seed database on the database server. Detailed instructions are provided below. | | :--- | :--- |

:::

Before starting with the database creation, ensure that you have the following installed:

- A suitable database (e.g., Oracle XXg, Oracle XXgXE, PostgreSQL, MySQL) and that the database server is running. See [Database Server Installation & Setup](./database-server-installation-and-setup.md).

- The application server installation is complete. See [Application Server Installation & Setup](./application-server-installation-and-setup.md).

## Database Creation

The database created when you installed Oracle/Postgres/MySQL has no ADempiere data. Before the ADempiere application can run, a suitable database must be created. This can be done by installing the Seed Database provided with the software or by restoring a previously created database.

## Database Creation from the Seed

The initial ADempiere Seed database is imported from the Adempiere.dmp file for Oracle or Adempiere_pg.dmp for PostgreSQL, located in the ADEMPIERE_HOME/data directory.

Open shell and change directories to the ADEMPIERE_HOME/utils directory.

::: info Note

![image](https://github.com/adempiere/adempiere-site/assets/134967453/3499ed3a-24a2-4bb9-8645-fa1f5dc5fa1b)
 Caution! The following script will DROP any existing adempiere database. Do not run this command if you already have data loaded.

:::

**Run the script RUN_ImportAdempiere (.bat or .sh).**

You will see information about .dmp file (such as date creation, size, etc.) and the message: == The import will show warnings. This is Ok

![image](https://github.com/adempiere/adempiere-site/assets/134967453/a17114df-996f-41f9-a32e-ab46beccf30f)

Press any key to start the process.

Don't worry if you see warnings (such as "Warning: object created with compilation warnings"). This is normal and can be ignored. After the import has finished, an SQL procedure makes sure that everything has been imported correctly and will list any invalid objects.

![image](https://github.com/adempiere/adempiere-site/assets/134967453/18de5877-1ff9-41e0-bd13-a70014b4e4d6)

At the process end, you should see a message similar to the one displayed below, with the text "no rows selected".

![image](https://github.com/adempiere/adempiere-site/assets/134967453/4adcae87-f3db-4029-bee4-28a51b9cca8b)

A common cause of problems when running this script is not having the environment variables set properly. The script will not run if ADEMPIERE_HOME, JAVA_HOME are set incorrectly or if the database executables are not on the path. It may also be necessary to add the Postgres/Oracle bin directory to the PATH environment variable in some environments.

## Next Step

The next step is The next step is [Complete ADempiere Server Install](http://wiki.adempiere.net/InstallComplete).

## Notes

For Oracle Users:

1. Ensure that the tablespaces for the database user Adempiere exist. The default database tablespace names are:
   - Default tablespace = USER (150 MB, 10 MB Autoextend),
   - Index tablespace = INDX (100 MB, 10 MB Autoextend),
   - Temporary tablespace = TEMP (100 MB, 10 MB Autoextend).

2. The setup script has been changed to use the EZCONNECT naming method instead of TNSNAMES. Open your Oracle Net Manager, under profile -> Naming, make sure EZCONNECT is one of the selected methods. Alternatively, verify that the SQLNET.ORA file has the following entries:

- **`NAMES.DIRECTORY_PATH = (EZCONNECT,TNSNAMES)`**

## Installation Details

The script RUN_ImportAdempiere simply calls the script ImportAdempiere in the 
```bash
$ADEMPIERE_HOME/utils/<database>
```

directory. The version of ImportAdempiere called deals with the specific setup needs of the various databases.

Since 3.8.0, the RUN_ImportAdempiere script will also import and apply any migrations found in the $ADEMPIERE_HOME/migrations directory.

Following the database import, the database is signed - to indicate the version of the database.

The ImportAdempiere script is called with the following parameters:

In the context of ADempiere installation:

- For PostgreSQL installation, the following are not used:
  - `%ADEMPIERE_DB_SYSTEM%`
  - `%ADEMPIERE_DB_SYSTEM%`

- For both PostgreSQL and Oracle installations, the following are typically used:
  - `%ADEMPIERE_DB_USER%` (typically Adempiere)
  - `%ADEMPIERE_DB_PASSWORD%` (typically Adempiere)

In addition, the following environment variables are required and should have been set by the Application Setup process:

- `ADEMPIERE_HOME`: e.g., `D:\ADEMPIERE2`
- `ADEMPIERE_DB_NAME`: e.g., `adempiere` or `xe`
- `ADEMPIERE_DB_SERVER`: e.g., `dbserver.adempiere.org`
- `ADEMPIERE_DB_PORT`: e.g., `5432` or `1521`

The descriptions below are not correct code and are intended for information purposes only. See the actual scripts for the details.

#### Postgres

The ADEMPIERE_HOME/utils/postgresql/ImportAdempiere script will run the following commands:

```bash
-- Drop the ADempiere database if it exists
dropdb -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -U postgres %ADEMPIERE_DB_NAME%

-- Drop the ADempiere user if it exists
dropuser -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -U postgres %ADEMPIERE_DB_PASSWORD%

-- Recreate the ADempiere user
set ADEMPIERE_CREATE_ROLE_SQL=CREATE ROLE %ADEMPIERE_DB_USER% SUPERUSER LOGIN PASSWORD '%ADEMPIERE_DB_PASSWORD%'
psql -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -U postgres -c "%ADEMPIERE_CREATE_ROLE_SQL%"

-- Create the ADempiere database (empty)
set PGPASSWORD=%ADEMPIERE_DB_PASSWORD%
createdb -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -E UNICODE -O %ADEMPIERE_DB_USER% -U %ADEMPIERE_DB_USER% %ADEMPIERE_DB_NAME%

-- Import the seed data
@psql -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -d %ADEMPIERE_DB_NAME% -U %ADEMPIERE_DB_USER% -f %ADEMPIERE_HOME%/data/Adempiere_pg.dmp
```

#### Oracle and OracleXE

The ADEMPIERE_HOME/utils/oracle(XE)/ImportAdempiere script will run the following commands:

```bash
-- Re-Create DB user
sqlplus system/%ADEMPIERE_DB_SYSTEM%@%ADEMPIERE_DB_SERVER%:%ADEMPIERE_DB_PORT%/%ADEMPIERE_DB_NAME% _
   @%ADEMPIERE_HOME%\Utils\%ADEMPIERE_DB_PATH%\CreateUser.sql %ADEMPIERE_DB_USER% %ADEMPIERE_DB_SYSTEM%

-- Import Adempiere.dmp
imp system/%ADEMPIERE_DB_SYSTEM%@%ADEMPIERE_DB_SERVER%:%ADEMPIERE_DB_PORT%/%ADEMPIERE_DB_NAME% _
   FILE=%ADEMPIERE_HOME%\data\Adempiere.dmp FROMUSER=(reference) TOUSER=%ADEMPIERE_DB_USER% STATISTICS=RECALCULATE

-- Create SQLJ 
call %ADEMPIERE_HOME%\Utils\%ADEMPIERE_DB_PATH%\create %ADEMPIERE_DB_USER%/%ADEMPIERE_DB_PASSWORD%

-- System Check - The Import phase showed warnings. 
-- This is OK as long as the following does not show errors
sqlplus %ADEMPIERE_DB_USER%/%ADEMPIERE_DB_PASSWORD%@%ADEMPIERE_DB_SERVER%:%ADEMPIERE_DB_PORT%/%ADEMPIERE_DB_NAME% _
   @%ADEMPIERE_HOME%\Utils\%ADEMPIERE_DB_PATH%\AfterImport.sql
```

## See Also

- [Complete ADempiere Server Install](http://wiki.adempiere.net/InstallComplete) is the next thing after Create ADempiere Database.

- [Initial Client Setup](http://wiki.adempiere.net/ManPageX_InitialClientSetup) is the starting business setup within ADempiere.

- [Getting Started](http://wiki.adempiere.net/Getting_Started) Tutorial on how to setup and configure ADempiere.

- [Tutorials](http://wiki.adempiere.net/Tutorials) on many things from basic to advanced.
If you have any further problems installing the Oracle database or you would like to remove it, additional information can be found in here: [[1]](http://download-east.oracle.com/docs/cd/B25329_01/doc/install.102/b25143/toc.htm#CIHDDHJD)
