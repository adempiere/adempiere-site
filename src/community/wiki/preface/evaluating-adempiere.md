---
title: Evaluating ADempiere
category: Community
star: 9
sticky: 9
tag:
  - Preface
  - Community
article: false
---

::: warning This page is incomplete.
:::

(Just starting this page. Please add info if you have it. [MJMcKay](https://wiki.adempiere.net/User:MJMcKay) 11:38, 5 July 2010 (UTC))

Evaluating ADempiere for use in an enterprise will be a major task for any new user. There are a number of levels of evaluation that should be considered:

- Hardware system requirements;
- Supporting software requirements;
- Personnel requirements - how many IT staff will be required to support the software;
- Information Technology compatibility with existing systems;
- Level of complexity and implications for training and support;
- Fitness for the intended purpose:
  - Included functionality;
  - Extendability - can new required functionality be added;
  - How much "new" functionality must be developed;
- Business process mapping - can current business processes be "mapped" to the application processes or will the business have to adopt new processes to suit the software;
- Are support and consulting services available;
- Maturity of the software;
- Availability of documentation - both technical and end-user;
- Availability of the source code;
- Cost and fees - ADempiere is free but licensing costs may be only a small portion of the overall cost of an ERP implementation;
- Risks of adoption;
- Change management implications;
- Implementation process and support for legacy systems and data;
- Time to implement;

Due to the complexity of the application, you should consider finding a business or management consultant versed in ADempiere to assist with this task.

If you are going to proceed alone, you can follow the steps below:

- To get started and explore the application, try the Sandbox at [Idalica](http://www.testadempiere.com/webui/) (Login/pass = GardenAdmin/GardenAdmin). This will give you insight into the application and a place to try out functionality.
- Next, install a local copy. If you have Windows, there is an excellent [installer](fg). You can also try a [ADempiere Virtual Appliance](a) based on [VMware](https://en.wikipedia.org/wiki/VMware) player or download and install [download latest releases and resources](https://sourceforge.net/projects/adempiere/files/).
- Learn about the application dictionary and all the ways you can modify and configure the application without needing any software.

  - Try to develop a few scripts as callouts and processes.
  - Set up a custom report using Jasper Reports.
  - Explore the workflow and request systems.

After you are comfortable with the application on a local machine, set up a development environment using Eclipse, get the latest release from the source repositories and explore the source code.