---
title: How to Activate Document Approval Workflow
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Purpose

This tips is useful for electronic approval (paperless) implementation.

What we are going to do is just make a little modification on default workflow. Example :

~~~
We want each requisition to go through an approval step before completion, and here are the steps to hack the workflow :
~~~

## Requisition Window

1. Login as SuperUser and choose System Administration Role.

2. Go to [Workflow](a)

3. Select Process_Requisition

![process-requisition](/assets/img/community/developers-guide/Process_requisiton.png)

## Node Tab

4. Go to Node tab

5. Add new node name it : (DocApprove) and choose User choice as the Action at the colum box select "isApprove"

![node-approve](/assets/img/community/developers-guide/Node_approve.png)

## Transition Tab

6. Save it then move to Transition tab and create new record, fill in next node with (DocComplete)

![transition-approve2](/assets/img/community/developers-guide/Transition_approve2complete.png)

## New Transition

7. Save it, and back to Node Tab, select (DocPrepare)

8. There is no modification in node tab for (DocPrepare), but we are going to add a new transition for this node

9. Jump to Transition node again and add new record then fill in next node with (DocApprove)

![transition-prepare](/assets/img/community/developers-guide/Transition_prepare2Approve.png)

10. Make sure line no of the new record is smaller than line no of 1st Transition (DocComplete)

![transition-prepare](/assets/img/community/developers-guide/Transition_prepare.png)

## End

11. Save it and congratulations as you now have got yourself an approval workflow.

## See also

- [Jorg Janke, the Creator's Tutorial](http://www.compieresource.com/2008/04/add-approval-to-document-workflow.html#more)
- [Workflow-TestSample](a)
- [Approval some amount by supervisor](http://sourceforge.net/forum/message.php?msg_id=5315979)
