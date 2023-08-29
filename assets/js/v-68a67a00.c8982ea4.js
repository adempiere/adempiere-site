"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2162],{54836:(e,i,n)=>{n.r(i),n.d(i,{default:()=>v});var a=n(78e3);const t=(0,a.uE)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li>Moderator: Steven Sackett</li><li>Secretary: Mario Calderon</li><li>Participants: Mario Calderon, Suman Ravuri, Mike McKay</li><li>Date / Time: Tuesday, November 12th 2013 / 12:00h - 13:02h GMT</li><li>The meeting closed after 52 mins</li></ul><p><strong>Agenda</strong></p><ol><li>Minutes of Previous Meeting</li><li>Actions taken by RM</li><li>Actions to be taken</li><li>Misc</li><li>Next meeting</li></ol><p><strong>Minutes of Previous Meeting</strong></p>',6),s={href:"http://www.adempiere.com/FT/TT_meeting_minutes_November_5th_2013",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("Previous Meeting Minutes"),r=(0,a.uE)('<p><strong>Actions taken by RM</strong></p><ul><li>Select All in Swing Tables -- merged the changes and committed into 380rc1</li><li>Configurable Dashboard fields order is missing in Dashboard -- fixed and committed.</li><li>CashFlow build path resolved (In Server instance liberocashflow.jar is not included ) -- fixed and committed</li><li>Test case document preparation for GL Reconciliation, Smart Report, Delete Entities, Select All in Swing Tables</li><li>GL reconciliation web version merged</li></ul><p><strong>Actions to be taken</strong></p><ul><li>Integrate WM</li><li>Finalize ML</li><li>Update wiki: best practices</li></ul><p><strong>Misc</strong></p><ul><li>Costing Engine still open</li></ul><p><strong>Next meeting</strong></p><ul><li>Tuesday, November 19th 2013 / 12:00h. GMT</li></ul><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><p>Following is the meeting log - time is in GMT -6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Monday, 11 November 2013\n[20:04:25] Mario Calderón: https://sourceforge.net/p/adempiere/discussion/610546/thread/90046f63/\nTuesday, 12 November 2013\n[05:55:07] * Mario Calderón invited ravindar_11star\n[05:55:14] Mario Calderón: hello\n[05:55:56] Michael McKay: Morning.\n[05:55:58] * Ravindar Thummarajula left the chat (Only people who have accepted contact request can be added).\n[05:56:37] suman ravuri: Hi Mario\n[05:56:58] Steven Sackett (Adaxa): hi All\n[05:57:10] * Mario Calderón invited ravindar_11star\n[05:57:30] suman ravuri: Hi All\n[05:57:39] suman ravuri: Good morning to many people\n[05:57:47] suman ravuri: Good evening to Steve\n[05:58:01] Steven Sackett (Adaxa): hi..\n[05:58:24] Steven Sackett (Adaxa): anyone mind if I paste in a copy of last weeks minutes summary here?\n[05:58:30] Ravindar Thummarajula: Hi All\n[05:58:48] Mario Calderón: @Steven: go ahead\n[05:58:55] Steven Sackett (Adaxa): FT/TT meeting minutes November 5th 2013\n\nMinutes\n\n\n\nGeneral\n\nModerator: Victor Perez\n\nSecretary: Mario Calderon\n\nParticipants: Mario Calderon, Suman Ravuri, Victor Perez, Mike McKay\n\nDate / Time: Tuesday, November 5th 2013 / 12:00h - 13:02h GMT\n\nThe meeting closed after 1 hour 2 mins\n\nAgenda\n\nMinutes of Previous Meeting\n\nActions taken by RM\n\nActions to be taken\n\nMisc\n\nNext meeting\n\nMinutes of Previous Meeting\n\nhttp://www.adempiere.com/FT/TT_meeting_minutes_October_29th_2013\n\nActions taken by RM\n\nGL Reconciliaition -- integrated the changes of web version and tested( Thanks to Mike)\n\nSmartJSP reports improvements -- Integrated and tested\n\nCashflow is tested -- Code changes are committed by Victor. Tested by WTC\n\nDelete Entities Client support -- Integrated and Tested ( Based on mike package)\n\nRole Template -- Integrated ( Re-generated the Role Template with System Client)\n\nProcess Gear reverting back un-nesessary changes -- Integrated.\n\nAging report with revaluation integration with ADempiere 380 -- Issues are there with PackIn (https://adempiere.atlassian.net/browse/ADEMPIERE-238)\n\nSelect All in Swing Tables -- merged the changes and tested. We have build issues with CTable.java we commented the code which is creating build issues before we commit. We are working on it to fix. Mike can help us here.Yet to be tested.\n\nActions to be taken\n\nlast commit on ADEMPIERE-41 wasn&#39;t included in the merge. I has a few important fixes. RM took only GL reconciliation web. RM will merge it this week.\n\nVictor will merge Warehouse Management\n\nMisc\n\nGenerate model is fixed\n\nPending: Manufacturing Light\n\nPending: Costing Engine\n\nNext meeting\n\nTuesday, November 12th 2013 / 12:00h. GMT\n[05:59:10] Steven Sackett (Adaxa): =========================================\n[05:59:33] Steven Sackett (Adaxa): are we expecting anyone else?\n[05:59:38] Steven Sackett (Adaxa): Victor?\n[06:01:01] Steven Sackett (Adaxa): secretary??  moderator??\n[06:01:18] Mario Calderón: I think I can be secretary this time\n[06:01:44] Mario Calderón: moderator: Steven perhaps?\n[06:01:55] Steven Sackett (Adaxa): ok..\n[06:01:59] Steven Sackett (Adaxa): shall we start\n[06:02:05] Mario Calderón: +1\n[06:02:27] Steven Sackett (Adaxa): There are some matters in the minutes that we are probably waiting on a comment from Victor\n[06:03:01] Steven Sackett (Adaxa): perhaps till Victor joins us we can start with Suman&#39;s report of what was done in the week.\n[06:03:24] Steven Sackett (Adaxa): Suman?\n[06:03:26] suman ravuri: 1. Select All in Swing Tables -- merged the changes and committed into 380rc1\n\n2. Configurable Dashboard fields order is missing in Dashboard -- fixed and committed.\n\n3. CashFlow build path resolved (In Server instance liberocashflow.jar is not included ) -- fixed and committed\n\n4. test case document preparation for GL Reconciliation,Smart Report, Delete Entities, Select All in Swing Tables\n\n5. GL reconciliation web version merged\n[06:04:10] Steven Sackett (Adaxa): ok .. getting close to the end :-)\n[06:04:41] suman ravuri: Issues which need attention\n[06:04:42] suman ravuri: 1. Combined Aging (Exclude the packin and loaded the migrations from sql file) -- There is an issue while running the report,if there are multiple Payment Schedules for Single invoice (https://adempiere.atlassian.net/browse/ADEMPIERE-238)\n\n\n\n2. Warehouse Management files are not able to merge, we have following issue.\n\n hg update -y -r 7573 --clean\n\nfatal: destination path &#39;D:\\Test\\ForecastManagement\\org.eevolution.warehouse&#39; already exists and is not an empty directory.\n\n\n\ncloning subrepo org.eevolution.warehouse from git@github.com:adempiere/extension_libero_warehouse_management.git\n\n\n\nabort: git clone error 128 in org.eevolution.warehouse (in subrepo org.eevolution.warehouse)\n\n\n\nCompleted with errors, see above.\n[06:05:21] Steven Sackett (Adaxa): We waiting for Victor comment on that?\n[06:05:43] suman ravuri: Second one Victor needs to comment\n[06:05:56] suman ravuri: 1st one will need discussion\n[06:06:03] Steven Sackett (Adaxa): I see it.\n[06:06:24] suman ravuri: and we need to finalize ML and libero merge\n[06:06:32] Steven Sackett (Adaxa): I dont think we ever used a payment schedule or tested for it.  Dont know what to suggest.\n[06:06:52] suman ravuri: May be Mario or mike?\n[06:06:59] suman ravuri: can help us\n[06:07:17] Steven Sackett (Adaxa): Mario, u ever use Payment Schedules?\n[06:07:40] Mario Calderón: no, but we can test\n[06:08:01] Michael McKay: The info payment window deals with multiple payment schedules but it is one schedule per invoice.  Do you have multiple schedules or multiple payments?\n[06:08:19] Steven Sackett (Adaxa): may not be anything to test. I doubt we even thought about it when doing the work.\n[06:10:01] Steven Sackett (Adaxa): I was mainly using the report to calculate outstanding AR and AP an dconvert to accounting currency .. never used it to check aging.\n[06:10:12] suman ravuri: Payment term can have muliple schedules\n[06:10:25] suman ravuri: so it can lead to issue\n[06:11:03] Steven Sackett (Adaxa): for my usage it did not matter about the payment term, just the total outstanding.\n[06:11:32] Steven Sackett (Adaxa): perhaps we re-name the report!\n[06:11:48] Michael McKay: Not sure how that would work.  Payment terms should have a 1:1 rule with the schedule.  The schedule can have multiple parts.  Multiple payments are simply one invoice by the schedule I.E 4 equal payments over 4 months.\n[06:13:16] Michael McKay: Total outstanding remains the same as the schedules are not documents.  Payments are allocated to the earlier schedules until that scheduled amount is fully allocated and then the next.  It might affect total outstanding on a date.\n[06:13:32] Steven Sackett (Adaxa): an invoice can only have a single payment term but that payment term can have multiple planned payments but as long as the function that calculates the open amount works then the report still does what i needed it to\n[06:15:00] Steven Sackett (Adaxa): so .. if we hide the split by aging buckets in this report it will work ok (I think) .. the old report is still there and it provides the aging that was always there\n[06:15:01] suman ravuri: T_CombinedAgining table has invoice-id is part of  primary key\n[06:16:00] Steven Sackett (Adaxa): is that an issue?\n[06:16:34] suman ravuri: as there is muliple entries for same invoice it is throwing exception\n[06:16:46] Steven Sackett (Adaxa): ok\n[06:17:10] suman ravuri: we can c_payschedule_id also as part primary key then problem will be solved\n[06:17:20] suman ravuri: if we can add\n[06:17:49] Steven Sackett (Adaxa): thats technical .. let u decide :-)\n[06:17:53] suman ravuri: [5:35:36 PM] suman ravuri: https://adempiere.atlassian.net/browse/ADEMPIERE-238\n\n\n\n&lt;&lt;&lt; \n[06:18:20] suman ravuri: kindly look at the error I copied in issue\n[06:19:40] Michael McKay: @suman - agreed.\n[06:20:26] Steven Sackett (Adaxa): &quot;To request an account, please contact your JIRA administrators.&quot;  who is that?\n[06:21:00] suman ravuri: So I am going with that option\n[06:21:42] suman ravuri: @Mike, you are facing same problem after warehouse integration?\n[06:23:47] Michael McKay: Haven&#39;t tested in a week.  Helping a company here with audit.  I&#39;ll check later this week and send a note.\n[06:24:09] suman ravuri: ok thanks\n[06:24:49] Steven Sackett (Adaxa): @Suman, u think yr suggestion will fix the combined aging problem?\n[06:25:02] Steven Sackett (Adaxa): so we can move on?\n[06:25:28] Michael McKay: I have to leave folks - I&#39;ll read the rest later.  Have a great day/night.\n[06:25:36] Steven Sackett (Adaxa): bye\n[06:25:56] Mario Calderón: bye Mike\n[06:26:04] suman ravuri: bye\n[06:26:39] Steven Sackett (Adaxa): @Suman, u think yr suggestion will fix the combined aging problem? so we can move to next?\n[06:27:06] suman ravuri: yes Steve\n[06:27:33] Steven Sackett (Adaxa): ok .. can you comment on what remains to be done with warehouse management?\n[06:28:11] suman ravuri: At this point I do not enough data to comment\n[06:28:12] Steven Sackett (Adaxa): I saw yr comment above but dont know what it means as far as getting it fixed\n[06:29:02] Steven Sackett (Adaxa): are we waiting on some help from Victor?\n[06:29:40] suman ravuri: Victor merged warehouse into 380/rc1\n[06:29:56] suman ravuri: I am not able take latest update into machine\n[06:30:00] suman ravuri: that is the issue\n[06:30:21] Mario Calderón: Victor wanted to complete WM this days\n[06:30:58] Steven Sackett (Adaxa): ok .. so we wait for Victor on WM. lets move on.\n[06:31:05] Steven Sackett (Adaxa): Manuf Light?\n[06:32:09] Steven Sackett (Adaxa): I passed on the review from Tony (tspc)  to Mario, Victor, Suman.  It seemed ok to me.  Thoughts?\n[06:33:04] Mario Calderón: Victor agreed &quot;on principle&quot; with Tony&#39;s remarks. It would be to carry them out.\n[06:33:24] Steven Sackett (Adaxa): Suman, you also agree?\n[06:34:11] suman ravuri: I agree\n[06:34:32] suman ravuri: but I think we will not move isPatthom to replenish tabs now\n[06:34:40] suman ravuri: is that a correct understanding\n[06:34:49] Steven Sackett (Adaxa): yes .. can be later\n[06:34:52] suman ravuri: yes\n[06:35:02] suman ravuri: I am fine with suggestion, will start working on this\n[06:35:30] Steven Sackett (Adaxa): ok.\n[06:35:43] Steven Sackett (Adaxa): so that leaves costing?\n[06:38:16] Mario Calderón: Susanne passed Victor all the changes and error fixes she has\n[06:39:33] Mario Calderón: now it&#39;s up to Victor to accept/reject/integrate them.\n\nNext would be to merge with RC.\n\n\n\nWe should decide wheteher to include CE, because we will need heavy tests.\n[06:40:02] Mario Calderón: as costs have a big impact on ERP\n[06:40:23] suman ravuri: as it is high impacting feature, my suggestion would be defer it for next release\n[06:40:46] suman ravuri: but I am ok to go with TT &amp; FT team decision\n[06:40:50] Steven Sackett (Adaxa): from the testing we did it looked a good improvement and well worth having .. but it does not a lot more testing\n[06:41:34] Steven Sackett (Adaxa): is it something that would be easy to roll back if we found problems in testing .. then bring out later release?\n[06:41:58] Mario Calderón: yes, this is possible\n[06:42:22] Mario Calderón: it can be commited as one changeset, and reverted the same way\n[06:42:53] Steven Sackett (Adaxa): Suman, can we try that?\n[06:43:53] suman ravuri: we can a give a try\n[06:44:20] Steven Sackett (Adaxa): ok .. anything further we can do tonight?\n[06:44:45] Mario Calderón: not from me\n\nI will contact Victor and inform him\n[06:44:51] suman ravuri: Adempiere best practices documentation\n[06:45:26] suman ravuri: what ever we have as the link that does not cover all aspects\n[06:45:40] suman ravuri: this is where i got some comments from Victor\n[06:45:46] suman ravuri: can some one update the document?\n[06:45:50] suman ravuri: I mean wik\n[06:45:51] suman ravuri: wiki\n[06:45:54] Mario Calderón: yes, of course!\n[06:46:10] Steven Sackett (Adaxa): one small thing from me ... we gave a patch to overcome a problem with incorrect realised exchange loss and asked u to discard.  we now think it is fixed .. as it is a bug fix do you want to try to add it?  We are still testing but it looks good.\n[06:46:28] Mario Calderón: bug fix always welcome\n[06:46:31] suman ravuri: kindly share it me\n[06:46:33] suman ravuri: :)\n[06:46:51] Steven Sackett (Adaxa): tomorrow I hope\n[06:46:54] suman ravuri: ok\n[06:47:06] suman ravuri: who would take the ownership of wiki update?\n[06:47:58] Mario Calderón: actually, the one who has the idea....\n\nDo you have the exact text? Then you just add it...\n[06:48:16] Steven Sackett (Adaxa): Mike does great wiki stuff .. can we ask him to add if you have all the text?\n[06:48:35] suman ravuri: Victor seems to have all the stuff\n[06:49:01] suman ravuri: I can add based on the comments i recieved from Victor\n[06:49:34] Steven Sackett (Adaxa): Mario, will you be talking to Victor soon?\n[06:49:36] Mario Calderón: yes, of course\n[06:49:49] Steven Sackett (Adaxa): perhaps you can ask him?\n[06:50:10] Mario Calderón: yes, today\n\nI think he must have confused the time; yeterday we said we would meet here\n[06:50:47] Steven Sackett (Adaxa): I saw him working real late his time :-(  not surprised.\n[06:51:27] Steven Sackett (Adaxa): we are finished? before my midnight!\n[06:51:44] Steven Sackett (Adaxa): 10 9 8 7 .....\n[06:51:57] Steven Sackett (Adaxa): ok .. bye\n[06:52:18] suman ravuri: bye steve\n[06:52:21] suman ravuri: good night\n[06:52:57] Mario Calderón: bye\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),d={},v=(0,n(13860).Z)(d,[["render",function(e,i){const n=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",s,[l,(0,a.Wm)(n)])])]),r])}]])},95133:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-68a67a00","path":"/community/wiki/meetings/FT-2013/FT-20131112.html","title":"FT/TT meeting minutes November 12th 2013","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes November 12th 2013","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"summary":"Minutes General Moderator: Steven Sackett; Secretary: Mario Calderon; Participants: Mario Calderon, Suman Ravuri, Mike McKay; Date / Time: Tuesday, November 12th 2013 / 12:00h - 13","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2013/FT-20131112.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes November 12th 2013"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Minutes","slug":"minutes","children":[]},{"level":2,"title":"Log","slug":"log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.38,"words":2515},"filePathRelative":"community/wiki/meetings/FT-2013/FT-20131112.md","localizedDate":"August 29, 2023"}')}}]);