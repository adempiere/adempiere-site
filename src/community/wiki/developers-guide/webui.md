---
title: WebUI
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Why We Return To The Source

- This is another big contribution by Robert Klein of OSLABS. He is famous for the now strong feature of 2Pack.
- He has set the first step to completing the Web User Interface inherited from Compiere which has always been in beta mode.
- The good news also is that Robert is now basing his works on the ADempiere project.
- This is another testimony that the ADempiere Bazaar is recognised by all as a community and open project. By remaining open and community based, ADempiere Bazaar shall grow at quantum speeds as contributors like Rob Klein began to port over their works unabated. He gets automatically SVN commit rights to continue updating the project files concerning his contributions.
- Many around the bazaar can now assist him in testing and debugging and correcting the bugs they find on his behalf. He can now move onto other upscale projects without worrying about his investment in brand and coding time.
- He can keep maintaining his clients' installations with lesser resources of ensuring all bugs are resolved. You start, the community completes for you!


## Screenshots

![web-login](/assets/img/community/developers-guide/Weblogin.png)

- The New Web UI Login Look by Rob Klein

## Main Menu

![webmain](/assets/img/community/developers-guide/WebMain.png)

(updating now.. come back later)

- The Main Screen Can Work With Zoom

![webpzoom](/assets/img/community/developers-guide/WebBPZoom.png)

- The Zoom works fine with AJAX-feel filter selection

## Status

- Updated to trunk, you need to update from SVN trunk and compile to get it.
- Rob Klein has commit rights and is now updating his suggested changes directly.
- Be released in binary form next, awaiting Commit Committee decision.
- Council and Team members have voted overwhelmingly to accept this contribution via team email. Red1 04:14, 13 June 2007 (EDT)

## What Files Did Rob Change?

- CreateZipFile.java - adempiere_trunk/base/src/org/adempiere/pipo
- MPackageExp.java - adempiere_trunk/base/src/org/compiere/model
- MWFActivity.java - adempiere_trunk/base/src/org/compiere/wf
- WAccount.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (4 matches)
- WAttachment.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (2 matches)
- WebField.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (8 matches)
- WHelp.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www
- WLocation.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (2 matches)
- WLogin.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (8 matches)
- WLookup.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (4 matches)
- WMenu.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (8 matches)
- WProcess.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (10 matches)
- WTest.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www
- WWindow.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www (26 matches)
- WZoom.java - adempiere_trunk/serverApps/src/main/servlet/org/compiere/www

## How You Can Help

1. Testing and identifying the remaining UI components that need completion.
2. Improving and completing the remaining UI components.
3. Promoting the application for further testing by users and inviting more developers to contribute.

## Motivation 

- Why should I get involved?
- Rob Klein has been a source of groundbreaking technology from the old Compiere framework such as 2Pack with Fixed Assets.
- Publishes his works under GPL at [http://www.oslabs.org/](http://www.oslabs.org/)
- Provides his own philosophy and guidance in well-written documents to support newbies.
- Though busy with his projects, he has kept in touch with ADempiere steadfastly to update his works.
- Able to draw more individuals with incumbent Compiere knowhow, like me, who are not yet able to master new technologies.
- Has received committed followers such as Tim (xp_prg) and Victor (Libero) who use 2Pack in their projects.
- Tim has continued to train others, such as AnwarSadat (AS), and is able to maintain the 2Pack for ADempiere.
- Dirk (Needle57) uses 2Pack for German localization.
- Means a sub-bazaar is truly forming over Rob Klein's works, which could make sense for him to lead in the future.
- WebUI was formerly a Compiere beta version, presenting a smaller gap to push for than Ajax-based or TANG-based solutions.
- Ready for marketing usability and visibility to end-users.
- Doesn't mean neglecting other technologies, but allows a choice based on competency and energy within the community.

## Working Process Roadmap

- Sign up and test the WebUI suite according to the functional headings below.
- Report all findings in the wiki for Rob to follow up systematically.
- Discuss further in SourceForge.
- Rob will repair codes based on feedback here and commit to trunk. This is to avoid code clash until the process matures.

- Coordinate with Rob if we are able to do some code changes ourselves.
When process matures with a strong sub-bazaar, will discuss with Rob to head a team to work with him on the source.

(The main purpose of the process i draw up here is due to Rob's busy commitment schedule over the years, and i m trying to coordinate the best working mode for him and us to bring this forward. Meanwhile ideas are welcome! - Red1).

## Call To Arms

[Red1](https://wiki.adempiere.net/User:Red1) (testing, documenting, facilitating, debugging, improving)
[Bahman](https://wiki.adempiere.net/User:Bmovaqar) (debugging, improving) -If I can :-)
[Ramiro Vergara](https://wiki.adempiere.net/User:Rvergara) (testing, documenting)
[Moyses](https://wiki.adempiere.net/User:Rvergara) (testing, documenting)
[Raoufm](https://wiki.adempiere.net/User:RAM) (testing, documenting)
(sign up here)

## Detailed WalkThrough Testing

The following sub topics breaks up the testing task into its various menu topics
Each will list what works and what doesn't work (Buglists will be under respective topics)
[WebUI/Login](a) and general UI or Window behaviour
[WebUI/System Admin](a)
[WebUI/Application Dictionary](application-dictionary.md)
[WebUI/Partner Relations](a)
[WebUI/Quote To Invoice](a)
[WebUI/Requisition To Invoice](a)
[WebUI/Open Items](a)
[WebUI/Material Management](a)
[WebUI/Project Management](a)
[WebUI/Performance Analysis](a)
[WebUI/Assets](a)
[WebUI/Favorites](a)

