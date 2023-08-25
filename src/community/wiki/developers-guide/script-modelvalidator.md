---
title: Script ModelValidator
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Status

Contributed by [Carlos Ruiz](https://wiki.adempiere.net/User:CarlosRuiz), Quality Systems & Solutions (QSS), [Colombia](https://wiki.adempiere.net/index.php?title=Colombia&action=edit&redlink=1)

## Creating the Rule

The model validator script can be called for changes on tables or status of documents.

The list of supported events are:

For Tables
- TBN - Table Before New
- TBC - Table Before Change
- TBD - Table Before Delete
- TAN - Table After New
- TAC - Table After Change
- TAD - Table After Delete

For Documents
- DBPR - Document Before Prepare
- DBCO - Document Before Complete
- DBCL - Document Before Close
- DBVO - Document Before Void
- DBAC - Document Before Reactivate
- DBRA - Document Before Reverse Accrual
- DBRC - Document Before Reverse Correct
- DBPO - Document Before Post
- DAPR - Document After Prepare
- DACO - Document After Complete
- DACL - Document After Close
- DAVO - Document After Void
- DAAC - Document After Reactivate
- DARA - Document After Reverse Accrual
- DARC - Document After Reverse Correct
- DAPO - Document After Post

Within the script you can use:

- Window context variables start with a W_ prefix
- Login context variables start with G_ prefix
- Parameters for callout start with A_ prefix
- A_Ctx
- A_PO
- A_Type
- A_Event

![scripmodelvalidator01](/assets/img/community/developers-guide/01_ScriptModelValidator_01.png)

## Configure Script Validator from Table/Column

![scriptmodel2](/assets/img/community/developers-guide/02_ScriptModelValidator.png)

## Sample Code provided for copy/paste testing

On the Rule Search Key:

~~~
beanshell:AD_Rule_after_save
~~~

On the Rule Script:

~~~
A_PO.setDescription(A_PO.getName());
result = "";
~~~

## See Also

- [Script Process](https://wiki.adempiere.net/Script_Process) for event rule example from a Report & Process window.
- [Script ModelValidatorLogin](a)
- [Script Callout](script-callout.md)
- [ModelValidator](model-validator.md)

