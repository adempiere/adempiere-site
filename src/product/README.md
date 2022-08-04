---
title: ADempiere Features
category: Product
star: 9
sticky: 9
tag:
  - Sales
  - Purchase
  - Inventory
  - Accounting
article: false
---

## Business Processes
- Product Cost
- Product Manufacture
- Product Account

### Sales Processes.

- Raising a quotation or proposal
- Recording orders
- Sending the goods or performing the services
- Invoicing the customer
![image](https://user-images.githubusercontent.com/89487449/178346738-94e55508-4f6e-4052-9d55-4538278d6d97.png)

### Purchase Processes

- Raising a purchase requisition from a catalogue
- Issuing a purchase order
- Receiving goods and services
- Receiving supplier invoices.
- Paying Suppliers & Collecting Debts
![image](https://user-images.githubusercontent.com/89487449/178349327-7a1b57bf-16f9-40f7-839d-e9123d5ec26f.png)


### Inventory Processes

- Tracking inventory
- Replenishing warehouses
- Multiple warehouse sites and locators
- Stock movements
- Shipping
![image](https://user-images.githubusercontent.com/89487449/178350265-de5d763a-86e2-4da1-aad3-22c7d8ebb700.png)


### Accounting Processes.

- Period and year end
- Financial and management accounting
- Charts of accounts
- VAT/TAX/IVA
- Reporting for other regulatory bodies
![image](https://user-images.githubusercontent.com/89487449/178353973-baaf9d2a-d6b4-42be-b767-d66d515c5f7a.png)


## On-line historical information

- Many Calendars can be created for reporting purposes and the periods within those Calendars are defined with a start date and an end date of the users choosing.
- Information is also captured for all changes to static information recording the date and time of the change as well as the ID of the user who created and updated the record.
- **ADempiere stores all information and transactions entered into the system for as long as the user organisation chooses.**
- There is no concept of an "end of year" and purging process.
- Calendars are established for reporting and period access control purposes only.
- Historical information is maintained for as long as is desired and is able to be reported on using the calendar function.

## Reporting.

::: tip

    ADempiere provides comprehensive reporting capabilities.

:::

### Smart Reporting

- **For most applications, reporting is a separate or add-on entity. ADempiere's reporting is based on the data dictionary.**
  - As the report viewer has access to the definitions, this allows drill-down to any entity referenced and drill-across to entities where the reported entity is used.
  - The links are automatically generated, while ensuring adherence to security and access definitions.
- **The report viewer provides for the selection of data, sequencing, grouping, totalling and display formatting.**
  - Reporting output can be viewed on screen before sending it to a printer, an email or fax address or generating files in many different formats (e.g. Excel text formats, HTML, XML, PDF and Postscript).

### Business Views

- Business Views are designed for end users and allow information to be accessed using standard SQL based tools without the need to create SQL table joins.
- The majority of Business Views are generated based on the Application Dictionary.

### Drill-down and Drill-across

- **All reporting output allows users to drill-down or drill-across to any entity referenced within the context of the report.**
- **When using drill-down, a new report is generated based on the entity selected.**
  - In an Order report, for example, the user can drill-down to generate a report showing the order lines that make up the order.
  - **The user can identify the drill-across entity (order lines) and then click on the product name to display a separate report of order lines for the particular product selected.**
- **Following the Web-UI convention, users can drill-down to any blue underlined entity displayed on the report screen.**
- **Drill-across allows the user create a new report about a related entity on a report. For example, in a Product report the user may wish to see order lines for a particular product.**

### Report types

1. Lists - are based on Window information. Users can generate a report for every window in the system including Windows containing new user defined fields and tables. The reports can be modified to specify which fields are to be displayed, in which orderand how they are to be grouped. The report can calculate minimum, maximum, sum, count, standard deviation and variance for selected columns.

2. Reports - are usually based on summarised information and are based on Report Views. Reports allow the definition of what information is to appear in rows and what is to appear in columns, the combination of a rowset definition and a column set definition determines the report content.

### Third Party Reporting Tools

Third party tools such as Jasper Reports; a Java based equivalent of Crystal Reports, can also be used to create reports if needed. The present release of Adempiere already has JasperReports substantially integrated to its reporting engine.

### Customising Reports

**ADempiere differentiates the 'view' from the 'model'. With the exception of Report Views, the model is usually given. If you provide a SQL Select statement a Report View can be created, the user doesn't need to resolve foreign key references (which require the knowledge of the data model) or worry about data security, as ADempiere resolves these issues for the user. This allows the writing of 'simple' statements. Few people agree on how each report should look. ADempiere allows the user to define the format of any report at the System, Client, Organisation or User level:**

- Report columns
- Column order
- Report sorting
- Column heading
- Sums (for numeric columns)
- Grouping
- Pie Chart
- Bar/Line Chart

**Data selection is via Report Parameters when initiating the report, or via Query, allowing the user to enter criteria in an enhanced 'query by example' style.**

## Data and meta-data

**Programmers of many applications that do not use the sophistication of an Active Data Dictionary need to design, code and test every screen. ADempiere uses the more advanced concept of a central active data dictionary, also called information repository. ADempiere's active data dictionary is at the meta-data layer, and knows how to access data and how data is related.**

- **The data dictionary contains:**

  - Definitions of a data entity (type, validation, etc.)
  - Method of display (label on screens and reports, help, display sequence and position relative to other fields)
  - Display rules
  - Security and access rules

- **The data dictionary is 'active', meaning it is used at runtime and is context sensitive. For example: it 'knows' that an over-the-counter sale does not have a payment term and does not display it. However if you change the transaction type to a standard order, a payment term becomes a mandatory part of the transaction.**
- **The Active Data Dictionary is user-extensible and can include user specified rules and information. The extensibility of the Active Data Dictionary simplifies user extensions to the application since much of what would otherwise have to be coded by programmers can be created by a knowledgeable and authorised users (with System privilege) from within the application**

## Supportability

**Software Support represents a substantial portion of the lifetime costs of any complex system. A flexible, modular architecture is essential for ensuring:**

- Understandability
- Modifiability
- Interoperability
- Reusability
- Expandability
- Portability

all of which are necessary for software that can be supported in an efficient and cost effective manner. Many problems associated with software support can be traced to deficiencies in the way the original software product was designed. Lack of attention to the design of modular software architectures during development can cause excessive software support problems and costs. ADempiere is designed to be as flexible as possible and to accommodate change. Unless the system architecture allows for change, modifications to the software are likely to be difficult and defect-prone. ADempiere's software architecture carefully addresses abstraction, encapsulation, and information hiding to minimize dependencies. By maximising use of object-oriented design, the software can be easily modified. ADempiere's Active Data Dictionary ensures that software support can be simplified by ensuring that changes are made in one location with a consistent impact throughout the whole of the application. Additionally, ADempiere uses no third-party toolsets which may become unsupported due to lack of interest by their respective vendors. Other than for the Oracle database itself, source code for all aspects of the system is open and available ensuring that the user community will always be able to provide support for all aspects of the system.
