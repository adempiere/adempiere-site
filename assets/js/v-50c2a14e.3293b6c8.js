"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9180],{64736:(e,i,n)=>{n.r(i),n.d(i,{default:()=>p});var a=n(68152);const t=(0,a.IL)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li>Moderator: Steven Sackett</li><li>Secretary: Mario Calderon</li><li>Participants: Victor Perez, Mario Calderon, Suman Ravuri, Mike McKay</li><li>Date / Time: Tuesday, November 19th 2013 / 12:00h - 13:11h GMT</li><li>The meeting closed after 1 hour 11 mins</li></ul><p><strong>Agenda</strong></p><ol><li>Minutes of Previous Meeting</li><li>Actions taken by RM</li><li>Actions to be taken</li><li>Misc</li><li>Next meeting</li></ol><p><strong>Minutes of Previous Meeting</strong></p>',6),r={href:"http://www.adempiere.com/FT/TT_meeting_minutes_November_12th_2013",target:"_blank",rel:"noopener noreferrer"},s=(0,a.QD)("p",null,[(0,a.QD)("strong",null,"Actions taken by RM")],-1),l=(0,a.QD)("ul",null,[(0,a.QD)("li",null,"Made code changes for Manufacturing Lite integration with Libero Manufacturing and prepared the patch -- Tested and not committed"),(0,a.QD)("li",null,"Combined Aging revalued payments ( payment schedule issue is fixed ) -- Tested and not committed"),(0,a.QD)("li",null,"Fixed Null Pointer Exception of Document No range look-up -- Tested and not committed (Task ADEMPIERE-233)"),(0,a.QD)("li",null,"Nullpointer Exception fix on product selection in Component included Tab of Product window -- tested and not committed"),(0,a.QD)("li",null,"Delete Entities in Client is not allowing to clear the Table drop down -- fixed and not committed"),(0,a.QD)("li",null,"Null Pointer Exception on Currency selection in Payment window -- Tested and not committed")],-1),d=(0,a.QD)("p",null,[(0,a.QD)("strong",null,"Misc")],-1),o=(0,a.QD)("li",null,"Suman is going to commit in branch Manufacturing Lite changes before merging in 380",-1),c=(0,a.QD)("li",null,"End of the week we should be able to do some Manufacturing Lite testing",-1),u=(0,a.QD)("li",null,"Costing Engine: testing by Victor, complex matter",-1),v=(0,a.QD)("li",null,"Costing Engine: Victor will chat with Susanne",-1),m={href:"http://portal.nickelnetworks.com/web/adempiere-io/home",target:"_blank",rel:"noopener noreferrer"},b=(0,a.QD)("li",null,"Warehouse Management: not discussed; still open",-1),h=(0,a.IL)('<p><strong>Next meeting</strong></p><ul><li>Tuesday, November 19th 2013 / 12:00h. GMT</li></ul><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><p>Following is the meeting log - time is in GMT -6</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Monday, 18 November 2013\n[23:44:45] Mario Calderón: hi everybody,\n\nI am in Nicaragua and don&#39;t know if I will have connectivity tomorrow.\nHere the link to the minutes : http://www.adempiere.com/FT/TT_meeting_minutes_November_12th_2013\nIf I cannot manage, I will catch the conversation and write the minutes.\nTuesday, 19 November 2013\n[06:04:21] suman ravuri: Hi All\n[06:04:38] Mario Calderón: hi\n[06:04:48] Michael McKay: Morning/Evening.\n[06:04:55] Steven Sackett (Adaxa): Hi All\n[06:05:10] Trifon Trifonov: hi everyone\n[06:05:23] Victor Perez Juarez: HI\n[06:05:29] Steven Sackett (Adaxa): hi Trifon\n[06:05:57] Steven Sackett (Adaxa): I thought there was no one here and now lots!\n[06:06:06] Steven Sackett (Adaxa): shall we start?\n[06:06:12] Mario Calderón: ok\n[06:06:22] Steven Sackett (Adaxa): usual roles ok?\n[06:06:26] Mario Calderón: +1\n[06:06:55] Steven Sackett (Adaxa): ok .. minutes of previous meeting .. any matters arising?\n[06:07:13] Steven Sackett (Adaxa): here is the summary\n[06:07:15] Steven Sackett (Adaxa): FT/TT meeting minutes November 12th 2013\n\nMinutes\n\n\n\nGeneral\n\nModerator: Steven Sackett\n\nSecretary: Mario Calderon\n\nParticipants: Mario Calderon, Suman Ravuri, Mike McKay\n\nDate / Time: Tuesday, November 12th 2013 / 12:00h - 13:02h GMT\n\nThe meeting closed after 52 mins\n\nAgenda\n\nMinutes of Previous Meeting\n\nActions taken by RM\n\nActions to be taken\n\nMisc\n\nNext meeting\n\nMinutes of Previous Meeting\n\nhttp://www.adempiere.com/FT/TT_meeting_minutes_November_5th_2013\n\nActions taken by RM\n\nSelect All in Swing Tables -- merged the changes and committed into 380rc1\n\nConfigurable Dashboard fields order is missing in Dashboard -- fixed and committed.\n\nCashFlow build path resolved (In Server instance liberocashflow.jar is not included ) -- fixed and committed\n\ntest case document preparation for GL Reconciliation,Smart Report, Delete Entities, Select All in Swing Tables\n\nGL reconciliation web version merged\n\nActions to be taken\n\nintegrate WM\n\nFinalize ML\n\nUpdate wiki: best practices\n\nMisc\n\nCosting Engine still open\n\nNext meeting\n\nTuesday, November 19th 2013 / 12:00h. GMT\n[06:08:26] Steven Sackett (Adaxa): Suman, perhaps you can tell us what has been achieved in the week?\n[06:08:52] suman ravuri: Made code changes for Manufacturing Lite integration with Libero Manufacturing and prepared the patch -- Tested and not committed\n\nCombined Aging revalued payments ( payment schedule issue is fixed ) -- Tested and not committed \n\nFixed Null Pointer Exception of Document No range look-up -- Tested and not committed (Task ADEMPIERE-233)\n\nNullpointer Exception fix on product selection in Component included Tab of Product window -- tested and not committed \n\nDelete Entities in Client is not allowing to clear the Table drop down -- fixed and not committed \n\nNull Pointer Exception on Currency selection in Payment window -- Tested and not committed\n[06:09:16] suman ravuri: I am not able to commit because of the following issue\n[06:09:30] suman ravuri: hg update -y -r 7573 --clean fatal: destination path &#39;D:\\Test\\ForecastManagement\\org.eevolution.warehouse&#39; already exists and is not an empty directory. cloning subrepo org.eevolution.warehouse from git@github.com:adempiere/extension_libero_warehouse_management.git abort: git clone error 128 in org.eevolution.warehouse (in subrepo org.eevolution.warehouse) Completed with errors\n[06:10:18] Steven Sackett (Adaxa): Suman, is that last part a question for Victor?\n[06:10:41] Victor Perez Juarez: Is same that before\n[06:11:06] Victor Perez Juarez: Need first clone of repository\n[06:11:50] suman ravuri: first clone git repository for warehouse management?\n[06:11:56] Victor Perez Juarez: For warehouse\n[06:12:43] Victor Perez Juarez: Yes as made with manufacturing and payroll\n[06:12:47] suman ravuri: when we try that we are getting access denied error\n[06:12:57] suman ravuri: will paste exact error in 2 minutes\n[06:13:39] Steven Sackett (Adaxa): while we wait shall we discuss ML and Costing?\n[06:14:04] Steven Sackett (Adaxa): ML . &quot;Made code changes for Manufacturing Lite integration with Libero Manufacturing and prepared the patch -- Tested and not committed&quot;\n[06:14:34] Steven Sackett (Adaxa): Suman, any idea when we might be able to do some testing of this?\n[06:15:16] suman ravuri: From thursday\n[06:15:24] Steven Sackett (Adaxa): ok .. thanks\n[06:15:41] Victor Perez Juarez: Suman can commit of change in ML branch before merge in 380\n[06:16:25] Victor Perez Juarez: This way can review first before break any thing\n[06:16:53] Steven Sackett (Adaxa): Victor, can I still test it that way\n[06:17:06] suman ravuri: @Victor, can i share patch for your review?\n[06:18:21] Victor Perez Juarez: Yes or commit in ManufacturingLite branch so we can test\n[06:18:45] suman ravuri: I will share patch to you\n[06:18:50] Victor Perez Juarez: When is ok then merge with release\n[06:18:55] suman ravuri: ok\n[06:19:25] Steven Sackett (Adaxa): so .. end of the week we should be ble to do some testing?\n[06:19:37] Victor Perez Juarez: Is simple it is of idea about of branches\n[06:21:17] suman ravuri: I will try that\n[06:21:42] suman ravuri: I have seen instances where i commit in specific branch and chnages are in 380rc1\n[06:22:20] suman ravuri: not very confident about branch start and branch close process\n[06:22:33] suman ravuri: but anyway I will give a try\n[06:23:10] Michael McKay: Are you using the hg flow methods?\n[06:23:46] Michael McKay: Specifically to start the branches - i mean.\n[06:24:10] suman ravuri: yes we are hg flow methods\n[06:24:39] suman ravuri: but with git integration it little unconsistent\n[06:24:48] suman ravuri: got\n[06:25:14] suman ravuri: I am using hg workbench\n[06:26:46] Steven Sackett (Adaxa): more needed  on this topic?\n[06:27:08] suman ravuri: No I think, after this call, we will ping victor\n[06:27:50] suman ravuri: Based Victors availability we will work and fix it\n[06:28:14] Steven Sackett (Adaxa): ok ... can we talk about Cost Engine?\n[06:28:42] Steven Sackett (Adaxa): Victor, have you looked at the changes made by Susanne to your work?\n[06:30:19] Steven Sackett (Adaxa): ok .. move along\n[06:30:47] Victor Perez Juarez: I review of change of susanne\n[06:30:54] Victor Perez Juarez: but need chat with she\n[06:31:28] Victor Perez Juarez: I not understand t detail , and changes are multiples\n[06:32:08] Victor Perez Juarez: I need merge with my last change now I add the warehouse as other costing level\n[06:32:48] Mario Calderón: hi, I think my connection is bad, as expected\n[06:32:49] Steven Sackett (Adaxa): are you proposing to add warehouse as a costing level in 380?\n[06:33:31] Victor Perez Juarez: is an feature of new cost engine\n[06:34:36] Steven Sackett (Adaxa): we tested what Susanne had set up .. mainly tested average costing .. and it looked good to us.  but its a big topic and we need others to also test\n[06:35:55] Steven Sackett (Adaxa): do you think you will hav time to disuss with Susanne this week .. assuming she has time..\n[06:37:36] Victor Perez Juarez: byes because not understand about Earlier Transaction t\n[06:38:08] Steven Sackett (Adaxa): can you pls explain more\n[06:39:34] Victor Perez Juarez: they delete history\n[06:40:15] Victor Perez Juarez: and create again but I understand how generate new cost before this\n[06:41:32] Steven Sackett (Adaxa): so, how should we proceed ... suggestions please.\n[06:42:39] Victor Perez Juarez: we need review Susanne changes , I testing but was complex\n[06:42:49] Mario Calderón: Victor should chat with Susanne and decide\n[06:42:58] Victor Perez Juarez: She end me incomplete patches\n[06:43:14] Victor Perez Juarez: I can not merge with of last code\n[06:43:29] Mario Calderón: Thomas Krausse from Cibex (Austria) a former SAP consultant- is also testing\n[06:43:45] Mario Calderón: @Victor: talk to her\n[06:44:01] Mario Calderón: and let&#39;s move on\n[06:44:44] Steven Sackett (Adaxa): I think they were the main outstanding items ... any others to raise?\n[06:44:59] Victor Perez Juarez: Mario I see a lot of boilerpipe java code\n[06:45:17] Victor Perez Juarez: and duplicate code , it no is good  we need improve :-)\n[06:45:44] Victor Perez Juarez: I supouse that this work but is necessary clean\n[06:46:35] Steven Sackett (Adaxa): @Victor, would you have time to look in next week?\n[06:46:58] Victor Perez Juarez: yes\n[06:47:10] Steven Sackett (Adaxa): anyone else who might be able to review it?\n[06:47:30] Steven Sackett (Adaxa): big topic .. needs many eyes I think\n[06:48:58] Victor Perez Juarez: so that we not answer of AdeV about of server , Paul and me setup a server that we to deployment\n[06:49:04] Victor Perez Juarez: http://portal.nickelnetworks.com/web/adempiere-io/home\n[06:49:13] Victor Perez Juarez: so we only need some domain\n[06:49:17] Mario Calderón: thanks to Paul!\n[06:49:24] Victor Perez Juarez: to redirect\n[06:53:26] Victor Perez Juarez: other question we leave of sourceforge form to replace by http://www.liferay.com/es/documentation/liferay-portal/6.1/user-guide/-/ai/knowledge-base?\n[06:53:57] Victor Perez Juarez: Ramiro saya me that we lost all we forum after of migration\n[06:54:26] suman ravuri: @Victor, mainteance would be difficult\n[06:54:38] suman ravuri: one of us has to maintain it\n[06:55:58] Steven Sackett (Adaxa): moving off sourceforge (or not) seems unrelated to getting 380 finished .. can it be dealt with separately a a later date\n[06:56:58] Victor Perez Juarez: I think that is important , because staring of testing and we need document this in some place\n[06:57:27] Victor Perez Juarez: we need a platform for collaboration , create of test case and document of each new feature of 380\n[06:58:16] Mario Calderón: ok\n\nthis can be tackled later\n\nwhen are we going to give the go ahead to community testing?\n[07:00:24] Victor Perez Juarez: @Mario we have a plan to testing ?\n[07:01:24] Mario Calderón: not yet Victor\n[07:01:40] Mario Calderón: we can do the same as last time\n[07:01:58] Mario Calderón: to enumerate bugs and work them off\n[07:03:06] Steven Sackett (Adaxa): well I suspect it starts shortly after we get the last bits of the code in place .. so ML and costing and WM must be the priority\n[07:05:19] suman ravuri: @Victor, any tentative date?\n[07:05:36] Mario Calderón: agree\n[07:05:48] suman ravuri: ML I will finish this week\n[07:05:54] Mario Calderón: but it would be OK if we set a date...\n[07:07:48] Steven Sackett (Adaxa): so if ML is done this week then we are only left with WM and costing to deal with\n[07:09:07] Steven Sackett (Adaxa): any other matters?\n[07:09:31] Steven Sackett (Adaxa): I need to go.. someone want to moderate?\n[07:10:13] Mario Calderón: not from my side\n[07:10:14] suman ravuri: I think we are done with agenda\n[07:10:44] Steven Sackett (Adaxa): @Mario, what other points please\n[07:11:03] Mario Calderón: not aymore, I believe...\n[07:11:34] Steven Sackett (Adaxa): ok .. misunderstood .. bye then.\n[07:11:41] Mario Calderón: bye to all\n[07:11:48] Victor Perez Juarez: bye to all\n[07:11:50] suman ravuri: bye\n[07:11:52] Mario Calderón: have a nice day/evening/night\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),g={},p=(0,n(42272).c)(g,[["render",function(e,i){const n=(0,a.E1)("ExternalLinkIcon");return(0,a.Wz)(),(0,a.An)("div",null,[t,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.QD)("a",r,[(0,a.mY)("Previous Meeting Minutes"),(0,a.K2)(n)])])]),s,l,d,(0,a.QD)("ul",null,[(0,a.QD)("li",null,[(0,a.mY)("Actions to be taken "),(0,a.QD)("ul",null,[o,c,u,v,(0,a.QD)("li",null,[(0,a.mY)("Costing Engine test instance (kind thanks to Paul Aviles): "),(0,a.QD)("a",m,[(0,a.mY)("Costing Engine Test Instance"),(0,a.K2)(n)])]),b])])]),h])}]])},81632:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-50c2a14e","path":"/community/wiki/meetings/FT-2013/FT-20131119.html","title":"FT/TT meeting minutes November 19th 2013","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes November 19th 2013","category":"Community","star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"description":"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Victor Perez, Mario Calderon, Suman Ravuri, Mike McKay Date / Time: Tuesday, November 19th 2013 / 12:00h - 13:11h GMT The meeting closed after 1 hour 11 mins","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2013/FT-20131119.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes November 19th 2013"}],["meta",{"property":"og:description","content":"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Victor Perez, Mario Calderon, Suman Ravuri, Mike McKay Date / Time: Tuesday, November 19th 2013 / 12:00h - 13:11h GMT The meeting closed after 1 hour 11 mins"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"FT/TT meeting minutes November 19th 2013\\",\\"description\\":\\"Minutes General Moderator: Steven Sackett Secretary: Mario Calderon Participants: Victor Perez, Mario Calderon, Suman Ravuri, Mike McKay Date / Time: Tuesday, November 19th 2013 / 12:00h - 13:11h GMT The meeting closed after 1 hour 11 mins\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Minutes","slug":"minutes","link":"#minutes","children":[]},{"level":2,"title":"Log","slug":"log","link":"#log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.38,"words":2214},"filePathRelative":"community/wiki/meetings/FT-2013/FT-20131119.md","localizedDate":"August 29, 2023","excerpt":"<h2> Minutes</h2>\\n<p><strong>General</strong></p>\\n<ul>\\n<li>Moderator: Steven Sackett</li>\\n<li>Secretary: Mario Calderon</li>\\n<li>Participants: Victor Perez, Mario Calderon, Suman Ravuri, Mike McKay</li>\\n<li>Date / Time: Tuesday, November 19th 2013 / 12:00h - 13:11h GMT</li>\\n<li>The meeting closed after 1 hour 11 mins</li>\\n</ul>","autoDesc":true}')}}]);