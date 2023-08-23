---
title: Process
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

An ADempiere Process is a piece of code which run on a user interface action such as clicking on a button. This example gives an outline of a sample process and its usage. You can create the method derived from SvrProcess class.

## Main Methods

### Prepare Method

~~~
/**
  * The prepare function is called first and is used to load parameters
  * which are passed to the process by the framework. Parameters to be
  * passed are configured in Report & Process -> Parameter.
  * 
  */
 @Override
 protected void prepare() {

  ...
  int recordId = getRecord_ID();
  ...
 }
~~~

### DoIt Method

~~~
 
 /**
  * Post process actions (outside trx).
  * Please note that at this point the transaction is committed so
  * you can't rollback.
  * This method is useful if you need to do some custom work when 
  * the process complete the work (e.g. open some windows).
  *  
  * @param success true if the process was success
  * @since 3.1.4
  */
 @Override
 protected void postProcess(boolean success) {
  if (success) {
   
  } else {
              
  }
 }
~~~

## See also

- [Calling a process from code](a)
- [Howto write an Adempiere process](a)