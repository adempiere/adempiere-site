"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9266],{26251:(e,i,n)=>{n.r(i),n.d(i,{default:()=>r});var t=n(78e3);const a=[(0,t.uE)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><ul><li>Moderator: Steven Sackett</li><li>Secretary: Cristina Ghita</li><li>Participants: Steven Sackett, Cristina Ghita, Suman Ravuri, later Tobias Schoeneberg.</li><li>Date / Time: August 05th 2013 / 12:00h - 13:05h GMT</li><li>The meeting closed after ~1 hour</li></ul><h2 id="agenda" tabindex="-1"><a class="header-anchor" href="#agenda" aria-hidden="true">#</a> Agenda</h2><ul><li>Minutes of Previous Meeting</li><li>Actions taken by RM -Technical team reviews</li><li>Functional Team reviews</li><li>Actions to be taken</li></ul><h2 id="next-meeting" tabindex="-1"><a class="header-anchor" href="#next-meeting" aria-hidden="true">#</a> Next meeting</h2><ul><li>Minutes of Previous Meeting</li><li>http://www.adempiere.com/FT/TT_meeting_minutes_July_29th_2013</li></ul><h2 id="actions-taken-by-rm" tabindex="-1"><a class="header-anchor" href="#actions-taken-by-rm" aria-hidden="true">#</a> Actions taken by RM</h2><ul><li>Migration ongoing <ul><li>Cash flow - waiting for Susanne to share configuration files, sent mail to her</li><li>Import workflow : Process was missing in repository. Sent mail to Victor requesting required data</li><li>Dunning collection is under testing</li><li>Smart browser is being tested</li></ul></li><li>Fix in zk for grid display column</li><li>Public release: http://adempiere.walkingtree.in/admin</li><li>Tobi made available adempiere 380-rc1 on asds2 for community testing: http://asds2.adempiere.de:8080/webui/ <ul><li>Build is reset every day at 0:00 (don&#39;t know the timezone)</li><li>It rolls out the build at http://asds1.adempiere.de:8080/job/adempiere-3.8.0/</li><li>The job(adempiere-3.8.0) checks yout the code from SF http://hg.code.sf.net/p/adempiere/code, branch release/380rc1</li></ul></li></ul><h2 id="technical-team-reviews" tabindex="-1"><a class="header-anchor" href="#technical-team-reviews" aria-hidden="true">#</a> Technical team reviews</h2><ul><li>no progress</li></ul><h2 id="functional-team-reviews" tabindex="-1"><a class="header-anchor" href="#functional-team-reviews" aria-hidden="true">#</a> Functional team reviews</h2><ul><li>no progress</li></ul><h2 id="actions-to-be-taken" tabindex="-1"><a class="header-anchor" href="#actions-to-be-taken" aria-hidden="true">#</a> Actions to be taken</h2><ul><li>implicit in the other items</li></ul><h2 id="misc" tabindex="-1"><a class="header-anchor" href="#misc" aria-hidden="true">#</a> Misc</h2><ul><li>metas will try to make some progress this week regarding providing a demo system for community to see the items that Metas offered for 3.80 inclusion</li></ul><h2 id="next-meeting-1" tabindex="-1"><a class="header-anchor" href="#next-meeting-1" aria-hidden="true">#</a> Next meeting</h2><ul><li>Monday, August 12th, 12:00 GMT</li></ul><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hi All\n[05.08.2013 15:02:48] Steven: Hi Suman\n[05.08.2013 15:03:09] Tobias Schoeneberg: hi\n[05.08.2013 15:03:12] suman ravuri: Hi Steve\n[05.08.2013 15:03:51] Steven: in preparation....\n[05.08.2013 15:03:58] Steven: Agenda\nMinutes of Previous Meeting\nActions taken by RM\nTechnical team reviews\nFunctional Team reviews\nActions to be taken\nNext meeting\n[05.08.2013 15:05:16] Cristina Ghita: Hi\n[05.08.2013 15:05:28] Steven: Minutes of Previous Meeting from Mario .. http://www.adempiere.com/FT/TT_meeting_minutes_July_22nd_2013\n[05.08.2013 15:05:54] Steven: Hi Tobi, Cristina,\n[05.08.2013 15:10:09] Steven: Are we ready to start or do we wait a while?\n[05.08.2013 15:12:04] Steven: do we have any volunteers for moderator and secretary?\n[05.08.2013 15:13:26] Steven: If there are no volunteers are there any objections to me moderating?\n[05.08.2013 15:14:04] suman ravuri: +1 steve to moderate\n[05.08.2013 15:14:54] Steven: ok .. assume there are no objections .. thanks Suman.\n[05.08.2013 15:15:49 | Edited 15:16:02] Steven: Volunteer for secretary, candidates seem to be Tobi, Cristina and Suman ... who is it to be?\n[05.08.2013 15:16:49] Steven: if we keep it short I will ..\n[05.08.2013 15:16:57] Steven: Minutes of Previous Meeting\n[05.08.2013 15:17:43] Steven: Suman was to have a test system avaialble for initial testing\n[05.08.2013 15:18:47] Steven: Tobi was trying to rollout adempiere 380-rc1 on asds2 for community testing\n[05.08.2013 15:19:05] Steven: vote to adopt the minutes?\n[05.08.2013 15:19:14] Steven: Tobi?\n[05.08.2013 15:19:41] Steven: Cristina?\n[05.08.2013 15:19:52] Cristina Ghita: yes\n[05.08.2013 15:19:54] Cristina Ghita: sure\n[05.08.2013 15:20:12] Cristina Ghita: I think I can volunteer for secretary.. I guess\n[05.08.2013 15:20:26] Steven: great.. you win the job!\n[05.08.2013 15:20:30] Cristina Ghita: :))\n[05.08.2013 15:20:59] Steven: so we adopt the minutes .. matters arising from minutes..\n[05.08.2013 15:21:18] Steven: Suman, can you tell us where we are with the test system at WT please\n[05.08.2013 15:21:22] Cristina Ghita: yes, is fine with me\n[05.08.2013 15:21:32] suman ravuri: I have installed it in wednesday\n[05.08.2013 15:21:42] suman ravuri: shared link to team\n[05.08.2013 15:21:50] suman ravuri: it is on postgres\n[05.08.2013 15:22:01] suman ravuri: postgres latest seed is checked in\n[05.08.2013 15:22:30] Steven: can we share the link here or are you waiting till there is a more public release?\n[05.08.2013 15:22:47] suman ravuri: http://adempiere.walkingtree.in/admin\n[05.08.2013 15:22:52 | Edited 15:23:04] Steven: thanks\n[05.08.2013 15:23:26 | Edited 15:23:36] Steven: Is there a link to those things that are now added to that system that people can review?\n[05.08.2013 15:23:46] suman ravuri: I sent release notes\n[05.08.2013 15:23:57] suman ravuri: I wil paste details here\n[05.08.2013 15:24:07] Steven: thanks\n[05.08.2013 15:25:14 | Edited 15:25:38] Steven: I asked earlier where you would like feedback / bug reports to be entered, can you please post that link also.\n[05.08.2013 15:26:08] suman ravuri: one minute\n[05.08.2013 15:26:20] suman ravuri: https://adempiere.atlassian.net/browse/ADEMPIERE-198?jql=text%20~%20%22sales%20management%22\n[05.08.2013 15:26:29] suman ravuri: start adding your feedback here\n[05.08.2013 15:26:38] suman ravuri: I will change the description of the feature\n[05.08.2013 15:27:31] Steven: Thanks Suman..\n[05.08.2013 15:28:22] suman ravuri: another update is here\n[05.08.2013 15:28:59] suman ravuri: 1. Cash flow - waiting for Susanne to share configuration files, sent mail to her\n[05.08.2013 15:29:32] suman ravuri: 2. Import workflow : Process was missing in repository. Sent mail to Victor requesting required data\n[05.08.2013 15:29:48] suman ravuri: 3. Made fix in zk for grid display column\n[05.08.2013 15:31:16] Steven: @Suman, before you give us your status report can I ask if Tobi has anything to report on  adempiere 380-rc1 on asds2 for community testing?\n[05.08.2013 15:31:52] Tobias Schoeneberg: it finally works now :) (getting the url)\n[05.08.2013 15:32:07] Tobias Schoeneberg: http://asds2.adempiere.de:8080/webui/\n[05.08.2013 15:33:20] Tobias Schoeneberg: this build is reset every day at 0:00  (sorry timezome coming soon)\n[05.08.2013 15:33:39] Tobias Schoeneberg: and it rolls out the build at http://asds1.adempiere.de:8080/job/adempiere-3.8.0/\n[05.08.2013 15:34:26] Tobias Schoeneberg: that job (adempiere-3.8.0) checks yout the code from SF\n[05.08.2013 15:34:43] Tobias Schoeneberg: http://hg.code.sf.net/p/adempiere/code\nbranch release/380rc1\n[05.08.2013 15:36:16] Steven: ..and this is Suman&#39;s most up-to-date code location?\n[05.08.2013 15:36:23] suman ravuri: yes\n[05.08.2013 15:36:29 | Edited 15:37:39] Steven: excuse my ignorance on this stuff\n[05.08.2013 15:37:28 | Edited 15:38:06] Steven: So, will this &#39;take over&#39; what you are displaying on the WT site or is it there for a different purpose?\n[05.08.2013 15:38:58] Steven: come back to that later...\n[05.08.2013 15:39:21] Steven: Suman, Can you give us your Release manager report for the week...\n[05.08.2013 15:39:50] Steven: 1. Cash flow - waiting for Susanne to share configuration files, sent mail to her\n2. Import workflow : Process was missing in repository. Sent mail to Victor requesting required data\n3. Made fix in zk for grid display column\n[05.08.2013 15:41:12] Steven: Is there anything you are waiting on adaxa for?\n[05.08.2013 15:42:51] suman ravuri: oracle seed in under preperation\n[05.08.2013 15:43:03] suman ravuri: will be done by wednesday\n[05.08.2013 15:43:29] suman ravuri: 1. Dunning collection is under testing\n[05.08.2013 15:43:42] Tobias Schoeneberg: [5 august 2013 15:36] Steven: \n\n&lt;&lt;&lt; ..and this is Suman&#39;s most up-to-date code location?this also made me think..the polling of the SF repo was not active. i fixed it\n[05.08.2013 15:43:47] suman ravuri: 2. Smart browser is being tested\n[05.08.2013 15:45:37] Steven: @Suman, Victor is not with us yet, have you heard anything further about moving Libero to a sparate folder as was discussed a couple of weeks back\n[05.08.2013 15:47:23] suman ravuri: no\n[05.08.2013 15:47:35] suman ravuri: I did not hear anything yet\n[05.08.2013 15:48:18] Steven: Are there further things that you are planning for this week or is it listed above?\n[05.08.2013 15:48:42] suman ravuri: We need to add more feature\n[05.08.2013 15:48:47] suman ravuri: one\n[05.08.2013 15:48:53] suman ravuri: I can accomdate one more feature\n[05.08.2013 15:49:06] Steven: Manufacturing Light?\n[05.08.2013 15:49:34] Steven: a small one ;)\n[05.08.2013 15:49:50] suman ravuri: :)\n[05.08.2013 15:49:55] suman ravuri: fine with this\n[05.08.2013 15:50:09] Steven: ok ... perhaps we can move to Technical team reviews\n[05.08.2013 15:50:49] Cristina Ghita: I don;t have anything new to report; I did not have time last week :(\n[05.08.2013 15:51:10] Steven: thanks ... much same issue.\n[05.08.2013 15:52:22] Steven: @Tobi, a few weeks back I think it was said that Metas would provide a demo system for us to see the items that Metas offered for 3.80 inclusion.  Is this available?\n[05.08.2013 15:52:39] Steven: Is it still planned?\n[05.08.2013 15:57:47 | Edited 16:02:59] Steven: we will come back to this when Tobi is free\n[05.08.2013 15:58:16] Steven: Functional Team reviews ??\n[05.08.2013 15:58:47] Steven: none this week ..\n[05.08.2013 15:59:29] Cristina Ghita: it&#39;s also a bit of vacation season :)\n[05.08.2013 16:00:30] Steven: Actions to be taken\n[05.08.2013 16:01:04] Steven: Cristina, perhaps you can ask Tobi about the test system ..\n[05.08.2013 16:01:10] Steven: any other matters?\n[05.08.2013 16:01:25] Cristina Ghita: ok\n[05.08.2013 16:01:52] Steven: Lets close .. in 1 hour and 1 minute!\n[05.08.2013 16:02:16] Cristina Ghita: fast! but not furious ;)\n[05.08.2013 16:03:15] Tobias Schoeneberg: (back)\n[5 august 2013 15:52] Steven: \n\n&lt;&lt;&lt; @Tobi, a few weeks back I think it was said that Metas would provide a demo system for us to see the items that Metas offered for 3.80 inclusion.  Is this available?sorry, not yet..but thx for the reminder i&#39;ll try to have some progress this week\n[05.08.2013 16:03:35] Steven: ok, bye to all..\n[05.08.2013 16:03:38] Cristina Ghita: ok\n[05.08.2013 16:03:40] Cristina Ghita: bye!\n[05.08.2013 16:03:46] Cristina Ghita: Have a nice week!\n[05.08.2013 16:03:50] suman ravuri: by\n[05.08.2013 16:04:00] suman ravuri: bye\n[05.08.2013 16:04:22] Steven: thanks .. btw I am on vacation for next two meetings with no wifi...\n[05.08.2013 16:04:56] Cristina Ghita: ok. Have a nice vacation and have fun!\n[05.08.2013 16:05:09] Steven: thanks .. bye\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',21)],s={},r=(0,n(13860).Z)(s,[["render",function(e,i){return(0,t.wg)(),(0,t.iD)("div",null,a)}]])},83321:(e,i,n)=>{n.r(i),n.d(i,{data:()=>t});const t=JSON.parse('{"key":"v-426e4698","path":"/community/wiki/meetings/FT-2013/FT-20130805.html","title":"FT/TT meeting minutes August 5th 2013","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes August 5th 2013","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"summary":"Minutes General Moderator: Steven Sackett; Secretary: Cristina Ghita; Participants: Steven Sackett, Cristina Ghita, Suman Ravuri, later Tobias Schoeneberg.; Date / Time: August 05t","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2013/FT-20130805.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes August 5th 2013"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Minutes","slug":"minutes","children":[]},{"level":2,"title":"General","slug":"general","children":[]},{"level":2,"title":"Agenda","slug":"agenda","children":[]},{"level":2,"title":"Next meeting","slug":"next-meeting","children":[]},{"level":2,"title":"Actions taken by RM","slug":"actions-taken-by-rm","children":[]},{"level":2,"title":"Technical team reviews","slug":"technical-team-reviews","children":[]},{"level":2,"title":"Functional team reviews","slug":"functional-team-reviews","children":[]},{"level":2,"title":"Actions to be taken","slug":"actions-to-be-taken","children":[]},{"level":2,"title":"Misc","slug":"misc","children":[]},{"level":2,"title":"Next meeting","slug":"next-meeting-1","children":[]},{"level":2,"title":"Log","slug":"log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.75,"words":1725},"filePathRelative":"community/wiki/meetings/FT-2013/FT-20130805.md","localizedDate":"August 29, 2023"}')}}]);