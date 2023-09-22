---
title: HOWTO Process Documents
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Functional HOWTOs
article: false
---

## Processing Basics

In ADempiere there are several predefined types of documents, as can be seen in the picture below.

![1](/assets/img/community/functional-howtos/DocTypes.png)

This window can be reached in the ADempiere Client App's menue (if you are logged in a role with access level 'Client+Organization') this way:

~~~
 Menu -> Performance Analysis -> Accounting Rules -> Document Type
~~~

The automated internal processing of those documents is a complex matter. What we start here is a simple FAQ-like explanation of those base documents. Where appropriate a further explanations are provided, redirecting to database entities, source code and articles by other ADempiereans.

## List of described documents

- [Invoice for the Customer](a)
- [Vendor's Invoice](a)
- [Shipment](a) for the sold products
- [Material Receipt](a) for the purchased stock
- [Inventory](a) of the Waehouses
- [Movement](a) of Products
- [Payment from Customer](a)
- [Payment to Vendor](a)
- The [Allocation](a) of the Payment
- Money transactions through [Bank Statements](a)
- Money transactions through [Cash](a)

## Points for the advanced users

The questions touched in these documents' inspections just skim the deeper matters related to document processing. When looking at those explanations some prior knowledge might be useful:

About the [usage of DEFAULT_ACCOUNTS](a) - these are special accounts from the Chart Of Accounts, which are bound in the source code to standard processes. So the posting of mainstream activities is backed up and automated.

**Note: that all the examples given include accounts from the American COA which comes along with the ADempiere installation.**

- In General there are two types of classes defining the behavior of the documents. These are:

1. [Common classes](a)
2. [Specific classes](a)

- There are 16 model classes describing the behavior of the 34 active Document Types.
- Concerning accounting there are 15 document classes which are responsible for posting the documents. The mapping between the classes and their corresponding document types are provided in the following table.
- When we talk about automatic generation of documents the consequent "papers" in the corresponding workflow should be minded, and the automation is provided by the workflow itself. That means with the completion of a single document the set of connected ones is generated and posted in a sequence. The automatic generation is not about using certain form to choose from which document to produce other type (e.g. to produce Shipment from Sales Order through the Generate Shipment (manual) form).

## ADempiere Document Types mapped to their Model and Posting classes

Model class | Document Type | Document-Posting Class
-- | -- | --
MInvoice | AP CreditMemo | Doc_Invoice
MInvoice | [AP Invoice](a) | Doc_Invoice
MPayment | [AP Payment](a) | Doc_Payment
MInvoice | AR Credit Memo | Doc_Invoice
MInvoice | AR Pro Forma Invoice | Doc_Invoice
MInvoice | [AR Invoice](a) | Doc_Invoice
MInvoice | AR Invoice Indirect | Doc_Invoice
MPayment | [AR Receipt](a) | Doc_Payment
MAllocationHdr | [Payment Allocation](a) | Doc_Allocation
MBankStatement | [Bank Statement](a) | Doc_Bank
MCash | [Cash Journal](a) | Doc_Cash
  | GL Document | (??? Doc_ProjectIssue ???)
MJournal | GL Journal | Doc_GLJournal
MInventory | [Material Physical Inventory](a) | Doc_Inventory
MMovement | [Material Movement](a) | Doc_Movement
  | Material Production | Doc_Production
MInOut | [MM Receipt](a) | Doc_InOut
MInOutConfirm | MM Receipt with Confirmation | Doc_InOut
MInOut | [MM Shipment](a) | Doc_InOut
MInOut | MM Shipment Indirect | Doc_InOut
MInOut | MM Shipment with Pick | Doc_InOut
  | Match Invoice | Doc_MatchInv
  | Match PO | Doc_MatchPO
  | Project Issue | Doc_ProjectIssue
MOrder | Purchase Order | Doc_Order
  | Purchase Requisition | Doc_Requisition
MOrder | On Credit Order | Doc_Order
MOrder | POS Order | Doc_Order
MOrder | Prepay Order | Doc_Order
MOrder | Proposal | Doc_Order
MOrder | Quotation | Doc_Order
MRMA | Return Material | Doc_Order
MOrder | Standard Order | Doc_Order
MOrder | Warehouse Order | Doc_Order

## Specific automations common to the most types of documents

- Payment Term specifics - for documents defining Payment Term other than **Immediate** the contents of the tab Payment Schedule are automatically populated with data, based on the chosen rule. If the Payment Term is changed after the document is Completed, the Payment Schedule is not affected and the necessary changes must be made manually.
