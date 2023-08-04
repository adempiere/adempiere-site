---
title: The Quality Assurance Process
category: Community
star: 9
sticky: 9
tag:
  - Preface
  - Community
article: false
---

# The QA Process

## The Quality Assurance Process for ADempiere

The goal of Quality Assurance (QA) for ADempiere is to ensure that the released software is stable, that known bugs and limitations are identified and that the proper software development process has been followed.

Quality assurance for ADempiere involves the following:

- A software development process that ensures changes in released software are properly controlled while allowing free development of new functionality and features
- A governance structure that ensures the software development process is followed
- A test strategy that ensures added functionality meets its specifications and does not harm existing functionality
- A reporting structure (forums, trackers, wiki) that allows people to report issues and track their resolution
- A policy of open communication where issues at all levels can be discussed and addressed

## Who is Involved?

Everyone involved with ADempiere is part of the QA process and we all should endeavor to make the software better. We do this largely by being active in the project, communicating and working together. For more information on getting involved, see [Getting Involved in QA](./getting-involved-in-qa.md).

## The Issue Reporting Process

A key element of any QA process is communication - the identification of and discussion about issues and their eventual resolution. The process follows these steps:

- Identification: A user identifies an issue and, depending on the experience of the user, will either discuss the issue in a Source Forge forum or enter the issue in the JIRA Issue Tracker. If the issue is discussed in the forums and other people confirm the issue as a problem, then it should be entered into the Issue - Tracker. (Don't assume this will happen automatically. If you get involved in the discussion, please ensure the issue is entered in JIRA.)
- Issue Types: An issue can be a bug report but it can also be a new feature request or improvement to the system.
- Triage: once the issue is entered in JIRA, it will be triaged by the technical team to assess the nature of the problem. When the issue is first entered, set the status to Triage Pending to trigger this process. The technical team will change the status and priority of the issue once the triage is complete. If the status is set to Open, a developer will be assigned to address the problem.
Open: An open issue is ready to be worked on.
- In Progress: While the developer is working on the issue, the status will be set to In Progress
- Resolved: When a solution is determined, the issue is marked Resolved.
- Commit: Once the issue is resolved, the modified software will be committed to the source repository according to the Software Development Procedure. Details of the commit are typically included in the resolution message in the Issue Tracker.
The process is not linear and the issue status can move back and forth or jump steps as required. The following image shows the possibilities:

![JIra WorkFlow](/assets/img/community/preface/quality-assurance-and-problem-reporting-guidelines/JIRA_Workflow_New_Feature.png)

See the [JIRA Help](https://adempiere.atlassian.net/secure/ShowConstantsHelp.jspa) for more information.

## Entering an Issue

Before you enter an issue into JIRA

- Search the wiki for related info
- Search the forums for related discussions - the issue may already have been identified
- Search JIRA for the current issues to ensure this is a new one.
- Search the older Source Forge trackers
- If you are unsure of the status of the issue - know bug or feature - mention it on the forums and request support from others.
- Once you have confirmed the issue then you may proceed to create a new issue in JIRA.

To enter an issue, log into JIRA and click the link "+ Create New Issue". A form will appear. Enter the following info:

- Project (Required) - this should default to ADempiere, but you can select from the list for special projects
- Issue Type (Required) - Can be one of the following:
  - Bug - A problem which impairs or prevents the functions of the product.
  - Epic - A big user story that needs to be broken down.
  - Improvement - An improvement or enhancement to an existing feature or task.
  - New Feature - A new feature of the product, which has yet to be developed.
  - Story - A user story
  - Task -

::: info Note

Some issue types are unavailable due to incompatible field configuration and/or workflow associations.

:::

- Summary (Required) - the title for the issue
- Priority - select from the list. The priority will be reset during triage.
- Component/s - select one or more components the issue is related to
- Affects Version/s - identify the versions that are affected by the issue.
- Environment - enter any relevant info on the environment being used. For example operating system, software platform and/or hardware specifications (include as appropriate for the issue).
- Description - a long text description of the issue and how to reproduce the results
- Original Estimate (eg. 3w 4d 12h) - this will be filled by the assigned developer. The original estimate of how much work is involved in resolving this issue.
- Remaining Estimate (eg. 3w 4d 12h) - managed by the assigned developer. An estimate of how much work remains until this issue will be resolved.
- Attachment - used to attach files to the issue. The maximum file upload size is 10.00 MB.
- Labels - A list of tags useful when grouping and searching for issues. Begin typing to find and create labels or select a suggested label form the pull down list.

When the form is completed, click "Create" to save the issue.

## Software Quality

The issue resolution process is a key method of ensuring the quality of the software released. It is critically important that users and developers identify and communicate the issues they find as only known issues will have a chance at resolution. Once issues are identified, the resolution of the issues will improve the quality of the software in a continuous cycle.

The [Software Development Procedure](a) outlines the methods used to collect and publish the issue solutions. In short, there are main releases of the software which are packaged and intended for production use. In between these releases, a series of patches may be published that will further improve the software quality. The most resent release and the associated patches represent the best quality in the project.
