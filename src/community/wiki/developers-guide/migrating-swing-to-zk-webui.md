---
title: Porting Custom Swing Form to ZK 
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - Developer's Guide
article: false
---

## Introduction

- ADempiere has 2 client modes to access the ERP application:
  - Java Swing which is rich client and runs perfectly via LAN
  - Web-based clients such as HTML and ZK Ajax that is mostly used via the Web.
- All clients will access the Application Dictionary or Data Model to get the same data treatment. However the sourcecode that access and display that has to be mapped.
- The content below is posted by Low Heng Sin who is chiefly responsible for the ZK Ajax client completion started by Posterita.
  - It illustrates the direct component to component mapping at the sourcecode level of the application.

## Component Mapping



Swing Classs | Zk Class | Notes
-- | -- | --
org.compiere.swing.CPanel | org.adempiere.webui.component.Panel | setLayout(layout) is replace by appendChild(layout). Layout manager is implemented as container component in Zk.
javax.swing.JLabel | org.adempiere.webui.component.Label |  
org.compiere.grid.ed.VLookup | org.adempiere.webui.editor.WTableDirEditor org.adempiere.webui.editor.WSearchEditor | WtableDirEditor for combo box, WsearchEditor for lookup.
org.compiere.grid.ed.VString | org.adempiere.webui.editor.WStringEditor |  
java.awt.GridBagLayout | org.adempiere.webui.component.Grid | Use GridFactory.newGridLayout()
javax.swing.JcomboBox | org.adempiere.webui.component.Listbox org.adempiere.webui.component.Combobox | Only Combobox support auto complete
java.awt.BorderLayout | org.zkoss.zkex.zul.Borderlayout | Must set width and height, either in pixel or %. Must setStyle("position: relative;") when use within ADForm.
org.compiere.apps.ConfirmPanel | org.adempiere.webui.component.ConfirmPanel |  
org.compiere.apps.StatusBar | org.adempiere.webui.panel.StatusBarPanel |  
org.compiere.minigrid.MiniTable | org.adempiere.webui.component.WListbox |  
org.compiere.grid.ed.VLocator | org.adempiere.webui.editor.WLocatorEditor |  
javax.swing.event.TableModelListener | org.adempiere.webui.event.WTableModelListener |  
javax.swing.JCheckBox | org.adempiere.webui.component.Checkbox |  
org.adempiere.swing.CDialog | org.adempiere.webui.component.Window |  
Java.awt.event.ActionListener | Org.zkoss.zk.ui.event.EventListener | actionPerformed(ActionEvent) is replace by onEvent(Event)
Org.compiere.apps.AEnv | Org.adempiere.webui.apps.AEnv |  
Javax.swing.JScrollPane | Org.adempiere.webui.component.Panel | Most of the time, JscrollPane can be remove from the UI components tree when we port Swing form to Zk. If you are not sure, remove it and test.
Javax.swing.JSplitPane | Org.zkoss.zul.Splitterorg.zkoss.zkex.zul.BorderLayout | Splitter must use together with Hbox or Vbox. If that's not suitable for the layout you are trying to build, use BorderLayout instead.
Org.compiere.apps.ADialog | Org.adempiere.webui.window.FDialog |  
Javax.swing.table.DefaultTableModel | Org.adempiere.webui.component.ListModelTable org.adempiere.webui.component.SimpleListModel | Use ListModelTable with WListbox and SimpleListModel with Listbox.
Java.beans.VetoableChangeListener | Org.adempiere.webui.event.ValueChangeListener | Event listener for field editor. vetoableChange(PropertyChangeEvent) is replace by valueChange(ValueChangeEvent)
Org.adempiere.apps.form.FormPanel | Org.adempiere.webui.panel.ADForm | init (int WindowNo, FormFrame frame) is replace by initForm(). Use the protected method getWindowNo to access the WindowNo variable.

## Batch processing in custom form

- Don't use the AsyncProcess interface.
- Use Clients.showBusy and AuEcho to show busy message.
- Use ServerPush to execute long task on separate thread.
- Example for long task and batch printing: org.adempiere.webui.apps.form.WInvoiceGen.

