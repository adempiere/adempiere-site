---
title: DevGuide When to use
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Application Dictionary

- Add new fields, tabs or even windows without business logic (see [NewWindow](a), [Virtual_Colums](a))
  - Change/add validation rules for fields
  - Change/set default values for fields
  - Change/set read only logic for fields
  - Change/set visibility logic for fields
  - Change/set mandatory logic for fields
  - Change the layout (field order) of tabs
  - Translate or rename GUI elements
  - You may find this useful about Application Dictionary
- [User:Ivanceras#The_AD_in_ADempiere](https://wiki.adempiere.net/User:Ivanceras#The_AD_in_ADempiere)

## [Callout](callout.md)

A callout is a java method that is executed after a field value is changed.

- Data entry consequences like calculate totals that need direct feedback at the GUI

f you do calculations in callouts you have to repeat them in the related PO classes (using model validator) to allow the access via a different UI like HTML interface

- Not for data validation - use dynamic validation (AD) instead
- Define in Table Column, if you need more than one to the same column, define separated them by ;
- see [Callout](./callout) and [Tutorials#FAQ](a) also

## Process

A process is a java class that extends org.compiere.process.SvrProcess. It is linked to a button in the ADempiere client and executed when the user hits this button or to a menu entry. It has two methods prepare() - to check process parameters - and doIt() - to do the work.

- For complex logic that may take some time

Look at[ this template](a) for an example.

## [Validators](./model-validator.md)

Define in your Client the field ModelValidationClasses with your validation classes. They must implement org.compiere.model.ModelValidator. Look at example MyValidator. The main methods are modelChange which is called after PO.beforeSave/PO.beforeDelete and docValidate which is called as first step of DocAction.prepareIt.

- For business logic like validation - all kind of logic you would otherwise put direct into the mentioned methods

MClasses and ModelValidator both are used to do data validation and business logic. Callouts should not be used for complex logic since they are triggerd from the UI only and their logic has to be duplicated in the MClass/Validator to make sure that it is applied if you create an object from the java code.

The main difference between MClass and validator is that the existing MClasses are part of the ADempiere core and the validators are ment to enhance the core (to allow customizations). Note: this belongs to the standard ADempiere tables - if you create your own table you can put all logic in the MClass since it is a customisation itself..

If you need to change or enhance the business logic of an order(e.g. check if the selected shipping type is available for the selected destination) you shouldn't do it in the standard MClass MOrder. If you do so, you need to merge your customized MOrder-Class by hand everytime you upgrade ADempiere. If you use your own validator class for this the upgrade will be much easier.

## Custom Forms

A custom form is a swing window that is not generated from the AD. It has to implement the org.compiere.apps.form.FormPanel interface. If you use custom forms you have to rebuild their logic for other GUI (HTML, WebServices...)

- For complex GUI windows where the AD generated standard windows are not flexible enough

Core Class Changes
Don't do this if you are not sure that you really need it :)

- GUI enhancements