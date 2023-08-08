---
title: Software Testing and QA
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Software Test Strategy

While it is likely impossible to fully test a complex application such as ADempiere, software testing can be used effectively to demonstrate the quality of key functionality and ensure new features meet their functional specifications while ensuring backwards compatibility.

As testing is an often onerous and tedious task, finding ways to simplify test creation and automating the test execution is critical to an open source project. If it is easy, there is a greater chance that many developers will be able to collaborate in the development and maintenance of the tests.

The tests should be part of the nightly build process where changes to the development branch can be tested against their functional specs, providing rapid feedback to developers who are actively working on new features and bug fixes. The tests should also be available to developers so that they can be run locally before major commits to the Source Forge repositories.

Goals:

- Testing of major processes in the application with the aim of testing all models
- Testing of the GUI/Webui functionality
- Testing of all new features added following Release 3.70LTS
- Verification of identified bugs and bug fixes

## Software Test Tools

- [JUnit](https://wiki.adempiere.net/Adempiere_Junit_test)
- [UISpec4j](https://wiki.adempiere.net/index.php?title=ADempiere_Testing_with_UISpec4j&action=edit&redlink=1)
- [Sahi](https://wiki.adempiere.net/ADempiere_Testing_with_Sahi)
- [Fitnesse](https://wiki.adempiere.net/index.php?title=ADempiere_Testing_with_Fitnesse&action=edit&redlink=1)
- [ApacheBench](https://wiki.adempiere.net/ADempiere_Testing_with_ApacheBench)

## Functional Tests

Generic functional tests will be completed for each nightly build. The functional tests are outlined in the page [Functional Tests](https://wiki.adempiere.net/Functional_Tests).

## Test Process

- Test development
- Test execution and reporting
