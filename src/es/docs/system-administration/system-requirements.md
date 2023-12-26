---
title: System Requirenments
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

ADempiere system requirements vary considerably with the complexity of the enterprise being supported. This page provides a minimum set of system requirements.
It is possible to install ADempiere on a single computer with the database, server and client all running on the same machine. This is quite adequate for evaluation or very small applications. In a production environment such a simple installation may not be sufficient, especially when there are more than a handful of concurrent users. Performance demands will require more attention to the architecture of the installation. In a production environment, it is highly recommended to separate the servers, with the [Application Server](http://en.wikipedia.org/wiki/Application_server) and [Database Server](http://en.wikipedia.org/wiki/Database_server) on different machines.

::: note Note
![image](https://github.com/adempiere/adempiere-site/assets/134967453/5245af1b-0219-4914-a488-270aa2683742) Proper database server architecture and database tuning is essential to efficient operation. For installations with more than 10 users, ensure you do your homework. See specifics about your database or consult with a database specialist for correct hardware architecture, database tuning and query tuning.For PostgreSQL, see Postgres Performance Hardware Design Tuning Your PostgreSQL Server Using EXPLAIN (Query Tuning) | | :--- | :--- |

:::

The following sections describe the main requirements and options.

## ADempiere Application Server Requirements

### Software

- **Operating Systems**: Choose one of the following options based on your preference and requirements:

    - Microsoft Vista, Windows 7, or later (Note: Support will be limited by the supporting stack of Java and the database.)

    - Linux
        - Suse
        - Red Hat
        - CentOS
        - Debian / Ubuntu

    - FreeBSD
    - Unix
    - OpenSolaris
    - MAC OSX

## Hardware

- **Architecture of Hardware**: Choose the hardware architecture based on your requirements:

    - [Intel](http://en.wikipedia.org/wiki/XEON)
    - [AMD Opteron](http://en.wikipedia.org/wiki/Opteron)
    - [Sparc](http://en.wikipedia.org/wiki/SPARC)
    - [Power](http://en.wikipedia.org/wiki/Power_Architecture)
    - [Itanium](http://en.wikipedia.org/wiki/Itanium)

## Databases

- **Oracle**: 
    - Version: 10g Release 2
    - Editions: Express, Standard, and Enterprise

::: note Note

![image](https://github.com/adempiere/adempiere-site/assets/134967453/5245af1b-0219-4914-a488-270aa2683742) The export utility (used by RUN_DBExport) on 11g doesn't export empty tables by default. Some configuration of the database is needed or you need to use a different tool. For that reason, 11g is not "officially" supported. | | :--- | :--- |

:::

- **PostgreSQL**: 
    - Version: 8.2 or later

- **MySQL**

## Stack Required

- **Java (Versions 3.7.0 and below):**
    - Java 2 Platform Standard Edition 5.0 or higher

- **Java (Version 3.8.0 and above):**
    - Java 2 Platform Standard Edition 7.0 or higher

- **JBoss**

- **Apache Ant:**
    - Version: 1.6 or higher

## Technologies Used

- Java
- JavaServer Pages (JSP)
- Servlets
- Enterprise JavaBeans (EJB)
- SQL/SQLJ
- XML
- HTML/CSS
- PDF

## Client Side

*For web start or web application:*
- **Browsers:**
  - Firefox 2.0 or better
  - Google Chrome
  - Safari 2 or better
  - Internet Explorer 7.0 or better
- **Java Requirements:**
  - Java 2 Platform Standard Edition 5.0 or higher

For client application

## Java 2 Platform Standard Edition (J2SE)

- Version: 5.0 or higher

**Operating Systems - any one of the following:**
- Microsoft Windows 2000, XP*, Vista, or newer
- Linux
  - Suse *
  - Red Hat *
  - CentOS
  - Debian / Ubuntu
- FreeBSD
- Unix
- OpenSolaris
- MAC OSX

