---
title: ZK Theme Development
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

~~~
This document applies to branch ADEMPIERE-294 Upgrade to zk 7.02 which will be added as a patch after the release of 3.8.0.
~~~

## Developing Themes

### ZK Configuration

The following changes have been made to the ZK files to enable custom themes:

- In zkwebui/WEB-INF/zk.xml, a custom theme provider is defined and a number of development settings added. In production environments, these need to be tailored appropriately.

~~~
<desktop-config>
     <theme-provider-class>org.adempiere.webui.theme.AdempiereThemeProvider</theme-provider-class>
 </desktop-config>

 <library-property>
                <name>org.zkoss.zul.nativebar</name>
                <value>true</value>
 </library-property>

 <library-property>
                <name>org.zkoss.theme.folder.root</name>
                <value>theme</value>
 </library-property>

 <library-property>
                <name>org.zkoss.theme.preferred</name>
                <value>adempiere_default</value>
 </library-property>
 
 <library-property>
                <name>org.zkoss.web.classWebResource.cache</name>
                <value>false</value>
 </library-property>

 <library-property>
  <name>org.zkoss.zk.WCS.cache</name>
  <value>false</value>
 </library-property>

 <library-property>
                <name>org.zkoss.web.classWebResource.cache.CSS.hours</name>
                <value>-1</value>
 </library-property>
~~~

### The Theme Folder Structure

Themes can be added to the application as folders or jar files. Theme Jar files can be saved in a number of locations but the zkwebui/WEB-INF/lib/theme folder is a good choice. The folder structure is more powerful and allows for greater flexibility in managing the theme. By the library property set in zk.xml, the theme folder is zkwebui/theme. (This is the zk default name so the entry in the zk.xml file is not really needed but is there in case of changes.) Under that folder are theme specific folders which follow a standard structure.

~~~
-zkwebui
   |-theme
       |-<theme name>
           |-images
           |-js
           |-zkex
           |-zkmax
           |-zul
               |-css
                   ext.css.dsp
                   norm.css.dsp
                   zk.wcs
               |-html
               |-img
               |-less
                   |-font
                   _header.less
                   _reset.less
                   _zkmixins.less
                   _zkvariables.less
                   norm.less
               login-info.zul
               ...
~~~

::: note Note:

"zkex" and "zkmax" folders relate to theme elements that are only available with the ZK Premium and Enterprise Edition. They are included in case of upgrades.

:::

The images and *.zul files in the zul directory have been added and are theme specific. The rest of the structure is defined by zk and is part of the language definition "xul/html". This language defines all the component styles that need to be included in a Widget CSS descriptor (WCS) file - zk.wcs. Edits to the .less files, once compiled to .css.dsp, will be picked up and included in the zk.wcs file.

::: info Note:

Adding new components to this structure requires a modification of the language definition. See the ZK documentation for more info.

:::

The most important file in this structure is _zkvariables.less. This file contains theme specific variables such as colors and sizes that enable the full power of the less css preprocessor. For example, the two themes adempiere_default and green_thumb differ only in the settings of this file.

## Creating A New Theme

To create a new theme:

- Copy the `adempiere_default` folder under the theme directory and rename it to a suitable name. Alternatively, generate the folder structure from zk sources directly, such as a maven project, git, or extract a jar. You can also use a jar file if you don't intend to modify the components.

- Log in to ADempiere as the System Administrator and create a new theme in the "Application Dictionary → Theme Management" window. Set the fields accordingly.

- Copy or create any external .less files and modify them as required. These should be stored in the `zkwebui/less` folder.

- Edit the `build-lesscss.xml` file to add a target for your new theme.

- Build the ADempiere application and launch the server. The new theme should be available as a user preference or as the system default depending on how the Theme Management fields were set.

## Adding External less/css Files

