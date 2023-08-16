---
title: Method Invocation Sequence
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Introduction

The followings are the sequences of method invocations for different actions in ADempiere, e.g. when you click on a tree node to open a window.

## The Sequence

*Note: Indentation means levels of invocation.*

~~~
org.compiere.Adempiere.main()
 1 org.compiere.util.Splash.getSplash(): Gets an instance of the splash window.
   1.1 org.compiere.util.Splash.getSplash(String): Gets a new instance of the splash window.
     1.1.1 org.compiere.util.Splash.Splash(): Creates a new instance of the splash window.
       1.1.1.1 org.compiere.util.Splash.jbInit(): Statically initialise the ADempiere splash window.
       1.1.1.2 org.compiere.util.Splash.display(): Shows the ADempiere splash window.
 2 org.compiere.Adempiere.startup(): Startup Client/Server, prints greeting, checks for Java version and load ini parameters.
   2.1 org.compiere.util.Login.isJavaOK(): Checks the JDK version.
   2.2 org.compiere.util.CLogMgt.initialize(): Initialises all log related objects.
     2.2.1 org.compiere.util.CLogErrorBuffer.get(): Gets an instance of the client error buffer.
       2.2.1.1 org.compiere.util.CLogErrorBuffer.CLogErrorBuffer(): Creates a new instance of the client error buffer.
         2.2.1.1.1 org.compiere.util.CLogErrorBuffer.initialize(): Sets level, filter and formatter.
           2.2.1.1.1.1 org.compiere.util.CLogFormatter.get():Gets an instance of the formatter.
             2.2.1.1.1.1.1 org.compiere.util.CLogFormatter.CLogFormatter(): Creates a new instance of the formatter.
           2.2.1.1.1.2 org.compiere.util.CLogFilter.get(): Gets  an instance of the filter.
             2.2.1.1.1.2.1 org.compiere.util.CLogFilter.CLogFilter(): Creates a new instance of the filter.
     2.2.2 org.compiere.util.CLogConsol.get(): Gets an instance of ADempiere console logger.
       2.2.2.1 org.compiere.util.ClogConsol.CLogConsole(): Creates a new instance of ADempiere console logger.
         2.2.2.1.1 org.compiere.util.ClogConsol.initialize(): Sets writers, filter, level and formatter.
           2.2.2.1.1.1 org.compiere.util.CLogFormatter.get():Gets an instance of the formatter.
             2.2.2.1.1.1.1 org.compiere.util.CLogFormatter.CLogFormatter(): Creates a new instance of the formatter.
           2.2.2.1.1.2 org.compiere.util.CLogFilter.get(): Gets  an instance of the filter.
             2.2.2.1.1.2.1 org.compiere.util.CLogFilter.CLogFilter(): Creates a new instance of the filter.
     2.2.3 org.compiere.util.CLogFile.get(): Gets an instance of log file for server.
       2.2.3.1 org.compiere.util.CLogFile.CLogFile(): Creates a new instance of log file for server.
     2.2.4 org.compiere.util.CLogFormatter.get(): Gets an instance of the formatter.
     2.2.5 org.compiere.util.CLogMgt.setFormatter(): Sets formatter for all handlers.
     2.2.6 org.compiere.util.CLogFilter.get(): Gets  an instance of the filter.
     2.2.7 org.compiere.util.CLogMgt.setFilter(): Sets filter for all handlers.
     2.2.8 org.compiere.CLogMgtLog4J.initialize(): Initialises log4j logging mechanism.
   2.3 org.compiere.Ini.setClient(): Sets client mode.
   2.4 org.compiere.util.CLogger.getCLogger(Class): Gets an instance of the logger.
     2.4.1 org.compiere.util.CLogger.getCLogger(String): Gets an instance of the logger.
       2.4.1.1 org.compiere.util.CLogger.CLogger(): Creates a new instance of the logger.
   2.5 org.compiere.util.Ini.loadProperties(boolean): Loads INI parameters.
     2.5.1 org.compiere.util.Ini.getFileName(): Returns name of the INI file.
     2.5.2 org.compiere.Ini.loadProperties(String): Loads INI parameters from file.
       2.5.2.1 org.compiere.Ini.checkProperty(): Loads a property and sets it to default if does not exist.
         2.5.2.1.1 org.compiere.util.SecureEngine.encrypt(): Encrypts a clear text value.
           2.5.2.1.1.1 org.compiere.util.SecureEngine.init(): Initialises cipher and security engine.
             2.5.2.1.1.1.1 org.compiere.util.SecureEngine.SecureEngine(): Creates a new instance of the cipher engine.
               2.5.2.1.1.1.1.1 org.compiere.util.Secure.Secure(): Creates a new instance of cipher object.
                 2.5.2.1.1.1.1.1.1 org.compiere.util.Secure.initCipher(): Initialises cipher and related key.
   2.6 org.compiere.util.CLogMgt.setLevel(): Sets log level.
   2.7 org.compiere.util.CLogMgt.isLevelAll(): Checks if FINEST level is logged.
   2.8 org.adempiere.plaf.setPLAF(): Sets application look and feel.
     2.8.1 org.compiere.util.Ini.getProperty(): Gets the value of a property.
     2.8.2 org.adempiere.plaf.setPLAF(ValueNamePair, ValueNamePair, boolean): Sets application look and feel.
       2.8.2.1 org.compiere.util.Ini.setProperty(): Sets a property.
       2.8.2.2 org.adempiere.plaf.AdempiereTheme.newInstance(): Creates a new instance of the theme.
       2.8.2.3 org.adempiere.plaf.AdempiereLookAndFeel.setCurrentTheme(): Sets current theme.
   2.9 org.compiere.Adempiere.getCodeBaseHost(): Gets JNLP CodeBase host.
     2.9.1 org.compiere.Adempiere.getCodeBase(): Gets JNLP CodeBase.
   2.10 org.compiere.db.CConnection.get(): Gets default cient-server connection.
     2.10.1 org.compiere.util.Ini.getProperty(): Gets the value of a property.
     2.10.2 org.compiere.db.CConnection.CConnection(): Creates a new instance of the connection object.
     2.10.3 org.compiere.db.CConnection.setAttributes(): Sets connection attributes.
   2.11 org.compiere.util.DB.setDBTarget(): Sets default database connection.
     2.11.1 org.compiere.util.DB.closeTartget(): Closes target connections.
     2.11.2 org.compiere.db.CConnection.setDataSource(): Creates database connection.
       2.11.2.1 org.compiere.db.CConnection.getDataBase(): Gets database.
 3 org.compiere.apps.AMenu.AMenu(): Creates a new instance of application menu.
   3.1 org.compiere.Adempiere.getCodeBase(): Gets JNLP CodeBase host.
   3.2 org.compiere.util.Splash.getSplash(): Gets an instance of the splash window.
     3.2.1 org.compiere.util.Splash.getSplash(String): Gets an instance of the splash window.
       3.2.1.1 org.compiere.util.Splash.setText(): Sets splash text.
   3.3 org.compiere.util.Env.createWindowNo(): Adds current instance of Amenu to the list of active windows.
   3.4 org.compiere.AMenu.initSystem():
     3.4.1 org.compiere.Adempiere.getImage16(): Gets ADempiere 16x16 image.
     3.4.2 org.compiere.apps.ALogin.ALogin():
       3.4.2.1 org.compiere.util.CLogger.getCLogger(Class): Gets an instance of the Clogger class.
         3.4.2.1.1 org.compiere.util.CLogger.getCLogger(String): Gets an instance of the Clogger class.
           3.4.2.1.1.1 org.compiere.util.CLogger.CLogger(): Creates a new instance of the logger.
           3.4.2.1.1.2 org.compiere.util.CLogger.setLevel(): Sets logger level.
             3.4.2.1.1.2.1 org.compiere.util.CLogMgt.getLevel(): Gets handlers' logging level.
     3.4.3 org.compiere.apps.ALogin(Frame): Creates a new instance of ALogin dialogue.
       3.4.3.1 org.compiere.util.Env.createWindowNo(): Adds a container to the list of active windows.
       3.4.3.2 Org.compiere.apps.ALogin.jbInit(): Initialises Alogin components.
     3.4.4 org.compiere.apps.AEnv.showCenterScreen(): Shows a windows centered in the screen. (At his point the login window shows up. After accepting all values, the flow continues to the line below.)
     3.4.5 org.compiere.util.isDatabaseOK(): Checks database version.
     3.4.6 org.compiere.Adempiere.startupEnvironment(): Loads environment.
       3.4.6.1 org.compiere.util.DB.isConnected(): Checks if the client is connected to the database.
         3.4.6.1.1 org.compiere.util.CLogErrorBuffer.get(): Gets an instance of the client error buffer.
         3.4.6.1.2 org.compiere.util.DB.getConnectionRW(): Gets a R/W connection.
       3.4.6.2 org.compiere.model.ModelValidationEngine.get(): Initialises main cached Singletons.
       3.4.6.3 org.compiere.model.MSystem.get(): Initialises base context.
       3.4.6.4 org.compiere.model.MSystem.getEncryptionKey(): Gets system encryption key.
       3.4.6.5 org.compiere.util.SecureEngine.init(): Tests security engine.
       3.4.6.6 org.compiere.wf.DocWorkflowManager.DocWorkflowManager():
         3.4.6.6.1 org.compiere.model.PO.setDocWorkflowMgr(): Sets document workflow manager.
         3.4.6.6.2 org.compiere.wf.DocWorkflowManager.get(): Gets an instance of DocWorkFlowManager.
           3.4.6.6.2.1 org.compiere.wf.DocWorkflowManager.DocWorkflowManager(): Creates a new instance of the class.
       3.4.6.7 org.compiere.print.ArchiveEngine.ArchiveEngine(): Creates a new instance of archive engine.
     3.4.7 org.compiere.model.MSession.get(): Gets an instance of local session.
       3.4.7.1 org.compiere.model.MSession.MSession(): Creates a new instance of local session.
         3.4.7.1.1 org.compiere.model.X_AD_Session.setRemote_Addr(): Sets remote address.
         3.4.7.1.2 org.compiere.model.X_AD_Session.setRemote_Host(): Sets remote host.
       3.4.7.2 org.compiere.model.MSession.get(): Updates the record or insets a new one into database.
         3.4.7.2.1 org.compiere.model.PO.save():
           3.4.7.2.1.1 org.compiere.model.PO.beforeSave(): Does pre-save operations.
           3.4.7.2.1.2 org.compiere.model.ModelValidationEngine.get(): Gets an instance of the model validation engine.
           3.4.7.2.1.3 org.compiere.model.ModelValidationEngine.fireModelChange(): Calls modelChange method of added validators.
           3.4.7.2.1.4 org.compiere.model.PO.saveNew(): Creates a new record.
             3.4.7.2.1.4.1 org.compiere.util.DB.getNextID(): Gets next number for key column.
             3.4.7.2.1.4.2 org.compiere.util.DB.lobReset(): Resets LOB info.
             3.4.7.2.1.4.3 org.compiere.util.DB.executeUpdate(String, String): Executes an update statement.
               3.4.7.2.1.4.3.1 org.compiere.util.DB.executeUpdate(String, Object[], boolean, String): Execute an update statement.
             3.4.7.2.1.4.4 org.compiere.util.DB.lobSave(): Saves LOB.
               3.4.7.2.1.4.4.1 org.compiere.util.DB.lobReset(): Resets LOB info.
             3.4.7.2.1.4.5 org.compiere.util.DB.load(): Reloads the record.
             3.4.7.2.1.4.6 org.compiere.util.DB.saveFinish(): Finishes the save process.
               3.4.7.2.1.4.6.1 org.compiere.util.DB.insertTranslations(): Insert translation records.
               3.4.7.2.1.4.6.2 org.compiere.util.DB.afterSave(): Does the post-save operations.
               3.4.7.2.1.4.6.3 org.compiere.wf.DocWorkflowManager.process(): Processes document value workflow.
                 3.4.7.2.1.4.6.3.1 org.compiere.model.MWorkflow.GetDocValue(): Gets document value work flow.
   3.5 org.compiere.apps.WFActivity.WFActivity(): Creates a new instance of workflow activity.
     3.5.1 org.compiere.apps.WFActivity.dynInit(): Dynamic initialisation.
       3.5.1.1 org.compiere.apps.WFActivity.loadActivities(): Loads work flow activities.
       3.5.1.2 org.compiere.grid.ed.VLookup.createUser(): Creates an optional user search lookup.
     3.5.2 org.compiere.apps.WFActivity.jbInit(): Static initialisation.
   3.6 org.compiere.apps.WFPanel.WFPanel(): Creates a new instance of workflow panel.
     3.6.1 org.compiere.apps.WFPanel.jbInit(): Static initialisation.
   3.7 org.compiere.grid.tree.VTreePanel.VTreePanel(): Creates a tree panel for browsing and editing a tree.
     3.7.1 org.compiere.grid.tree.VTreePanel.jbInit(): Static Initialisation.
   3.8 org.compiere.apps.AMenu.jbInit(): Static Initialisation.
   3.9 org.compiere.apps.AMenu.createMenu(): Creates the menu bar.
   3.10 org.compiere.grid.tree.VTreePanel.initTree(): Initialises the tree.
       3.10.1.1 org.compiere.model.MTree.MTree_Base(): Base tree model.
         3.10.1.1.1 org.compiere.util.CCache.CCache(): Creates a new instance of ADempiere's cache.
           3.10.1.1.1.1 org.compiere.util.CacheMgt.register(): Register the cache instance.
     3.10.2 org.compiere.model.MTree.MTree(): Constructs and loads a tree.
       3.10.2.1 org.compiere.model.MTree.loadNodes(): Load tree nodes and bar.
         3.10.2.1.1 org.compiere.model.MTree.getNodeDetails(): Loads node details.
   3.11 org.compiere.apps.AMenu.updateInfo(): Shows Memory Info, runs GC if required and updates Requests/Memos/Activities.
~~~

### Other Formats

- PDF: [[1]](http://www.adempiere.com/wiki/images/6/69/Startup-Invocation-Sequence.pdf)
- DOC: [[2]](http://www.adempiere.com/wiki/images/d/d3/Startup-Invocation-Sequence.doc)

### Tree Node Click

[Wiki Format](a)

## Accounting Server Initialisation

*Note: This section documents' may contain some bugs or errors. Feel free to edit the DOC and replace the PDF in case of errors.*

- [Wiki Format](a)
  
- PDF: [[5]](http://www.adempiere.com/wiki/images/6/6f/AcctServerInit.pdf)
- DOC: [[6]](http://www.adempiere.com/wiki/images/8/8a/AcctServerInit.doc)