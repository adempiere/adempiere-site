---
title: How Projects Work
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Functional HOWTOs
article: false
---

In implementing, developing or just understanding ADempiere there are always three sides of the story: the application (client's GUI), the database (tables and stuff) and the source code (all the Java files, etc.).

## Project Management in ADempiere

In the application's functional Menu there is a separate 'master' node called **Project Management**. This branch contains twelve predefined functionalities:

## The Basics

In implementing, developing or just understanding ADempiere there are always three sides of the story: the application (client's GUI), the database (tables and stuff) and the source code (all the Java files, etc.).

## Project Management in ADempiere

In the application's functional Menu there is a separate 'master' node called Project Management. This branch contains twelve predefined functionalities:

- one Workflow

  - Project Setup and Use - hows the necessary steps to configure a Project for use (this one is explained below).
- four Windows
  - Project Type
  - Project
  - Project (Lines/Issues)
  - Project Reporting
- two Processes
  - Generate PO from Project
  - Issue to Project
- five Reports
  - Project Lines not Issued
  - Project POs not Issued
  - Project Margin (Work Order)
  - Project Cycle Report
  - Project Detail Accounting Report

As can be seen in the Project's workflow in order to use the main functionality (Project window) two preliminary features should be customized (Project Type and Project Reporting windows).

- **C_ProjectLine**
- **C_ProjectPhase**
- **C_ProjectTask**
- **C_Project_Acct**

The relationshps are represented in the diagram

- **C_ProjectIssue**
- **C_Cycle**
- **C_CycleStep**
- **C_CyclePhase**

- **C_ProjectType**
- **C_Phase**
- **C_Task**

(* All Entity Relationship Diagrams are made with [Aqua Data Studio](http://www.aquafold.com/))

## Activities defined throughout the source code

How the Projects functionality is dispersed into the bunch of ADempiere's subprojects?
