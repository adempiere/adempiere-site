"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3951],{68482:(e,n,i)=>{i.r(n),i.d(n,{default:()=>o});var t=i(78e3);const a=(0,t.uE)('<h2 id="minutes" tabindex="-1"><a class="header-anchor" href="#minutes" aria-hidden="true">#</a> Minutes</h2><p><strong>General</strong></p><ul><li><strong>Moderator:</strong> Steven Sackett</li><li><strong>Secretary:</strong> Mario Calderon</li><li><strong>Participants:</strong> Steven Sackett, Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney, Victor Perez</li><li><strong>Date / Time:</strong> Tuesday, January 21th 2014 / 12:00h - 13:27h GMT</li><li><strong>The meeting closed after 1 hour 27 mins</strong></li></ul><p><strong>Agenda</strong></p><ol><li><strong>Minutes of Previous Meeting</strong></li><li><strong>Actions taken by RM</strong></li><li><strong>Actions to be taken</strong></li><li><strong>Misc</strong></li><li><strong>Next meeting</strong></li></ol><p><strong>Minutes of Previous Meeting</strong></p>',6),s={href:"http://www.adempiere.com/FT/TT_meeting_minutes_January_14th_2014",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("Previous Meeting Minutes - January 14th 2014"),d=(0,t.uE)('<p><strong>Actions taken by RM</strong></p><ul><li>To be delivered</li></ul><p><strong>Actions to be taken:</strong></p><ul><li>Steven will test the program to update all the dates and periods in Gardenworld.</li><li>Pending an issue Victor reported to Suman concerning a migration script.</li></ul><p><strong>Misc:</strong></p><ul><li>Test instances to be hosted either by Metas (Adempiere e.V. server) or by Nickelworks (Paul Aviles), depending on what&#39;s easier and simpler to carry out.</li><li>SAHI: It would be good to have the tests set up as part of the nightly build.</li><li>Using the same software development procedure to keep a working set of tests while others are developed.</li><li>Mike will set up the test suite locally and then on Amazon for testing.</li><li>Reset costings: Discussed and explained, but no agreement reached about integration. See full discussion below.</li></ul><p><strong>Next Meeting:</strong></p><ul><li><strong>Date / Time:</strong> Tuesday, January 28th 2014 / 12:00h GMT</li></ul><h2 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> Logs</h2><p>Following is the meeting log - time is in GMT -6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Tuesday, 21 January 2014\n[04:01:01] Mario Calderón: hello everybody\n[04:02:53] Colin ROONEY: hi Mario\n[04:03:09] Colin ROONEY: you&#39;re a little early today? or did you decide to change times?\n[04:10:30] Mario Calderón: ;) hi Colin\n\nI have to upload last log\n[04:19:03] Mario Calderón: http://www.adempiere.com/FT/TT_meeting_minutes_January_14th_2014\n[05:59:48] Steven Sackett (Adaxa): Hi All...\n[06:00:05] Victor Perez Juarez: Hi all\n[06:00:23] Mario Calderón: hi everybody\n[06:02:27] suman ravuri: Hi All\n[06:02:49] Colin ROONEY: hi\n[06:03:07] Steven Sackett (Adaxa): shall we start?\n[06:03:21] Mario Calderón: same roles?\n[06:03:47] Steven Sackett (Adaxa): any objections?\n[06:04:10] Steven Sackett (Adaxa): seems not .. lets proceed\n[06:04:13] Victor Perez Juarez: No to me\n[06:04:46] Steven Sackett (Adaxa): previous meeting minutes are....\n[06:04:48] Steven Sackett (Adaxa): FT/TT meeting minutes January 14th 2014\n\nMinutes\n\n\n\nGeneral\n\nModerator: Steven Sackett\n\nSecretary: Mario Calderon\n\nParticipants: Steven Sackett, Karsten Thiemann, Mike McKay, Mario Calderon, Pradeep Lavania, Colin Rooney\n\nDate / Time: Tuesday, January 14th 2014 / 12:00h - 13:51h GMT\n\nThe meeting closed after 1 hour 51 mins\n\nAgenda\n\nMinutes of Previous Meeting\n\nActions taken by RM\n\nActions to be taken\n\nMisc\n\nNext meeting\n\nMinutes of Previous Meeting\n\nhttp://www.adempiere.com/FT/TT_meeting_minutes_January_07th_2014\n\nActions taken by RM\n\nSuman sent an email with 2 attachments. the first was a plan to create a program to delete the entries associated with receiving and valuing inventory so we could delete stuff and then retest without having to re-enter all the data.\n\nGarden World update: Updating the values of &#39;Date&#39; Or &#39;Date+Time&#39; Type fields; proposal to use a form for modifying Date Fields. However the work may have been done already (at adaxa). Steven will co-ordinate with Suman to avoid duplication.\n\nMisc\n\nMario followed up with hosting our test instances through ADeV. ADeV was contacted; Norbert said he would support it. Also Paul Aviles offered his support whenever we asked for it.\n\nKarsten added an Community Test page to the wiki but I think that most links are outdated http://www.adempiere.com/Release_380LTS_Community_Test.\n\nMike asked for the permission of making some major changes to the SAHI scripts in the ADempiere_test_suite.\n\nHe&#39;s done a lot of work in his contribution test suite and the two are not compatible any longer.\n\nThe participants agreed.\n\nWe tried last time to make this an automated test of the nightly build. I&#39;d like to try this again and may need to access the server to get it running.\n\nEssentially, the adempiere_test_suite becomes another task for Husdon(?).\n\nIt was discussed about community testing\n\nJira as tool\n\n1.create issue 2.triage pending 3.triage in progress 4.Resolved (if a quick fix) or Open and then 5.Closed\n\npending: description how to get an account, assign for a bug, find the code of the rc (or the online instance running the webui) and commit the test result and put it on the community test page\n\nNext meeting\n\nDate / Time: Tuesday, January 21st 2014 / 12:00h GMT\n[06:05:38] Steven Sackett (Adaxa): Can we start with an update from Suman .. even though you were on leave I understand\n[06:07:39] Steven Sackett (Adaxa): pending that ... I should be able to test the program to update all the dates and periods in gardenworld tomorrow .. hope it works as planned :-)\n[06:07:43] Victor Perez Juarez: I repo\n[06:08:25] suman ravuri: Steve, I will update you in 2 minutes\n[06:08:31] Steven Sackett (Adaxa): thanks.\n[06:08:43] Victor Perez Juarez: I report an issue with migration script i not sure if was solve\n[06:09:45] suman ravuri: @Victor, there was comment updated in issue\n[06:09:59] Steven Sackett (Adaxa): in the last meeting there was a lot of discussion about Jira and producing instructions for testers about how to use it .. any progress with this training info?\n[06:10:00] suman ravuri: with steps\n[06:10:45] suman ravuri: @Victor, did you get chance to review it\n[06:11:14] Victor Perez Juarez: https://adempiere.atlassian.net/login?dest-url=%2Fplugins%2Fservlet%2Fmobile%23issue%2FADEMPIERE-252\n[06:12:06] Victor Perez Juarez: I sorry\n[06:12:17] Victor Perez Juarez: URL: https://adempiere.atlassian.net/browse/ADEMPIERE-252\n[06:14:09] Steven Sackett (Adaxa): Mario, can we decide where the test instances will be hosted?\n[06:15:09] Mario Calderón: I think\n[06:15:32] Mario Calderón: Norbert offered his support yesterday, asking Victor for details, but he seemed quite busy\n[06:16:32] Mario Calderón: while Paul is I think quicker to respond\n[06:17:01] Mario Calderón: I think Victor might decide what is better/easier to manage\n[06:17:08] Victor Perez Juarez: I will deployment in same place that use to show of functionality to postgres\n[06:17:37] Steven Sackett (Adaxa): If Paul&#39;s offer still stands maybe we should ask him to help\n[06:17:46] Steven Sackett (Adaxa): is there any objection?\n[06:18:21] Victor Perez Juarez: So i need an instance for oracle\n[06:18:30] Mario Calderón: not from my side\n[06:18:30] Steven Sackett (Adaxa): can we have a show of hands on this please\n[06:18:44] Mario Calderón: +1\n[06:18:48] Steven Sackett (Adaxa): +1\n[06:19:07] Steven Sackett (Adaxa): Suman, Colin?\n[06:19:11] Colin ROONEY: +1\n[06:20:02] Michael McKay: +1 if I&#39;m voting here.\n[06:20:16] Steven Sackett (Adaxa): Victor .. ok with that?\n[06:20:48] Victor Perez Juarez: So I hope Norbert give access, he is worrie because can not give root access\n[06:21:21] Steven Sackett (Adaxa): well if Paul hosts it then that wont be an issue\n[06:22:13] Victor Perez Juarez: But is complex make any thing without access\n[06:22:16] Steven Sackett (Adaxa): Looks like we are agreed to ask Paul to host .. what is next steps to get the two instances up .. I assume a postgres instance and an Oracle instance?\n[06:23:35] Victor Perez Juarez: Yes Steven about of postgres is ready to install\n[06:24:03] Steven Sackett (Adaxa): can you make that happen with Paul?\n[06:24:24] Victor Perez Juarez: I only am wait can run migration script without issue\n[06:24:55] Steven Sackett (Adaxa): which is what you were asking Suman about?\n[06:25:31] Victor Perez Juarez: So i need ask he if can give other for oracle\n[06:25:41] suman ravuri: @Victor, I will update you today\n[06:27:10] Steven Sackett (Adaxa): @Victor, can you ask Paul today?\n[06:27:12] suman ravuri: Just now we updated comments in issue\n[06:29:07] suman ravuri: @Victor, do you want to convert that pack in into migration script?\n[06:29:26] suman ravuri: or you execute pack in through some automation script?\n[06:31:50] Steven Sackett (Adaxa): seems Victor is away for minute ... can we deal with other item in meantime?  SAHI? Mike..\n[06:32:21] Michael McKay: Hi - yes.\n[06:32:39] Victor Perez Juarez: https://adempiere.atlassian.net/plugins/servlet/mobile#issue/ADEMPIERE-252\n[06:33:10] Victor Perez Juarez: Suman never use 2pack to migration\n[06:33:42] suman ravuri: Ok I will convert that into sql\n[06:33:43] Victor Perez Juarez: You need complete sql script or revert\n[06:34:33] suman ravuri: Will let you know an update in next 2 hours\n[06:34:38] Victor Perez Juarez: @Steven yes I can ask to Paul\n[06:34:54] Steven Sackett (Adaxa): thanks\n[06:35:51] Michael McKay: On Sahi - it would be good to have the tests setup as part of the nightly build.  We can use the same software dev procedure to keep a working set of tests while others are developed.  I&#39;ll set up the test suite accordingly.\n[06:36:35] Steven Sackett (Adaxa): is this something that you require  assistance from others on?\n[06:37:16] Victor Perez Juarez: About of domain to new server is ready http://www.adempiere.io\n[06:37:43] Michael McKay: I&#39;m not an expert on Jenkins at all.  I&#39;ll try to get a version working locally and then on Amazon so I can test with it.  Its the area I&#39;ll need help with.\n[06:38:03] Mario Calderón: Tobi knows Jenkins well\n[06:38:47] Mario Calderón: you can contact him; he configured last time thenightly build\n[06:39:48] Steven Sackett (Adaxa): is more info required here about SAHI or can we move on?\n[06:40:27] Steven Sackett (Adaxa): move on then...\n[06:40:32] Mario Calderón: +1\n[06:41:43] Steven Sackett (Adaxa): @Suman .. I am interested to know what we need to do to develop the program that lets us test and retest the costing engine for different costing methods without having to re-enter new data every time..\n[06:41:45] Victor Perez Juarez: Suman would Also i know that wallking tree using jenkins\n[06:42:03] Michael McKay: I&#39;ll have to leave - but will read later.  Have a good day.\n[06:42:20] Steven Sackett (Adaxa): bye .. thanks\n[06:42:20] Victor Perez Juarez: Bye Mike\n[06:42:33] Mario Calderón: bye Mike\n[06:42:57] suman ravuri: @Steve, would like to hear feedback pn my design\n[06:43:10] suman ravuri: anyone got chance to review design I proposed?\n[06:43:37] Steven Sackett (Adaxa): well .. I read it but not qualified to comment ..\n[06:44:16] Victor Perez Juarez: What design Suman?\n[06:44:17] Michael McKay: Just before I leave - the functionality seemed similar to the &quot;re-activate&quot; doc action.  Can you use that instead of creating a new one?\n[06:44:33] Mario Calderón: @Suman: design of what?\n[06:45:34] Victor Perez Juarez: @Mike what functionality ?\n[06:45:41] Steven Sackett (Adaxa): I haveit open .. can I post here? will lose the image but not fatal I think\n[06:45:50] Mario Calderón: +1\n[06:46:10] Steven Sackett (Adaxa): Reset Costings\n\n\n\nWe can add one more Document Action in List validation with name Reset.\n\n\n\nWe will add one new interface (ExtendedDocAction.java) by extending DocAction.java, it will have STATUS_Reset member variable and method declaration for it.\n\n\n\npublic static final String STATUS_Reset = &quot;RS&quot;;\n\npublic boolean resetIt();\n\n\n\nWhat is the Document, we need to support for Costing Reset, we will implement newly created interface into that document, So that we can override the resetIt() method to delete the account postings of implemented document and delete the entries which were created as a part of completeIt of same document like, When we complete Invoice,we are also creating MatchPO and MatchInv will be created for PO invoices. We need to delete the postings of MatchPO and MatchInv and also delete the MatchPO and MatchInv entries of PO Invoice.\n\n\n\nBased on the completeIt() method&#39;s logic of each document, we need to have proper logic inside resetIt() method.\n\n  \n\nWe will show the reset doc action for completed status documents for selected documents.\n\n \n\nIf User selects reset action and click on right mark button, it will delete the postings of current document and it&#39;s dependents can be deleted along with posting details. And current document will be ready for re-use (It will be in-progress status).\n\n\n\nWe can implement standard Adempiere process to reset posting details of bulk entries of particular document. This process will take Table Name,Date range as input and it will pickup all the completed entries within that range and reset the posting details and reset the basic details (like processed = &#39;N&#39;, docstatus = &#39;Inprogress&#39;) to allows user to make changes.\n\n\n\n    We will be supporting following documents in this implementation.\n\nInvoice\n\nInOut\n\nInventory\n\nMovement\n\nMatchInv and MatchPO\n\nMPPOrder\n\nMProjectIssue\n[06:46:29] Michael McKay: @Victor - relates to suman&#39;s proposed solution to reset dates. as just pasted in.\n[06:47:25] Mario Calderón: reset costing is good, because sometimes you need it, but now we can&#39;t.\n\n\n\nIf it works 100%, it would be a good feature.\n[06:48:09] Steven Sackett (Adaxa): @Suman ... reads ok to me in terms of what we need to achieve .. cant comment on the &quot;how&quot;\n[06:48:33] suman ravuri: Mikes comments can be discussed\n[06:48:42] suman ravuri: does reactivate delete postings?\n[06:48:58] Steven Sackett (Adaxa): no\n[06:49:31] Michael McKay: Back for a sec.  It does for the GL.  It isn&#39;t enabled for other docs.\n[06:50:29] Steven Sackett (Adaxa): posting is the easy part .. if you change the costing method in the acct schema, reset cache  and repost it should post with the new method provided all cost details etc have been deleted\n[06:50:55] Victor Perez Juarez: Mmmm I think that document status never is using for account\n[06:51:02] Steven Sackett (Adaxa): so the main part is deleting the cost details and undoing any changes that were made to current cost etc\n[06:51:28] Victor Perez Juarez: Adempiere use of post button to account\n[06:51:38] Mario Calderón: if it works this way, +1 from me\n[06:52:15] suman ravuri: @Victor, any comments?\n[06:52:30] Steven Sackett (Adaxa): surely we should be able to post a document in material receipts, invoices etc, identify what it changed and then figure out what needs to be &#39;undone&#39;?\n[06:53:00] Victor Perez Juarez: So that any thing for account should be use of posting button not doc status\n[06:54:59] Victor Perez Juarez: Of you need repost a document we have repost and can force so I not understand Why we need a reset status\n[06:55:02] Mario Calderón: do we have to vote?\n[06:55:30] Mario Calderón: who does the repost?\n[06:55:39] suman ravuri: how do we reset actions we did in completeit?\n[06:56:25] Victor Perez Juarez: Have an business case\n[06:56:31] Victor Perez Juarez: ?\n[06:56:53] Steven Sackett (Adaxa): yes.. example\n[06:58:42] Steven Sackett (Adaxa): we have a PO for a widget with a value of $20 ... and a PO based costing method ... so the product costs should be set to $20 ... then change the costing method to ave invoice and get an invoice for $30 then all the accounting should change\n[06:59:35] Mario Calderón: I suggest that Victor and Susanne cast their opinion on it\n[06:59:57] Steven Sackett (Adaxa): so to aid testing we need to be able to return the documents to draft staus, delete any postings and any m_cost related info, change the costing method and then complete the docs again and see the impact\n[07:00:38] Steven Sackett (Adaxa): how its done .. thats too technical for me.\n[07:00:52] Victor Perez Juarez: @Steven if you change of costing method Then is simple\n[07:01:15] Steven Sackett (Adaxa): good ..  so what needs to be done? what Suman suggested?\n[07:01:23] Colin ROONEY: current period only I assume?  i.e. if other periods are closed?  What if a document is closed?\n[07:02:02] Steven Sackett (Adaxa): i wpuld expect it to be able to be returned to a draft state as if it had never been completed.\n[07:02:02] Victor Perez Juarez: 1.- change of setting in account schema\n[07:02:48] Steven Sackett (Adaxa): ... or the costing method override on a product category\n[07:02:52] Victor Perez Juarez: 2 .- execute generate cost transaction with new cost method\n[07:03:34] Steven Sackett (Adaxa): This message has been removed.\n[07:03:37] Victor Perez Juarez: 3.- it process only can be execute for open period\n[07:04:25] Steven Sackett (Adaxa): @Victor .. any reason why a period can not be re-opened?\n[07:05:08] Victor Perez Juarez: When generate transaction cost is execute of post account is delete and of document is mark as not posting\n[07:05:43] Victor Perez Juarez: Then you can send to re posting\n[07:07:27] Victor Perez Juarez: @Steven of reason only is because income was close or show to stocker\n[07:07:36] Steven Sackett (Adaxa): What do we expect to happen if we reverse correct say an invoice with landed costs?  do we support that or ban it?  what do we expect to happen if we reverse correct this invoice and half the product has already been sold?  wha if part was sold last month and that period is closed.. lots of ugly scenarios to check.\n[07:07:52] Victor Perez Juarez: But if you open All period then you can\n[07:08:28] Mario Calderón: one reason against reopening a period would be if you have  sent an official cost report to the finance ministry\n[07:08:39] Steven Sackett (Adaxa): any way.. thats why having a tool to let us rerun things looked like it would be helpful.\n[07:09:16] Victor Perez Juarez: Yes in our country is ilegal change method cost in year period\n[07:10:03] Steven Sackett (Adaxa): I think disallowing reverse correction of some invoices may be necessary to maintain the integrity of the stock values\n[07:10:28] Steven Sackett (Adaxa): particularly if you have already sold some of the stock it related to.\n[07:10:32] Victor Perez Juarez: Yes you can reverse\n[07:10:41] Victor Perez Juarez: It not is issue\n[07:11:06] Victor Perez Juarez: The reverse have a cost too\n[07:11:43] Steven Sackett (Adaxa): I dont agreee but we wont solve it here ;:-)\n[07:12:19] Steven Sackett (Adaxa): @Suman, does any of the above help clarify things?\n[07:12:20] Victor Perez Juarez: We need use same logic that any other document\n[07:13:03] suman ravuri: repost looks ok to me, as long as we don&#39;t want to undo any transactions we have done as part of complete it\n[07:13:29] Victor Perez Juarez: If you need revert any effect then. Revert of document as any account\n[07:13:46] suman ravuri: if all the costing calcuation logic for accounting is inside postIt() method then it would work\n[07:14:05] Steven Sackett (Adaxa): ok\n[07:14:25] suman ravuri: reverseCorrect will create contra postings which will create confusion\n[07:14:40] Victor Perez Juarez: I not agree in set a new document status\n[07:15:16] Steven Sackett (Adaxa): I also agree no new doc status ..\n[07:15:19] Victor Perez Juarez: Of document status never are using for generate account posting\n[07:15:40] Mario Calderón: should we move on?\n[07:15:45] Steven Sackett (Adaxa): @Victor, does all changes to cost detail etc happen as a result of the posting process?\n[07:16:40] Steven Sackett (Adaxa): if it does we can just use &#39;reset accounting&#39; to clear the postings and then just repost.. nothing else would be needed.\n[07:17:07] Victor Perez Juarez: Of new cost engine no generate cost detail when posting\n[07:17:48] Steven Sackett (Adaxa): is cost detail created by Complete or Post?\n[07:18:34] Victor Perez Juarez: @suman of account of a reverse is to complait an account principales\n[07:19:24] Victor Perez Juarez: Of cost detail is créate same time that mtrasaction\n[07:19:47] Victor Perez Juarez: Si that answare is we complete\n[07:20:17] Victor Perez Juarez: When complete\n[07:20:34] Steven Sackett (Adaxa): is that saying it happens when you Complete?  because m_transaction is created for unposted material receipts\n[07:21:03] Steven Sackett (Adaxa): in which case it is more than just the posting that needs to be deleted\n[07:21:36] suman ravuri: [6:49:20 PM] Victor Perez Juarez: @suman of account of a reverse is to complait an account principales\n\n\n\n&lt;&lt;&lt; I completely agree, But here we are trying to have mechanism to make QA team life easy. May not have this feature in production\n[07:22:10] Michael McKay: Back for a second - isn&#39;t this only being done for testing variations of costing?  Do we need a fully accounting-compliant feature here or am I missing a use case?  @Suman - agree.\n[07:22:33] Steven Sackett (Adaxa): yes .. its just for testing\n[07:23:20] Mario Calderón: I have to go now. I will redact the minutes.\n[07:23:30] Steven Sackett (Adaxa): I have to go ... any last matters?\n[07:23:30] Victor Perez Juarez: If you need for test you use generate cost transaction\n[07:24:29] Steven Sackett (Adaxa): any other matters for this meeting?\n[07:24:42] Victor Perez Juarez: Or more simple of new cost engine support parrallel cost method only need change in account schema and reset of account\n[07:24:51] Mario Calderón: start of community testing!!\n[07:25:40] Steven Sackett (Adaxa): I assume that means getting the test instances set upo as soon as possible .. lets focus on that\n[07:25:47] Steven Sackett (Adaxa): bye from me...\n[07:27:15] suman ravuri: Mario, Can you please list action items for RM\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),l={},o=(0,i(13860).Z)(l,[["render",function(e,n){const i=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[a,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",s,[r,(0,t.Wm)(i)])])]),d])}]])},18106:(e,n,i)=>{i.r(n),i.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-237509df","path":"/community/wiki/meetings/FT-2014/FT-20140121.html","title":"FT/TT meeting minutes January 21st 2014","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes January 21st 2014","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"summary":"Minutes General Moderator: Steven Sackett; Secretary: Mario Calderon; Participants: Steven Sackett, Mike McKay, Mario Calderon, Suman Ravuri, Colin Rooney, Victor Perez; Date / Tim","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2014/FT-20140121.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes January 21st 2014"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Minutes","slug":"minutes","children":[]},{"level":2,"title":"Logs","slug":"logs","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":12.59,"words":3777},"filePathRelative":"community/wiki/meetings/FT-2014/FT-20140121.md","localizedDate":"August 29, 2023"}')}}]);