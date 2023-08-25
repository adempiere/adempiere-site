---
title: Application Dictionary
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Introduction

The application dictionary is one of the most powerful aspects of Adempiere, virtually all of the application can be driven via changes in the dictionary – development (writing code) is drastically reduced – most of the application can be configured directly in the dictionary without requiring compilation or re-building.

## Entity Types

The entity type determines the ownership of Application Dictionary entries. The types "Dictionary" and "Adempiere" should not be used as they are maintainted by Adempiere – this is the official Adempiere dictionary.

Last Addition in Adempiere (3.3.1) is to define a model package to look for model classes based on entity types (i.e. Look in org.evolution.model instead of org.compiere.model)

## Element

This is the central repository for field names, description and help/comments. As well as translations.

Define the names, label, description, help for sales and purchase contexts.

- Centralized terminology – if you need an exception disable “centrally maintained” in field( windows Tabs & Field).

## Table and Column

This is closely related to database, it is kind of metadata of the database tables and columns translated to Adempiere “object” notation.

### Tables

- Case sensitive
- If the table has an ID it must be exact case with the table name (i.e. CUST_MyTable – the column id must be named exactly CUST_MyTable_ID)
- View – to define the table definition as view, views are not synchronized in the database

You can use it also to make a table read-only

- Data Access Level – Used for defining the default access for roles
- Maintain Change Log – when selected all changes to this table are logged in the AD_ChangeLog table – it doesn't matter if the role is logged or not
- Window – define the window to enable zoom functionality. Also, you can define a different zoom window for the purchase process (PO Window).
- Records deleteable – to allow/disable deletion of records in the database
- High Volume - indicates if a search screen will display as opposed to a pick list for selecting records from this table.
- Create Columns from DB: If you make changes in the database (ALTER TABLE ADD/MODIFY columns) – you can get the changes with this process.
- Copy Columns From Table: This is the quickest process to create a table – you select a similar table and this process will create all columns with exact columns (the ID will be renamed to match the table name) – then you can edit (add/delete/change) the columns and when you finish just push the button Synchronize Column to create the table in the database.

## Columns

- System Element – the DB Column Name, Name, Description, and translation will be inherited from the element at saving time.
- DB Column Name – the exact name of the column in the database
- Column SQL – for virtual columns. Virtual columns can show summary information, or information from other tables without the need of adding a real column to the database. Is constructed with a select joined with the main table.
- Reference: Data Type of the column - each reference corresponds to different behavior in the GUI. Please note carefully the difference between Table and Table Direct. Table Direct needs an exact match of the case for the table with the name of the column (excepting the suffix _ID)
- Please note also the difference between Table and Search
- For buttons, you can define an associated process
- For Amount, Date, Integer, Number, Quantity you can define a range of min and max value
- Validation: Dynamic change for lists and searches
- Reference Key: Static list for tables and lists
- Value Format: For strings, you can define a format for the field. Adempiere formatting can enforce the usage of space, any letter, uppercase, lowercase, letters & digits, only digits, etc. I.e. Formatting phone numbers
- Default Logic: Context variables – SQL Statements. You can define several defaults separated by “;” - the first one not-null will be the default
- Key Column: Just one per table (Primary Key – normally ID generated internally, not shown for users)
- Parent Link Column – Define the child relation with one or more tables – there can be tables without ID but with one or more parents (like Access tables)
- Mandatory
- Updateable
- Always updateable – make this field always updateable, even if it is processed
- Encryption: just for strings – no reversal process – you can lose data, you need to ensure the width of the column can hold all the current values.
- Read-only logic – condition for making the record read-only (by default IsActive and Processed columns mark the record as read-only without the need of defining the logic here)
- Mandatory logic – condition for making this field mandatory
- Identifier: one or more columns (normally value and/or name) to be shown in lists and for dereferencing in reports. The identifiers are shown in the order defined in the field Sequence
- Callout – piece of code (customization) for filling other fields or simple validations (not recommended for validations – you still need to validate on saving) – for string fields callout is called in keystroke basis
- Selection column – define the column(s) to be shown in the default search window – by default Value and Name columns are searchable
- Translated – to define translations for a column – in this case, you need to define a table and a tab with the same name as the original table and the suffix (_Trl), and create the table with the same key as the parent, language column, and the translated columns

## Reference

The Reference Window defines field/display types and validations.

Supported Data Types:

