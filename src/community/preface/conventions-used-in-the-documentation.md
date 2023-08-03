---
title: Conventions Used in the Documentation
category: Community
star: 9
sticky: 9
tag:
  - Preface
  - Community
article: false
---

The ADempiere documentation is a collaboratively produced work with contributions from people around the world, all in an effort to help you. While enforcing a common writing style in such a large group is like herding squirrels, this particular article outlines some goals to follow in generating documentation and reading it.

In general, the standard wiki mark-up styles will be used to present information.

Pages will always have a title. You can find the page again directly by typing the title into the search tool in the left sidebar and clicking on Go. The search is case sensitive.

Pages may also have categories displayed at the bottom. You can click on the category to see a list of pages with related information.

The following templates are used to present specific information:

::: info Note

A note provides additional information or highlights an important point in the text.

:::

::: warning Caution!

A caution warns you of a potential problem which could be difficult to fix if it occurs.

:::

Code samples will be presented as preformatted text.

In cases where examples are provided, entries that are to be replaced by the user are enclosed in angle brackets `like this`. For example,” `Enter your name here` is a fine contributor!”.

References to application menu selections (File, Edit, View, Go, Tools, Window, Help...) will be presented as sequence of menu choices in bold font. For example

~~~

Tools{{#if: Preferences | →Preferences }}{{#if: | → }}{{#if: | → }}.

~~~

References to the ADempiere default menu tree will be in bold italics separated by double angle brackets. For example, 

`System Admin{{#if: Data |  » Data }}{{#if: Data Import |  » Data Import }}{{#if: Import Loader Format |  » Import Loader Format }}{{#if: |  »  }}`

Windows will be refered to with the term Window and will use a link to the associated manual page - example the `{{#if: Business Partner|Business Partner|BusinessPartner }}` Window. Tabs within a window will be referred to with the term Tab and a link to the section of the Manual page - example the `{{#if: Customer|Customer|Customer }}` Tab.

Specific manual pages are titled as ManPage*Name where* is letter code for the type of window. See [Category:Manual](https://wiki.adempiere.net/Category:Manual) for details.

The terms “user”, “system administrator” and “developer” should not be taken too literarily as the distinctions are blurred. They are used largely to help categorize and group information based on the expected target audience.
