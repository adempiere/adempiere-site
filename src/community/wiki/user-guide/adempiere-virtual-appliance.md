---
title: ADempiere Virtual Appliance
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - User Guide
article: false
---

ADempiere [Virtual Appliance](ahttps://en.wikipedia.org/wiki/Virtual_appliance) or (AVA) is a fully pre-installed, pre-configured [ADempiere installation](a) running under the VMware player and containing all the necessary software, including the operating system and the database. It's ready to run. This virtual appliance was first started by [Timo Kontro](http://sourceforge.net/users/kontro/). AVA is a quick alternative to installing ADempiere from scratch.

The other alternative to run AVA is to use Virtualbox. This is made possible due to the open format of Virtual Machine using the OVF standards.

## About VMware and VMware player

[VMware](https://en.wikipedia.org/wiki/VMware) player and server are software packages which allow running operating system inside another operating system. You can have (for example) Linux running in VMware on WindowsXP machine, while Linux has no idea that it is running on iron which is only simulated by VMware. And the thing virtual Linux thinks its harddrive is actually only a file in windows.

VMware runs on Windows, Linux and Mac. And it can run many different operating systems (For example DOS and Windows98 works well on VMware). There are many different VMware products, but free (as in beer) ones come in two flavors: VMplayer is suitable for playing readymade images (like AVA) and VMserver is bigger and bit slower but you can run many virtual machines and create new ones.

Both VMplayer and VMserver are really easy to install (even in Linux).

## About Virtualbox

[VirtualBox](http://www.virtualbox.org/)

VirtualBox is a powerful x86 virtualization product for enterprise as well as home use. Not only is VirtualBox an extremely feature rich, high performance product for enterprise customers, it is also the only professional solution that is freely available as Open Source Software under the terms of the GNU General Public License (GPL). See "About VirtualBox" for an introduction.

Presently, VirtualBox runs on Windows, Linux, Macintosh and OpenSolaris hosts and supports a large number of guest operating systems including but not limited to Windows (NT 4.0, 2000, XP, Server 2003, Vista, Windows 7), DOS/Windows 3.x, Linux (2.4 and 2.6), Solaris and OpenSolaris, and OpenBSD.

VirtualBox is being actively developed with frequent releases and has an ever growing list of features, supported guest operating systems and platforms it runs on. VirtualBox is a community effort backed by a dedicated company: everyone is encouraged to contribute while Oracle ensures the product always meets professional quality criteria.

## Installation of AVA

### Installation under Ubuntu 7.10

I assume that you've already running VMWare Player or VMWare Server - it's easily apt-getable.

You've to download all pieces of AVA from https://sourceforge.net/project/showfiles.php?group_id=176962&package_id=249213 (ava_331b.7z.1, ava_331b.7z.2, ava_331b.7z.3, ava_331b.7z.4 and Create_ava_331b.zip(!))

After your download finished, place all files in one directory (e.g. ~/adempiere_ava) and just unzip Create_ava_331.zip.

~~~
cd ~/adempiere_ava
unzip Create_ava_331.zip
~~~

This action creates a Readme.txt and Create_ava_331b.exe. Please read the Readme ;) Since we're running linux, you need to use wine for Create_ava_331b.exe, so you've to apt-get it:

~~~
sudo apt-get install wine
~~~

Now we're ready to start "The File Spliter" (also known as Create_ava_331b.exe) throught wine:

~~~
cd ~/adempiere_ava
wine Create_ava_331b.exe
~~~

For extracting in the current directory, just press the magic ok button. This creates the file ava_331b.7z, which is a 7zip archive. 7z extractors are also easily apt-getable throught universe. After that, extract the archive:

~~~
sudo apt-get install p7zip-full
p7zip -d ava_331b.7z
~~~

Your virtual machine is now available under the directory ~/ava_331b/.

### Installation under VirtualBox

- Download VirtualBox. Recommended to use the latest version (version 3.0.2). [Download here](http://www.virtualbox.org/wiki/Downloads)
- Download Paul Aviles new AVA [here](http://downloads.sourceforge.net/sourceforge/adempiere/ava353a.7z?use_mirror=master)
- Unzip the AVA. Make sure you know where is the file location.
- Download the OVF File Format [here](http://sourceforge.net/projects/adempiere/files/AVA%20-%20Virtual%20Appliances/AVA353/ava353a_OVF10.ovf/download) and put it in the same folder with your AVA file
- OVF is just an xml to point the Virtual Appliance resource e.g. hard disk, network etc to maintain interop between different virtual machine technology. More info regarding ovf [here](http://en.wikipedia.org/wiki/Open_Virtualization_Format)
- Open your VirtualBox.
- Go to file > Import Appliance
- Import your .ovf file
- Click "Agree" on the subsequent screen
- Just maintain the default setup and click "OK"
- Sit back and enjoy the installation.

## In case the ovf file does not work

When importing the ovf file just results in an error message from VirtualBox after clicking "Agree", VirtualBox will not keep the new VM in its menu, so you can't fix the problem. Instead, follow these steps to manually set up what otherwise the ovf file would have done for you:\

- Create a new virtual machine, Operating system: Linux, Version: Redhat
- Assign at least 512MB of RAM in the next step
- Use the system.vmdk file you'll find in your AVA archive as an existing hard disk
- Before you can power the VM on, change the storage setting: Remove the SATA Controller and add a SCSI controller instead. Under the SCSI controller re-add the system.vmdk as a hard disk.
- Now you're ready to boot your AVA VM.

## Things you can do with AVA

- Giving people the opportunity to play with ADempiere with a very easy installation
- Providing implementors with a tool to make demonstrations and recreate easily the whole installation
- For testing environment purposes
- And much more

## See also

- [ADempiere Virtual Appliance Install](a)
- [Activating AVA upgrades](a)
- [Howto Create AVA](a) by [Red1](https://wiki.adempiere.net/User:Red1)

## Useful links

- [Other Open source projects supplied as VMware virtual appliances](http://www.vmware.com/vmtn/appliances/directory/)
- Latest [Adempiere Virtual Appliance](http://sourceforge.net/project/showfiles.php?group_id=176962&package_id=249213) in SourceForge. (Take all the parts listed).