---
title: Extending ADempiere
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

The great thing about [Open Source ERP](http://en.wikiversity.org/wiki/Open_Source_ERP) is that you can extend it. This is part of the overall course on [Adempiere Technical Training](http://en.wikiversity.org/wiki/Adempiere_Technical_Training).
Note that the spelling for ADempiere in the title is proper as it is defined [here](http://www.adempiere.com/wiki/).

## Extension architecture

- Callouts
- Model Validator
- Java Triggers
- Processes
- Views and Reports
- Forms
- Print Formats
- Import File Loader


## Common code

### Context variables

Context variables are like 'global' variables for the whole Adempiere, or for a specific window or tab.

You can see all context variables in Tools -> Preference -> Context

Context variables starting with # are defined at login level

Every field in a window has his own context variable, you can access it programatically.

Reading context variable AD_Role_ID

~~~
int currole_id = Env.getContextAsInt(ctx, "#AD_Role_ID");
~~~

### Creating object (new record, update record, delete record)

You can get or create objects from the database using the model classes, for example to read an invoice from the database:

~~~
MInvoice inv = new MInvoice(getCtx(), invoice_id, get_TrxName());
~~~

This is equivalent to issue a 'SELECT * FROM C_Invoice' and load in memory the data.

To create a new record in the database you call the same code with zero as the ID:

~~~
MInvoice inv = new MInvoice(getCtx(), 0, get_TrxName());
~~~

You then can make changes to columns using the setter methods of the object, i.e.:

~~~
inv.setC_Currency_ID(100);
~~~

After you make all the changes you save the record in the database calling the method save():

~~~
inv.save();
~~~

The method save will execute an INSERT if is a new record or an UPDATE if the record already exists. If you want to delete an existing record, you can call the method delete(), i.e.

~~~
inv.delete(true);
~~~

and after deleting you need to call the method save to execute the corresponding DELETE in the database

### Use messages for translations

To show messages within your programs, please use the i18n facility of Adempiere using the message table for this purpose, programatically you simply execute, i.e.:

~~~
String dateLabel = Msg.getMsg(Env.getCtx(), "Date");
~~~

### SQL

- Usage of embedded SQL – recommended to use UpperCase in SQL Keywords (for security sql parser)
  - Specially this keywords: SELECT, FROM, WHERE, ON, AS, INNER, JOIN, LEFT, OUTER, FULL
- When using joins, security parser also requires that ON clause defining the joining columns must be enclosed in parenthesis
- use Oracle SQL standard syntax that can be translated to postgres – Don't use postgres specific syntax

If you want to issue a simple query returning just one column of the first record, you can use the DB.getSQLValue functions provided by Adempiere:

~~~
String sql = "SELECT COUNT(*) FROM C_Recurring_Run WHERE C_Recurring_ID=?";
int current = DB.getSQLValue(get_TrxName(), sql, getC_Recurring_ID());
~~~

To execute a DML operation in the database (INSERT, DELETE or UPDATE) you can use the DB.executeUpdate method, i.e.:

~~~
String sql = "UPDATE C_CashLine SET Processed='N' WHERE C_Cash_ID=" + getC_Cash_ID();
int noLine = DB.executeUpdate (sql, get_TrxName());
~~~

To read several records from the database (cursor) you can execute

~~~
String sql = "SELECT C_PaymentAllocate_ID FROM C_PaymentAllocate WHERE C_Payment_ID = ?";
PreparedStatement pstmt = null;
pstmt = DB.prepareStatement(sql, get_TrxName());
pstmt.setInt(1, payment_ID);
ResultSet rs = pstmt.executeQuery();
while (rs.next()) {
   payment_allocate_ID = rs.getInt(1);
   /// ... more code
}
rs.close();
pstmt.close();
~~~

### Commit (not common – used with transactions)

Normally you don't need to execute directly a commit. If in your process you need strict control of the commit, please create a transaction:

~~~
Trx trx = Trx.get(getTrxName(ctx), true);
~~~

~~~
trx.commit()
~~~

## Callouts

Called after user entered value (for Strings is called every keystroke)

It can be used for direct data validation – but you need to validate again before saving

Better usage for data consequences: i.e. Filling other fields with lookup values, calculating totals You must repeat all calculations in persistence layer

You can have multiple callouts separated by ;

The processing of a callout must be quick (< 1 sec), if slow better create a button and process


Callout classes must extend CalloutEngine and implement the callout methods with 6 variables (last optional)

- Context
- Window No
- Model Tab
- Model Field
- The new value
- The old value
- 'Returns' error message

There are also callouts for translation of strings on Import File Loader, these callouts have just one parameter:

- The value
- 'Returns' the translated value

**_Exercise: Create a Callout on the Name of Product Category – the name must be passed to the Description in upper case_**

## Model Classes (lookup)

Persistence

PO (Persistent Object) --> X_`<table>` classes --> M`<shortTable>`

Class X_ is looked up with complete Name (and case) of the table

Class M is looked up with table name without prefix (if prefix is <= 2 char), and without underscore symbols “_”

Precedence when looking up for M classes:

1. Look for model package of the entity type (for non-dictionary tables) – first look for M and then X_
2. look for model package in:

~~~
org.compiere.model
org.compiere.wf
org.compiere.print
org.compiere.impexp
compiere.model
adempiere.model
org.adempiere.model
~~~

1. look for adempiere.model.X_ class
2. look for compiere.model.X_ class
3. look for org.compiere.model.X_ class

Exceptions:

~~~
AD_Element - M_Element
AD_Registration – M_Registration
AD_Tree – MTree_Base
R_Category – MRequestCategory
GL_Category – MGLCategory
K_Category – MKCategory
C_ValidCombination – MAccount
C_Phase – MProjectTypePhase
C_Task – MProjectTypeTask
~~~

If can't find persistence class then it uses PO to save directly to the database.
In Adempiere there is a GenericPO that can be used for programatically save tables with no model class.

X_ classes are generated automatically – don't change them
Usage of GenerateModel:
arguments:

- Output Directory - C:\srcAdempiere\trunk\base\src\org\compiere\model\
- Package - org.compiere.model
- EntityType - 'D'
- Optional table like - 'U_RoleMenu'

## Model Classes (triggers)

Insert/Update triggers: beforeSave and afterSave

Delete triggers: beforeDelete and afterDelete

## Model validator

Defined at client level

You can have multiple model validators separated by ;

Events:

- User Login – you know the user, role, client and organization – i.e. Useful for veto login

Events on table:

- BEFORE/AFTER
- NEW/ CHANGE/ DELETE

Events on documents:

- BEFORE/AFTER
- PREPARE/ VOID/ CLOSE/ REACTIVATE/ REVERSECORRECT/ REVERSEACCRUAL/ COMPLETE / POST

## Model Classes vs Validators

- Don't customize adempiere model classes – implement triggers for official tables in model validator
- Use model classes (or model validator if preferred) for your customized tables
- Don't generate X_ classes for official adempiere tables – use general getter and setter from PO for custom columns

**_Exercises:_**

- Create a ModelValidator that avoids users login twice in Adempiere
- Create a ModelValidator when Order changes the business partner – add the previous bp to the description
- Create a ModelValidator to forbid GardenAdmin from completing an Invoice
- Create a ModelValidator to prevent complete posting from invoices

## Processes

Called from menu or buttons
prepare method for getting the parameters into variables – Record_ID just work for buttons

doIt method for execution of the process

addLog to keep log of the executions / for auditing purposes and showed at the end of the process

return a message

for errors must throw exceptions

## Forms

Custom swing windows – special cases
Not recommended – not supported for webUI clients

- Extend org.compiere.swing.CPanel
- Swing code – implement listeners
- Use javax.swing and org.compiere.swing components

## Import File Loader

- Stage table
- File definition
- Import of the file
- Import process to transfer data from the stage table to the definitive tables

**_Exercise:_**

- Add POReference column to the I_Invoice stage table
- Change the ImportInvoice process to manage the import of this new column

## Other resource

[ADempiere Wiki on New Window Creation](a)