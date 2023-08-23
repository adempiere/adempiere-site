---
title: Extending Zoom Across
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

The [Zoom Across](zoom-across.md) functionality allows you to zoom quickly from the current record to a related record in a different window. For example, if you are looking at an order, you can zoom across to the associated invoice, shipping docs and payments.

::: note Note:

The default Zoom Across functionality allows you to zoom from one record to a destination record only if the destination table references the source table. In other words, you can zoom from an Order to an Invoice only if the Invoice references the Order in its Invoice Header. Of course you can extend this functionality - see below.

:::

To use Zoom Across, open the source window, select the source record and then click the Zoom Across icon ![zoomacross](/assets/img/community/developers-guide/ZoomAcross24.png) or use the Application Menu Go `{{#if: Zoom Across (where used) | →Zoom Across (where used) }}{{#if: | → }}{{#if: | → }}.`

## Extending the Zoom Across Functionality

Revision 11773 in March 2010 added the capability to define additional Zoom Across targets. The functionality, called Advanced Zoom, requires you to define a rule (a relation type) that finds all the relevant records in the target tables. Unlike the default ZoomAcross, the Advanced Zoom can look across multiple tables and create references based on user-defined relations. For example, you can create a rule that finds all relevant invoices for a given order via order->orderLines->invoiceLines->invoice. And it works in both directions.

::: note Note:

Adding an Advanced Zoom rule will not affect the default behaviour. The default Zoom Across (via foreign key references) will still work.

:::

### How To Configure Advanced Zoom Across

This article shows how to add targets to the Zoom Across functionality when there are no foreign key references between the tables.

You will need to log into a role with System Administration priviledges, have a working knowledge of SQL and familiarity with the ADempiere table structure to extend the Zoom Across functionality.

The example will connect the [`{{#if: Invoice (Vendor)|Invoice (Vendor)|Invoice(Vendor) }} Window`](a) and [`{{#if: Material Receipt|Material Receipt|MaterialReceipt }} Window`](a) through the Zoom Across functionality. The relation has to look across five tables. What makes things complicated is the fact that Invoices and Material receipts are shown in different windows, depending on the kind of invoices or Material receipts.

::: danger Caution!

If you do not set up the reference with the correct window, a window will be shown as if a new record is about to be inserted.

:::

### Steps

I. Login as System with Role System Administrator (or a login and role with similar priviledges).

- Open the `{{#if: |{{{2}}}|Reference }} Window. (Click on Reference in the menu bar or navigate to Application Dictionary{{#if: Reference |  » Reference }}{{#if: |  »  }}{{#if: |  »  }}{{#if: |  »  }}.)`
- In the `{{#if: |{{{3}}}|Reference }}` Tab, create a new Reference with the following information:\

~~~
Name: RelType M_InOut_ID->C_Invoice
Description: Finds C_Invoice_IDs for a given M_InOut_ID
Help: We are in M_InOut and want to find all Invoices
Validation: Table Validation
Translation: as you like
~~~

- In the `{{#if: |{{{3}}}|Table Validation }}` Tab, add the following fields:

Now repeat the same steps but reverse the relation direction.

- Create a new Reference

~~~
Name: RelType C_Invoice_ID->M_InOut
Description: Finds M_InOut_IDs for a given C_Invoice_ID
Help: We are in M_Invoice and want to find all M_InOuts
Validation: Table Validation
Translation as you like
~~~

- Add the Table Validation:

~~~
Table: M_InOut 	 		//the target
Column: M_InOut_ID
Column shown: DocumentNo
SQL: 				//the target
  m_inout_id IN (
    select  io.m_inout_id
    from adempiere.m_inout io
      join adempiere.m_inoutline iol on io.m_inout_id = iol.m_inout_id
      join adempiere.m_matchinv mi on iol.m_inoutline_id = mi.m_inoutline_id
      join adempiere.c_invoiceline ivl on mi.c_invoiceline_id = ivl.c_invoiceline_id
      join adempiere.c_invoice i on ivl.c_invoice_id = i.c_invoice_id
    where i.c_invoice_id=@C_Invoice_ID@
    )
Window: Material Receipt     // or the one where the material receipt is found
~~~

II. Login as your Admin user

- Open the [`{{#if: Relation Type|Relation Type|RelationType }} Window`](a) found at System Admin`{{#if: Relation Type |  » Relation Type }}{{#if: |  »  }}{{#if: |  »  }}{{#if: |  »  }}title=ManPageW_RelationType&action=edit&redlink=1) found at System Admin{{#if: Relation Type |  » Relation Type }}{{#if: |  »  }}{{#if: |  »  }}{{#if: |  »  }}`

- Create new entry:

~~~
Name:		Invoice<->Material Receipt
Directed: 	false
Source Reference: RelType M_InOut_ID->C_Invoice
Target Reference: RelType C_Invoice_ID->M_InOut
~~~

III. Test

- Open window Invoice (Provider)
- Select an invoice you know has a Material Receipt
- Press Zoom across icon or select Go`{{#if: Zoom Across (where used) | →Zoom Across (where used) }}{{#if: | → }}{{#if: | → }}`. Among others, the corresponding  Material Receipt will be shown. Clicking it, a Material Receipt window will open with the material receipt related to the invoice.

It works the other way around also.

::: note Note:

You do need to create both directions to the Reference. When you are in a window and click the Zoom Across icon, the system determines which Relation Type to use by looking for References that point to the current table and key column - not the ones that you want to zoom to. If the References don't point back at the current table, the zoom across function won't be able to find the Relation Type.

:::

## See Also

- [Tracker Entry](http://sourceforge.net/tracker/index.php?func=detail&aid=2897194&group_id=176962&atid=879335)

## Software

The software that controls the zoom across functionality is found in

- base/src
  - org.adempiere.model.MRelationType.java
  - org.adempiere.model.ZoomInfoFactory.java
- client/src
  - org.compiere.apps.AZoomAcross.java
