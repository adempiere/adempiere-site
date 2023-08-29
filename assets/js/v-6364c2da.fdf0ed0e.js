"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2156],{42112:(e,i,n)=>{n.r(i),n.d(i,{default:()=>l});var a=n(78e3);const t=[(0,a.uE)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li><strong>Participants:</strong> Mario Calderon, Michael McKay, Gabriel Vila, Steven Sackett, Yamel Senih, OSSAGHO, Victor Perez</li><li><strong>Date / Time:</strong> Tuesday, May 3rd 2016 / 12:00h - 12:59h GMT</li><li><strong>The meeting closed after 3 hrs</strong></li></ul><p><strong>Agenda</strong></p><ol><li>Review last week&#39;s discussion</li><li>Review Road Map http://wiki.adempiere.net/Road_Map</li><li>Look at actions and progress from last week</li><li>Costing issues – review progress since last week</li><li>hotfix/3.8.0#002 close – we’re past due. Review last week&#39;s discussion</li><li>Review and set action list</li><li>Next meeting</li><li>Pending</li></ol><p><strong>Discussion</strong></p><ol><li><p><strong>Review last week&#39;s discussion:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Review Road Map http://wiki.adempiere.net/Road_Map:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Look at actions and progress from last week:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Costing issues – review progress since last week:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>hotfix/3.8.0#002 close – we’re past due. Review last week&#39;s discussion:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Review and set action list:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Next meeting:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Pending:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li></ol><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Following is the meeting log - time is in GMT -6\n[03/05/2016 04:57:56 a. m.] Michael McKay: Morning all.\n[03/05/2016 04:59:54 a. m.] Gabriel Vila: Good morning\n[03/05/2016 04:59:56 a. m.] Steven _: Hi Mike\n[03/05/2016 05:00:08 a. m.] Steven _: ok if I &#39;visit&#39;\n[03/05/2016 05:01:47 a. m.] Michael McKay: Hi Steve, your insight if always welcome.\n[03/05/2016 05:02:42 a. m.] Michael McKay: Waiting for a few others to come on-line. Perhaps review last week notes while we wait.\n[03/05/2016 05:03:07 a. m.] Michael McKay: Steve, what time is it for you.\n[03/05/2016 05:04:29 a. m.] Steven _: 2200\n[03/05/2016 05:03:57 a. m.] Steven _: 2200\n[03/05/2016 05:05:16 a. m.] Michael McKay: OK. Start in 10 minutes if others are on-line. I&#39;ll post a proposed agenda in a few minutes.\n[03/05/2016 05:08:06 a. m.] Mario Calderón: Hello everybody\n[03/05/2016 05:09:31 a. m.] Mario Calderón: Steven and I are the extremes: for me it is 6am\n[03/05/2016 05:09:37 a. m.] Steven _: Colin asked a question about costing last week which I have a view on .. just a personal view as there are no absolutes here... IFRS is a &#39;reporting&#39; standard not a &#39;recording&#39; standard and as such does not solve the question of how to record stuff ... which is the core of our costing problem .. just says by whatever method you use the value has to meet certain criteria about cost, replacement and realisable value ... so no help there. then the next issue is that valuation and recording can be driven by local tax department expectations and Mario has explained to me that methods I might use in Australia would not meet requirements in Central America... so we are on our own to figure it out\n[03/05/2016 05:10:43 a. m.] Yamel Senih: Hello everybody\n[03/05/2016 05:10:45 a. m.] Yamel Senih: Morning\n[03/05/2016 05:12:39 a. m. | Edited 05:12:54 a. m.] Steven _: our method for average invoice price just loads all the costs into the Cost Details and the current cost price .. but whenever we post a document that would affect inventory value we check to make surethat all the product that the oncost relates to is still in inventory otherwise we split the oncost invoice and put part to cost of sales and part to inventory ... this solves all those &quot;but what if the period is closed&quot; issues quite effectively.\n[03/05/2016 05:15:10 a. m.] Steven _: so we never get into that position of having a queue of costs and a queue of material transactions and then having to recalculate the costs from scratch as if all the costs came in before anything was sold.... which I understand is what may be required elsewhere ... although I dont see how that works since you will always be hitting closed period boundaries.\n[03/05/2016 05:15:24 a. m.] Yamel Senih: i have a trouble for connect\n[03/05/2016 05:15:42 a. m.] Yamel Senih: i reat the message in the afternon\n[03/05/2016 05:15:48 a. m.] Steven _: I n my view it is this question of what is the best approach that needs to be agreed before worrying about how to code for it.\n[03/05/2016 05:15:49 a. m.] Yamel Senih: sorry\n[03/05/2016 05:18:20 a. m.] Steven _: @Mario, can you comment on whether the approach we use to deal with landed costs and inventory value would be against the rules you have to deal with...\n[03/05/2016 05:20:02 a. m.] Michael McKay: Proposed agenda:\n1. Review last week&#39;s discussion\n2. Review Road Map http://wiki.adempiere.net/Road_Map\n3. Look at actions and progress from last week\n4. Costing issues – review progress since last week\n5. hotfix/3.8.0#002 close – we’re past due.\n6. Review and set action list\n[03/05/2016 05:20:23 a. m.] Michael McKay: I&#39;m behind in putting the minutes up on the wiki.\n[03/05/2016 05:20:27 a. m.] *** Group call ***\n[03/05/2016 05:20:27 a. m.] *** Missed group call. ***\n[03/05/2016 05:20:36 a. m.] Victor Perez: Hi\n[03/05/2016 05:20:45 a. m.] Mario Calderón: Ok\n[03/05/2016 05:21:02 a. m.] OSSAGHO: Hi\n[03/05/2016 05:22:16 a. m.] Mario Calderón: Thanks for the explanation Steven\n[03/05/2016 05:22:45 a. m.] Mario Calderón: Let&#39;s start?\n[03/05/2016 05:24:52 a. m.] Victor Perez: Ok\n[03/05/2016 05:25:13 a. m.] Mario Calderón: 1 Review last week&#39;s discussion\n[03/05/2016 05:29:26 a. m.] Mario Calderón: Any comments?\n[03/05/2016 05:33:10 a. m.] Michael McKay: Need to keep the actions/decision records separate from the minutes - they are long and too detailed to review effectively.\n[03/05/2016 05:34:37 a. m.] Mario Calderón: Testing : I saw some Sahi commits were done\n[03/05/2016 05:35:33 a. m.] Michael McKay: Yes. Missing a directory in the commit - I&#39;ll fix it today. Also need to make it easier to launch from the IDE.\n[03/05/2016 05:37:29 a. m.] Victor Perez: I saw múltiples test field but not testing\n[03/05/2016 05:38:33 a. m.] Victor Perez: Mario I finish with pos and wms\n[03/05/2016 05:39:31 a. m.] Victor Perez: My funciona consultant are testing so i think that soon can release 380#002\n[03/05/2016 05:39:48 a. m.] Mario Calderón: So I think the POS can be integrated these days right Victor, Yamel?\n[03/05/2016 05:40:27 a. m.] Victor Perez: Yamel said m that are testing new pay selection\n[03/05/2016 05:40:38 a. m. | Edited 05:40:54 a. m.] Victor Perez: too\n[03/05/2016 05:41:55 a. m.] Mario Calderón: Another items of last meeting? What about Costs?\n[03/05/2016 05:43:30 a. m. | Edited 05:43:40 a. m.] Victor Perez: I fixed\n[03/05/2016 05:44:09 a. m.] Victor Perez: I have not more report issue\n[03/05/2016 05:44:53 a. m.] Steven _: Victor, is there a public test system with the fixes?\n[03/05/2016 05:44:58 a. m.] *** Group call ***\n[03/05/2016 05:44:58 a. m.] *** Missed group call. ***\n[03/05/2016 05:45:36 a. m.] Steven _: Victor, is there a public test system with the fixes?\n[03/05/2016 05:46:06 a. m.] Victor Perez: Demo online ?\n[03/05/2016 05:46:14 a. m.] Steven _: yes\n[03/05/2016 05:46:34 a. m.] Victor Perez: Nop but would build to tomorrow\n[03/05/2016 05:48:42 a. m.] Michael McKay: We had a good discussion last week but there are still issues we could discuss. For example, if using average PO, should the PO be a mandatory document before an MR can be completed? Same with average Invoice. Otherwise, the MR can be completed with no cost data to post. This can be corrected after the fact with an adjustment in the cost details when the Generate Cost Details is run, but it leaves an odd hole until that happens.\n[03/05/2016 05:50:07 a. m.] Mario Calderón: Difficult item...\n[03/05/2016 05:50:31 a. m.] Michael McKay: I think it should be simple to force the mandatory conditions but I&#39;m not sure it would be user friendly to all business processes.\n[03/05/2016 05:52:36 a. m.] Michael McKay: An alternative is to generate the cost details and repost the associated MRs when an adjustment is created. This could also be done easily. The zero MR posting would be temporary and fixed as soon as the match inv/PO was created and posted.\n[03/05/2016 05:57:49 a. m.] Michael McKay: Perhaps we leave this for now and move on. We talked about it for over six hours last week.\n[03/05/2016 05:58:00 a. m. | Edited 05:58:10 a. m.] Steven _: re: I think it should be simple to force the mandatory conditions but I&#39;m not sure it would be user friendly to all business processes.\n[03/05/2016 05:58:36 a. m.] Steven _: If you are going to use PO costing then I would just force the need for a completed PO\n[03/05/2016 05:58:48 a. m.] Steven _: seems silly to do otherwise.\n[03/05/2016 05:58:54 a. m.] Victor Perez: Mm but get an average need a cost some place\n[03/05/2016 06:00:11 a. m.] Mario Calderón: Agree to move on. Anything else?\n[03/05/2016 06:00:58 a. m.] Victor Perez: I not sure if is good practice create a material receipt without PO\n[03/05/2016 06:01:55 a. m.] Michael McKay: Perhaps we can step out of the details and discuss the process of solving it. Then get a team to work on it. I don&#39;t think we will do so here, now.\n[03/05/2016 06:02:30 a. m.] Steven _: just one thing on PO costing so an existing useful thing is not broken .. if you set your costing level to Batch and fill in the field called &#39;Cost Price&quot; on the PO line then all receipts linked to that PO go in and out inventory at the cost you have specified .. so it is like a std cost per purchase order ... this is good functionality to retain.\n[03/05/2016 06:03:20 a. m.] Steven _: and another part of PO costing...\n[03/05/2016 06:03:58 a. m.] Victor Perez: Tes standard only need a cost\n[03/05/2016 06:04:43 a. m.] Victor Perez: And the seed is cost dimensión ir some cost of product PO info\n[03/05/2016 06:07:07 a. m.] Mario Calderón: I suggest as Mike to discuss this item later here and move on... there are interesting views.\n[03/05/2016 06:07:32 a. m.] Steven _: bye all ... late here\n[03/05/2016 06:07:53 a. m.] Michael McKay: Thanks Steve!. Have a good night.\n[03/05/2016 06:12:11 a. m.] Michael McKay: Mario - move on to the hotfix / release?\n[03/05/2016 06:13:40 a. m.] Mario Calderón: Yes, let&#39;s talk about it\n[03/05/2016 06:13:46 a. m.] Mario Calderón: Bye Steven\n[03/05/2016 06:15:03 a. m.] Mario Calderón: I think the POS can be integrated now. What do Victor and Yamel think?\n[03/05/2016 06:18:00 a. m.] Michael McKay: Looks like we lost Victor and Yamel is off-line until the afternoon.\n[03/05/2016 06:19:45 a. m.] Michael McKay: Victor was going to review the software development procedure to look at how best to release the work quickly. We&#39;ve added a lot of stuff in a &quot;hotfix&quot; and it needs a good test phase this time. Weekly releases as he discussed in the past would be easier.\n[03/05/2016 06:21:02 a. m.] Victor Perez: Maybe\n[03/05/2016 06:21:13 a. m.] Mario Calderón: Ok. Just one question. Due to the huge amount of changes I wonder if 3.9 wouldn&#39;t fit better as release number than 3.8.1 ? Just a question.\n[03/05/2016 06:21:29 a. m.] Victor Perez: It depend of contribution\n[03/05/2016 06:21:49 a. m.] Victor Perez: If have alot may be\n[03/05/2016 06:22:11 a. m.] Mario Calderón: POS, WMS, payment selection. ..\n[03/05/2016 06:22:28 a. m.] Victor Perez: If not the release need accum\n[03/05/2016 06:22:35 a. m.] Victor Perez: Some\n[03/05/2016 06:23:51 a. m.] Mario Calderón: Ok..\n[03/05/2016 06:30:01 a. m.] Michael McKay: Decision, action then? Release early, release often.\n[03/05/2016 06:33:14 a. m.] Mario Calderón: Right it was just a comment\n[03/05/2016 06:34:38 a. m.] Mario Calderón: Now when can we integrate? If Victor and Yamel cannot tell now, perhaps later here\n[03/05/2016 06:36:30 a. m.] Mario Calderón: It should be next days\n[03/05/2016 06:38:03 a. m.] Michael McKay: Mario, suggest we leave it for today. I&#39;ll take on the minutes and action lists and post these in the wiki so its is easier to review. If we can get a plan for the release activity, it would be great.\n[03/05/2016 06:38:38 a. m.] Mario Calderón: Ok same opinion\n[03/05/2016 06:39:04 a. m.] Mario Calderón: We can write and comment here\n[03/05/2016 06:39:32 a. m.] Michael McKay: Ok. Thanks.\n[03/05/2016 06:40:00 a. m.] Mario Calderón: Bye to all and have a good day\n[03/05/2016 06:48:38 a. m.] Victor Perez: Hi Mario we can call test cicle\n[03/05/2016 06:49:09 a. m.] Victor Perez: So we should test the main functionality\n[03/05/2016 06:50:02 a. m.] Victor Perez: I know that Yamel people testing now\n[03/05/2016 07:08:25 a. m.] Mario Calderón: Ok\n[03/05/2016 07:09:04 a. m.] Mario Calderón: Best would be to integrate, build and publish so everybody can test\n[03/05/2016 07:09:16 a. m.] Victor Perez: I can deployment\n[03/05/2016 07:09:30 a. m.] Mario Calderón: This would be great\n[03/05/2016 07:09:42 a. m.] Victor Perez: Last build in demo server\n[03/05/2016 07:10:43 a. m.] Mario Calderón: That would be really great, so everyone -including non team members - can check it out\n[03/05/2016 07:11:08 a. m.] Mario Calderón: I have a seed created\n[03/05/2016 07:11:48 a. m.] Mario Calderón: 381 , missing only the POS xmls\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9)],s={},l=(0,n(13860).Z)(s,[["render",function(e,i){return(0,a.wg)(),(0,a.iD)("div",null,t)}]])},7586:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-6364c2da","path":"/community/wiki/meetings/FT-2016/FT-20160503.html","title":"FT/TT meeting minutes May 3rd 2016","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes May 3rd 2016","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"summary":"Minutes General Participants: Mario Calderon, Michael McKay, Gabriel Vila, Steven Sackett, Yamel Senih, OSSAGHO, Victor Perez; Date / Time: Tuesday, May 3rd 2016 / 12:00h - 12:59h ","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2016/FT-20160503.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes May 3rd 2016"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Minutes","slug":"minutes","children":[]},{"level":2,"title":"Log","slug":"log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.87,"words":2661},"filePathRelative":"community/wiki/meetings/FT-2016/FT-20160503.md","localizedDate":"August 29, 2023"}')}}]);