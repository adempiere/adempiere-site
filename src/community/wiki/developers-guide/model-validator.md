---
title: Model Validator
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## What is a model validator?

A model validator is java class that implements org.compiere.model.ModelValidator. It has two important (callback)methods (modelChange and docValidate) which are called on model change events and document events. The model validator register itself for certain ADempiere tables or documents to react on model changes (data changed, added or deleted) or document actions like complete, void etc. SaveProperties, Login, FactValidate, LoadPreferences are other methods in the ModelValidator interface.

## Model Classes vs Validators

Use Model Validators on standard tables. Use Model Class for your custom tables. For example, If you need to change or enhance the business logic of an order(e.g. check if the selected shipping type is available for the selected destination) you shouldn't do it in the standard MClass MOrder. If you do so, you need to merge your customized MOrder-Class by hand everytime you upgrade ADempiere. If you use your own validator class for this the upgrade will be much easier.

- Don't customize Adempiere model classes – implement triggers for official tables in Model Validator
- Use model classes (or Model Validator if preferred) for your customized tables
- Don't generate X_ classes for official Adempiere tables – use general getter and setter from PO for custom columns

## ModelValidator and Methods

### Model change events

Model Change events occur every time when data of an ADempiere db table is changed. There are events for data insertion (TYPE_BEFORE_NEW/TYPE_AFTER_NEW), change of data (TYPE_BEFORE_CHANGE/TYPE_AFTER_CHANGE) and deletion (TYPE_BEFORE_DELETE/TYPE_AFTER_DELETE).

### Document events

Document events occur on the change of the document status. So you have BEFORE/AFTER CLOSE/REACTIVATE/ REVERSECORRECT/REVERSEACCRUAL/COMPLETE/PREPARE/VOID/POST

### Login Event

It's called when a user log into Adempiere - you can log or restrict users to log in according to business rules.

### FactsValidate Event

It's called when posting a document (accounting). You can change the facts being posted (similar to calling BEFORE_POST document event.

### LoadPreferences Event

It's called after the adempiere preferences are loaded - useful to add context variables or things after log in.

### SaveProperties Event

It's called when a user is saving properties - useful to restrict changes on properties file (Tools -> Preferences).

## Steps to create and register a model validator

1. Create your own validator class which implements the interface org.compiere.model.ModelValidator

   - Register the table/document in the `initialize()` method.
   - Make sure to implement the `getAD_Client_ID` method, as otherwise the Model Validator won't work.

~~~
 /**
  * Get Client to be monitored
  * @return AD_Client_ID client
  */
 public int getAD_Client_ID()
 {
  return m_AD_Client_ID;
 } // getAD_Client_ID


 public void initialize (ModelValidationEngine engine, MClient client)
 {
  // This line must come before registering the model changes
  //client = null for global validator
  if (client != null) { 
   m_AD_Client_ID = client.getAD_Client_ID();
  }

  [...]
  
  // register for model change on C_Order
  engine.addModelChange(MOrder.Table_Name, this);
  // register for document events on MOrder 
  engine.addDocValidate(MOrder.Table_Name, this);
 
 } // initialize
~~~

- Put your code into `modelChange()` for model change events and into `docValidate()` for document events.
- You have to check the parameters `po` for the table name (`po.get_TableName()`) - if you registered more than one table/document - and timing/type to react on the right events.

~~~
public String modelChange (PO po, int type) throws Exception
{
   // we want to validate the order before the deletion
   if (po.get_TableName().equals("C_Order") && type == TYPE_BEFORE_DELETE)
   {
      MOrder order = (MOrder)po;
      // put your code here
   }
   return null;
} // modelChange
~~~

~~~
public String docValidate (PO po, int timing)
{
   if (timing == TIMING_BEFORE_COMPLETE) {
      if (po.get_TableName().equals(MOrder.Table_Name))
      {
          //put your code here
          //it is executed every time an order is about to complete
      }
   }
   return null;
} // docValidate
~~~

2. Register your validator in ADempiere. Login as System Administrator and open the 'Client' window. Here you have to enter you validator class (full qualified name) into the ModelValidationClasses field. Separate validators by ";" if you have multiple validators

You can also register a validator with a client admin account. This validator will only belong to this client's objects. --[Tbayen](https://wiki.adempiere.net/User:Tbayen) 17:51, 11 January 2012 (UTC)

3. [Create a jar file](a) with your validator class and rename it to customization.jar. 

4. Or jar the class directly for example:

~~~
jar cvf customization.jar MyValidatorThailand.class
~~~

5. Copy this customization.jar into the Adempiere/lib folder of your ADempiere installation and rerun the RUN_setup.bat/sh. Restart the ADempiere server and install the new client (or restart the client with Java WebStart).

## See also:

- Take a look at [compiere.model.MyValidator](a) or [MyValidatorThailand](a) for source code samples.
- [Extensions Friendly Proposal](a)
- [LCO Validator](a) for a code example.
- [Script ModelValidator](a) to achieve similar functionality without stopping the Server!
- [How To Create Customization.jar](a).
- [Java JPA](http://www.javaworld.com/javaworld/jw-01-2008/jw-01-jpa1.html?page=4) seems to have 'callbacks' that can replace the hooks we are using.

