---
title: Application Dictionary Layers
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Please Improve

This is just trying to make sense of the power of the AD. By no means authoritative yet. Any ideas and graphics are welcome! - Red1 21:04, 25 September 2008 (EDT)

## Introduction

- Basically the architecture or model of [ADempiere](https://wiki.adempiere.net/ADempiere) is based on Compiere's Application Dictionary or AD Engine. It resolves the Model-View-Logic model of modern software design.
- **AD's Model Layer:** Manages all entities, including the core database table and field structure, data types, references, and validation rules.
- **AD's View Layer:** Handles presentation in both Java and HTML clients, eliminating the need for developers to write any extra user interface code.
- **AD's Logic Layer:** Houses all business logic and auxiliary activities.
- The software is constructed from the ground up with inherent capabilities, including the MULTIs features such as multi-language, multi-org, multi-currencies, and the Log4Java debugging set. It also employs powerful Java Objects like Environment & Context, Persistence, Web, and Application Service.
- The CRM and Webstore components are custom-built, reducing reliance on AD, especially the AD Menu and AD Window.
- The AD Framework is highly significant as it enforces discipline in the software application, segregating tasks into distinct layers and enabling developers to focus directly on business functionality without distractions from the underlying structure.

### At the Model Layer

- All Table and Field structure are defined in the AD Table & Column window.
- Each field's properties such as datatype and reference are defined in the same window.
- Such a reference can call up any resident Database table to return any defined value.
- A field can possess a validation rule defined in the AD Validation window.
- Such validation can inject JavaScript, Java code, or SQL script into the application to filter the returning value of a reference.
- A field can update other fields on the window or the underlying database via core callouts. The Java framework to introduce such callouts is simply by extending the CalloutEngine.java and accessing the MTab to getValue or setValue.
- Any changes to the model, such as introducing a new table to the database, are done via the AD Table & Column window.
- The AD Engine resolves the preparation of the table and field structure for the View level, such as displaying via standard user interfaces or reporting formats.

### At the View Layer

- As the Model is taken care of, the View Layer presents the Model to the UI, whether it's the Java Swing or HTML Clients.
- All CRUD (create, read, update, delete) functions are automatically handled and appear in the client interfaces without additional changes or effort during the definition of new model changes.
- The UI is aware of new records, mandatory fields, and saving errors.
- It enables powerful search functions and field preference settings according to the User ID.
- The View Layer is managed by AD Menu, AD Window, and AD Process & Report.

### At the Logic Layer

- A lot of the visible power of the ERP Application occurs here, starting with auxiliary and accessory functions such as User Login, Role Access, and Workflow reactions.
- In a way, the Logic Layer is further separated from this Accessory portion, forming its own Business Logic area which the functional developer is most interested in.
- The Accessory portion is isolated from all the other layers to function independently, avoiding introduction of bugs from other layers. Developers are free to modify the Application Dictionary to meet business demands.
- Logic that isn't handled in the above layers is managed by Callouts and Model Classes under the control of the ModelValidator.
- Core business logic processes like Aging Analysis, Converting Requisition to Purchase Order, or Completing Orders are managed by Java classes called by the AD Report & Process engine. Input parameter selection is facilitated for easy configuration by the developer in the fully Object Oriented Java environment.
- The ADempiere project has further refined the logic portion of the application by introducing:
  - Separation of extended logic from core logic
     - This is acheived by strictly extending the ModelValidator scheme to cover dynamic usage instead of just static as inherited from Compiere.
     - This is used in the Table and Column window where a 3rd tab for Table Script Validator is allocated.
  - Introduction of JSR223 Scripting in Rule Engine.
     - A callout may now utilise different programming scripting such as Groovy, Python or Ruby if compliable.
     - This gives scalability of application design and also 'developer scalability' can improve tremendously.

## Conclusion

- ERP is complex and an ERP Software Application can be even more complex. The role of the AD is very vital and ingenious in dealing away with as much complexity of the software components as possible to leave the users a clearer learning curve into the application.

## Please See

- [ADempiere Rapid Development](./adempiere-rapid-development.md) shows how ADempiere acts as a development framework to do fast prototyping and eventual enterprise software development.
