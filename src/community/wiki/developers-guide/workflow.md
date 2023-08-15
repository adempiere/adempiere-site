---
title: Workflow
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

The Workflow system automates the movement and approval processes in a business. It is most effective where many people are involved in document creation, vetting, approval and completion and the timely completion of the process is important. Setting up workflows is a System Administrator task. As a user, the Workflow functionality allows you to see the processes you are involved with and take the necessary actions.

## Access

Icon: ![Icon](/assets/img/community/developers-guide/Icon_WorkFlow24.png)

Menu:`	→Active Workflows }}{{#if: | → }}{{#if: | → }}`

Short Cut:	none

::: info Note

You can also access the Workflow from the Main Panel by clicking the tab labeled "![icon-assignment](/assets/img/community/developers-guide/Icon_Assignment24.png) Workflow Activities" if it is present in the main panel.

:::

## Restrictions

To manage and respond to workflow processes and activities, your role will require access to the Workflow Process table (AD_WF_Process).

To respond to workflow activities, your role will require access to the Workflow Activity table (AD_WF_Activity).

## Description

The Active Workflows icon and menu link is enabled if your role has access to either of the Workflow Process or Workflow Activity tables.

When the Active Workflows menu or icon is selected, the software will determine if your role has access to the Processes (ability to manage workflows), in which case the `{{#if: Workflow Process|Workflow Process|WorkflowProcess }} Window` will open. If the role does not have access to the Processes, then access to Activities is checked and the `{{#if: Workflow Activities|Workflow Activities|WorkflowActivities }} Form` is opened. If this test also fails, the `{{#if: Workflow Activities|Workflow Activities|WorkflowActivities }}` Form will open as a default but may be read only.

## Workflow Process

The `{{#if: Workflow Process|Workflow Process|WorkflowProcess }} Window` appears as shown below, possibly displaying data about the workflow associated with the current record. If there is none, the window may appear ready to enter a new record.

![ManPage](/assets/img/community/developers-guide/ManPageW_WorkflowProcess_Process.png)

The `{{#if: Workflow Process|Workflow Process|WorkflowProcess }} Window` has three tabs showing the overall process, activities in the process and events related to the activities. See the `{{#if: Workflow Process|Workflow Process|WorkflowProcess }} Window` ManPage for more information.

If a workflow is displayed in the window, you can manage the workflow process in the following ways:

- Cancel the workflow process
- Assign a different user to be responsible for performing the work
- Assign a different organization

Clicking on the **Manage Process** button will allow you to do so. The button will open a simple dialog where you can make the changes.

![WorkflowManage](/assets/img/community/developers-guide/WorkflowManageProcessDialog.png)

If you assign a new person responsible, the workflow activity will appear in their main panel tab labeled Workflow Activities when the workflow processor next runs.

### Workflow Activities

The Workflow Activities can be found in the main panel in the horizontal tabs. The tab will show the number of workflow processes you have been assigned.

![workflowActivities](/assets/img/community/developers-guide/WorkflowActivities.png)

At the top of the form is a list of the active workflows that are awaiting your attention. Selecting one of them will fill the rest of the form with information about the workflow. The image shows a business partner approval process. GardenUser has created a new business partner and GardenAdmin has to approve it. The "approval" is performed by clicking the Confirm button. In addition to the approval, there is an "Answer" action, in this instance a button labeled "Business Partner" which will open the relevant business partner record to allow a review of the new business partner.

The answer actions and approval/completion processes can be quite varied, complex and tailored to the specific workflow process being followed. However, in general, each step (called a "node") in the process requires the user to provide an answer/perform an action before the process can move on to the next step.

The Workflow Activies form displays the name of the node, a description, some help text and a list of history records.

Below the history records is a Answer/Action control which changes form depending on the intended answer/action. The types of answers/actions can be:

- Wait (sleep) for a period of time or until a condition is met
- User Choice (typically Yes or No for documents that require approval)
- Start a sub-workflow
- Set a variable
- Open a window (as in the example above)
- Open a form
- Perform some application task
- Open a report
- Start an application process
- Perform a Document Action - (Complete, Close)
- Send an email

Some of these options will be automatic in the workflow design. The options presented to a user will be in the form of a combo box list, a text field or a button. The buttons will open a window or form.

On the right of the form is a zoom icon (![IconZoom](/assets/img/community/developers-guide/Icon_Zoom24.png)) which will take you to the source record.

Below the Answer actions and Zoom icon, there is also a "Messages" box. Anything entered in this field will be added to the history records.

If the workflow node needs to be sent to another user's attention, they can be selected in the "Forward" box. (You can't forward the Activity to yourself.)

Finally, the Confirm button, when clicked, will complete and execute the action.

## See also

- [Workflows Explained](a)
- [How to Activate Document Approval Workflow](a)
- [How to Configure Dynamic Approval Workflow](a)
- [Workflow-TestSample](a)

## For Developers

The software that controls this dialog is found in

- base/src
  - org.compiere.model.X_AD_WF_Node.java
  - org.compiere.wf.MWFActivity.java

- client/src
  - org.compiere.apps.wf.WFActivity.java
