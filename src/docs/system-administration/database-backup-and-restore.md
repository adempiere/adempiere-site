---
title: Database Backup and Restore
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

How to backup and restore the ADempiere Database

Backing Up the Data

The ADempiere database can be backed easily by using the RUN_DBExport.(sh/bat) script found in ADEMPIERE_HOME/utils/. The database can be backed up at any time without stopping the database server.

The RUN_DBExport script will cause the database to exported into a file called Exp.dmp in the ADEMPIERE_HOME/data directory and will compress it into Exp.jar. The script will also call myDBcopy.(sh/bat) in ADEMPIERE_HOME/utils/ which can be modified to copy the Exp.jar file to an offsite location or other media.

If you do modify myDBcopy, keep a copy of the file elsewhere in case it is overwritten during a software upgrade.

Its recommended that you have a regularly scheduled task execute RUN_DBExport to ensure the security of your data.

## Recovering from a Backup

To recover a backup, copy the backup Exp.jar file to the ADEMPIERE_HOME/data directory. In a shell, execute the java command to expand the jar

```bash
jar -xvf Exp.jar
```

When the Exp.dat file is available, execute RUN_DBRestore.(sh/bat) from the ADEMPIERE_HOME/utils directory. This will restore the database from the backup, overwriting any data in the ADempiere database.
