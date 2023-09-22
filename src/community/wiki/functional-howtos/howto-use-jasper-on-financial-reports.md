---
title: HOWTO Use Jasper On Financial Reports
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Functional HOWTOs
article: false
---

**Applicable for versions > 3.3.1b**

Now you can use Jasper Reports in order to format the financial reports - and apply all the power of Jasper (formulas, grouping, etc).

You may also find interesting [JasperReports Integration HowTo](a).

## Define the Process

You simply need to define a new system process pointing to your jasper file:

![01_jasperbalance.png](/assets/img/community/functional-howtos/01_jasperbalance.png)

You don't need to define parameters for the process.

## Define the Financial Report

Then you can use the defined jasper process in the financial report

![02_jasperbalance.png](/assets/img/community/functional-howtos/02_jasperbalance.png)

## Jasper Report templates

- You can download and use the next provided report as template to construct your own reports: [T_ReportTemplate](https://wiki.adempiere.net/images/3/3b/T_ReportTemplate.zip) by Carlos Ruiz.

- An example of more complex, cascading Jasper report by Mario Calderon is found here: [Example of complex Jasper Report](https://wiki.adempiere.net/images/9/9c/Z_JR_with_subreports.zip).

**How to deploy your Jasper Reports on an own directory (by Mario Calderon):**

- download the following file; [Own JR deployment](https://wiki.adempiere.net/images/c/c4/Deploy_into_JasperReportsWebApp.zip).
- decompress zip file.
- save a copy of "trunk/JasperReportsWebApp/build.xml".
- copy the decompressed zip file into "trunk/JasperReportsWebApp".
- define an ant in Eclipse pointing to "trunk/JasperReportsWebApp/build.xml".
- copy your jrxml and jasper files into "trunk/JasperReportsWebApp/shwReportVerzeichnis".
- execute the ant command "shw-packaging"
- ant creates 2 files: "shwReports.ear" and "shwReports.war". You can check their contents with ark or a similar tool.
- copy shwReports.ear into $ADEMPIERE_HOME/jboss/server/adempiere/deploy
- JBoss will deploy the files into a temporary directory at startup and delete the temporary directory at shutdown.
- This way, you can define your reports in the "Report&Process" window, Field "Jasper Report" (see above) the following way: http://192.168.1.100/shw/my_report.jasper o http://my-named-server/shw/my_report.jasper.
- The JRs are thus accessible by all clients (windows or linux).

**[Accept Null Values as Parameters in a Jasper Report](a) (by Mario Calderon):**

The built-in Report Engine in ADempiere treats parameters without values as if no filter was selected. However, if you pass a Jasper Report a parameter without value, it will be interpreted in the query as column=null, which is undesirable.

Here are the steps to achieve that a null value parameter behaves in a Jasper Report as in ADempiere's report engine.

- Suppose you have the parameter C_BPartner_ID in the Jasper Report
- Suppose the where clause in your query is c_bpartner_id = $P{C_BPartner_ID}
- You create a new parameter: C_BPartner_ID_for_query, choosing as class of the parameterString.
- The Default Value Expression for the new parameter will be:

```java
$P{C_BPartner_ID}==null? " true": "c_bpartner_id=".concat($P{C_BPartner_ID}.toString())
```
  - In the query, do substitute c_bpartner_id = 

```sql
$P{C_BPartner_ID} with $P!{C_BPartner_ID_for_query}
``` 
  - When you pass the report a value, the value will be used, becoming the where condition for example c_bpartner_id = 1234567. Otherwise the condition will be true, which will result in no filtering at all, like in ADempiere's report engine.

A simple financial jasper report by Colin Rooney is found here: [Example of financial Jasper Report](https://wiki.adempiere.net/images/2/21/Example_of_Finantial_Report.zip).

