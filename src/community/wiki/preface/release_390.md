---
title: Release 390
category: Community
star: 9
sticky: 9
tag:
  - Preface
  - Community
article: false
---

ADempiere Release 390 was released on August 1st 2017.

## Summary of functionality included in ADempiere 3.9.0

The functionality described below is the effort of more than two-and-a-half years of development and testing.

## ZK User Interface Look & Feel

- Totally new look-and-feel style design
- New simplified icons
- New ADempiere logo
- Modernize ZK User Interface appearance, making it more similar to world ERP main players
- Goal: flat, minimalist, header blue, sky blue drops, two grays
- Characters more readable
- Change black letters to gray
- Eliminate Degradé
- Eliminate double headers of blue
- Shrink strap logo
- Eliminate blue cell lines
- Change icons to be more readable
-Grids: gray and white alternating in rows
- Change colors in login portal
- Improved Menu Favorite Items with user-definable folder structure
- Document Status Indicators added to Dashboard
- Display Recent Items worked on by the logged in User and Role
- Display favorite documents
- Change Role functionality for changing role without logging in anew

## POS

- Development of a totally new POS based on [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) "Model View Controller" requirements
- POS fully integrated to ADempiere
- POS functional on both KZ and Swing
- Each POS station highly configurable
- Supported input devices
  - Keyboard
  - Touchscreen
  - Mouse
- Access control for
  - Changing prices
  - Allowing discounts
  - Returning materials.
- Configurable to allow selected actions only executable by the supervisor
- Configurable to set time limit for execution of selected actions
- Supports standard ADempiere order and payment types
  - Credit Orders
  - Standard Orders
  - Return of material
  - Credit Notes
  - Quotes
  - Cash return
  - Prepayments
  - Partial Payments
- Payment of the POS invoice can be a combination of different tender types
  - Cash
  - Check
  - Credit card
  - Credit note
- Supports different Units of measure in the POS
- Selectable Products with image and text in quick-access menus
- Product kits
- Smart look-up when searching for products and Business Partners
- Cancellation of Orders (even of a whole POS Order, including Material issue and Payment)
- Change of Business Partner will change the prices and discounts of existing order lines, to price list of the new Business Partner.
- Intelligent buttons: buttons are enabled only when the semantic context allows it
- Find old Sales Orders either for payment(s) or for review
- Find old Sales Orders from the Invoice document number
- POS can be treated as a bank account allowing for cash reports as ADempiere bank statements.
- Displaying of old Orders - including orders that were not POS orders (for example to revert or return material).
- Refactoring of java classes to true MVC so different UIs can be integrated easily
- POS Closing for end of day or new operator.
- ServerSocket and additional classes for additional Printing, Display and Drawer
- Creation of Business Partner in the POS

## Production Light

- Integration to ADempiere
  - Uses ADempiere BOMs and BOM lines (one Product with multiple BOMs)
  - Costing for Production integrated (process “CostDetail”), including deferred transactions
  - Production is now an ADempiere document with Document actions and Document status
  - Reversal of Production document including Storage adjustments
  - Product Reservation and Release as with other ADempiere documents
  - Inclusion of Attribute Set Instances
  - Order Batch as "Production Order"
  - Multiple partial or a single complete batch is handled
  - Simplified MRP Planning for next 20 weeks for Production and Purchase Ordering
  - Error correction in production quantity calculation due to rounding

## Financial Reports

- Report lines enhanced
  - Overline stroke (dashed, dotted, solid, double dashed, double dotted, double solid)
  - Underline stroke (dashed, dotted, solid, double dashed, double dotted, double solid)
  - Shows ‘Actual to Budget’ Variance calculations with correct sign
  - Blank lines to allow improved layout
- Report columns enhanced
  - Shows values with opposite sign
  - Added “Report Source” to add filters to columns
- Header Print Format that ‘includes’ the standard report displaying context variables
- Indentation of account report lines
- Export to xlsx format
- Utilization of streams
display “Y” or “N” instead of ‘tick’ and ‘cross’ icons in report lines (configurable)
- Trial Balance Drillable Report (drillable down to the document that causes the entry)
- Lots of fixes and enhancements

## Human Resources

- Enhanced and improved configuration
- Improved Concepts and usage
- Improved Employee Dependents
- Improved Attribute Window
- Thorough Accounting integration
- Better synchronization with Business Partner
- Email to employees
- New Importer for Employee , create Department , Jobs , Employee Type , Skill Type while process to import.

## Payroll

