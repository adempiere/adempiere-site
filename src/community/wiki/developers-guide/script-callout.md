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

A Script Callout (also known as Callout) is a mechanism that allows developers and advanced users to customize and extend the system's functionality.

A Script Callout is a piece of code that executes in response to a specific event in ADempiere, such as:

- When saving a record
- When validating a field
- When processing a document
- When performing a specific action in a window

Script Callouts are a powerful way to customize ADempiere without the need to modify the system's source code, making it easier to implement specific user requirements.

## Variables and Parameters

Within the script, you can use:

- Window context variables start with the prefix `W_`.
- Login context variables start with the prefix `G_`.
- Parameters for callouts start with the prefix `A_`:
  - `A_WindowNo`: The number of the window from which the callout is invoked.
  - `A_Tab`: The current tab.
  - `A_Field`: The field being interacted with.
  - `A_Value`: The current value of the field.
  - `A_OldValue`: The previous value of the field.
  - `A_Ctx`: The current context of the callout.

## Scripting Languages and Syntax

ADempiere now supports JARs for working with [Groovy](https://groovy-lang.org/index.html), [Jython](https://www.jython.org/), and [Beanshell](https://beanshell.github.io/manual/contents.html).

When creating the rule, you must set the **Code** field as follows, depending on the language you are using:

```sh
beanshell:YourCalloutName
groovy:YourCalloutName
jython:YourCalloutName
```

To call a script from a Callout, use the following example syntax:

```sh
@script:beanshell:YourCalloutName
@script:groovy:YourCalloutName
@script:jython:YourCalloutName
```

- Set the Event Type to Callout and the Rule Type to JSR 223 Scripting APIs.

## Create Rule

For this example, we will create a "Hello World" that will be printed to the console.

![Create a Rule](/assets/img/community/developers-guide/CreateRule.png)

Format provided for copy and paste:

- Code: `beanshell:HelloWorld`
- Name: `HelloWorldInCallout`
- Event Type: `Callout`
- Rule Type: `JSR 223 Scripting APIs`
- Script:

```java
System.out.println("Hello World ADempiere");
result = "";
```

## Configure Callout from `Table and Column`

To call the callout, go to the **Table and Column** window, find the desired table, go to the **Column** tab, and fill in the **Callout** field at the end.

For this example, the callout will be placed in the **A_Asset** table (Fixed Asset), in the **M_Product_ID** column (Product).

![Callout In Column](/assets/img/community/developers-guide/CalloutInColumn.png)

::: note

To call the **Callout**, follow the structure previously explained in [Scripting Languages and Syntax](https://www.adempiere.io/community/wiki/developers-guide/script-callout.html#lenguajes-de-scripting).

:::

This Callout will be triggered when a product is selected in the **Fixed Assets** window:


![Product in Asset](/assets/img/community/developers-guide/SelectProductInAsset.png)

In the console, we will see our "Hello World"

![Hello World](/assets/img/community/developers-guide/HelloWorld.png)

- This **Callout** can also be called from the [Report and Processes](script-process.md) window. Just remember to set in the **Rules** window which **Event Type** you are using to call this Rule Script.

## Variable Result

The **result** variable must be assigned within the Callout context to define the message or result that will be returned after executing the Callout logic. This variable is used to indicate error messages, warnings, or information that should be displayed to the user.

The line `result = "";` in the script:

```java
System.out.println("Hello World ADempiere");
result = "";
```

Is assigning an empty value to **result**. This means that no error or warning message is being returned to the user. If you need to return a specific message, you should assign it to result as shown:

```java
result = "Custom message for the user";
```

When the Callout is triggered, it shows the message:

![Message to the User](/assets/img/community/developers-guide/CustomMessage.png)

## Example

- When selecting a **Product** in the **Fixed Asset** window, the content of the **Code** field in the **Product** window should be automatically copied to the **Code** field in the **Fixed Asset** window.

```java
import org.compiere.util.DB;
String value = "";
String productType= "";

if (A_Tab.getValue("M_Product_ID") != null) {
    int productId = (int) A_Tab.getValue("M_Product_ID");
    String sql = "SELECT Value FROM M_Product WHERE M_Product_ID = ?";
    value = DB.getSQLValueString(null, sql, productId);
}
if (value != null && value != "") {
    A_Tab.setValue("Value", value);
}

result = "";
```

<video width="640" height="360" controls>
  <source src="/assets/img/community/developers-guide/CalloutInProduct.mp4" type="video/mp4">
</video>

## See Also

- [Script Process](script-process.md) for event rule example from a Report & Process window.
- [Script ModelValidatorLogin](a)
- [Script ModelValidator](script-modelvalidator)
- [Rule Engine Implementation](a)
- [Java Scripting](http://scripting.dev.java.net/)
- [Callout](callout.md)
- [Rule Engine / Script Callout / Script Process](https://wiki.adempiere.net/ZH/Case-Study-01-Journal-31) - Chinese

