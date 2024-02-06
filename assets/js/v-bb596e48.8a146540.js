"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2176],{50018:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var i=t(68152);const r=(0,i.QD)("a",{href:"ahttps://en.wikipedia.org/wiki/Virtual_appliance"},"Virtual Appliance",-1),n=(0,i.QD)("a",{href:"a"},"ADempiere installation",-1),l={href:"http://sourceforge.net/users/kontro/",target:"_blank",rel:"noopener noreferrer"},o=(0,i.QD)("p",null,"The other alternative to run AVA is to use Virtualbox. This is made possible due to the open format of Virtual Machine using the OVF standards.",-1),s=(0,i.QD)("h2",{id:"about-vmware-and-vmware-player",tabindex:"-1"},[(0,i.QD)("a",{class:"header-anchor",href:"#about-vmware-and-vmware-player","aria-hidden":"true"},"#"),(0,i.mY)(" About VMware and VMware player")],-1),u={href:"https://en.wikipedia.org/wiki/VMware",target:"_blank",rel:"noopener noreferrer"},d=(0,i.QD)("p",null,"VMware runs on Windows, Linux and Mac. And it can run many different operating systems (For example DOS and Windows98 works well on VMware). There are many different VMware products, but free (as in beer) ones come in two flavors: VMplayer is suitable for playing readymade images (like AVA) and VMserver is bigger and bit slower but you can run many virtual machines and create new ones.",-1),p=(0,i.QD)("p",null,"Both VMplayer and VMserver are really easy to install (even in Linux).",-1),h=(0,i.QD)("h2",{id:"about-virtualbox",tabindex:"-1"},[(0,i.QD)("a",{class:"header-anchor",href:"#about-virtualbox","aria-hidden":"true"},"#"),(0,i.mY)(" About Virtualbox")],-1),c={href:"http://www.virtualbox.org/",target:"_blank",rel:"noopener noreferrer"},m=(0,i.IL)('<p>VirtualBox is a powerful x86 virtualization product for enterprise as well as home use. Not only is VirtualBox an extremely feature rich, high performance product for enterprise customers, it is also the only professional solution that is freely available as Open Source Software under the terms of the GNU General Public License (GPL). See &quot;About VirtualBox&quot; for an introduction.</p><p>Presently, VirtualBox runs on Windows, Linux, Macintosh and OpenSolaris hosts and supports a large number of guest operating systems including but not limited to Windows (NT 4.0, 2000, XP, Server 2003, Vista, Windows 7), DOS/Windows 3.x, Linux (2.4 and 2.6), Solaris and OpenSolaris, and OpenBSD.</p><p>VirtualBox is being actively developed with frequent releases and has an ever growing list of features, supported guest operating systems and platforms it runs on. VirtualBox is a community effort backed by a dedicated company: everyone is encouraged to contribute while Oracle ensures the product always meets professional quality criteria.</p><h2 id="installation-of-ava" tabindex="-1"><a class="header-anchor" href="#installation-of-ava" aria-hidden="true">#</a> Installation of AVA</h2><h3 id="installation-under-ubuntu-7-10" tabindex="-1"><a class="header-anchor" href="#installation-under-ubuntu-7-10" aria-hidden="true">#</a> Installation under Ubuntu 7.10</h3><p>I assume that you&#39;ve already running VMWare Player or VMWare Server - it&#39;s easily apt-getable.</p><p>You&#39;ve to download all pieces of AVA from https://sourceforge.net/project/showfiles.php?group_id=176962&amp;package_id=249213 (ava_331b.7z.1, ava_331b.7z.2, ava_331b.7z.3, ava_331b.7z.4 and Create_ava_331b.zip(!))</p><p>After your download finished, place all files in one directory (e.g. ~/adempiere_ava) and just unzip Create_ava_331.zip.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd ~/adempiere_ava\nunzip Create_ava_331.zip\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This action creates a Readme.txt and Create_ava_331b.exe. Please read the Readme 😉 Since we&#39;re running linux, you need to use wine for Create_ava_331b.exe, so you&#39;ve to apt-get it:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install wine\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now we&#39;re ready to start &quot;The File Spliter&quot; (also known as Create_ava_331b.exe) throught wine:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd ~/adempiere_ava\nwine Create_ava_331b.exe\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>For extracting in the current directory, just press the magic ok button. This creates the file ava_331b.7z, which is a 7zip archive. 7z extractors are also easily apt-getable throught universe. After that, extract the archive:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install p7zip-full\np7zip -d ava_331b.7z\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Your virtual machine is now available under the directory ~/ava_331b/.</p><h3 id="installation-under-virtualbox" tabindex="-1"><a class="header-anchor" href="#installation-under-virtualbox" aria-hidden="true">#</a> Installation under VirtualBox</h3>',17),g={href:"http://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},f={href:"http://downloads.sourceforge.net/sourceforge/adempiere/ava353a.7z?use_mirror=master",target:"_blank",rel:"noopener noreferrer"},v=(0,i.QD)("li",null,"Unzip the AVA. Make sure you know where is the file location.",-1),w={href:"http://sourceforge.net/projects/adempiere/files/AVA%20-%20Virtual%20Appliances/AVA353/ava353a_OVF10.ovf/download",target:"_blank",rel:"noopener noreferrer"},b={href:"http://en.wikipedia.org/wiki/Open_Virtualization_Format",target:"_blank",rel:"noopener noreferrer"},y=(0,i.QD)("li",null,"Open your VirtualBox.",-1),A=(0,i.QD)("li",null,"Go to file > Import Appliance",-1),V=(0,i.QD)("li",null,"Import your .ovf file",-1),k=(0,i.QD)("li",null,'Click "Agree" on the subsequent screen',-1),x=(0,i.QD)("li",null,'Just maintain the default setup and click "OK"',-1),D=(0,i.QD)("li",null,"Sit back and enjoy the installation.",-1),_=(0,i.IL)('<h2 id="in-case-the-ovf-file-does-not-work" tabindex="-1"><a class="header-anchor" href="#in-case-the-ovf-file-does-not-work" aria-hidden="true">#</a> In case the ovf file does not work</h2><p>When importing the ovf file just results in an error message from VirtualBox after clicking &quot;Agree&quot;, VirtualBox will not keep the new VM in its menu, so you can&#39;t fix the problem. Instead, follow these steps to manually set up what otherwise the ovf file would have done for you:\\</p><ul><li>Create a new virtual machine, Operating system: Linux, Version: Redhat</li><li>Assign at least 512MB of RAM in the next step</li><li>Use the system.vmdk file you&#39;ll find in your AVA archive as an existing hard disk</li><li>Before you can power the VM on, change the storage setting: Remove the SATA Controller and add a SCSI controller instead. Under the SCSI controller re-add the system.vmdk as a hard disk.</li><li>Now you&#39;re ready to boot your AVA VM.</li></ul><h2 id="things-you-can-do-with-ava" tabindex="-1"><a class="header-anchor" href="#things-you-can-do-with-ava" aria-hidden="true">#</a> Things you can do with AVA</h2><ul><li>Giving people the opportunity to play with ADempiere with a very easy installation</li><li>Providing implementors with a tool to make demonstrations and recreate easily the whole installation</li><li>For testing environment purposes</li><li>And much more</li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See also</h2>',6),Q=(0,i.QD)("li",null,[(0,i.QD)("a",{href:"a"},"ADempiere Virtual Appliance Install")],-1),M=(0,i.QD)("li",null,[(0,i.QD)("a",{href:"a"},"Activating AVA upgrades")],-1),S=(0,i.QD)("a",{href:"a"},"Howto Create AVA",-1),Y={href:"https://wiki.adempiere.net/User:Red1",target:"_blank",rel:"noopener noreferrer"},T=(0,i.QD)("h2",{id:"useful-links",tabindex:"-1"},[(0,i.QD)("a",{class:"header-anchor",href:"#useful-links","aria-hidden":"true"},"#"),(0,i.mY)(" Useful links")],-1),I={href:"http://www.vmware.com/vmtn/appliances/directory/",target:"_blank",rel:"noopener noreferrer"},z={href:"http://sourceforge.net/project/showfiles.php?group_id=176962&package_id=249213",target:"_blank",rel:"noopener noreferrer"},O={},B=(0,t(42272).c)(O,[["render",function(e,a){const t=(0,i.E1)("ExternalLinkIcon");return(0,i.Wz)(),(0,i.An)("div",null,[(0,i.QD)("p",null,[(0,i.mY)("ADempiere "),r,(0,i.mY)(" or (AVA) is a fully pre-installed, pre-configured "),n,(0,i.mY)(" running under the VMware player and containing all the necessary software, including the operating system and the database. It's ready to run. This virtual appliance was first started by "),(0,i.QD)("a",l,[(0,i.mY)("Timo Kontro"),(0,i.K2)(t)]),(0,i.mY)(". AVA is a quick alternative to installing ADempiere from scratch.")]),o,s,(0,i.QD)("p",null,[(0,i.QD)("a",u,[(0,i.mY)("VMware"),(0,i.K2)(t)]),(0,i.mY)(" player and server are software packages which allow running operating system inside another operating system. You can have (for example) Linux running in VMware on WindowsXP machine, while Linux has no idea that it is running on iron which is only simulated by VMware. And the thing virtual Linux thinks its harddrive is actually only a file in windows.")]),d,p,h,(0,i.QD)("p",null,[(0,i.QD)("a",c,[(0,i.mY)("VirtualBox"),(0,i.K2)(t)])]),m,(0,i.QD)("ul",null,[(0,i.QD)("li",null,[(0,i.mY)("Download VirtualBox. Recommended to use the latest version (version 3.0.2). "),(0,i.QD)("a",g,[(0,i.mY)("Download here"),(0,i.K2)(t)])]),(0,i.QD)("li",null,[(0,i.mY)("Download Paul Aviles new AVA "),(0,i.QD)("a",f,[(0,i.mY)("here"),(0,i.K2)(t)])]),v,(0,i.QD)("li",null,[(0,i.mY)("Download the OVF File Format "),(0,i.QD)("a",w,[(0,i.mY)("here"),(0,i.K2)(t)]),(0,i.mY)(" and put it in the same folder with your AVA file")]),(0,i.QD)("li",null,[(0,i.mY)("OVF is just an xml to point the Virtual Appliance resource e.g. hard disk, network etc to maintain interop between different virtual machine technology. More info regarding ovf "),(0,i.QD)("a",b,[(0,i.mY)("here"),(0,i.K2)(t)])]),y,A,V,k,x,D]),_,(0,i.QD)("ul",null,[Q,M,(0,i.QD)("li",null,[S,(0,i.mY)(" by "),(0,i.QD)("a",Y,[(0,i.mY)("Red1"),(0,i.K2)(t)])])]),T,(0,i.QD)("ul",null,[(0,i.QD)("li",null,[(0,i.QD)("a",I,[(0,i.mY)("Other Open source projects supplied as VMware virtual appliances"),(0,i.K2)(t)])]),(0,i.QD)("li",null,[(0,i.mY)("Latest "),(0,i.QD)("a",z,[(0,i.mY)("Adempiere Virtual Appliance"),(0,i.K2)(t)]),(0,i.mY)(" in SourceForge. (Take all the parts listed).")])])])}]])},88247:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-bb596e48","path":"/community/wiki/user-guide/adempiere-virtual-appliance.html","title":"ADempiere Virtual Appliance","lang":"en-US","frontmatter":{"title":"ADempiere Virtual Appliance","category":"Community","star":9,"sticky":9,"tag":["Wiki","User Guide"],"article":false,"description":"ADempiere Virtual Appliance or (AVA) is a fully pre-installed, pre-configured ADempiere installation running under the VMware player and containing all the necessary software, including the operating system and the database. It\'s ready to run. This virtual appliance was first started by Timo Kontro. AVA is a quick alternative to installing ADempiere from scratch.","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/user-guide/adempiere-virtual-appliance.html"}],["meta",{"property":"og:title","content":"ADempiere Virtual Appliance"}],["meta",{"property":"og:description","content":"ADempiere Virtual Appliance or (AVA) is a fully pre-installed, pre-configured ADempiere installation running under the VMware player and containing all the necessary software, including the operating system and the database. It\'s ready to run. This virtual appliance was first started by Timo Kontro. AVA is a quick alternative to installing ADempiere from scratch."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-09-12T15:44:58.000Z"}],["meta",{"property":"article:author","content":"ADempiere"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"User Guide"}],["meta",{"property":"article:modified_time","content":"2023-09-12T15:44:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"ADempiere Virtual Appliance\\",\\"description\\":\\"ADempiere Virtual Appliance or (AVA) is a fully pre-installed, pre-configured ADempiere installation running under the VMware player and containing all the necessary software, including the operating system and the database. It\'s ready to run. This virtual appliance was first started by Timo Kontro. AVA is a quick alternative to installing ADempiere from scratch.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"About VMware and VMware player","slug":"about-vmware-and-vmware-player","link":"#about-vmware-and-vmware-player","children":[]},{"level":2,"title":"About Virtualbox","slug":"about-virtualbox","link":"#about-virtualbox","children":[]},{"level":2,"title":"Installation of AVA","slug":"installation-of-ava","link":"#installation-of-ava","children":[{"level":3,"title":"Installation under Ubuntu 7.10","slug":"installation-under-ubuntu-7-10","link":"#installation-under-ubuntu-7-10","children":[]},{"level":3,"title":"Installation under VirtualBox","slug":"installation-under-virtualbox","link":"#installation-under-virtualbox","children":[]}]},{"level":2,"title":"In case the ovf file does not work","slug":"in-case-the-ovf-file-does-not-work","link":"#in-case-the-ovf-file-does-not-work","children":[]},{"level":2,"title":"Things you can do with AVA","slug":"things-you-can-do-with-ava","link":"#things-you-can-do-with-ava","children":[]},{"level":2,"title":"See also","slug":"see-also","link":"#see-also","children":[]},{"level":2,"title":"Useful links","slug":"useful-links","link":"#useful-links","children":[]}],"git":{"createdTime":1694533498000,"updatedTime":1694533498000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.13,"words":939},"filePathRelative":"community/wiki/user-guide/adempiere-virtual-appliance.md","localizedDate":"September 12, 2023","excerpt":"<p>ADempiere <a href=\\"ahttps://en.wikipedia.org/wiki/Virtual_appliance\\">Virtual Appliance</a> or (AVA) is a fully pre-installed, pre-configured <a href=\\"a\\">ADempiere installation</a> running under the VMware player and containing all the necessary software, including the operating system and the database. It\'s ready to run. This virtual appliance was first started by <a href=\\"http://sourceforge.net/users/kontro/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Timo Kontro</a>. AVA is a quick alternative to installing ADempiere from scratch.</p>","autoDesc":true}')}}]);