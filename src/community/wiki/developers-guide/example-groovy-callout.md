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

Here is another implementation of JSR223 Callout Scripting done in Groovy contributed by [Milos Tijanic](https://wiki.adempiere.net/User:Milos_t) of SERBIA. They are based on the Price calculation from Serbian localization project.

Price Calculation is a mandatory document in Serbia for receiving goods. It must display landing cost allocation per product, VAT amount, rate, price margin, vendor price and our price in tabular format.

First script is a callout, which refreshes calculated fields, after changing values.

~~~
/**
 * Script Callout for MLSR_PriceCalculationLine
 * 
 * Search Key: groovy:CallOutPriceCalculationLine
 * Name: CallOutPriceCalculationLine
 * Description: Calculate amount when some field is changed
 * 
 * Comment/Help: 
 * 
 * Event type: Callout
 * Rule type: JSR 223 Scripting APIs
 * 
 * @author Milos Tijanic
 */

import rs.adempiere.model.MLSRPriceCalculationLine

MLSRPriceCalculationLine calcLine = new MLSRPriceCalculationLine(A_Ctx, 0, null)

calcLine.setT_Qty(A_Tab.getValue("T_Qty"))
calcLine.setPriceVendor(A_Tab.getValue("PriceVendor"))
calcLine.setSellingPrice(A_Tab.getValue("SellingPrice"))
calcLine.setC_Tax_ID(A_Tab.getValue("C_Tax_ID"))
calcLine.setLandAmt(A_Tab.getValue("LandAmt"))

calcLine.calculateAmounts()

A_Tab.setValue("LineVendorAmt", calcLine.getLineVendorAmt())
A_Tab.setValue("LineSalesWiTax", calcLine.getLineSalesWiTax())
A_Tab.setValue("TaxAmt", calcLine.getTaxAmt())
A_Tab.setValue("LineSalesWoTax", calcLine.getLineSalesWoTax())
A_Tab.setValue("PriceDifference", calcLine.getPriceDifference())
A_Tab.setValue("TransferredTaxAmt", calcLine.getTransferredTaxAmt())
~~~

We then test this script with the following code:

~~~
package rs.adempiere.test

import test.AdempiereTestCase

import groovy.lang.Binding

/**
 * Parameters starts with A_ prefix
 *   A_WindowNo
 *   A_Tab
 *   A_Field
 *   A_Value
 *   A_OldValue
 *   A_Ctx 
 */

public class CalloutPriceCalculationLineTest extends AdempiereTestCase {
	void testCallout() {
		DummyGridTab A_Tab
		A_Tab = new DummyGridTab()
		A_Tab.setValue("T_Qty", 10)
		A_Tab.setValue("PriceVendor", 5)
		A_Tab.setValue("SellingPrice", 8)
		A_Tab.setValue("C_Tax_ID", 104)
		A_Tab.setValue("LandAmt", 2)
		
		Binding binding = new Binding()
		binding.setVariable("A_Tab", A_Tab)
		binding.setVariable("A_Ctx", getCtx())
		
		def shell = new GroovyShell(binding)
		shell.evaluate(new File('script/CallOutPriceCalculationLine.groovy'))
		
		A_Tab = binding.getVariable("A_Tab")
		
		assert 50    == A_Tab.getValue("LineVendorAmt")
		assert 80    == A_Tab.getValue("LineSalesWiTax")  
		assert 12.20 == A_Tab.getValue("TaxAmt")
		assert 67.80 == A_Tab.getValue("LineSalesWoTax")
		assert 15.80 == A_Tab.getValue("PriceDifference")
		assert  9    == A_Tab.getValue("TransferredTaxAmt")
	}
}
~~~

File DummyGridTab.groovy:

~~~
package rs.adempiere.test

public class DummyGridTab {
    	private mTable = [:]
        
	public Object getValue (String columnName)
	{
		if (columnName == null)
			return null
	
		def field = mTable.get(columnName)
		return field
	}   

	public String setValue (String columnName, value)
	{
		if (columnName == null)
			return "NoColumn"
	
		mTable.put(columnName,  value)
		return ""
	}	
}
~~~

Simillary we define process rule in Groovy:

~~~
/**
 * Script Rule
 * 
 * Search Key: groovy:PriceCalculationCreateFromInvoice
 * Name: PriceCalculationFromInvoice
 * Description: Process that creates PriceCalculation
 * 
 * Comment/Help: 
 * Create price calculation calling procedure MLSRPriceCalculation.createFrom(invoice)
 * 
 * Event type: Process
 * Rule type: JSR 223 Scripting APIs
 */
 
import org.compiere.model.MInvoice
import rs.adempiere.model.MLSRPriceCalculation
import rs.adempiere.model.MLSRPriceCalculationLine

calc = new MLSRPriceCalculation(A_Ctx, A_Record_ID, A_TrxName)
invoice = new MInvoice(A_Ctx, calc.getC_Invoice_ID(), A_TrxName)
 
calc.copyFrom(invoice)
 
result = "OK"
~~~

and here is a test:

~~~
package rs.adempiere.test

import rs.adempiere.model.MLSRPriceCalculation;
import test.AdempiereTestCase

import groovy.lang.Binding
import groovy.util.GroovyScriptEngine

/**
 * Run JUnit test with arguments:
 * -Dtest=src/test/lsr/ProcessPriceCalculationCreateFromInvoiceTest.groovy
 */
public class ProcessPriceCalculationCreateFromInvoiceTest extends AdempiereTestCase {   
    void testProcess() {
        def newCalculation = new MLSRPriceCalculation(getCtx(), 0, getTrxName())
        newCalculation.setC_BPartner_ID(114)
        newCalculation.setC_Invoice_ID(1000000)
        newCalculation.save()
        
        Binding binding = new Binding()
        binding.setVariable("A_Ctx", getCtx())
        binding.setVariable("A_Record_ID", newCalculation.get_ID())
        binding.setVariable("A_TrxName", getTrxName())
                
        def shell = new GroovyShell(binding)
        shell.evaluate(new File('script/PriceCalculationCreateFromInvoice.groovy'))       
        def calc = binding.getVariable("calc")
        
        def lines = calc.getLines()
        assert 3 == lines.length                
    }
}
~~~

We can also run tests from ant:

build.xml

~~~
...
    <path id="groovy.classpath">
        <pathelement path="${groovy.path}" />
    </path>

    <taskdef name="groovyc"
         classname="org.codehaus.groovy.ant.Groovyc"
         classpathref="groovy.classpath"/>
...
    <target name="compile-groovy" depends="compile" description="Compiles all Groovy classes.">
        <groovyc srcdir="${src}" destdir="${build.dir}">
            <classpath>
                <pathelement path="${build.dir}"/>
              <path refid="project.class.path"/>
            </classpath>
         </groovyc>
    </target>    
...
	<target name="test">
		<junit printsummary="yes" fork="yes" haltonfailure="no" showoutput="no">
              <classpath>
                      <pathelement path="${build.dir}"/>
                      <pathelement path="${groovy.path}"/>
                      <path refid="project.class.path"/>
              </classpath>					
	        <formatter type="plain"/>
			<test name="rs.adempiere.test.MPriceCalculationTest"/>
			<test name="rs.adempiere.test.CalloutPriceCalculationLineTest"/>
		</junit>		
	</target>
...
~~~

## See Also

- [Script_Callout](https://wiki.adempiere.net/Script_Callout)
- [Script Process](https://wiki.adempiere.net/Script_Process)
- [Callout](https://wiki.adempiere.net/Callout)
- [Adempiere Junit test](a)