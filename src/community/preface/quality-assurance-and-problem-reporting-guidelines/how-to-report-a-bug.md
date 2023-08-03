---
title: How to Report a Bug
category: Community
star: 9
sticky: 9
tag:
  - Preface
  - Community
article: false
---

This document describes how to create well formed bug reports for the problems you find in ADempiere.

- Always [search](https://sourceforge.net/directory/) the bug trackers first, in case you find the bug already reported check if you can add any useful information to the bug report

- Assign a useful Summary or Subject: describe the bug in 60 characters or fewer. Be pithy, be precise, and be concise (in the subject, but be verbose in the explanation). A developer should be able to read the summary and say, "Oh, that's what the bug is about." A bad summary is "Adempiere isn't working!" Remember, people searching for bugs will often search the summary. Make a good impression: the summary should tell the developer whether or not to look into the bug.

- Provide detailed steps to reproduce:
- You must provide steps to reproduce the problem in a plain GardenWorld fresh installed database, without customizations or new packages installed, otherwise the chance to be peer reviewed is very little.
- Take into account that *steps to reproduce* is the most important part of the bug report, please:

- Be specific -> i.e. I opened the window XYZ and created a new record filling the fields with the values Name=ABC, Code=XYZ ...
- Be verbose -> more is better than less when providing information for a developer to reproduce your problem
- Be careful of pronouns
- Read what you wrote
- Read this [guide](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html)

Template to file a [bug report](https://sourceforge.net/p/adempiere/bugs/)

~~~
Adempiere Version : <Copy from: About>
Operating System (OS and version):
Database (engine and version):
Java version:

Last migration script applied: 

What steps will reproduce the problem?
1.
2.
3.

What is the expected result?


What happens instead?


Please provide any additional information below. Attach a screenshot if possible.
~~~
