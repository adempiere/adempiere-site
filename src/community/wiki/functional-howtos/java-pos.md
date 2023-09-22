---
title: Bank to Bank Transfer Transaction tips
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Functional HOWTOs
article: false
---

This is now deprecated by [Touchscreen POS](a) from [Adaxa Pty Ltd, Australia](http://www.adaxa.com.au/).

## Introduction

**IMPORTANT NOTE:** This functionality is still marked as beta in Adempiere - in order to enable it you must enable beta functionalities in the tenant (check Use Beta Functions on window Client) - Note you could also modify dictionary and uncheck beta on the windows.

- This Java based Point of Sales was inherited from the parent project Compiere. However it was incomplete and not working fully.
- It is then repaired and tested further by [Contributors#Java_POS](a).
- Now it is fully working and part of the ADempiere main menu.
- It can act as a good alternative Sales Order screen.
- It has a preset touchscreen shortcuts in the [POS Key Layout](a) for use during fast order-taking like any POS station.
- It can have Credit Card feature and Cash Drawer control.
- It is fully integrated to the whole ADempiere system including Inventory, Customers, Orders, and Cash Book.
- It is very fast due to its standalone customised java code for a LAN based Client.

## Setup Overview

- Login as ClientAdmin and browse through the main menu tree to find the [POS section](a).
- Then we setup [POS Terminal](a) account for user authorisation to login and use the Java POS.
- Then we setup the Products touchscreen buttons - [POS Key Layout](a).
- Now you can click on the POS window and see it.
- Then we setup the opening cash balance in tiller via the [POS Cash Functions](a) window.
- Now we are ready for business!

## Operations

### Taking A Normal Order

Ordering a product via Shortcut Touch Key using [POS Key Layout](a).

![1](/assets/img/community/functional-howtos/POSOrderLine.png)

- Increase the Qty ordered.
  - You can press the same item keypad again to increase the Qty.
  - It will increase the Qty count of the same item line without inserting a new line.
- Getting the total payable.
  - Press the Payment icon on the right (see below).
- Taking Cash Given from the customer and noting the Return change.
- The checkout line also has the Document No field displayed for reference in the Register later.

![1](/assets/img/community/functional-howtos/ProcessPOS.png)

## Finishing the Sales

- Opening Cash Drawer and giving the change.
  - Press the Process icon on the left (see below).
  - That will Complete the order.

![1](/assets/img/community/functional-howtos/POSButtons.png)

- Printing the receipt.
  - The receipt is automatically printed when you processed the order.
  - You can still print an extra receipt by pressing the Print icon on the right (see above).

## Using the Current Order Line

- Selecting the Product
  - Try keying part of the product name such as 'Patio C' and it will search for the nearest unique match which is Patio Chair and display its name and price in the Current Line section.
- Adjusting Quantity Ordered
  - Press the plus sign + to increase the quantity
  - Press the minus sign - to decrease the quantity
  - In our example we press 2 more times to set 3 units.

![1](/assets/img/community/functional-howtos/POSCurrentLine.png)

- BarCode UPC Scanning

- The Java POS is already BarCode ready.
- Just attach a barcode scanner as input device and scan the product. As long as the UPC is present in the system the product will be displayed in the Current Order Line.
- Then add the quantity or press the Save icon to accept the line.

## Accepting the CurrentLine

- When ok, press the left new icon to enter the current line into the sub lines section

![1](/assets/img/community/functional-howtos/POSCurrentLineEnter.png)

## Deleting Order Lines

- Using the selection arrows
  - In our Normal Order above, lets say we want to delete the Oak Tree item in the order.
  - You can press on that line or use the arrow keys on the right of it, which you have to press twice to get to the Oak Tree item.

![1](/assets/img/community/functional-howtos/POSLineDelete.png)

- Deleting the order line
  - Press the Recycle Bin icon on the middle right.
  - The highlighted line will be deleted from the order and the prices readjusted.

![1](/assets/img/community/functional-howtos/POSLineDelete2.png)

- You can check the Sales Order window to confirm.
  - Deleting all order lines
    - Keep pressing each line with the Recycle icon. It shall delete until the whole order is empty.
    - You may resume and key in new orderlines and that Order will be reused until you process it.
    - If you exit POS at this moment, the Sales Order window will have an empty order but with a running Document No, so auditor knows there is no fraud or missing Documents.

## Making A New Order

![1](/assets/img/community/functional-howtos/POSBPartner.png)

- At the Business Partner section at the top of the screen, you can click on the New Icon on the left to refresh the sub lines to start on a new sales order.
- The previous order is still there and you can access it via the POS Cash Register.

## Further Functions

- [POS Cash Functions](https://wiki.adempiere.net/POS_Cash_Functions) allows you to manage the Cash Journal with cash movements and balances.
- [POS Cash Register](https://wiki.adempiere.net/POS_Cash_Register) allows you to review your previous orders and resume on any in-progress ones.
  - `Cafetaria` use where different BPartners (customers) occupy separate orders can be seen via this Register.

## Notes

### Small Areas To Improve

- Credit Card - code already present in trunk from WebStore package and need proper activating.
- Cash drawer - already present in POS package. Needs minor stitching
- Order Lines scrolling. Now need keyboard to get to last line or via scroll arrow keys. Wish it auto scroll when falling out of box borders.

### Source Codes

- The sourcecode to handle Java POS is already in SVN Trunk of the ADempiere SourceForge.net project space
  - Under **Client** Source Folder
  - **org.compiere.pos** (see java classes listed below)

![1](/assets/img/community/functional-howtos/POSSourceCode.png)

## Deployment

- This is best deployed in Local Area Network (LAN) environment i.e. within an area with a common network due to it been Java or thick client based.
- It should work well over wireless LAN.
- It may not give quick responses if done over a WAN and may not be secured too unless tweaking is done with extra effort. However this is not tested and so is not conclusive.
- For web based POS, it is best to rely on [Posterita](a).

## Web UI

Basic [functional tutorial for ADempiere ZK web ui](http://www.odm-tech.com/services/category/erp/tutorials/web-ui-ADempiere/index.html) (in French)