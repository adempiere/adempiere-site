"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4944],{61916:(e,i,n)=>{n.r(i),n.d(i,{default:()=>t});var a=n(68152);const r=[(0,a.IL)('<h2 id="meeting-minutes" tabindex="-1"><a class="header-anchor" href="#meeting-minutes" aria-hidden="true">#</a> Meeting Minutes</h2><p><strong>General</strong></p><ul><li><strong>Moderator:</strong> Mario Calderon</li><li><strong>Participants:</strong> Karsten Thiemann, Teo Sarca, Michael McKay, Victor Perez, Mike Judd, Ramiro Vergara, Tobias Schöneberg, Colin Rooney, Mark Ostermann</li><li><strong>Date / Time:</strong> January 16th, 2012 / 3:00 PM - 5:00 PM GMT</li></ul><p><strong>Agenda</strong></p><ol><li>Roadmap to new release</li><li>Examples of possible new functionality</li><li>Steps to get a list of features</li><li>FR (Feature Request) Management</li><li>Feature request discussion</li><li>Bug/Feature Request Trackers</li><li>Miscellaneous</li></ol><p><strong>Discussion</strong></p><ul><li>The roadmap to the new release was discussed. The previous release focused on bug fixes and stabilization, while the upcoming release (tagged 3.8) will concentrate on functionality enhancements.</li><li>Possible new functionalities were listed, including Payment Order, Automatic Bank Reconciliation, Smart Browser, Recursive Deletion of Entities, Print Format Copy, Message Alert on Field Input, Report Cube, Graphics on One Window, Payment-Allocation Improvements, Hashed Password in User Window, Manufacturing Light (ML) integration approach, and Initial Client Setup.</li><li>The steps to create a list of features include calling the community for contributions, reviewing each functionality for integration adequacy, and building a roadmap based on the feature list.</li><li>FT/TT (Functional Team/Technical Team) are active in getting feature requests sponsored and completed. Victor will post an announcement.</li><li>Bug/Feature Request Trackers will be switched from SF Tracker to Jira (https://adempiere.atlassian.net). Jira installation for ADempiere was completed by Teo. Migration from the old SF tracker to Jira is needed and community help is requested.</li><li>No miscellaneous points were discussed.</li></ul><p><strong>Next Meeting</strong></p><ul><li>No specific next meeting date/time mentioned.</li></ul><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> Log</h2><p>Following is the meeting log, starting after TT/FT decided to record and publish the whole meeting log in future</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Monday, January 16, 2012\n[9:10:55 AM] Karsten Thiemann: hi\n[9:12:08 AM] Ramiro Vergara: hi karsten\n[9:12:22 AM] Mario Calderón: hello everybody!\n[9:14:37 AM] Tobias Schoeneberg: hi\n[9:15:16 AM] Sarca, Teo: hi all\n[9:15:22 AM] Sarca, Teo: and happy new year!\n[9:15:29 AM] Tobias Schoeneberg: i&#39;m debuggin an important problem for a customer right now, so i might not be &quot;real-time&quot;-responsive\n[9:16:26 AM] Mark Ostermann: hello everybody\n[9:17:40 AM] Mario Calderón: should we wait a couple of minutes more (academical time)?\n[9:18:46 AM] Karsten Thiemann: victor wrote that he will attend\n[9:18:54 AM] Ramiro Vergara: yes he did\n[9:22:37 AM] Mario Calderón: to start with, let&#39;s orginize the meeting.\nI can be the secretary, though I will have to leave in about 65 minutes.\n[9:22:46 AM] Karsten Thiemann: I think we should start now\n[9:22:51 AM] Mario Calderón: somebody else can become moderator\n[9:23:13 AM] Karsten Thiemann: not much to moderate - right?\n[9:23:17 AM] Karsten Thiemann: what about our agenda?\n[9:23:32 AM] Mario Calderón: this is the second point, after the moderator\n[9:23:42 AM] Ramiro Vergara: i can be moderator then\n[9:23:47 AM] Ramiro Vergara: :)\n[9:23:58 AM] Karsten Thiemann: fine :)\n[9:24:09 AM] Ramiro Vergara: i believe we anted to discuss roadmap to 3.8?\n[9:24:09 AM] Mario Calderón: you can help me to write the minutes Ramiro\n[9:24:13 AM] Ramiro Vergara: wanted\n[9:24:28 AM] Ramiro Vergara: sure\n[9:24:32 AM] Michael Judd: hi\n[9:24:37 AM] Ramiro Vergara: hi mike\n[9:24:45 AM] Ramiro Vergara: Agenda\n[9:24:57 AM] Ramiro Vergara: 1. Discussion on roadmap to 3.8\n[9:25:16 AM] Ramiro Vergara: any other points?\n[9:26:04 AM] Mario Calderón: hi Mike. From my side, it&#39;s the only agenda point.\n[9:26:11 AM] Ramiro Vergara: ok\n[9:26:22 AM] Karsten Thiemann: hi Colin\n[9:26:22 AM] Ramiro Vergara: 2. Miscellaneous, if any\n[9:26:33 AM] Colin Rooney: hi all - just looking in to say hello\n[9:26:47 AM] Mark Ostermann: hi colin\n[9:26:50 AM] Colin Rooney: and when I saw the question for points remembered\n[9:27:06 AM] Mario Calderón: hi Colin\n[9:27:12 AM] Colin Rooney: someone in the forums asked for their new functionality to be reviewed\n[9:27:22 AM] Colin Rooney: it was posted that it would be added to the TT/FT agenda\n[9:27:26 AM] Karsten Thiemann: http://www.adempiere.com/FR3471930_Allow_consolidation_of_PO_from_Req_with_different_dates\n[9:27:26 AM] Mario Calderón: It was silvano, wasn&#39;t it?\n[9:27:28 AM] Colin Rooney: just a reminder\n[9:27:45 AM] Colin Rooney: yes, Karsten exactly the one\n[9:27:53 AM] Karsten Thiemann: right - and I guess that&#39;s part of a road to 3.8\n[9:28:01 AM] Karsten Thiemann: http://www.adempiere.com/Category:Feature_Request_-_In_Progress\n[9:28:08 AM] Colin Rooney: ah ok - sorry\n[9:28:20 AM] Karsten Thiemann: no Colin - you were right\n[9:28:55 AM] Ramiro Vergara:  Agenda 1. Discussion on roadmap to 3.8\n2. Silvano request\n[9:29:03 AM] Ramiro Vergara: 3. Miscellaneous if any\n[9:29:55 AM] Karsten Thiemann: I think we need to include the other feature request as well\n[9:30:01 AM] Mario Calderón: agree\n[9:30:43 AM] Ramiro Vergara: what other feature request?\n[9:31:04 AM] Mario Calderón: http://www.adempiere.com/Category:Feature_Request_-_In_Progress\n[9:31:39 AM] Ramiro Vergara: ok\n[9:31:53 AM] Ramiro Vergara: Agenda \n1. Discussion on roadmap to 3.8\n2. Feature request discussion\n3. Miscellaneous if any\n[9:32:13 AM] Karsten Thiemann: ok\n[9:32:15 AM] Ramiro Vergara: ready?\n[9:32:20 AM] Mario Calderón: (y)\n[9:32:24 AM] Ramiro Vergara: ok\n[9:32:32 AM] Mark Ostermann: ok\n[9:32:35 AM] Michael Judd: (y)\n[9:32:48 AM] Ramiro Vergara: lets start\n[9:32:51 AM] Ramiro Vergara: 1. Discussion on roadmap to 3.8\n[9:33:00 AM] Ramiro Vergara: any comments ideas?\n[9:33:07 AM] Ramiro Vergara: i do have one\n[9:33:10 AM] Ramiro Vergara: :)\n[9:34:09 AM] Michael Judd: I was looking for the task list to release but I&#39;m not sure this is avaialble anymore - does anyone know where it is ?\n[9:34:29 AM] Ramiro Vergara: while we look for that\n[9:34:33 AM] Michael Judd: Should the page: http://www.adempiere.com/Road_Map be updated for 3.8 ?\n[9:34:53 AM] Ramiro Vergara: let me open with my comments on 3.8\n[9:35:34 AM] Karsten Thiemann: @Michael - yes it should\n[9:35:39 AM] Ramiro Vergara: 3.7 was mostly focused on fixing bugs that were resolved in other branches\n[9:36:13 AM] Ramiro Vergara: and that was fine because would improve stability of adempiere\n[9:36:33 AM] Victor Perez Juarez: hi\n[9:36:36 AM] Michael Judd: Are all the bug fixes logged in the tracker - assume so ?  If so - I can update the roadmap for 3.7.0\n[9:36:46 AM] Mark Ostermann: hi victor\n[9:36:47 AM] Ramiro Vergara: however, adempiere has not had a release focused in enhancing functionality in years\n[9:36:59 AM] Michael Judd: hi victor\n[9:37:29 AM] Michael Judd: @Ramiro - it may be worthwhile releasing new functionality in a new feature enhancement release - but declare as a beta ?\n[9:37:41 AM] Ramiro Vergara: there are many enhancements around that could be brought into the trunk with a relative minor effort and will enrich greatly ADempiere functionality\n[9:37:48 AM] Michael Judd: and then move to stabilisation - or should that occur in a branch ?\n[9:38:05 AM] Victor Perez Juarez: hi guys , happy new year\n[9:38:21 AM] Ramiro Vergara: yes, it could be a beta phase and subsequent stabilization phase\n[9:38:40 AM] Mario Calderón: @Mike: thanks to Mercurial, we can do it on a new Branch and then migrate Changesets to development for testing and to Release for publishing\n[9:39:56 AM] Mario Calderón: can we enumerate the Functionality to be included?\n[9:40:10 AM] Ramiro Vergara: the byrpoduct benefit besides enhancing adempiere functionaliyty\n[9:40:25 AM] Ramiro Vergara: is that we will differentiate from other non official branches\n[9:40:34 AM] Ramiro Vergara: byproduct\n[9:41:14 AM] Ramiro Vergara: the suggestion is that the FT/TT prepares a call for functionality and invite community members and implementor companies to collaborate\n[9:41:32 AM] Victor Perez Juarez: I think that the procedure for new fuctionality are disaign\n[9:43:18 AM] Ramiro Vergara: for instance, we developed an automatic bank conciliation functionality that i know many people would love to have\n[9:43:20 AM] Victor Perez Juarez: the new features should go in feature branch\n[9:43:49 AM] Victor Perez Juarez: so the the big work is that the funcional team need vevaluate and aprovate th fuctionality\n[9:43:56 AM] Victor Perez Juarez: if this is ok then we can include\n[9:44:19 AM] Tobias Schoeneberg: @victor: agree\n[9:44:20 AM] Mario Calderón: agree Victor\n[9:44:34 AM] Michael Judd: (y)\n[9:44:45 AM] Mario Calderón: Ramiro has suggested to make a call to the community\n[9:44:49 AM] Mario Calderón: a good idea\n[9:45:01 AM] Mario Calderón: we also know of functionality\n[9:45:06 AM] Sarca, Teo: agree\n[9:45:22 AM] Victor Perez Juarez: so this are my suggestion steps:\n[9:45:34 AM] Victor Perez Juarez: 1.- call the community for get your contributtions\n[9:47:33 AM] Ramiro Vergara: ok\n[9:47:53 AM] Victor Perez Juarez: 2.- review each functionality and before the analisys\n[9:48:08 AM] Victor Perez Juarez: we can take the decision to include or not\n[9:48:21 AM] Ramiro Vergara: now i have a FR related comment that has to do with that victor\n[9:48:43 AM] Ramiro Vergara: the items on the FR should be included in that analysis\n[9:49:21 AM] Ramiro Vergara: and if they are approved they should be posted as FR requiring development/funding\n[9:49:46 AM] Victor Perez Juarez: 3.- based in this feature list we can build the roadmap\n[9:50:11 AM] Mario Calderón: to name a few functionalities I know are relatively easy to integratte:\nOFB: Ramiro&#39;s functionalities, \ne-vevolution( Smart Browser to name one), \nAdaxa\n  Recursive Deletion of Entities (e.g. Orders). Good for DB clearing.\n  Print Format copy\n  Alert on Field-input (one Message). Defined in BP\n  Report cube\n  Graphics on one window\n  Payment-Allocation improvements\n  Hashed-Password (in User-Window)\n  Initial Client Setup (including. tacx configuration)\n\nMetas:\n- windows improvemnts with web services\n\nto name just a few\n[9:50:27 AM] Michael Judd: is there a template to assess the FR from a technical and function perspective?  I beleive it was proposed for the FT/TT to review each FR?\n[9:51:06 AM] Mario Calderón: I think there is not a template Mike, just  a description of how to document it\n[9:51:19 AM] Michael Judd: ok\n[9:51:20 AM] Victor Perez Juarez: 4.-when the we include the new features then we need create de documentation and example for new fuctionality and release the new versión\n[9:51:22 AM] Ramiro Vergara: some of those FR may be funded by ADeV or other entities\n[9:52:06 AM] Victor Perez Juarez: this should be include in the wiki page documentation that was made to support the feature\n[9:52:40 AM] Mario Calderón: so , concrete suggestions to vote?\n[9:52:43 AM] Victor Perez Juarez: http://www.adempiere.com/Category:Feature_Request_-_In_Progress\n[9:52:48 AM] Victor Perez Juarez: here exit a example\n[9:53:00 AM] Ramiro Vergara: ok, in summary the acll for functionality should explain the points victor is raising\n[9:53:04 AM] Victor Perez Juarez: so I think that now we need cordinate the implementor and inlude all improves\n[9:53:20 AM] Ramiro Vergara: let me wrap up victor\n[9:53:40 AM] Ramiro Vergara: victor?\n[9:53:46 AM] Victor Perez Juarez: so in this moment I think that best way to get new fuctionality or improves is from implementors , ADAXA, Metas, e-Evolution, OFB, etc\n[9:53:54 AM] Ramiro Vergara: ok\n[9:53:55 AM] Ramiro Vergara: let me wrap up\n[9:54:46 AM] Ramiro Vergara: 3.8 will be a release mostly focused on functionality\n[9:55:22 AM] Ramiro Vergara: FT/TT will write a &quot;Call for Functionaly enhancements&quot; in the forums\n[9:55:52 AM] Ramiro Vergara: in the call we will explain the subsequent activities required to get the enhancements to the trunk\n[9:56:14 AM] Ramiro Vergara: do we agree with this summary?\n[9:56:20 AM] Ramiro Vergara: votes pplease\n[9:56:30 AM] Sarca, Teo: +1\n[9:56:31 AM] Karsten Thiemann: yes +1\n[9:56:33 AM] Mario Calderón: +1 from my side\n[9:56:43 AM] Michael Judd: (y) +1\n[9:56:56 AM] Ramiro Vergara: +1\n[9:57:09 AM] Ramiro Vergara: Victor?\n[9:57:09 AM] Mario Calderón: who will be in charge of issuing the call and of maintaning the page?\n[9:57:11 AM] Victor Perez Juarez: why 3.8\n[9:57:18 AM] Victor Perez Juarez: what will be 3.7\n[9:57:30 AM] Michael Judd: or what about 4.0 ?\n[9:57:36 AM] Michael McKay: Hi Guys - happy new year.  +1 on the summary\n[9:57:40 AM] Karsten Thiemann: victor - we already have 3.7\n[9:57:46 AM] Mario Calderón: hi Mike! same to you\n[9:57:49 AM] Ramiro Vergara: 3.7 is released victor\n[9:58:04 AM] Karsten Thiemann: you did it :)\n[9:58:13 AM] Victor Perez Juarez: ok the the next version will be a big version\n[9:58:16 AM] Ramiro Vergara: and 4.0 , IMHO, should be reserved for something even bigger\n[9:58:26 AM] Ramiro Vergara: such as architectural changes\n[9:58:40 AM] Karsten Thiemann: what about 20.12  ;)\n[9:58:51 AM] Ramiro Vergara: Mayan release?\n[9:58:53 AM] Victor Perez Juarez: I told about the 3.7.1,2,3,4\n[9:58:55 AM] Karsten Thiemann: I think 3.8 is fine\n[9:58:58 AM] Mario Calderón: so, this release would be 3.8?\nOr what do you suggest victor?\n[9:59:07 AM] Victor Perez Juarez: but if we then can release 3.8 is ok for me\n[9:59:12 AM] Victor Perez Juarez: nop problem\n[9:59:20 AM] Victor Perez Juarez: +1\n[9:59:23 AM] Ramiro Vergara: ok\n[9:59:27 AM] Ramiro Vergara: approved\n[9:59:32 AM] Karsten Thiemann: I think the number is not the most important thing..\n[9:59:38 AM] Ramiro Vergara: a candidate to write the call?\n[10:00:13 AM] Ramiro Vergara: Victor?\n[10:00:44 AM] Ramiro Vergara: i suggest Victor\n[10:00:46 AM] Ramiro Vergara: :)\n[10:01:30 AM] Colin Rooney: I think victors proposal might have merit. in that ...\n[10:01:48 AM] Mario Calderón: +1\n[10:01:53 AM] Colin Rooney: the 3.8 would be a typical big bang approach -  which is great when you have resources\n[10:02:08 AM] Ramiro Vergara: no problem\n[10:02:13 AM] Colin Rooney: but you might consider a more agile approach whjich is all the fashion now :)\n[10:02:46 AM] Ramiro Vergara: 3.7.1, 2, 3, 4 and at the end when stable 3.8\n[10:02:56 AM] Colin Rooney: you create your backlog and every few weeks realease a 3,71, 3.7.2, 3.7.3 etc\n[10:02:58 AM] Ramiro Vergara: that is fine\n[10:02:59 AM] Colin Rooney: as beta\n[10:03:22 AM] Ramiro Vergara: Victor can explain that\n[10:03:20 AM] Colin Rooney: then 3.8 would be the move from beta to live of a bunch of beta funtionality\n[10:03:28 AM] Colin Rooney: tha tway you get your big bang release\n[10:03:30 AM] Ramiro Vergara: ok\n[10:03:33 AM] Michael McKay: (Stepping away - back in 30 minutes.  Will catch up on return.)\n[10:03:38 AM] Ramiro Vergara: lets move on if we may\n[10:03:43 AM] Colin Rooney: plus you have a lighter more agile and frequent release stratgey\n[10:03:55 AM] Colin Rooney: which is how I understood from Victor?\n[10:04:00 AM] Mario Calderón: bye Mike\n[10:04:25 AM] Michael Judd: do we have resources to do more frequent releases ? i.e. monthly ?\n[10:04:54 AM] Colin Rooney: well it&#39;s just the latest branch with some specific NEW functionality added\n[10:05:08 AM] Colin Rooney: it might be 1 new functionality - or more than 1 but not many\n[10:05:13 AM] Colin Rooney: ?\n[10:05:20 AM] Ramiro Vergara: agree\n[10:05:38 AM] Colin Rooney: the whole agile idea is for it to be light in terms of resource requirements\n[10:05:48 AM] Mario Calderón: @Mike: I don&#39;t think we can do monthly releases right now, due to lack of resources.\n[10:06:01 AM] Colin Rooney: no problem - just a thought\n[10:06:17 AM] Ramiro Vergara: but we will go agile 3.7.1, 2 etc as suggested by victor and colin\n[10:06:19 AM] Karsten Thiemann: @Michael - no\n[10:06:57 AM] Mario Calderón: I think we can try to move more community members than last time, by being more active asking\n[10:07:29 AM] Ramiro Vergara: besides that we will expect more help from implementors in this process\n[10:07:47 AM] Mario Calderón: @Ramiro: right\n[10:07:54 AM] Ramiro Vergara: ok\n[10:08:18 AM] Ramiro Vergara: i believe we can move on to 2. Feature request discussion\n[10:08:58 AM] Ramiro Vergara: i believe we should integrate how to handle FR into this idea of functionality enhancements we are discussing today\n[10:09:13 AM] Ramiro Vergara: the FR should be reviewed by FT\n[10:09:30 AM] Ramiro Vergara: and then listed as FR waiting for sponsoring\n[10:10:04 AM] Ramiro Vergara: and we should talk to ADeV or others to look for funding/help on getting those FR done\n[10:10:20 AM] Victor Perez Juarez: now Teo and me propouse switch  from sf trcker to jira\n[10:10:33 AM] Karsten Thiemann: @Ramiro: I don&#39;t think that we always need a special sponsoring. If the code and the documentation is good we can just integrate them - right?\n[10:11:00 AM] Ramiro Vergara: @Karten, that is why i said sponsoring/help\n[10:11:04 AM] Victor Perez Juarez: I think that it is ok , because jira allow show the automatic roadmap based in the traker open\n[10:11:34 AM] Mario Calderón: as I seem for this time the sponsoring would be the companies supplying the functionality! ;)\n[10:11:59 AM] Victor Perez Juarez: the I think that we need work in migrate the old sf tracker to jira\n[10:12:03 AM] Tobias Schoeneberg: @Karsten: agree. but a special state &quot;looking for sponsoring&quot; is imho also a good idea. e.g. philip gosweiler made an improvement regarding postal, but it&#39;s only do for swing right now...\n[10:12:04 AM] Ramiro Vergara: advantage is that community members see a clear procedure to add / deny those FR and then get them done supported by FT/TT\n[10:12:13 AM] Victor Perez Juarez: and the road map will show in automatic\n[10:12:23 AM] Mario Calderón: what is this about Jira Victor, can you explain how it would replace the actual way?\n[10:13:52 AM] Victor Perez Juarez: jira is a tracker system\n[10:14:12 AM] Victor Perez Juarez: where we would report the features and bug tracker\n[10:15:25 AM] Mario Calderón: ..and you suggest to switch to Jira with the new release?\n[10:15:45 AM] Victor Perez Juarez: yes I think it is good\n[10:16:17 AM] Mario Calderón: would you mention and explain it on the post?\n[10:16:31 AM] Victor Perez Juarez: Teo install jira\n[10:16:51 AM] Victor Perez Juarez: installed jira\n[10:17:19 AM] Mario Calderón: so as I understand, we should vote for switching to Jira now?\n[10:17:36 AM] Ramiro Vergara: and FR management as discussed....\n[10:17:39 AM] Victor Perez Juarez: and ask the Atlassian for license\n[10:17:59 AM] Victor Perez Juarez: the give a license because we work with open source proyect\n[10:18:09 AM] Victor Perez Juarez: then teo\n[10:18:32 AM] Victor Perez Juarez: we might use jira to management the release, roadmap , trackers\n[10:18:51 AM] Victor Perez Juarez: this is a good example based in spring envirotment developement\n[10:18:53 AM] Victor Perez Juarez: https://jira.springsource.org/browse/SPR\n[10:19:19 AM] Victor Perez Juarez: he are https://jira.springsource.org/browse/SPR#selectedTab=com.atlassian.jira.plugin.system.project%3Aroadmap-panel\n[10:19:27 AM] Victor Perez Juarez: road map create based on tracker\n[10:19:38 AM] Mario Calderón: @Ramiro: wrap up and vote?\n[10:19:47 AM] Ramiro Vergara: ok\n[10:20:01 AM] Ramiro Vergara: 2 votes please\n[10:20:45 AM] Ramiro Vergara: 2.a approved FR Managements as discussed above (FT/TT aactive in getting sponsoring and getting FR done)\n[10:21:01 AM] Ramiro Vergara: 2. move from SF to JJira for tracker management\n[10:21:06 AM] Ramiro Vergara: sorry\n[10:21:09 AM] Ramiro Vergara: 2.b\n[10:21:22 AM] Ramiro Vergara: votes please\n[10:21:28 AM] Ramiro Vergara: 2.a and 2.b\n[10:21:46 AM] Victor Perez Juarez: 2.c we need voluters to migrate of old tracker from sf to jira tracker\n[10:21:48 AM] Mario Calderón: 2a: +1\n2b: +1\n[10:22:10 AM] Victor Perez Juarez: this should be a good work and allow define a list active the tracker list\n[10:22:28 AM] Ramiro Vergara: 2.a +1 ; 2.b +1\n[10:22:43 AM] Victor Perez Juarez: because the current sf list now is incomplete or not updated\n[10:22:57 AM] Victor Perez Juarez: I not know if all open issue are replicate and are active\n[10:22:58 AM] Karsten Thiemann: both +1 (and sorry but I got to go now)\n[10:23:06 AM] Tobias Schoeneberg: [17:08:20] Victor Perez Juarez: 2.c we need voluters to migrate of old tracker from sf to jira tracker\n\n&lt;&lt;&lt; can&#39;t we do this step-by-step? i mean, make sure that there are no new trackers in SF, and create a jira-tracker for an SF-tracker, whener we touch an SF-tracker?\n[10:23:13 AM] Mario Calderón: dear all, I have to leave right now.\nI will publish the minutes and the resume today, after consultation with the moderator.\n[10:23:17 AM] Tobias Schoeneberg: 2.{a,b} +1\n[10:23:31 AM] Victor Perez Juarez: +1 for all points\n[10:23:32 AM] Mark Ostermann: +1 fror both (a+b)\n[10:23:33 AM] Mario Calderón: Tobi, linear algebra!!\n[10:23:42 AM] Ramiro Vergara: we are done mario anyway\n[10:23:44 AM] Michael Judd: 2a+b (y) +1\n[10:24:06 AM] Tobias Schoeneberg: 2.[^c-z]+ ;-)\n[10:24:33 AM] Victor Perez Juarez: @Tobias , I think that we need now activate jira for new issues\n[10:24:39 AM] Mario Calderón: this is a regular expression...\n[10:24:47 AM] Ramiro Vergara: ok\n[10:24:56 AM] Ramiro Vergara:  i believe the 3 proposal are approved\n[10:25:01 AM] Victor Perez Juarez: but anyway we need clean current tracker list, because I think not are update\n[10:25:05 AM] Ramiro Vergara: mario will write minutes, i will help\n[10:25:06 AM] Tobias Schoeneberg: @Victor: ok\n[10:25:15 AM] Ramiro Vergara: victor will write call, i will translate\n[10:25:20 AM] Michael Judd: what&#39;s the process for cleaning?  Does it require a line by line analysis ?\n[10:25:26 AM] Victor Perez Juarez: it have not control\n[10:25:38 AM] Sarca, Teo: +1\n[10:26:09 AM] Victor Perez Juarez: so we can take as excuse to clean the tracker list  :-)\n[10:26:34 AM] Victor Perez Juarez: @Mike I think that is simple\n[10:27:40 AM] Victor Perez Juarez: we need review the comment tracker and validate if  this can be replicate , if this is replicate then we can create the tracker new in jira , and copy the comments and adds new comment from your test\n[10:28:14 AM] Victor Perez Juarez: we need give the priority issue , this way we should include the fix for next release if is severe issue\n[10:29:01 AM] Victor Perez Juarez: when we create the new jira tracker we can close the sf tracker and add the url for jira tracker link\n[10:29:04 AM] Victor Perez Juarez: it is my idea\n[10:29:15 AM] Victor Perez Juarez: but anyother good idea is welcome\n[10:29:45 AM] Michael Judd: ok - need to head out but I understand and would like to help.  I think we could define the severity levels first before assessing the issues in the new jira.\n[10:29:57 AM] Michael Judd: will be back a little later in case the discussion continues\n[10:30:18 AM] Victor Perez Juarez: I would document the step in a wiki\n[10:30:36 AM] Victor Perez Juarez: and make reference some videos that explaint the use the jira\n[10:30:43 AM] Victor Perez Juarez: this way other can following\n[10:30:54 AM] Ramiro Vergara: ok, i believe we can close the formal meeting here\n[10:30:59 AM] Ramiro Vergara: thanks to all\n[10:32:05 AM] Victor Perez Juarez: Ramiro can please give a summary please\n[10:33:16 AM] Mark Ostermann: thanks\n[10:33:29 AM] Colin Rooney: bye all\n[10:33:43 AM] Mark Ostermann: bye. cu\n[10:34:23 AM] Sarca, Teo: bye bye\n[10:42:43 AM] Tobias Schoeneberg: bye\n[10:53:42 AM] Michael Judd: bye\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12)],s={},t=(0,n(42272).c)(s,[["render",function(e,i){return(0,a.Wz)(),(0,a.An)("div",null,r)}]])},62872:(e,i,n)=>{n.r(i),n.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-f53f3986","path":"/community/wiki/meetings/FT-2012/FT-20120116.html","title":"FT/TT meeting minutes January 16th 2012","lang":"en-US","frontmatter":{"title":"FT/TT meeting minutes January 16th 2012","category":"Community","star":9,"sticky":9,"tag":["Wiki","Meetings"],"article":false,"description":"Meeting Minutes General Moderator: Mario Calderon Participants: Karsten Thiemann, Teo Sarca, Michael McKay, Victor Perez, Mike Judd, Ramiro Vergara, Tobias Schöneberg, Colin Rooney, Mark Ostermann Date / Time: January 16th, 2012 / 3:00 PM - 5:00 PM GMT","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/meetings/FT-2012/FT-20120116.html"}],["meta",{"property":"og:title","content":"FT/TT meeting minutes January 16th 2012"}],["meta",{"property":"og:description","content":"Meeting Minutes General Moderator: Mario Calderon Participants: Karsten Thiemann, Teo Sarca, Michael McKay, Victor Perez, Mike Judd, Ramiro Vergara, Tobias Schöneberg, Colin Rooney, Mark Ostermann Date / Time: January 16th, 2012 / 3:00 PM - 5:00 PM GMT"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T22:51:16.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Meetings"}],["meta",{"property":"article:modified_time","content":"2023-08-29T22:51:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"FT/TT meeting minutes January 16th 2012\\",\\"description\\":\\"Meeting Minutes General Moderator: Mario Calderon Participants: Karsten Thiemann, Teo Sarca, Michael McKay, Victor Perez, Mike Judd, Ramiro Vergara, Tobias Schöneberg, Colin Rooney, Mark Ostermann Date / Time: January 16th, 2012 / 3:00 PM - 5:00 PM GMT\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Meeting Minutes","slug":"meeting-minutes","link":"#meeting-minutes","children":[]},{"level":2,"title":"Log","slug":"log","link":"#log","children":[]}],"git":{"createdTime":1693349476000,"updatedTime":1693349476000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":14.5,"words":4349},"filePathRelative":"community/wiki/meetings/FT-2012/FT-20120116.md","localizedDate":"August 29, 2023","excerpt":"<h2> Meeting Minutes</h2>\\n<p><strong>General</strong></p>\\n<ul>\\n<li><strong>Moderator:</strong> Mario Calderon</li>\\n<li><strong>Participants:</strong> Karsten Thiemann, Teo Sarca, Michael McKay, Victor Perez, Mike Judd, Ramiro Vergara, Tobias Schöneberg, Colin Rooney, Mark Ostermann</li>\\n<li><strong>Date / Time:</strong> January 16th, 2012 / 3:00 PM - 5:00 PM GMT</li>\\n</ul>","autoDesc":true}')}}]);