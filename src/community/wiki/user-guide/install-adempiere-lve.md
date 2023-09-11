---
title: InstallAdempiereLVE
category: Community
star: 9
sticky: 9
tag:
  - Wiki
  - User Guide
article: false
---

## ADempiere-LVE Instalacion

### Preparacion

1. Instalar la localización Colombia siguiendo los pasos indicados en el [link siguiente](http://www.adempiere.com/LCO_Instrucciones_Instalacion).

2. Descargar o instalar algún cliente de Mercurial

- Windows: TortoiseHG [1]
- Linux: TortoiseHG Workbench (desde el instalador de paquetes o vía terminal)

3. Descargar el repositorio con el código de la localización Usando la herramienta gráfica o vía comando: hg clone https://code.google.com/p/adempiere-lve-361/

### Instalación

1. Ubicar el script dentro de la localización Venezuela LVE_361 y ejecutelo en su base de datos

Directorio y archivo:

LVE_361/scripts/Change_language_from_es_CO_to_es_VE.sql
LVE_361/scripts/tables_c_region_and_c_city_from_VE.sql

2. Ubicar el directorio LVE_361/es_ve

3. Ingrese a Adempiere con rol System Administrator (preferible con lenguaje English pues las instrucciones son con los nombres de procesos en inglés)

4. Abra la ventana "Translation Import/Export"

5. Seleccione en Language la opción Spanish (Venezuela)

5.1. Deje los campos Client y Table en blanco

6. Oprima el botón Import y seleccione el directorio donde se descargó o descomprimió los archivos xml de la traducción es_VE

7. Cuando este proceso finalice puede cerrar la ventana

8. Ejecute ahora el proceso Synchronize Terminology

10. Ubicar el directorio migration_LVE_361/LVE_361

11. Ejecute el Script de customization.sql

12. Ejecute Menu -> System Admin -> General Rules -> Sequence Check .

13. Ejecute el Script de 1Pre_Packing_deposito.sql

14. Ejecute Menu -> System Admin -> General Rules -> Sequence Check .

15. Ingrese a Adempiere con rol System Adminitrator ( Lenguaje English )

16. Abra la ventana Menu -> Aplication Dictionary -> Aplication Packaging -> PackIn.

17. Ubique el directorio migration_LVE_361/package y ejecute los siguientes paquetes:

- LVE_DeleteOrCancelInvoice.zip
- LVE_deletePayment.zip
- LVERetenciones.zip
- LVE_Deposit.zip
- LVE_Payment.zip

Nota: luego de la ejecución de cada paquete es de GRAN IMPORTACIA ejecutar el proceso ubicado en: Menu -> System Admin -> General Rules -> Sequence Check .

18. Ejecute el Script de 2Post_Packing_Deposito

19. Ejecute Menu -> System Admin -> General Rules -> Sequence Check .

20. Ejecutar el script por consola:

LVE_361/script/Migracion LVE_361/LVE_361/LVE_postgresql.sh

Comando consola:

sudo ./LVE_postgresql.sh 361 commit | psql -U adempiere -d adempiere >361.lst

21. Ejecutar el proceso ubicado en: Menu -> System Admin -> General Rules -> Sequence Check.

22. En el directorio principal de su aplicacion al mismo nivel de los directorios packages y zkpackages pegar la carpeta reports ubicada en:

LVE_361/script/Migracion LVE_361/
23. Ubicar y abrir el scrip de retenciones:

migration_LVE_361/LVE_361/withholding_LVE361.sql
24. Antes de la ejecución del script previamente usted debe tener creada la compañía a la cual se le va a aplicar la configuración, una vez que esté creada reemplace las ocurrencias de @ID_CLIENT@ por el ID que se le generó al momento de la creación de la compañía.

25. Proceda a la ejecución del script withholding_LVE361.sql

26. Ubicar y abrir el scrip de traducción de documentos:

migration_LVE_361/LVE_361/documentsTraslation_LVE361.sql
27. Antes de la ejecución del script previamente usted debe tener creada la compañía a la cual se le va a aplicar la configuración, una vez que esté creada reemplace las ocurrencias de @ID_CLIENT@ por el ID que se le generó al momento de la creación de la compañía.

28. Proceda a la ejecución del script documentsTraslation_LVE361.sql

28a. correr script 823_IDEMPIERE-178.sql Descargar desde: https://bitbucket.org/CarlosRuiz_globalqss/globalqss-adempiere-patches/src/61b1e2a19eb5/migration/360lts-release/postgresql/823_IDEMPIERE-178.sql?at=patches_360

29. Ubicar y abrir el scrip de 3Deposito_cambios_Organizacion.sql:

migration_LVE_361/LVE_361/3Deposito_cambios_Organizacion.sql
30. Antes de la ejecución del script previamente usted debe tener creada la compañía a la cual se le va a aplicar la configuración, una vez que esté creada reemplace las ocurrencias de @ID_CLIENT@ por el ID que se le generó al momento de la creación de la compañía.

31. Proceda a la ejecución del script 3Deposito_cambios_Organizacion.sql

32. Ubicar y abrir el scrip de controlnumbervalidation.sql:

migration_LVE_361/LVE_361/controlnumbervalidation.sql
33. Ubicar y abrir el scrip de bank_lve361.sql:

migration_LVE_361/LVE_361/bank_lve361.sql
34. Antes de la ejecución del script previamente usted debe tener creada la compañía a la cual se le va a aplicar la configuración, una vez que esté creada reemplace las ocurrencias de @ID_CLIENT@ por el ID que se le generó al momento de la creación de la compañía.

35. Proceda a la ejecución del script bank_lve361.sql

36. Abra la ventana Menu -> Aplication Dictionary -> Aplication Packaging -> PackIn.

37. Ubique el directorio migration_LVE_361/package/nomina y ejecute los siguientes paquetes es dicho orden:

- LVE_TalentoHumanoHigiene_1.zip
- LVE_TalentoHumanoNomina_2.zip
- LVE_TalentoHumanoRRHH_3.zip
- LVE_Empleado_4.zip
- LVE_CatalogoConceptos_5.zip
- LVE_HR_Loan_Type_6.zip

- Nota: luego de la ejecución de cada paquete es de GRAN IMPORTACIA ejecutar el proceso ubicado en: Menu -> System Admin -> General Rules -> Sequence Check.

38. Ubicar la carpeta:

migration_LVE_361/LVE_361/361/nomina
39. Realizar los cambios indicados al comienzo de cada uno de los Script y ejecutarlos.

40. Ejecutar el proceso ubicado en: Menu -> System Admin -> General Rules -> Sequence Check.

--[Fbolivar](https://wiki.adempiere.net/User:Fbolivar) 16:55, 13 April 2013 (UTC) Contribución original: [Double Click Sistemas C.A.](http://dcs.net.ve/) --[Fbolivar](https://wiki.adempiere.net/User:Fbolivar) 16:55, 13 April 2013 (UTC) Modificaciones a la instalación: Félix Bolívar [Synergix Solutions, C.A.](http://synergixs.com/)