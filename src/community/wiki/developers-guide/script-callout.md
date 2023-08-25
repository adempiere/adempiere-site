---
title: Script Callout
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Creating the Rule

Within the script you can use:

- Window context variables start with a W_ prefix
- Login context variables start with G_ prefix
- Parameters for callout start with A_ prefix
  - A_WindowNo
  - A_Tab
  - A_Field
  - A_Value
  - A_OldValue
  - A_Ctx

![BeanShell](/assets/img/community/developers-guide/01_BeanShell.png)

## Configure Callout from Table/Column

![BeanShell2](/assets/img/community/developers-guide/02_BeanShellCallout.png)

- This Callout can also be called from the [Report & Process Window](script-process.md). Just remember to set in the Rule window from which Event Type are you calling this Rule Script.

## Sample Code provided for copy/paste testing

On the Table and Column, callout reference:

~~~
@script:beanshell:BP_fillDescriptionFromName
~~~

On the Rule Search Key:

~~~
if (A_Tab.getValue("Name") != null) {
    A_Tab.setValue("Description", A_Tab.getValue("Name"));
}
result = "";
~~~

## Sample Code for Setting Payment Bank Account

This script will set the bank account on the Payment window based on the Tender Type and Credit Card Type.

On the Payment Table and Column, callout reference for Tender Type and Credit Card Type:

~~~
@script:beanshell:payment_setpaymentprocessor
~~~

On the Rule Search Key:

~~~
beanshell:payment_setpaymentprocessor
~~~

On the Rule Script:

~~~
import org.compiere.model.MPayment;

if(A_Tab.getValue("TenderType") != null && A_Tab.getValue("CreditCardType") != null && A_Tab.getValue("CreditCardType") != "")
{
   MPayment pmt = new MPayment(A_Ctx, 0,null);
   pmt.setTenderType(A_Tab.getValue("TenderType"));
   pmt.setC_Currency_ID(A_Tab.getValue("C_Currency_ID"));
   pmt.setCreditCardType(A_Tab.getValue("CreditCardType"));
   pmt.setPaymentProcessor();
   A_Tab.setValue("C_BankAccount_ID", pmt.getC_BankAccount_ID());
   pmt = null;
}
else
{
   A_Tab.setValue("C_BankAccount_ID", 0);
}    
result="";
~~~

## Scripting Languages

- Now standard Adempiere has uploaded jars to work with [groovy](http://groovy.codehaus.org/), [jython](http://www.jython.org/Project/index.html) and [beanshell](http://www.beanshell.org/)
- to call a script from a Callout follow these sample syntax:

  - @script:beanshell:ValidateQtyOnHand
  - @script:groovy:ValidateQtyOnHand
  - @script:jython:ValidateQtyOnHand

- When you create the rule, you have to set in the Search Key such as:
  - Search Key : beanshell:ValidateQtyOnHand
  - Search Key : groovy:ValidateQtyOnHand
  - Search Key : jython:ValidateQtyOnHand

- Set the Event Type as Callout and Rule Type as JSR 223 Scripting APIs

## See Also

- [Script Process](script-process.md) for event rule example from a Report & Process window.
- [Script ModelValidatorLogin](a)
- [Script ModelValidator](script-modelvalidator)
- [Rule Engine Implementation](a)
- [Java Scripting](http://scripting.dev.java.net/)
- [Callout](callout.md)
- [Rule Engine / Script Callout / Script Process](https://wiki.adempiere.net/ZH/Case-Study-01-Journal-31) - Chinese