- Smart Browsers to improve usability
- Support of JSR 223 Scripting APIs for Payroll Rules
- New approach to import payroll movement
- Re-engineered transaction management for calculating payroll process yielding faster execution time.
- Generate invoice from payroll process.
- Now the importer for Employee Attribute support text, date , and reference no
- New reports (salary change, employee dependents, employee detail, bank account detail, etc.)
- Generation of additional periods for payments twice a month
- Enhanced rules, methods, processes
- Payroll concept increased functionality
- Smart Browser for Payroll Concept generation
- Include movements in payroll process
- Add Stop values for payroll process
  - Concept
  - Employee
  - Payroll Process

- Add new selection criteria for concept on payroll process engine
  - Payroll
  - Department
  - Job
  - Job Type
  - Skill Type
  - Employee Status
  - Project
  - Activity
  - Organization of Transaction
  - Employee Type
  - Job Education
  - Career Level
  - Race
  - Degree
  - Designation
  - Salary Structure
  - Salary Range
  - Work Group
  - Shift Group
- Improved for accounting fact on process payroll
- Integration with commission calculation for sales representative employee

## Cost Engine

- Error fixing
- Update costing fixed
- Average Invoice and Landed Costs corrected (**it works finally in ADempiere**)
- Include Resource costs in Production Light

## Commissions

- Commission definition for more than one Sales Representative
- Commission definition also for
  - Business Partner
  - Business Partner Group
  - Product, Product Category, Product Group, Product Classification…
  - Sales Region, Project, Campaign, Channel..
- Define commission also for partial payments
- Commission calculable until last payment done
- Now Commission is an ADempiere document (becoming more secure and manageable)
- Simulation of Commission Runs
- Prepare action re-calculates commission. Calculated commission can be - modified by user in charge; once done that, the commission document can be completed and thus become invariable.
- Flag for avoiding commission recalculation once Commission has been corrected
- Commission depending on provider
- Include management of Material Returns
- Include management of Payment voiding. In this case, the commission is reverted.
- Avoiding double calculations during Commission Calculation
integration to Human Resources/Payroll
- Grouping of Commissions
- Executing Commission Runs either on Commissions or on Commission Groups
- Documentation of Commission Runs by explaining every step done and its results
- An explanatory Commission Detail
- Improve database views on commission
- Improve Run Commission Detail report
- New commission sales representative summary report
- Allow definition of commission amount definition also as percentage (up to now, only decimal commission was possible)
- Save commission calculation in every Commission Detail
- Clean up code

## Smart Browser Improvements

- Fully MVC
- Allows for editing fields inside selected lines (these changes are available to an eventual process called by the Smart Browser)
- Callouts programmable for changing values inside the selected fields. this means, this automatic changes are available to an eventual process called in the Smart Browser. Similar to callout in fields.
- Include parameter validation
- Improved query loading, filtering
- Default values can be gotten from SQL
- Full working access to context variables (also from parent windows)
- Better info messages
- Added support as SAAS Module
- Collapsible Process panel

## Additional Smart Browsers

- Massive execution of Order actions (Prepare, Complete, Void, Close)
- Massive generation of Shipments based on Order lines
- Massive generation of Invoices based on Order lines
- Create Payroll Concepts in HR
- Withdrawal by Tender Type in POS
- Closes the statement for POS Terminals
- Shows the employee history movements for a payroll process
- Material Receipt Distribution Order
- Generates Movement from Distribution Order
- Selects the Demand Order to generate an Outbound Order.
- Selects the Outbound Order Lines ready to be to delivery.

## Replacement of Views by Smart Browsers

- Material Receipt create from: Order / RMA / Invoice
- Invoice create from: Order / RMA / Invoice / Receipt
- Invoice create from: Payment Selection lines (this is a different Smart Browser)
- Payment Selection create from: Order
- Payment Selection Lines create from: Invoice
- Payment Selection lines create from: Payment Request
- Bank Statement Create From Payments
- Payment Selection lines create from: HR Movements
- Process Parameters create from: Process or columns of Report View

## Translation

- Complete Translation into Spanish MX
- Preparation for other Spanish languages

## Warehouse Management

- Improve Warehouse Management Outbound process
- Change collection class replace to List , refectory method name and variables based on ADempiere Best Practices

## Express Material Receipt

- Consolidate Material Receipt using PO Reference
- Fast Material reception entry using barcode and lot and serial #
- ZK Scan bar code for Material Receipts , Shipment , Movement , Physical Inventory

## Inventory transaction

