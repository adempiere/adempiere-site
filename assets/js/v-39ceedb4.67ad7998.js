"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5492],{59152:(e,i,n)=>{n.r(i),n.d(i,{default:()=>r});var a=n(68152);const t=[(0,a.IL)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li><strong>Participants:</strong> Mario Calderon, Michael McKay, Steven Sackett, Yamel Senih, OSSAGHO, Victor Perez</li><li><strong>Date / Time:</strong> Tuesday, May 24th 2016 / 12:00h - 12:59h GMT</li><li><strong>The meeting closed after 2 hrs</strong></li></ul><p><strong>Agenda</strong></p><ol><li>Pending</li><li>Other Items</li><li>Integration of Financial Report Improvements from Adaxa.</li><li>Integration of Fixed Assets functionality</li><li>Next meeting</li><li>Pending</li></ol><p><strong>Discussion</strong></p><ol><li><p><strong>Pending:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Other Items:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Integration of Financial Report Improvements from Adaxa:</strong></p><ul><li>Discussion about integrating financial report improvements contributed by Adaxa.</li></ul></li><li><p><strong>Integration of Fixed Assets functionality:</strong></p><ul><li>Discussion about integrating the Fixed Assets functionality.</li></ul></li><li><p><strong>Next meeting:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li><li><p><strong>Pending:</strong></p><ul><li>No specific details provided in the minutes.</li></ul></li></ol><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[24/05/2016 05:16:31 a. m.] Mario Calderón: Good morning everybody\n[24/05/2016 05:16:48 a. m.] Yamel Senih: Hello Mario\n[24/05/2016 05:16:54 a. m.] Yamel Senih: Morning everybody\n[24/05/2016 05:17:08 a. m.] Eduardo Lopez: Morning Yamel, Mario\n[24/05/2016 05:17:17 a. m.] Yamel Senih: Hi Eduardo\n[24/05/2016 05:17:28 a. m.] Steven _: Hi All\n[24/05/2016 05:18:32 a. m.] Victor Perez: Hi\n[24/05/2016 05:19:35 a. m.] Enrique Ruibal: Hi @all\n[24/05/2016 05:20:01 a. m.] Mario Calderón: The main task is the integration of different topics into the trunk.\nThere is the POS, pay selection...\nWhere are we now?\n[24/05/2016 05:21:49 a. m.] Yamel Senih: The last week I was debug the POS with Victor and Mario\n[24/05/2016 05:22:09 a. m.] Victor Perez: If we can close all issue then this week\n[24/05/2016 05:22:22 a. m.] OSSAGHO: hi\n[24/05/2016 05:26:45 a. m. | Edited 05:26:55 a. m.] Victor Perez: Hi\n[24/05/2016 05:27:19 a. m.] Victor Perez: Ossagno\n[24/05/2016 05:28:56 a. m.] Steven _: Mario, if you are the chairman please let me know when I can ask an unrelated question...\n[24/05/2016 05:29:55 a. m.] Mario Calderón: Just do it now Steven\n[24/05/2016 05:30:00 a. m.] Steven _: ok...\n[24/05/2016 05:31:34 a. m.] Steven _: it relates to the financial report writer improvements ... all the code is on sourceforge (sorry if wrong place) .. the documentation is in wiki.adempiere in the 390 release. I would like to see it in adempiere before someone grabs it and puts in idempiere ... how can we achieve this?\n[24/05/2016 05:32:55 a. m.] Steven _: it only affects reporting so should not break stuff\n[24/05/2016 05:33:38 a. m. | Edited 05:35:09 a. m.] Steven _: i would also like to have nicer example reports in GW ... for the last 11 years!\n[24/05/2016 05:33:44 a. m.] Steven _: but now we can\n[24/05/2016 05:34:23 a. m.] Steven _: however if others do not think it is important we will stop worrying about it.\n[24/05/2016 05:34:44 a. m.] Mario Calderón: How easy is to integrate it Steven?\n[24/05/2016 05:35:03 a. m.] Gabriel Vila: Hi\n[24/05/2016 05:35:45 a. m.] Victor Perez: I saw the new change of FA from Armen\n[24/05/2016 05:37:23 a. m.] Steven _: @Mario ... I assume quite easy but it is not a question for a non-tech to answer\n[24/05/2016 05:37:33 a. m.] Victor Perez: I think that can integraste for 390 is easy because is compatible with Fa that was added\n[24/05/2016 05:38:12 a. m.] Mario Calderón: We can vote here if it should be included. ..\n[24/05/2016 05:38:37 a. m.] Steven _: @Victor .. FA assets needs a discussion also ...hence my email to you but perhaps we can conclude FIn Reports\n[24/05/2016 05:38:39 a. m.] Victor Perez: Before i will as armen create an branches for intégrate of new functionality\n[24/05/2016 05:38:57 a. m.] Mario Calderón: Perhaps you can shortly explain it Steven\n[24/05/2016 05:39:15 a. m.] Steven _: well the documentation is all there so I guess people can read and then vote\n[24/05/2016 05:39:27 a. m.] Steven _: quick description..\n[24/05/2016 05:39:57 a. m.] Steven _: adds a print format header to top of Fin Report and allows addition of lots of context variables and logo\n[24/05/2016 05:39:58 a. m.] Victor Perez: Yes I saw and can be fastly\n[24/05/2016 05:40:29 a. m.] Victor Perez: Because we intégrate to adempiere Before\n[24/05/2016 05:40:56 a. m.] Mario Calderón: So it seems a good and improving enhancement\n[24/05/2016 05:41:01 a. m.] Steven _: extends the &quot;relative period&quot; so youcan specify a range not just a single period and grab info without having to (say) create 3 columns and then add a calc column to print\n[24/05/2016 05:41:12 a. m.] Victor Perez: This change only update\n[24/05/2016 05:41:35 a. m.] Steven _: adds a report source fnction to columns .. same as for rows ... so you can create cross tab type reports .. eg cost centres across the page\n[24/05/2016 05:42:01 a. m.] Steven _: adds some display logic so you can suppress values like zero\n[24/05/2016 05:42:25 a. m. | Edited 05:42:36 a. m.] Steven _: shows how to create a trial balance (finally!) in the Fin Report writer\n[24/05/2016 05:42:42 a. m.] Victor Perez: About of financial report i am agree to add in adempiere\n[24/05/2016 05:43:13 a. m.] Steven _: addas userlist 1 and 2 as columns that can be used\n[24/05/2016 05:43:17 a. m.] Victor Perez: Steven show Before of change and are nice\n[24/05/2016 05:43:55 a. m.] Steven _: I guess it means you can produce quite nice reports without having to use Jasper.\n[24/05/2016 05:44:14 a. m.] Steven _: also finally allows to put a lines above and below totals\n[24/05/2016 05:44:43 a. m.] Steven _: and is smart enough to know what to do when you change from &quot;show details&#39; to &#39;not show details&#39;\n[24/05/2016 05:44:55 a. m.] Victor Perez: Paul can create a Branch and send of pull request with changes , we can review and intégrate\n[24/05/2016 05:45:35 a. m.] Enrique Ruibal: @all report enhancements from Adaxa are documented in the wiki and on my opinion are a great enhancemente\n[24/05/2016 05:46:51 a. m.] Victor Perez: Yes Steven we need included\n[24/05/2016 05:46:54 a. m.] Mario Calderón: And the integration can be accomplished by replacing classes?\n[24/05/2016 05:47:57 a. m.] Steven _: there will be migration scripts for the db changes\n[24/05/2016 05:49:00 a. m. | Edited 05:50:01 a. m.] Steven _: I am guessing it is here https://sourceforge.net/p/adempiere/contribution-adaxa/ci/3700d45511491316ea7244c42c1cfa591ba2b496/ will get it confirmed\n[24/05/2016 05:49:12 a. m.] Mario Calderón: Who is in favor of integrating it?\n[24/05/2016 05:49:58 a. m.] Victor Perez: @Mario the github workflow is vía request pull\n[24/05/2016 05:51:04 a. m.] Enrique Ruibal: +1\n[24/05/2016 05:52:28 a. m.] Victor Perez: Mike Makey documented here of procedure http://wiki.adempiere.net/ADempiere_Version_Control\n[24/05/2016 05:53:04 a. m.] Yamel Senih: I agree with financial report\n[24/05/2016 05:53:52 a. m.] Yamel Senih: The source forget should be unsupported yet\n[24/05/2016 05:53:56 a. m.] Yamel Senih: I think\n[24/05/2016 05:55:40 a. m.] Steven _: any other voters?\n[24/05/2016 05:56:47 a. m.] Mario Calderón: +1\n[24/05/2016 05:57:02 a. m.] Victor Perez: + 1 to improves of financial report\n[24/05/2016 05:58:13 a. m. | Edited 05:58:30 a. m.] Steven _: i will speak to Paul about creating a branch .. and he can explain it to me  :-(\n[24/05/2016 05:58:20 a. m.] Victor Perez: + 1 of Armen improves FA was added after 370\n[24/05/2016 05:58:21 a. m.] OSSAGHO: +1\n[24/05/2016 06:00:03 a. m.] Steven _: before a decision is made on the FA ... we recreated fixed assets because we found it unworkable and our customer would not accept ... so it would seem strange to vote for either one without reviewing what each has to offer\n[24/05/2016 06:00:33 a. m. | Edited 06:00:43 a. m.] Steven _: Armen sent a user manual today and a link to where it could be tested.\n[24/05/2016 06:01:02 a. m.] Steven _: should we not review what each has to offer before making a decision?\n[24/05/2016 06:01:31 a. m.] Mario Calderón: Easiest would be if Paul can create a &quot;pull request&quot; so the whole bunch of files can be committed at once\n[24/05/2016 06:02:00 a. m.] Victor Perez: Steven of armen work was review in 370 and was included the main contribution\n[24/05/2016 06:02:00 a. m.] Steven _: the adaxa fixed asset manual was sent out a while ago for people to review but NOTHING is as boring as fixed assets so most will not have looked\n[24/05/2016 06:02:10 a. m.] Victor Perez: I have in producción\n[24/05/2016 06:02:14 a. m.] Steven _: ok\n[24/05/2016 06:02:41 a. m.] Mario Calderón: I haven&#39;t :$\n[24/05/2016 06:02:57 a. m.] Victor Perez: I think that new change need be review and validate if is ok then can intégrate\n[24/05/2016 06:03:57 a. m. | Edited 06:04:06 a. m.] Steven _: well Armen said they have added a full set of system accounts in acct schema as we have .. then inherit into Asset group .. so likely to be a number of similarities\n[24/05/2016 06:04:11 a. m.] Enrique Ruibal: @steven is the FA documentation on your 3.90 contribution list? otherwise could you move it somewhere in that section_\n[24/05/2016 06:04:19 a. m.] Victor Perez: Yes steven i review but not complait with adempiere Standard\n[24/05/2016 06:04:32 a. m.] Victor Perez: In design\n[24/05/2016 06:04:52 a. m.] Victor Perez: When armen send we reviewed too\n[24/05/2016 06:05:01 a. m.] Steven _: @Enrique .. I can send to you ...but unless there is some intention to review and take up it may not be good to add to the 390 list\n[24/05/2016 06:05:37 a. m.] Victor Perez: The Main issue of adaxa was that no use of document for each trx\n[24/05/2016 06:05:42 a. m.] Steven _: perhaps we add in 390 list and ask for feedback\n[24/05/2016 06:05:50 a. m.] Victor Perez: As other document\n[24/05/2016 06:06:25 a. m.] Steven _: every trx in the adaxa version has a &#39;Fixed Asset Journal&quot; so I do not understand..\n[24/05/2016 06:06:37 a. m.] Victor Perez: Now fa use a document and type document as any other in adempiere\n[24/05/2016 06:06:47 a. m.] Steven _: there is a journal to add, to depreciate, to dispose of ..\n[24/05/2016 06:07:09 a. m.] Victor Perez: Not is more a simple gl journal\n[24/05/2016 06:07:10 a. m.] Enrique Ruibal: @steven please upload it there so it is more visible that way way can review it\n[24/05/2016 06:07:29 a. m.] Steven _: @Enrique ... will send\n[24/05/2016 06:07:43 a. m.] Enrique Ruibal: @steven great\n[24/05/2016 06:10:13 a. m.] Steven _: @Enrique ... sent to iscapnet.com address\n[24/05/2016 06:10:25 a. m.] Yamel Senih: I agree +1 FA and Financial report\n[24/05/2016 06:11:35 a. m.] Steven _: if we have Armens fixed assets in 370 and he has made improvements then logically they should be taken up regardless of what other offerings are around\n[24/05/2016 06:11:47 a. m.] Steven _: so +1\n[24/05/2016 06:12:24 a. m.] Steven _: except I forgot I dont have a vote\n[24/05/2016 06:12:29 a. m. | Edited 06:25:44 a. m.] Victor Perez: I think that firt adaxa should intégrate of adempiere 380 Fa in your fa adaxa\n[24/05/2016 06:13:03 a. m.] Victor Perez: So the integration of improves of adaxa Would come to 390\n[24/05/2016 06:13:22 a. m.] Victor Perez: Adaxa FA is bases old approach\n[24/05/2016 06:13:37 a. m.] Steven _: it is likely that the different approach may make it not work\n[24/05/2016 06:13:59 a. m. | Edited 06:25:25 a. m.] Victor Perez: And adempiere 380 we use of Teo and Armen approach\n[24/05/2016 06:15:02 a. m. | Edited 06:18:58 a. m.] Victor Perez: All FA was refactory and the gl journal was remplace to document and document type as other document\n[24/05/2016 06:15:20 a. m.] Mario Calderón: @ Steven: if you&#39;re here, you can vote.\n[24/05/2016 06:15:30 a. m.] Steven _: we created mostly our own tables so there would be less conflict ... look at the adaxa stuff another time and just proceed with Armens if Victor is using in production and it is doing a good job.\n[24/05/2016 06:16:25 a. m.] Enrique Ruibal: @Steven.. thanks !\n[24/05/2016 06:16:42 a. m. | Edited 06:20:15 a. m.] Victor Perez: Now FA have your selft cicle document status draft , in process , complete for asset addition , asset disposal etc\n[24/05/2016 06:17:34 a. m.] Enrique Ruibal: +1 on FA and I will upload to Adaxa&#39;s contribution list\n[24/05/2016 06:18:58 a. m.] Mario Calderón: @Enrique :can you integrate test and tell us the results?\n[24/05/2016 06:21:18 a. m.] Steven _: Mario, like i said in email .. may be more simple if i set up some test data in a gardenworld and post a link .. the documentation is the user manual so anyone interested can review it\n[24/05/2016 06:22:36 a. m.] Mario Calderón: Ok....\n[24/05/2016 06:27:37 a. m. | Edited 06:32:56 a. m.] Victor Perez: I have a presition of FA Teo &amp;&amp; a Armen approach was included from 380\n[24/05/2016 06:30:01 a. m.] Enrique Ruibal: I will be happy to test if a test environment is provided\n[24/05/2016 06:32:08 a. m.] Steven _: @Enrique ... i will set up but we really need a working version with Armens changes as they may solve all the old problems and we have to look no further.. i will look at Armens test site\n[24/05/2016 06:33:00 a. m. | Edited 06:33:15 a. m.] Steven _: if it solves all problems may be adaxa will just adopt that and halt other stuff.\n[24/05/2016 06:33:24 a. m.] Enrique Ruibal: @steven please do and let me know\n[24/05/2016 06:33:55 a. m.] Steven _: have to go .. have a good day all....\n[24/05/2016 06:34:12 a. m.] Steven _: bye\n[24/05/2016 06:36:01 a. m.] Mario Calderón: Good night steven\n[24/05/2016 06:36:31 a. m.] Mario Calderón: Talking about the POS, we&#39;re doing the final tests\n[24/05/2016 06:36:50 a. m.] Enrique Ruibal: great Mario!\n[24/05/2016 06:38:07 a. m.] Mario Calderón: Just reversals and devolution test pending\n[24/05/2016 06:38:20 a. m.] Mario Calderón: With Victor and Yamel\n[24/05/2016 06:43:07 a. m.] Mario Calderón: Hope this week we finish\n[24/05/2016 06:45:10 a. m.] Yamel Senih: I also hope ending the POS the current week\n[24/05/2016 06:45:31 a. m.] Yamel Senih: Steve you test the payment selection?\n[24/05/2016 06:45:54 a. m.] Michael McKay: Arriving too late.\n[24/05/2016 06:46:04 a. m.] Michael McKay: +1 on the adaxa finacial report\n[24/05/2016 06:46:13 a. m.] Michael McKay: +1 on the FA stabilization\n[24/05/2016 06:46:23 a. m.] Mario Calderón: Hi Mike\n[24/05/2016 06:46:43 a. m.] Enrique Ruibal: Hi Mike.. I have a question about the minutes from technical and functional temas\n[24/05/2016 06:46:45 a. m.] Enrique Ruibal: teams\n[24/05/2016 06:47:12 a. m.] Enrique Ruibal: I wanted to help udating those but I am confused I don&#39;t know where to follow up\n[24/05/2016 06:47:25 a. m.] Enrique Ruibal: there seems so be several pages\n[24/05/2016 06:47:30 a. m.] Michael McKay: Thanks.\n[24/05/2016 06:47:49 a. m.] Enrique Ruibal: is it possible that we can simplify the meetings docuemntation? and put it on a visible place\n[24/05/2016 06:49:00 a. m.] Michael McKay: I put a link here: http://wiki.adempiere.net/Technical_Team#Meetings_of_Technical_Team\n[24/05/2016 06:49:27 a. m.] Michael McKay: and then past the meeting thread into the new page.\n[24/05/2016 06:49:42 a. m.] Michael McKay: We need to keep a running list of actions somewhere as well.\n[24/05/2016 06:51:14 a. m.] Enrique Ruibal: however there used to be another link for functional teams as well.. I think that there is actually one team.. some working on thecnical issues and some on functional issues and also some working on both thecnical and functional issues\n[24/05/2016 06:51:53 a. m.] Michael McKay: Yes - we are both meeting together these days.\n[24/05/2016 06:52:15 a. m.] Enrique Ruibal: I think we should have everything on one page.. for something coming from the outside would be difficult to follow up... even from ourselves :-)\n[24/05/2016 06:53:08 a. m.] Victor Perez: I had an minute format that use Before\n[24/05/2016 06:53:18 a. m.] Victor Perez: For time no use now\n[24/05/2016 06:53:29 a. m.] Victor Perez: But we can use again\n[24/05/2016 06:54:07 a. m.] Enrique Ruibal: I think the layout is OK and I like Mike&#39;s idea of keeping the action lists on top\n[24/05/2016 06:54:39 a. m.] Victor Perez: Before public here\n[24/05/2016 06:56:25 a. m.] Victor Perez: I can share of source\n[24/05/2016 06:58:23 a. m.] Michael McKay: Perhaps the wiki is not the right place but I prefer it since it is simple to create new pages. Could we use the portal? What ever we use, it has to be easy since even cutting and pasting the minutes seems to be a hassle.\n[24/05/2016 06:59:18 a. m.] Michael McKay: If I think about who uses the minutes, it is mostly the meeting members. I can&#39;t see people from outside going through those detailed discussions.\n[24/05/2016 06:59:50 a. m.] Victor Perez: Yes\n[24/05/2016 06:59:54 a. m.] Enrique Ruibal: Mike the wiki is fine..\n[24/05/2016 07:00:29 a. m.] Victor Perez: The issue wiki now exist an confusión for domain\n[24/05/2016 07:00:45 a. m.] Victor Perez: We need be redundant\n[24/05/2016 07:00:54 a. m.] Victor Perez: Ana ser in 2 place\n[24/05/2016 07:02:56 a. m.] Enrique Ruibal: Victor I just thought if we can have those minutes more visible for every one and in a single please.. if we put those in two places is going to be even more confusing as we already have functional team and techncial team minutes but most of those are actually the same\n[24/05/2016 07:05:01 a. m.] Victor Perez: I am agree in this\n[24/05/2016 07:05:20 a. m.] Victor Perez: But muy question is same tha Mike\n[24/05/2016 07:05:36 a. m.] Victor Perez: Can be improve in portal\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9)],s={},r=(0,n(42272).c)(s,[["render",function(e,i){return(0,a.Wz)(),(0,a.An)("div",null,t)}]])},21437:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-39ceedb4","path":"/community/wiki/meetings/FT-2016/FT-20160524.html","title":"FT/TT meeting minutes May 24th 2016","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes May 24th 2016","category":"Community","star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"description":"Minutes General Participants: Mario Calderon, Michael McKay, Steven Sackett, Yamel Senih, OSSAGHO, Victor Perez Date / Time: Tuesday, May 24th 2016 / 12:00h - 12:59h GMT The meeting closed after 2 hrs","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2016/FT-20160524.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes May 24th 2016"}],["meta",{"property":"og:description","content":"Minutes General Participants: Mario Calderon, Michael McKay, Steven Sackett, Yamel Senih, OSSAGHO, Victor Perez Date / Time: Tuesday, May 24th 2016 / 12:00h - 12:59h GMT The meeting closed after 2 hrs"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"FT/TT meeting minutes May 24th 2016\\",\\"description\\":\\"Minutes General Participants: Mario Calderon, Michael McKay, Steven Sackett, Yamel Senih, OSSAGHO, Victor Perez Date / Time: Tuesday, May 24th 2016 / 12:00h - 12:59h GMT The meeting closed after 2 hrs\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Minutes","slug":"minutes","link":"#minutes","children":[]},{"level":2,"title":"Log","slug":"log","link":"#log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.95,"words":3284},"filePathRelative":"community/wiki/meetings/FT-2016/FT-20160524.md","localizedDate":"August 29, 2023","excerpt":"<h2> Minutes</h2>\\n<p><strong>General</strong></p>\\n<ul>\\n<li><strong>Participants:</strong> Mario Calderon, Michael McKay, Steven Sackett, Yamel Senih, OSSAGHO, Victor Perez</li>\\n<li><strong>Date / Time:</strong> Tuesday, May 24th 2016 / 12:00h - 12:59h GMT</li>\\n<li><strong>The meeting closed after 2 hrs</strong></li>\\n</ul>","autoDesc":true}')}}]);