Type | Description
-- | --
Account | Account Element
Amount | Number with 4 decimals
Assignment | Resource Assignment
Binary | Binary Data
Button | Command Button - starts a process
Color | Color element
Costs+Prices | Costs + Prices (minimum currency precision, but if exists more)
Date | Date mm/dd/yyyy
Date+Time | Date with time
FileName | Local File
FilePath | Local File Path
ID | 10 Digit Identifier
Image | Binary Image Data
Integer | 10 Digit numeric
List | Reference List
Location (Address) | Location/Address
Locator (WH) | Warehouse Locator Data type
Memo | Large Text Editor - Character String up to 2000 characters
Number | Float Number
Printer Name |  
Product Attribute | Product Attribute
Quantity | Quantity data type
RowID | Row ID Data Type
Search | Search List
String | Character String
Table | Table List (Use Key and Display)
Table Direct | Direct Table AccessNOTE: Table name is taken from the column name except the _ID suffix – CASE SENSITIVE (Use Key and Identifier)
Text | Character String up to 2000 characters
Text Long | Text (Long) - Text > 2000 characters
Time | Time
URL | URL
Yes-No | CheckBox

### List Validations

Lists of Values (domains)

- Search Key (this is the value stored in the database) – be careful changing the search key of already used lists – there is no foreign key or validations to check the validity of the change
- Name – is the value shown in the GUI
- Before adding values to system lists, it is recommended to review the impact in

### Table Validations

List of Records from a Table – you can define where and order by clauses.

- Table – Define the table for the query
- Key Column – this is the key column of the table, this value is stored in the database – normally is the key (table_ID)
- Display Column – here you define the column to be displayed in the field
- Display Value – and you can decide if you want to show the Value (Search Key) column as well
- WHERE – here you define the WHERE filter for the query - you can use context variables – VARIABLE IS RESOLVED AT START UP OF WINDOW
- ORDER BY – and you can define an ORDER BY clause for the query

## Validation Rules

The Validation Rules Window defines all dynamic rules used when entering and maintaining columns and fields.

Common use to filter tables and table lists with dynamic values from context variables.

- Type: Currently just SQL supported
- Validation Code: piece of SQL code that is added to the where clause of the reference (or table)

_Exercise: Create the following tables in dictionary and then database_

- Table: CUST_Magazine
 - Attributes: Search Key, Name, Description, Comments, Cost of Subscription, Currency, Logo, Product (just Products within category Documentation), ProductForPackage (alternate product key for a package of magazines – must be BOM products), IsActive

- Table: CUST_Edition
  - Parent table: CUST_Magazine
  - Attributes: ValidFrom, ValidTo, NumberOfPages, QtyPublished, PathForPDF

- Table: CUST_Subscription
  - Parent tables: CUST_Magazine, AD_User
  - Attributes: ValidFrom, ValidTo, IsAutoRenewal

Also see [ManPageW_ValidationRules](a) for more details on the validation rule window.

## Field Group

The Field Group Window allows you to define subsections in a tab. Since Adempiere 3.3.1 you can group those fields in a collapse group or in a horizontal tab.

### Window, Tab and Field

The Window, Tab & Field Window defines the presentation (GUI) of tables and columns within each window.

Transaction windows just show items created/updated last 24 hours or pending (user can select to show more with history button)

### Window

- Tab Level: Top = 0 (The master), level 1 entries are dependent on level 0, level 2 on level 1, and so on
- Link Column: The foreign key to link with the parent – it needs to be defined here if the table has more than one parent

### Tab

- Field Group: New functionality -> Collapse, Horizontal tab, label
- New functionality (still beta) -> master/detail

### Field

The Field Tab defines the Fields displayed within a tab. Changes made to the Field Tab become visible after restart due to caching. If the Sequence is negative, the record are ordered descending. Note that the name, description and help is automatically synchronized if centrally maintained.

### Forms

The Forms Window defines any window which is not automatically generated.

Hand Coded window – some windows are too complex to generate (like Payment Allocation – relation m:n)

### Message

All messages are cached at startup of Adempiere.

### Report View

Tips for views:

- Check the table names in windows.
- You need to include all mandatory columns.
- No need to get names for the _ID columns – Adempiere does it automatically.
- You can create the view on the “SQL Process” window.
- Always review the references of the columns in Adempiere.

### Process and Reports

Processes and reports are the same.

- A report can have a pre-process
- A process can show info when finished

Parameters: As columns or fields you can define defaults, and support ranges

### Menu

Default tree includes all items. You can define your own customized menu:

- Create a menu tree.
- Add (existing) nodes in the Window Tree Maintenance.
- Assign the new menu to the Role.

The menu terminology is synchronized with windows and process names.

Exercise:

- Create a view to get product category value, name, and the count of products in such product category.
- Create the entries in the dictionary for the table/columns.
- Create the report view entry in the dictionary.
- Create a report for the report view and attach it to the menu.
- Test creating and customizing this report.
- Create a window for the view and attach it to the menu.
- Test searching records from the view and creating a report from this window.

## Tasks

Define operating system calls.

## Other System Entities

**Country – Region and City**

Define the layout of address

**Currency**

Defines the precision of number of decimal points used in the particular currency when displaying amounts in it.

## See Also

[Application Dictionary Layers](a)