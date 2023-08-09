---
title: Virtual Columns
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Introduction

Virtual columns are Adempiere table columns that are not part of the corresponding database table. Their values are not stored but calculated from an SQL expression.

They can be used to show additional fields from a referenced table (e.g to show name and the search key of a product in the shipment line) or to calculate a value from other table columns (eg. Show the age of the data in the row as Updated-Created).

## How to Create a Virtual Column

To follow these steps, you should understand the SQL query language and be familiar with the table structure within ADempiere. Before you begin, you will need to have an SQL query required to generate the data in the field you want to display. This query should return a single value or perform a simple calculation.

In the example below, we will add the M_Product."value" (or product search key) to the M_InOutLine table and display it in the `{{#if: Shipment (Customer)|Shipment (Customer)|Shipment(Customer) }} Window`.

## Add a Virtual Column to the Source Table

1. Login as System Administrator
2. In the Menu Tree navigate to Application Dictionary`{{#if: | » }}{{#if: | » }}{{#if: | » }}{{#if: | » }} and open the {{#if: Table and Column|Table and Column|TableandColumn }} Window`
3. Search for and select the table M_InOutLine and then switch to the `{{#if: |{{{3}}}|Column }} Tab`
4. Create a new column with the following values:
   - Name: Value
   - DB Column Name: Value
   - System Element: Value
   - Length: 40
   - Reference: String
   - Updateble: false
   - Column SQL: (SELECT Value FROM M_Product p WHERE p.M_Product_ID=M_InOutLine.M_Product_ID)
5. Save your work

The Column SQL text will be included in the table SQL query as

SELECT field1, field2, `<Column SQL>` as `<virtual column name>`, field4... WHERE ...[Client/Org tests] ... [Private Access tests] ...
The Column SQL statement does not have to be a full SQL Select statement with a WHERE clause. If you are simply performing a calculation, only the variables and operation need be included. For example, suppose we add the Column T_Integer to the XX_Material table where the field is simply the sum of two other fields, ColorNr and MATNR. The Column SQL is simply (COLORNR + MATNR). In the final SQL statement used to select records from the table, it will look like this:

~~~
SELECT IsActive, XX_Material_ID, MatNr, ColorNr, Name
  , (COLORNR + MATNR) AS T_Integer
  , AD_Client_ID, AD_Org_ID, Created, CreatedBy, Updated, UpdatedBy 

FROM XX_Material 

WHERE XX_Material.AD_Client_ID IN (0,1000000) 
  AND XX_Material.AD_Org_ID IN(0,1000000) 
  AND XX_Material.XX_Material_ID NOT IN ( SELECT Record_ID FROM AD_Private_Access WHERE AD_Table_ID = 1000007 
  AND AD_User_ID <> 100 
  AND IsActive = 'Y' ) 
~~~

In this case, the virtual column (COLORNR + MATNR) is just included in the comma separated field list.

::: info Note

Don't forget to put the bracket signs () around your SQL statement if you do anything complex. The software does not add them.

:::

::: info Note

It is important to use UPPERCASE for the SQL reserved words like SELECT, FROM, WHERE etc.... The ADempiere software uses the case to identify these key words as it prepares the SQL statements for execution.

:::

::: info Note

Avoid the use of aliases in the SQL statement as the statement will be embedded in a larger SQL statement for the window tab and the aliases can get confused if they are not unique within the larger statement. If you do use aliases, ensure they are unique from all other table and column names used in the window tab.

:::

## Add the New Virtual Column to the Target Window/Tab

1. Go to the `{{#if: Window, Tab & Field|Window, Tab & Field|WindowTabField }} Window`
2. Select the Shipment (Customer) record and switch to the `{{#if: |{{{3}}}|Tab }} Tab`
3. Select Shipment Line record and switch to `{{#if: |{{{3}}}|Field }} Tab`
4. Create a new Field with the following values.
   - Name: Value
   - Column: Value_Search Key
   - Display Length: 14
   - Read Only: true
5. Save your work.


## Test the Column

1. Login to the Client as the appropriate user.
2. Select the `{{#if: Shipment (Customer)|Shipment (Customer)|Shipment(Customer) }} Window`.
3. Verify that the virtual column is working properly.

## Troubleshooting

If you have problems with the column SQL, check the error log for issues and look at the log output in the console.

## See Also

- [sf.net message](https://sourceforge.net/forum/message.php?msg_id=4682365)