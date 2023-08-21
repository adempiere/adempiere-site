---
title: Callout Code
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Motivation

- This effort is started by [Red1](https://wiki.adempiere.net/User:Red1).
- Wishing to list down all [Callouts](./callout.md) in the application within a single index.
- Wishing to color code and explain each Callout for easier reference.

## Finding Callouts

- We can locate all the callouts by this SQL script:

~~~
Select distinct col.Callout  from adempiere.AD_Column col, adempiere.AD_Table tab 
where tab.AD_Table_ID = col.AD_Table_ID order by Callout asc
~~~


Callout Code | in Table
-- | --
org.adempiere.model.CalloutBPartnerLocation.formatPhone | Partner Location
org.adempiere.model.CalloutRMA.docType | RMA
org.compiere.FA.CalloutFA.Field_Clear | A_Asset_Acct_ID
org.compiere.FA.CalloutFA.Table_Period | A_Asset_Acct_ID
  | A_Asset_Group_Acct_ID
org.compiere.cm.CalloutTemplate.invalidate | Template
org.compiere.model.CalloutAssignment.product | Expense Line
  | Invoice Line
  | Sales Order Line
org.compiere.model.CalloutBankStatement.amount | Bank statement line
org.compiere.model.CalloutBankStatement.bankAccount | Bank Statement
org.compiere.model.CalloutBankStatement.payment | Bank statement line
org.compiere.model.CalloutCashJournal.amounts | Cash Journal Line
org.compiere.model.CalloutCashJournal.invoice | Cash Journal Line
org.compiere.model.CalloutClient.storeArchiveOnFileSystem | Client
org.compiere.model.CalloutClient.storeAttachmentOnFileSystem | Client
org.compiere.model.CalloutEngine.dateAcct | Bank statement line
  | Cash Journal
  | Invoice
  | Journal
  | Journal Batch
  | Order
  | Payment
  | Shipment/Receipt
org.compiere.model.CalloutEngine.rate | Conversion Rate
  | UOM Conversion
org.compiere.model.CalloutGLJournal.amt | Journal Line
org.compiere.model.CalloutGLJournal.period | A_Asset_Disposed_ID
  | A_Asset_Reval_Entry_ID
  | A_Asset_Split_ID
  | A_Asset_Transfer_ID
  | A_Depreciation_Build_ID
  | A_Depreciation_Entry_ID
  | Journal
  | Journal Batch
org.compiere.model.CalloutGLJournal.period;org.compiere.model.CalloutGLJournal.rate | Journal
org.compiere.model.CalloutGLJournal.rate | Journal
  | Journal Line
org.compiere.model.CalloutInOut.asi | Shipment/Receipt Line
org.compiere.model.CalloutInOut.bpartner | Distribution Order
  | Shipment/Receipt
org.compiere.model.CalloutInOut.docType | Distribution Order
  | Shipment/Receipt
org.compiere.model.CalloutInOut.order | Distribution Order
  | Shipment/Receipt
org.compiere.model.CalloutInOut.orderLine | Shipment/Receipt Line
org.compiere.model.CalloutInOut.product | Shipment/Receipt Line
org.compiere.model.CalloutInOut.qty | Shipment/Receipt Line
org.compiere.model.CalloutInOut.warehouse | Distribution Order
  | Shipment/Receipt
org.compiere.model.CalloutInventory.product | Phys.Inventory Line
org.compiere.model.CalloutInvoice.amt | Invoice Line
org.compiere.model.CalloutInvoice.bPartner | Invoice
org.compiere.model.CalloutInvoice.charge | Invoice Line
org.compiere.model.CalloutInvoice.docType | Invoice
org.compiere.model.CalloutInvoice.paymentTerm | Invoice
org.compiere.model.CalloutInvoice.product | Invoice Line
org.compiere.model.CalloutInvoice.qty;org.compiere.model.CalloutInvoice.amt | Invoice Line
org.compiere.model.CalloutInvoiceBatch.amt | Invoice Batch Line
org.compiere.model.CalloutInvoiceBatch.bPartner | Invoice Batch Line
org.compiere.model.CalloutInvoiceBatch.charge | Invoice Batch Line
org.compiere.model.CalloutInvoiceBatch.date | Invoice Batch Line
org.compiere.model.CalloutInvoiceBatch.docType | Invoice Batch Line
org.compiere.model.CalloutInvoiceBatch.tax | Invoice Batch Line
org.compiere.model.CalloutMovement.product | Move Line
org.compiere.model.CalloutMovement.qty | Move Line
org.compiere.model.CalloutOrder.amt | Sales Order Line
org.compiere.model.CalloutOrder.bPartner | Order
org.compiere.model.CalloutOrder.bPartnerBill | Order
org.compiere.model.CalloutOrder.charge | Sales Order Line
org.compiere.model.CalloutOrder.docType | Order
org.compiere.model.CalloutOrder.priceList | Invoice
org.compiere.model.CalloutOrder.priceList | Order
org.compiere.model.CalloutOrder.product | Sales Order Line
org.compiere.model.CalloutOrder.qty | Sales Order Line
org.compiere.model.CalloutOrder.qty;org.compiere.model.CalloutOrder.amt | Sales Order Line
org.compiere.model.CalloutOrder.tax | Sales Order Line
org.compiere.model.CalloutPaySelection.invoice | Payment Selection Line
org.compiere.model.CalloutPaySelection.payAmt | Payment Selection Line
org.compiere.model.CalloutPayment.amounts | Payment
org.compiere.model.CalloutPayment.charge | Payment
org.compiere.model.CalloutPayment.docType | Payment
org.compiere.model.CalloutPayment.invoice | Payment
org.compiere.model.CalloutPayment.order | Payment
org.compiere.model.CalloutPaymentAllocate.amounts | Allocate Payment
org.compiere.model.CalloutPaymentAllocate.invoice | Allocate Payment
org.compiere.model.CalloutProductCategory.testForLoop | Product Category
org.compiere.model.CalloutProduction.product | Production Line
org.compiere.model.CalloutProject.planned | Project Line
org.compiere.model.CalloutRequest.copyMail | Request
org.compiere.model.CalloutRequest.copyResponse | Request
org.compiere.model.CalloutRequest.type | Request
org.compiere.model.CalloutRequisition.amt | Requisition Line
org.compiere.model.CalloutRequisition.product | Requisition Line
org.compiere.model.CalloutTimeExpense.amount | Expense Line
org.compiere.model.CalloutTimeExpense.product | Expense Line
org.eevolution.model.CalloutBOM.getdefaults | BOM & Formula
org.eevolution.model.CalloutBOM.parent | BOM Line
org.eevolution.model.CalloutBOM.qtyLine | Manufacturing Order BOM Line
org.eevolution.model.CalloutCostCollector.duration | Manufacturing Cost Collector
org.eevolution.model.CalloutCostCollector.node | Manufacturing Cost Collector
org.eevolution.model.CalloutCostCollector.order | Manufacturing Cost Collector
org.eevolution.model.CalloutDistributionOrder.qty | Distribution Order Line
org.eevolution.model.CalloutOrder.product | Manufacturing Order
org.eevolution.model.CalloutOrder.qty;org.eevolution.model.CalloutOrder.qtyBatch | Manufacturing Order
org.eevolution.model.CalloutPayroll.ColumnType | Payroll Employee Attribute

## Volunteers Are Welcome
(sign here once you have contributed a single page to this. Please follow the same standard. Non-standard will be removed :)

