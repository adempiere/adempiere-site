---
title: Actualización y Migración
category: Documentación
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

***Instrucciones para actualizar la aplicación y migrar los datos a la nueva versión.***

Una de las grandes características de ADempiere es que las actualizaciones y migraciones a nuevas versiones siempre son gratuitas. El proceso de migración es relativamente sencillo con las herramientas de migración que se han añadido en la versión 3.8.0.

Existen dos actividades principales:

1. Actualizar tu software; y
2. Migrar tu base de datos para asegurar que todos los campos y datos necesarios sean compatibles con el software.

::: warning

**¡Precaución!** Realiza una copia de seguridad de tu base de datos (utilizando utils/RUN_DBExport) y crea una copia del contenido del directorio de la aplicación (\$ADEMPIERE_HOME) antes de intentar actualizar tu sistema. La instalación de la última versión del software podría sobrescribir archivos necesarios, por lo que es mejor tenerlos respaldados. En entornos de producción, realiza la actualización primero en un entorno de prueba.

:::

## Actualizaciones de Software

El software que impulsa la aplicación siempre se está actualizando con correcciones y nuevas características. Mantener una implementación actualizada ayuda a que los usuarios se beneficien del trabajo de la comunidad.

Al actualizar el software, es importante asegurarse de que cualquier código personalizado incorporado en la implementación funcione con la actualización. Si no estás seguro, por favor contacta a los desarrolladores de tus personalizaciones o solicita asistencia. Los desarrolladores deberían poder proporcionarte todos los elementos de la actualización, asegurando que el código principal, los parches y las personalizaciones funcionen de manera conjunta.

## Actualizar a una Nueva Versión

Advierte a los usuarios que el software estará fuera de línea durante la actualización. Apaga el servidor de aplicaciones.
Descarga desde GitHub o genera desde tu entorno de desarrollo, la versión del software a la que deseas actualizar. Esto estará en forma de un archivo zip o tar, por ejemplo, "Release_380lts.zip".
Copia tu directorio ADEMPIERE_HOME o renómbralo. Por ejemplo, de c:\adempiere a c:\adempiere_old.

Si estás instalando sobre la instalación existente, deberías, como mínimo, eliminar el contenido de lo siguiente.

- ADEMPIERE_HOME\migration (desde la versión 3.8.0)
- ADEMPIERE_HOME\lib
- ADEMPIERE_HOME\jboss

Extrae el nuevo archivo de ADempiere en el directorio ADEMPIERE_ROOT (es decir, si ADEMPIERE_HOME es c:\adempiere, extrae en c:\).

## Aplicar Parches

Los parches son una combinación de archivos *.jar*, que reemplazan los archivos *.jar* en el directorio ADEMPIERE_HOME\lib. En el directorio de Parches en GitHub, puede haber más de un tipo de archivo *.jar* que necesite parches. Si descargaste uno o más archivos de parches, reemplaza el archivo existente con el descargado, cambiando su nombre para que coincida. Por ejemplo, copia el archivo *_patches_.jar* a ADEMPIERE_HOME\lib\patches.jar, sobrescribiendo el archivo existente. Consulta las instrucciones detalladas en [Instalación de Parches](http://wiki.adempiere.net/Patches_Installation).

::: info Nota

Si estás actualizando un archivo de parche, es una buena idea cambiar el nombre del archivo *.jar existente a algo como patches.jar.old.

:::

## Aplicar Personalizaciones, Paquetes y Otros Archivos

::: info Nota

Asegúrate de que las personalizaciones aplicadas sean compatibles con la versión de software objetivo.

:::

Si tienes un customization.jar con código personalizado o un archivo packages.jar con archivos *.jar de soporte, agrégales al directorio $ADEMPIERE_HOME\lib, sobrescribiendo los archivos existentes.

Además, si tienes otros archivos personalizados, como archivos *.bat, un archivo CustomReport.war, imágenes, etc., no olvides agregarlos a la nueva instalación.

## Migración de Base de Datos

El siguiente paso es actualizar la base de datos. Antes de la versión 3.8.0, esto se hacía aplicando archivos sql en secuencia, lo que requería acceso a herramientas de base de datos. Con la versión 3.8.0 se ha añadido una nueva [Herramienta de Migración ADempiere](http://wiki.adempiere.net/Migrate) que simplifica mucho el proceso. En resumen, en lugar de aplicar scripts a una base de datos para convertirla en otra, la herramienta de migración compara la base de datos de producción con la base de datos de referencia (o semilla) y se asegura de que todos los elementos de diccionario necesarios estén en su lugar. La herramienta es muy versátil y permite migraciones entre múltiples versiones del software y transferencias de bases de datos de un proveedor a otro. Para obtener más detalles, consulta el manual de la [Herramienta de Migración](http://wiki.adempiere.net/Migrate).

Para utilizar la herramienta, primero deberás importar la base de datos de referencia como referencia. Puedes hacer esto con el script RUN_ImportReference.[sh|bat]. Cuando la importación esté completa, ejecuta el script RUN_Migrate.[sh|bat] para iniciar la [Herramienta de Migración](http://wiki.adempiere.net/Migrate). Si la herramienta ha identificado correctamente la configuración de la base de datos, simplemente haz clic en "Iniciar Migración" y deja que la herramienta complete la tarea. La mayoría de las bases de datos de producción requerirán alguna intervención, así que consulta el manual de la Herramienta de Migración para obtener instrucciones más detalladas.

## Migración con Scripts XML o SQL

Puede ser necesario migrar aún más la base de datos aplicando scripts que están incluidos en parches o personalizaciones y que no se han aplicado a la base de datos de semilla o referencia. Las migraciones XML se pueden aplicar ejecutando RUN_MigrateXML.[sh|bat] después de la instalación y construcción del software. Los scripts XML que se deben aplicar deben encontrarse/guardarse en el directorio ADEMPIERE_HOME/migration. Los scripts SQL se pueden aplicar con cualquiera de varias herramientas. El proceso es similar a generar una nueva base de datos de semilla. Consulta [Creación de una Nueva Base de Datos de Semilla](http://wiki.adempiere.net/Creating_a_New_Seed_Database) para obtener más detalles.

Una vez que se hayan aplicado todos los scripts, puedes iniciar el servidor de la aplicación y probar la actualización.