- Applies for Material Receipt , Shipment , Physical Inventory and Inventory Movement
- Improves to Inventory Transaction based in bar code entry and lot or serial #
- New form to generate inventory transaction using scan barcode and lot or serial #

## Freight Calculation

- Add support to calculated freight for Sales Order, Distribution Order and Outbound Orden
- Add Shipper , Freight Category , Freight Cost Rule , Freight Amt in WMS

## Fleet Management

- Capabilities to include the management of fleet resources (driver, power, equipment, etc) involved in fulfilling orders and shipments.
- Asset lifecycle management
- Driver hire, education, scheduling, and payroll
- Order capture and Customer Relationship Management
- Fleet planning – consolidation, fleet versus common-carrier trade-offs, multi-leg, multi-mode Driver and equipment assignment, and utilization
- Asset tracking
- Vehicle Licensing/ Regulatory compliance
- Asset inventory management at asset pool locations
- Driver dispatch, mobile communications, tracking
- Costing – fleet, external service providers, special services, accessorials
- Payables – driver pay, independent contractors and external service providers
- Billables – bill customers for service, asset usage
- Cost accruals and revenue recognition

## Budget Management

- Add importer for Budget
- Budget Entry Movement

## Request management

- Add project , project , phase project task
- Add the Manufacturing Order reference
- Add the Cost Collector reference
- Add the Distribution Order and lines reference

## Payments

- Improved Payment process (Payments, Allocations, Bank Statements, Payment Selection)
- Add Payment Request from Order (Prepay), Invoice and Payroll Movement.
- Integration of Standard Payment Selection with Payroll movements (You can generate a payment selection from payroll process).
- Add document action for payment selection (Now it can Process, Complete and reversed).

## Reporting

- Print format is configured by default in document type
- Add default summary for print formats
- Different report views with the same report possible
- Re-query on report (It allow relaunch the process parameters from any report)
- Fix Create a dynamic report for a different company , now a dynamic report is created with company prefix
- Saving and naming parameter configuration to be called repeatedly
- PDF Jasper report now can be included to send email
- Format elements with display logic, format pattern, barcode type

## Miscellaneous functionality

- Hundreds of errors fixed
- Improved Migration Process
- Revamping of Forms, Info Windows in both Swing and ZK
- Overhaul of grid functionality
- EMail configuration by user (configuration of different servers for users)
- Windows and Forms displayed in "Modal" form
- Improved handling of process parameters
- Improved MRP and DRP in Complex Production
- Implementation of Command pattern to execute process action
- Replication improvements
- Workflow Manufacturing Editor now also in ZK
- Support to calculated freight for Sales Order, Distribution Order and Outbound Order
- Drop Shipment in Distribution Order
- Display logic on Print Item
- New report Open Items to date
- Two additional dimensions in Accounting (User3 and User4)
- Allow copy functionality revamped
- Improved Payment allocation
- Improved Print Engine
- Create Inventory Count List also depending on Vendor
- Budget Management Functionality
- Improvements and corrections in Trial Balance
- Promotions: allowing definition of gifts
- Drill down in accounting reports (HTML format): navigation to the causing entry possible.
- Many handy enhancements.

## Miscellaneous

- Java 1.8 and backward compatibility
- Integration of Tomcat to ADempiere
- Compatibility with Postgres >= 9.1
- Maintaining Oracle compatibility
- Basic Refactoring (object naming, exception propagation, avoiding NPEs, removal of redundant and unused code, partial reorganization of code according to processes, changing code to MVC in selected areas)
- Improved Garden World data for testing
- Extensively code correction to best practices
- New ADempiere theme for a fresher view
- Order tab for process parameters
- Order tab for window tabs
- Updated POI, Jasper, Groovy, BeanShell libraries
- Added Sahi Test Framework to main project repository
- Export to XLSX format
- Updated Intellij usage
- Fix Local File Inclusion vulnerability
- 64-bit compliance
- Development now fully integrated to Git
- ZK buttons now in ADempiere standard
- Introduction of ProcessBuilder
- Standard constructor to classes missing it
- Clean-up Application Dictionary
- Add support to mariaDB connection
- Scala settings for IntelliJ
- Update Eclipse settings
- Improvements on SmallViewController
- Improved Class Generation
- Email Authentication implemented
- Added “Document” attribute for tables:
  - The columns Document No, Document Action, Document Status, Processed, Approved and Description are automatically created.
  - Process for Document Action is created.
  - Workflow and nodes for processing document is created.
  - M class with default workflow logic is created automatically when model class is generated.
- POSterita removed