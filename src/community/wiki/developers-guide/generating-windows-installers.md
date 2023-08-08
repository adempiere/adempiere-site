---
title: Generating Windows Installers
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
  - Releasing New Versions
article: false
---

When a new release or update has been published, the Windows installers need to be generated to use the published binaries. This page describes how to do so. The windows installer is intended to give the a new user as simple and install experience as possible. It is not intended for production use.

## Preparing to generate the installers
The code to generate the installers is in the ADempiere repository under the name [adempiereInstaller](https://github.com/adempiere/adempiereInstaller).

Clone or download this repository to you local computer. You can work with the files directly or, for convenience, add the clone as a project in you development environment.

The scripts are based on the NSIS (Nullsoft Scriptable Install System, [http://nsis.sourceforge.net](http://nsis.sourceforge.net)). and you will need this software installed on your local computer. The scripts are based on the NSIS version 3.0b2.

The following NSIS plugins are required and must be installed:

- [ExecDos](http://nsis.sourceforge.net/ExecDos_plug-in)
- [ShellLink](http://nsis.sourceforge.net/ShellLink_plug-in)
- [ZipDLL](http://nsis.sourceforge.net/ZipDLL_plug-in)
- [Inetc](http://nsis.sourceforge.net/Inetc_plug-in)

There is a [NSIS plugin for Eclipse](http://eclipsensis.sourceforge.net/update) available as well which helps with editing the scripts. Read more about it at http://eclipsensis.sourceforge.net/index.shtml

## Gathering the Necessary Files and Information

The installers can be run to generate on-line installers which will download all the necessary files from the Internet, or off-line installers which will include all the files. The off-line installers are around 650Mb in size.

### Off-Line Installers

The off-line installers will need the following:

- The contents of the ADempiere .zip file, extracted to an empty directory. Do not modify the files in anyway. The install script will include these in its own zip file.
- The Java JDK installer downloaded from Oracle. Download both the x32 and x64 versions.
- The PostgreSQL installer downloaded from EnterpriseDB. Download both the x32 and x64 versions.

To keep the files together, it is suggested to use the following directories within the ADempiere Installer project to hold these files:

- windows\install_scripts\tools\adempiereZip - extract the ADempiere release .zip here so you will have adempiereZip\adempiere\...
- windows\install_scripts\tools\java - include both JDK installers
- windows\install_scripts\tools\postgres - include both Postgres installers

### On-Line Installers

For the on-line installers, you will need the following information:

- The URL of the published ADempiere binary .zip file.
- The URLs of the two JAVA JDK installers - the actual installer after the license has
- The URLs of the two PostgreSQL installers

### Updating the Install Scripts

The only file that needs to be changed is Adempiere_winx64.nsi.

In the beginning of the file, there are a number of defines that have to be corrected.

The following defines determine the name of the installer package. The name will be in the form ${PRODUCT_NAME}_${PRODUCT_VERSION}${PRODUCT_PATCH}_${OS_TAG}${OFF_LINE_TAG}.exe.

~~~
!define PRODUCT_NAME "ADempiere"
!define PRODUCT_VERSION "380LTS"
!define PRODUCT_PATCH "_2"  ; Leading underscore if specifying a patch or null string
~~~

If there is no patch or hotfix included, set PRODUCT_PATCH to a null string "".

Next, point SOURCE_FILE_DIR at the extracted zip location. In this case, it points to the adempiere project where the build places the files to be zipped. Access to these files is required for off-line installs as well as the installer will use the icons contained in the ADempiere project.

~~~
; SOURCE_FILE_DIR is the unzipped Adempiere files in the Adempiere project
; found in the install\build\Adempiere folder.  This is required even if an 
; on-line install is being built.  The directory could also be pointed at the 
; ADEMPIERE_HOME directory after a clean extract of the zipped binaries and
; before any setup has been performed.
!define SOURCE_FILE_DIR "..\..\..\adempiere\install\build\Adempiere"
~~~

Point the installer at the ADempiere download link and define the name of the zip file. The other defines in this section can be left as defaults. AD_SIZE is the fully installed and built size of the ADMPIERE_HOME directory.

~~~
; *********************************
; Adempiere defines
; Source of web zip
!define ADEMPIERE_DOWNLOAD_LINK "https://bintray.com/artifact/download/mckayerp/ADempiere-444-Window-Install-Test/Adempiere_380LTS_2.zip"
!define ADEMPIERE_INSTALLER "Adempiere_380LTS_2.zip"
!define AD_INSTALL_DRIVE "C:"
!define ADEMPIERE_HOME "${AD_INSTALL_DRIVE}\Adempiere"
!define AD_PASSWORD "adempiere"     ; Password for Adempiere installtion
!define AD_PORT "8080"              ; Port used by the web server
!define AD_SSL_PORT "8443"          ; Port used for SSL
!define AD_SIZE 1760000             ; The required size in kb of the AD install. Need if downloading zip.
~~~

For the JAVA JDK, define the name, download link URL, installer file name and the default directories for both the x32 and x64 versions. The JDK_MIN_VERSION and JDK_TARGET_VERSION defines are used to determine if the JDK install is necessary on computers that already have another JDK installed.

~~~
; *********************************
; JDK defines - name of the install executable and 
; the default install location
!ifdef AD_WIN32_INSTALL
   !define JDK_NAME "Java JDK 1.8 Update 66 (Win x32)"
   !define JDK_DOWNLOAD_LINK "http://download.oracle.com/otn-pub/java/jdk/8u66-b17/jdk-8u66-windows-i586.exe"
   !define JDK_INSTALLER "jdk-8u66-windows-i586.exe"
   !define JDK_DEFAULT_DIR "$PROGRAMFILES\Java\jdk1.8.0_66"
   !define JAVA_HOME "$PROGRAMFILES\Java\jdk1.8.0_66"
   !define JDK_SIZE 335000             ; The required size in kb of the JDK install. Need if downloading zip.
!else
   !define JDK_NAME "Java JDK 1.8 Update 60 (Win x64)"
   !define JDK_DOWNLOAD_LINK "http://download.oracle.com/otn-pub/java/jdk/8u60-b27/jdk-8u60-windows-x64.exe"
   !define JDK_INSTALLER "jdk-8u60-windows-x64.exe"
   !define JDK_DEFAULT_DIR "$PROGRAMFILES64\Java\jdk1.8.0_60"
   !define JAVA_HOME "$PROGRAMFILES64\Java\jdk1.8.0_60"
   !define JDK_SIZE 335000             ; The required size in kb of the JDK install. Need if downloading zip.
!endif
!define JDK_MIN_VERSION "1.7"
!define JDK_TARGET_VERSION "1.8"
~~~

Similar to the JDK, for Postgres, update the name, download URL, installer name, service ID and version detail of the postgres installer for both x32 and x64 installs. The other defines can be left as defaults.

~~~
; *********************************
; PostgreSQL defines - name of the install executable and 
; the default install location
!ifdef AD_WIN32_INSTALL
   !define PG_NAME "PostgreSQL 9.4.5-1 (Win x32)"
   !define PG_DOWNLOAD_LINK "http://get.enterprisedb.com/postgresql/postgresql-9.4.5-1-windows.exe"
   !define PG_INSTALLER "postgresql-9.4.5-1-windows.exe"
   !define PG_DEFAULT_DIR "$PROGRAMFILES\PostgreSQL\9.4"
   !define PG_SERVICE_ID "postgresql-x64-9.4"
   !define PG_VERSION_DETAIL "9.4.5-1"
   !define PG_SIZE  465000             ; The required size in kb of the PG install. Need if downloading zip.
!else
   !define PG_NAME "PostgreSQL 9.4.5-1 Win x64"
   !define PG_DOWNLOAD_LINK "http://get.enterprisedb.com/postgresql/postgresql-9.4.5-1-windows-x64.exe"
   !define PG_INSTALLER "postgresql-9.4.5-1-windows-x64.exe"
   !define PG_DEFAULT_DIR "$PROGRAMFILES64\PostgreSQL\9.4"
   !define PG_SERVICE_ID "postgresql-x64-9.4"
   !define PG_VERSION_DETAIL "9.4.5-1"
   !define PG_SIZE  465000             ; The required size in kb of the PG install. Need if downloading zip.
!endif
!define PG_MIN_VERSION "9.0"        ; Minimun acceptable PG Version
!define PG_USER "postgres"          ; Username of PG system account
!define PG_PASSWORD "postgres"      ; Password for PostgreSQL installtion
!define PG_PORT "5432"              ; PostgreSQL Port (5432)
~~~

## Generating the Installers

### Using the NSIS Software

- Launch the NSIS Software and click the link to "Compile NSIS scripts".
- Open and compile each of the four .nsi files to generate the four types of install scripts.

### Using the Ant Build File

Run the target "All", the default, in the Ant build.xml file included in the windows directory. This will generate the four installers. The xml file has other targets to generate each one or only the on-line or off-line versions.

A launcher is included in the project to run the build from the External Tools configuration.

Note that you may have to change the NSIS_HOME property to point to your NSIS install location.

### Adding Languages

The installer can support multiple languages. Currently, French and English are enabled. To setup other languages, copy the language/LangStrings_French.nsh file and rename it to the new language. Edit the file to replace the French text with your translation. The English text is in the comments.

Be sure to set the language flag at the top of the file as shown here:

~~~
; Define the language

!ifdef _LANGUAGE_
 !undef _LANGUAGE_
!endif
!define _LANGUAGE_ ${LANG_FRENCH}
~~~

To include the new language file, edit the file Language.nsh and add the language to the following lines:

~~~
; Language files
!insertmacro MUI_LANGUAGE "English"
!insertmacro MUI_LANGUAGE "French"

; Pending translation
;!insertmacro MUI_LANGUAGE "German" 

!include language\LangStrings_English.nsh
!include language\LangStrings_French.nsh 

;!include language\LangStrings_German.nsh
~~~