Additional css files can be added to the theme by including them as resources in the Theme Resources tab of the Application Dictionary{{#if: Theme Management | →Theme Management }}{{#if: | → }}{{#if: | → }} window.

Styles in these files can override the styles in the theme-specific zk.wcs file. Changes to these files will be posted to the server once saved and the changes will be visible when the browser is refreshed. It is strongly suggested that .less files be used to generate the css files as it is much easier to maintain .less files. Less files can be stored in the zkwebui/less folder and the output css.dsp files will be saved in the css folder using the same file name.

## Compiling less to css.dsp

To aid in compiling less files to css.dsp files, a ANT build file has been added to the zkwebui folder - build-lesscss.xml. This file includes targets to compile the external css and/or the individual theme folders. Developers will find it helpful to create External Tool Configurations for these targets.

Changes to the external .less files can be compiled and are published on the fly so the update is available by refreshing the browser. Changes to the .less files in the theme folders require the server to be republished. (If someone could figure out how to do this on the fly, it would be helpful.)

## Using less To Override A zk Style or Create a New Component

lesscss is a powerful tool. To learn more about its capabilities, visit the [lesscss.org](http://lesscss.org/) website or search for the numerous articles on its features on the web.

As an example of what it can do, here is the less code that is used to style the ADempiere Search Editor:

~~~
.ad-search-editor,
.ad-number-editor,
.ad-pattribute-editor {

	// Search box 
	border: none; 
	padding: 0px; 
	margin: 0px; 
	background-color: transparent;
	
	//		String style = AEnv.isFirefox2() ? "display: inline"
	//			: "display: inline-block";
	//	style = style
	//			+ ";border: none; padding: 0px; margin: 0px; background-color: transparent;";	
	
	table {
		border: none; 
		padding: 0px; 
		margin: 0px;
		width:	100%;
		cellpadding: 0;
		cellspacing: 0;		
	}
	
	tr {
		width: 100%; 
		border: none; 
		padding: 0px; 
		margin: 0px; 
		white-space:nowrap;
	}

	.z-textbox {
		.leftBorderRadius(@borderRadiusSmall);
	    display: inline; 
	    width: 100%;
	}

	.editor-button {
		.iconFontStyle(@baseFontSize, @iconColor);
		width: @baseButtonWidth;
		<c:if test="${ zk.ie == 8 }">
			width: @baseButtonWidth - 10;
		</c:if>
		height: @baseButtonHeight;
		.rightBorderRadius(@borderRadiusSmall);
		padding: 0px;
		line-height: @baseLineHeight;
		background: @inputBackgroundColor;
		text-align: center;
		vertical-align: middle;
		overflow: hidden;
		cursor: pointer;

		&:hover {
			border-color: @hoverBorderColor;
			<c:if test="${ zk.ie != 8 }">
				.verGradient(@hoverGradientStart, @hoverGradientEnd);
			</c:if>
		}
		&:active {
			border-color: @activeBorderColor;
			<c:if test="${ zk.ie != 8 }">
				.verGradient(@activeGradientStart, @activeGradientEnd);
			</c:if>
			.boxShadow('inset 1px 1px 1px #91AAB7');
		}
		input[disabled] + & {
			&:hover,
			&:active {
				border-color: @inputBorderColor;
				.resetGradient();
				.boxShadow('none');
			}
		}

		img {
			vertical-align: middle;
			text-align: center;
		}
	}
}
~~~

## Defining CSS Classes in the Code

When developing components, editors, forms and windows in Java, as much as possible, don't hard code the look and feel. Statements like "component.setHeight("100%");" should be avoided. Instead, use the theme system to determine the look and feel. Then, different themes can display the same component in different ways without the need to change the code.

To assist the theme developers, the main component classes - a class that implements or extends a major web component - should be given a css class name. (Call these SClass to avoid the confusion with java class.) In the constructor of the class or the initialization function, the SClass can be set with the ThemeUtils.addSClass(String sclassName, Component comp) function. For convenience, use the naming convention "ad-classname", all in lowercase. The term major component, is meant to refer containers or elements that act as a parent for a number of other elements that all need to be styled together, or for individual components/elements that need a specific style applied.

::: info Note:

The name format in java uses camelCase. In css, the convention is to use all lower case with hyphens to separate words. The css SClass prefix "ad-" identifies the next word as a ADempiere class name in lower case. Additional words can be added with hyphens as required.

:::

- DefautlTheme
- ThemeUtils
- MTheme
