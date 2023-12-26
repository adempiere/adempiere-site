---
title: The Application Dictionary
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

he Application Dictionary in ADempiere is a powerful tool that allows the System Administrator to define the application's meta-data or how the application looks and behaves.  Virtually every aspect of the application can be changed via the Application Dictionary.  New functionality can be added by creating new entries in the Dictionary, often without the need for adding software.   In fact, it is through the Application Dictionary that the ADempiere Developers add new functionaliy with every release.

There are many ways the application can be changed but the most common changes involve:

## Customization in ADempiere

1. **Adding Tables and Columns:**
   - Extend the data model by introducing new tables and columns.
   - Define the structure that aligns with specific business needs.

2. **Adding Windows, Tabs, and Fields:**
   - Create new user interfaces by adding windows and tabs.
   - Introduce additional fields to capture relevant information.

3. **Changing Data Display:**
   - Customize the way data is presented to users.
   - Modify layouts and formats to enhance user experience.

4. **Limiting Values to Lists:**
   - Control and limit the values that users can input.
   - Utilize lists to enforce data integrity and standardize entries.

5. **Creating Reports and Processes:**
   - Develop new reports to extract meaningful insights.
   - Implement custom processes to automate specific business workflows.

At the core of these changes is an "Entity Type".  This is description of who owns the change and is responsible for it. There are two  Entity Types that are reserved: Dictionary and Adempiere.  These are used by the application developers and any entry in the application dictionary that uses them risks being overwritten at the next migration.

Another important concept is the "Element" which is a common definition of a field that includes the name, data type, references, description and comments associated with the field.  This is a helpful tool as all this information can be set once and then applied everywhere the field is defined or used as a column.  Further, any changes to the Element can be propagated to every field or column that uses that element.

1. Create or select the Entity Type to use for every change
2. Create Element definitions for the custom columns you will be adding
3. Create a Table to hold the data
4. Create Columns in the Table using the Elements from step 2.
5. Create a new Window and add a Tab that draws data from the Table
6. Create the Fields for the Columns and order them in the tab
7. Add the Window to the menu
8. Run the Role Access Update process to ensure users can see the new window.
9. Log-out and in to see the changes

You can now use the window to collect and manage the data as in any other window.  

This example is pretty trivial as it has no functionality associated with it.  The real power of ADempiere comes from the processes that operate on the data.   These processes do the work, the automation, that make an ERP system so valuable.

The following sections will outline the use of the Application Dictionary in detail.