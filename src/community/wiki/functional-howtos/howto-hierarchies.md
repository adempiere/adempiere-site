---
title: HOWTO Hierarchies
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Functional HOWTOs
article: false
---

A powerful concept in Financial Reports are the hierarchies.

In Adempiere you can define different [hierarchies](https://wiki.adempiere.net/ManPageW_ReportingHierarchy) for Organizations, Accounts, Activities, Business Partners, Products, Projects, Campaigns and Sales Regions.

To illustrate the usage suppose you have this set of organizations in GardenWorld.

![01_Hierarchies_Several_Orgs.png](/assets/img/community/functional-howtos/01_Hierarchies_Several_Orgs.png)

You can issue financial reports for:

- HQ - Organization HQ
- Store - Organization Store
- Administrative - Organizations HQ and Offices
- Stores - Store, Store 1 & 2 & 3

**Problem:** **How can you issue a report that summarizes for example HQ and Store?**

**Solution:** **You create a new hierarchy just for reporting purposes.**
## Step 1 - Create a new tree

Window [System Admin -> General Rules -> System Rules -> Tree](a)

You must select the type of tree - in this example it must be "Organization" - and select "All Nodes"

**Important Note:** Now that you have two different trees for organization is a good idea to mark which one must be the default. When you don't select a reporting hierarchy the default tree will be used.

![02_Hierarchies_AlternateOrgTree.png](/assets/img/community/functional-howtos/02_Hierarchies_AlternateOrgTree.png)

## Step 2 - Create a new reporting hierarchy

Window [Performance Analysis -> Financial Reporting -> Reporting Hierarchy](a)

Create a new hierarchy.

In the new reporting hierarchy you select the new Alternate Tree for the organization:

![02_Hierarchies_AlternateOrgTree.png](/assets/img/community/functional-howtos/03_Hierarchies_ReportingHierarchy.png)

## Step 3 - Create a new summary organization

Window [System Admin -> Organization Rules -> Organization](a)

Create the summary organization "HQ & Store" - this organization will not be used by default, is just for usage of the new hierarchy.

![02_Hierarchies_AlternateOrgTree.png](/assets/img/community/functional-howtos/04_Hierarchies_NewSummaryOrganization.png)

## Step 4 - Organize the new tree

Window [System Admin -> General Rules -> System Rules -> Tree Maintenance](a)

Open the Tree Maintenance window select the organization from the right panel and pass to the left the required organization using the button "Add to Tree"

![02_Hierarchies_AlternateOrgTree.png](/assets/img/community/functional-howtos/05_Hierarchies_OrganizeNewTree.png)

## Step 5 - Use the new hierarchy in financial report

Window [Performance Analysis -> Financial Reporting -> Financial Report](a)

Finally, you can use the new hierarchy in the financial reports, when you select the organization "HQ & Store" and the hierarchy "Alternate Organization for HQ & Store", Adempiere will issue a financial report adding the data from the two organizations

![02_Hierarchies_AlternateOrgTree.png](/assets/img/community/functional-howtos/06_Hierarchies_FinReport.png)

## IMPORTANT NOTE

The List Transaction flag in Financial Reports is not filtering the transactions. This is, if you select "List Transactions" flag in this example, the report will include all transactions of all organizations, not just the organizations from the hierarchy.
