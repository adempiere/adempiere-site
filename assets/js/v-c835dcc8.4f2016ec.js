"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3364],{35688:(e,i,n)=>{n.r(i),n.d(i,{default:()=>d});var a=n(68152);const r=(0,a.IL)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li>Moderator: Victor Perez</li><li>Secretary: Mario Calderon</li><li>Participants: Mario Calderon, Suman Ravuri, Victor Perez, Mike McKay</li><li>Date / Time: Tuesday, November 5th 2013 / 12:00h - 13:02h GMT</li><li>The meeting closed after 1 hour 2 mins</li></ul><p><strong>Agenda</strong></p><ol><li>Minutes of Previous Meeting</li><li>Actions taken by RM</li><li>Actions to be taken</li><li>Misc</li><li>Next meeting</li></ol><p><strong>Minutes of Previous Meeting</strong></p>',6),t={href:"http://www.adempiere.com/FT/TT_meeting_minutes_October_29th_2013",target:"_blank",rel:"noopener noreferrer"},s=(0,a.IL)('<p><strong>Actions taken by RM</strong></p><ul><li>GL Reconciliation -- integrated the changes of web version and tested (Thanks to Mike)</li><li>SmartJSP reports improvements -- Integrated and tested</li><li>Cashflow is tested -- Code changes are committed by Victor. Tested by WTC</li><li>Delete Entities Client support -- Integrated and Tested (Based on Mike&#39;s package)</li><li>Role Template -- Integrated (Re-generated the Role Template with System Client)</li><li>Process Gear reverting back unnecessary changes -- Integrated.</li><li>Aging report with revaluation integration with ADempiere 380 -- Issues are there with PackIn (https://adempiere.atlassian.net/browse/ADEMPIERE-238)</li><li>Select All in Swing Tables -- merged the changes and tested. We have build issues with CTable.java we commented the code which is creating build issues before we commit. We are working on it to fix. Mike can help us here. Yet to be tested.</li></ul><p><strong>Actions to be taken</strong></p><ul><li>Last commit on ADEMPIERE-41 wasn&#39;t included in the merge. It has a few important fixes. RM took only GL reconciliation web. RM will merge it this week.</li><li>Victor will merge Warehouse Management</li></ul><p><strong>Misc</strong></p><ul><li>Generate model is fixed</li><li>Pending: Manufacturing Light</li><li>Pending: Costing Engine</li></ul><p><strong>Next meeting</strong></p><ul><li>Tuesday, November 12th 2013 / 12:00h. GMT</li></ul><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><p>Following is the meeting log - time is in GMT -6</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Tuesday, 5 November 2013\n[05:53:39] Mario Calderón: hello everybody\n[05:55:19] Michael McKay: Morning.  Time changed here - now 7am.\n[05:56:02] suman ravuri: DST?\n[05:56:06] Mario Calderón: hu Mike, I think in Europe also...\n[05:56:11] suman ravuri: Hi All\n[05:56:16] Mario Calderón: hi Suman\n[05:56:18] suman ravuri: Good Morning\n[05:56:23] Michael McKay: Yes - can see in the morning but its dark by 5pm.\n[06:01:08] Mario Calderón: Steven told me a couple of days ago that he had to undergo a small hand surgery, so most probably he wouldn&#39;t be able to assist to today&#39;s meeting\n[06:06:50] Victor Perez Juarez: Hi\n[06:08:00] Mario Calderón: should we start?\n\nI think nobody else wll show up\n[06:08:33] Victor Perez Juarez: Ok\n[06:09:03] suman ravuri: +1\n[06:09:10] Mario Calderón: I can be the secretary, we need no moderator, as we are jusr 4\n[06:09:23] Mario Calderón: Minutes of last meeting: http://www.adempiere.com/FT/TT_meeting_minutes_October_29th_2013\n[06:10:23] Victor Perez Juarez: Ok I can\n[06:11:34] Victor Perez Juarez: Actions taken by RM\n\nTechnical team reviews\n\nFunctional Team reviews\n\nActions to be taken\n\nMisc\n\nNext meeting\n[06:12:28] suman ravuri: GL Reconciliaition                  -- integrated the changes of web version and tested( Thanks to Mike)\n\nSmartJSP reports improvements       -- Integrated and tested\n\nCashflow is tested                  -- Code changes are committed by Victor. Tested by WTC\n\nDelete Entities Client support      -- Integrated and Tested ( Based on mike package)\n\nRole Template                       -- Integrated ( Re-generated the Role Template with System Client)\n\nProcess Gear reverting back un-nesessary changes -- Integrated.\n\n\n\n\n\nAging report with revaluation integration with ADempiere 380 -- Issues are there with PackIn (https://adempiere.atlassian.net/browse/ADEMPIERE-238)\n\n\n\nSelect All in Swing Tables          -- merged the changes and tested. We have build issues with CTable.java  we commented the code which is creating build issues before we commit. We are working on it to fix. Mike can help us here.Yet to be tested.\n[06:12:42] Victor Perez Juarez: So first subject action take by RM\n[06:13:03] suman ravuri: I am pasting again\n[06:13:05] suman ravuri: GL Reconciliaition                  -- integrated the changes of web version and tested( Thanks to Mike)\n\nSmartJSP reports improvements       -- Integrated and tested\n\nCashflow is tested                  -- Code changes are committed by Victor. Tested by WTC\n\nDelete Entities Client support      -- Integrated and Tested ( Based on mike package)\n\nRole Template                       -- Integrated ( Re-generated the Role Template with System Client)\n\nProcess Gear reverting back un-nesessary changes -- Integrated.\n\n\n\n\n\nAging report with revaluation integration with ADempiere 380 -- Issues are there with PackIn (https://adempiere.atlassian.net/browse/ADEMPIERE-238)\n\n\n\nSelect All in Swing Tables          -- merged the changes and tested. We have build issues with CTable.java  we commented the code which is creating build issues before we commit. We are working on it to fix. Mike can help us here.Yet to be tested.\n[06:15:02] Mario Calderón: is now RC stable?\n[06:15:13] Victor Perez Juarez: Suman do you fix generate model ?\n[06:15:56] Victor Perez Juarez: i sent email copy you and Cristina\n[06:16:09] suman ravuri: Generate model is fixed\n[06:17:02] Victor Perez Juarez: Ok i need check because I not see this commit\n[06:17:48] suman ravuri: 7558 Revision\n[06:18:40] Victor Perez Juarez: Technical Team and review\n[06:19:07] Mario Calderón: none\n[06:19:30] Victor Perez Juarez: I only think that we need improve about ABP\n[06:20:24] Victor Perez Juarez: I saw that domes commites are parcials and incplete\n[06:21:03] Mario Calderón: we hve no new reviews, neither technical nor functional.\n\n\n\nABP must be of course be implemented.\n[06:21:07] Victor Perez Juarez: Other break compilation\n[06:22:19] Victor Perez Juarez: So of rc380 should to have finish thing\n[06:23:26] Victor Perez Juarez: Because if not make we can come back old practice that want avoid\n[06:23:58] Michael McKay: @Suman - can you send me a note about CTable - I can&#39;t see comments.  What is the build issue?  We can deal with it off-line.\n[06:24:11] suman ravuri: i will send request to you\n[06:24:17] suman ravuri: we can take it offline\n[06:25:37] suman ravuri: @Victor, last week build issue, it was a miss\n[06:25:47] suman ravuri: I think we woll avoid this going forward\n[06:25:54] suman ravuri: will\n[06:26:39] Michael McKay: Also noted that the last commit on ADEMPIERE-41 wasn&#39;t included in the merge.  I has a few important fixes.\n[06:27:01] suman ravuri: we took only GL reconciliation web\n[06:27:08] suman ravuri: we will merge it this week\n[06:27:23] Michael McKay: OK - thanks.\n[06:27:24] Mario Calderón: @Suman: action to do\n[06:28:19] Victor Perez Juarez: @Suman is importat because we need following our rules\n[06:29:42] Victor Perez Juarez: And avoid that 380 rc is more a development that a branch to release\n[06:30:31] Victor Perez Juarez: Then is best review that All is ok before of commit\n[06:31:04] Michael McKay: Have to step away.  Back soon.\n[06:31:25] Mario Calderón: bye\n[06:31:45] Victor Perez Juarez: We need remember other development too are work and hope that All is ok\n[06:32:04] suman ravuri: Point taken\n[06:32:12] Victor Perez Juarez: Bye Mike\n[06:32:21] Victor Perez Juarez: funcional team review\n[06:33:30] Mario Calderón: none\n[06:35:03] Victor Perez Juarez: I have pending a metting with Suman about of manufacturing\n[06:35:09] Victor Perez Juarez: And bom\n[06:35:44] Victor Perez Juarez: I saw some thing not like\n[06:35:59] Mario Calderón: also pending is Costing Engine.\n\nSusanne has set up a server to test\n[06:36:31] Victor Perez Juarez: As phantom and kanban flags\n[06:37:40] Victor Perez Juarez: It not should are in product should be part of component definirion not of product\n[06:38:12] Victor Perez Juarez: A product can be phantom in a org or plant and other not be\n[06:38:54] Victor Perez Juarez: So not should define as general definition\n[06:39:19] suman ravuri: Hi Victor, kindly let me know the changes we need to make, we will have required changes done\n[06:39:55] Victor Perez Juarez: Other other hand it is duplicate because is in planning data and component tab\n[06:40:52] suman ravuri: Share the list of changes you expect, we will discuss and make reqsuired change\n[06:41:10] Victor Perez Juarez: So we need to have care And not include duplicate concepts\n[06:41:11] suman ravuri: may be we need steven as well here as we discuss ML\n[06:42:27] Victor Perez Juarez: Yes we need review\n[06:43:14] Victor Perez Juarez: Action to be take\n[06:44:31] Mario Calderón: actions have to aim at finishing the review phase so community test can begin\n[06:45:47] Mario Calderón: one item to do would be as I put before: accept or dismiss Costing Engine\n[06:46:19] suman ravuri: at this point I would say no\n[06:47:34] Victor Perez Juarez: In general for average cost is work\n[06:48:15] Mario Calderón: ok\n\nanything else?\n\nwhen can we start community test?\n[06:48:33] Victor Perez Juarez: But other cost fifi lifo need be implement\n[06:48:44] suman ravuri: @Victor, can we finish ML in this week?\n[06:49:02] Victor Perez Juarez: Then i not know that is best\n[06:49:41] suman ravuri: do you think the changes you suggest can be completed in week time?\n[06:49:55] Victor Perez Juarez: Continúe with current cost that no work\n[06:50:40] Victor Perez Juarez: Or change new only work with standard and average\n[06:51:05] Victor Perez Juarez: I prefere change and improve of new\n[06:53:02] Victor Perez Juarez: @Suman yes we review this week\n[06:53:26] suman ravuri: thanks\n[06:54:10] Victor Perez Juarez: Teherán Mario i will like that susanne and Steve give your opinión about CE\n[06:55:08] Mario Calderón: ok\n[06:55:12] Victor Perez Juarez: We need a way of warranties of test because we have alot changes\n[06:55:46] Mario Calderón: Susanne has tested with a customer database of 3 years, and simulated all scenarios..\n[06:55:51] Victor Perez Juarez: So we testing should be very intensivos and in detail\n[06:56:12] Mario Calderón: anything else?\n[06:58:35] Victor Perez Juarez: Not for me\n[06:58:44] Mario Calderón: Suman?\n[06:59:01] suman ravuri: nothing\n[06:59:02] Victor Perez Juarez: I need integrate WM i can now make\n[06:59:14] Mario Calderón: great!\n[06:59:22] Victor Perez Juarez: So that was solve of issues\n[07:00:18] Mario Calderón: in this case, have a nice time!\n[07:00:21] Mario Calderón: bye\n[07:00:31] Victor Perez Juarez: We we can deployment of first compile cerdionn\n[07:00:54] Victor Perez Juarez: Suman you remove of ids 1000000\n[07:01:20] suman ravuri: yes I removed 100000\n[07:02:41] Victor Perez Juarez: Ik\n[07:02:45] Victor Perez Juarez: Ok\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),l={},d=(0,n(42272).c)(l,[["render",function(e,i){const n=(0,a.E1)("ExternalLinkIcon");return(0,a.Wz)(),(0,a.An)("div",null,[r,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("a",t,[(0,a.mY)("Previous Meeting Minutes"),(0,a.K2)(n)])])]),s])}]])},8088:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-c835dcc8","path":"/community/wiki/meetings/FT-2013/FT-20131105.html","title":"FT/TT meeting minutes November 5th 2013","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes November 5th 2013","category":"Community","star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"description":"Minutes General Moderator: Victor Perez Secretary: Mario Calderon Participants: Mario Calderon, Suman Ravuri, Victor Perez, Mike McKay Date / Time: Tuesday, November 5th 2013 / 12:00h - 13:02h GMT The meeting closed after 1 hour 2 mins","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2013/FT-20131105.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes November 5th 2013"}],["meta",{"property":"og:description","content":"Minutes General Moderator: Victor Perez Secretary: Mario Calderon Participants: Mario Calderon, Suman Ravuri, Victor Perez, Mike McKay Date / Time: Tuesday, November 5th 2013 / 12:00h - 13:02h GMT The meeting closed after 1 hour 2 mins"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"FT/TT meeting minutes November 5th 2013\\",\\"description\\":\\"Minutes General Moderator: Victor Perez Secretary: Mario Calderon Participants: Mario Calderon, Suman Ravuri, Victor Perez, Mike McKay Date / Time: Tuesday, November 5th 2013 / 12:00h - 13:02h GMT The meeting closed after 1 hour 2 mins\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Minutes","slug":"minutes","link":"#minutes","children":[]},{"level":2,"title":"Log","slug":"log","link":"#log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.14,"words":1843},"filePathRelative":"community/wiki/meetings/FT-2013/FT-20131105.md","localizedDate":"August 29, 2023","excerpt":"<h2> Minutes</h2>\\n<p><strong>General</strong></p>\\n<ul>\\n<li>Moderator: Victor Perez</li>\\n<li>Secretary: Mario Calderon</li>\\n<li>Participants: Mario Calderon, Suman Ravuri, Victor Perez, Mike McKay</li>\\n<li>Date / Time: Tuesday, November 5th 2013 / 12:00h - 13:02h GMT</li>\\n<li>The meeting closed after 1 hour 2 mins</li>\\n</ul>","autoDesc":true}')}}]);