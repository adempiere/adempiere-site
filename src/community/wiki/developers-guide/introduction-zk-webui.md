---
title: Introduction to ZK WebUI
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

Adempiere has adopted ZK as a standard to build thin client applicaiton. ZK is renowned for its "Ajax without JavaScript" approach since 2005, enabling developers to build rich Internet applications transparently without any knowledge of Ajax and JavaScript.

We can create custom window By using ZK Code in [Adempiere](https://wiki.adempiere.net/Adempiere) instead of using swing based [Window, Tab & Field](a).

## These are the Steps to Create Custom Window

### STEP:1

1. Create a class to write Window Configuration Code in the specified package `org.adempiere.webui.apps.form`.

2. Login as System/SystemAdministrator:
   - Go to "Application Dictionary" and find the "Form" Window.
   - Create a new Form. In the "class name" widget of the "Form" window, specify the Class Location like `org.adempiere.webui.apps.form.VendorPaymentBalance`.
   - Save this Form.

3. Create a new Menu:
   - In the "Action" widget, specify "form". This will provide the "Special Form" Widget in the Menu Window.
   - Specify the form name that was created in step 2.

### Step:2

4. To make the created menu act as an Adempiere window:
   - Add this Menu to the specified Role to which you are granting access permission.

   In case the menu is not visible after following the above steps:
   - Login as System/SystemAdministrator

   1. Open the "Role" window and select the Role to which access permission was granted.
      - In the "Form Access" tab for this Role, search for the form that was created. If it's not there,
      - Create a new record in the "Form Access" tab. In the "Special Form" field, add the recently created form.

   Now the menu should appear and function as an Adempiere window.

~~~
 package org.adempiere.webui.apps.form;

 import org.adempiere.webui.component.*;
 import org.adempiere.webui.panel.ADForm;

 public class WSampleWebUIWindow extends ADForm {

	/**
	 * Generated serial number
	 */
	private static final long serialVersionUID = 7328729344548442180L;


	@Override
	protected void initForm() {

        Button but = new Button("Test Button");
      
	this.appendChild(but );
	}
 }
~~~

