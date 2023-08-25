---
title: Script Process
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

Status: working in version > 3.3.1b

## Create the Rule

Within the script you can use:

- Login context variables start with G_ prefix
- Process Parameters for the process start with P_ prefix, for example P_Name
- If the parameter is a range then the parameters will be P_Name1 and P_Name2

And the following predefined arguments:

- A_Ctx - the context
- A_Trx - the transaction
- A_TrxName
- A_Record_ID
- A_AD_Client_ID
- A_AD_User_ID
- A_AD_PInstance_ID
- A_Table_ID

![script](/assets/img/community/developers-guide/01_ScriptForProcess.png)

## Configure the Process

![processwithscript](/assets/img/community/developers-guide/02_ProcessWithScript.png)

