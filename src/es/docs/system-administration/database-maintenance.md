---
title: Mantenimiento de la Base de Datos
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

***Consejos y sugerencias para mantener la base de datos.***

## Ajuste de la Base de Datos

Las bases de datos necesitan un mantenimiento regular para funcionar bien. Si no tienes un administrador de base de datos que pueda ocuparse de esto por ti, considera contratar uno a intervalos regulares.
Lee la documentación de tu base de datos sobre cómo ajustarla para mejorar el rendimiento. Por ejemplo, consulta https://community.oracle.com/message/12295510. Hay muchas tácticas que puedes probar, como separar los espacios de tablas de índices, datos y blobs.

## Consideraciones de Hardware

El ajuste de hardware puede volverse bastante técnico para garantizar el acceso más rápido a los datos. Busca asesoramiento de expertos específicos. Aquí tienes algunas ideas para explorar.

- Verifica la RAM del servidor de la base de datos y asegúrate de tener suficiente para almacenar toda la base de datos. El sistema puede realizar mucho intercambio de páginas si no tienes suficiente RAM para contenerlo todo.

- Considera el uso de unidades de estado sólido (SSD), ya que también ayudarán a acelerar el acceso a la base de datos. Específicamente, dos unidades SSD en configuración RAID 0 serán mucho más rápidas que una sola unidad. Sin embargo, no hay redundancia y el sistema será vulnerable a la corrupción de datos. Esto puede ser preferible si se realizan copias de seguridad periódicas en un almacenamiento más seguro.

## Eliminar Datos No Utilizados

Hay algunas cosas que puedes revisar rápidamente. En tu base de datos, encuentra los comandos para listar las veinte tablas principales por tamaño. Algunas de estas pueden ser temporales o registros de parámetros de procesos. Puedes eliminar la información que ya no necesitas. Una vez que hayas reducido los datos, utiliza las herramientas de la base de datos para analizar y limpiar las tablas. Esto también ahorrará espacio.

En ADempiere, las siguientes tablas, especialmente las de registro, pueden ser reducidas o vaciadas de datos:

- Tablas temporales que comienzan con "T_"
- Tablas de importación que comienzan con "I_"
- Cualquier tabla llamada Test
- Tablas que comienzan con "AD_PInstance"
- AD_Find
- AD_Error
- AD_Issue
- AD_ChangeLog (registros antiguos)
- AD_Session (registros antiguos)
- AD_Note (notas antiguas)
- Tablas que terminan en Log

Estas tablas pueden ocupar fácilmente la mitad del espacio de la base de datos. Si necesitas estos datos, considera realizar una copia de seguridad en otra base de datos. Como mantenimiento rutinario, considera configurar tareas de limpieza para eliminar datos antiguos de estas tablas.

En la aplicación, puedes limitar la cantidad de datos devueltos por una consulta si un usuario abre una ventana con todos los registros.

Las tablas con muchos registros pueden ser marcadas como "Alto Volumen" para que los usuarios reciban una búsqueda cuando la ventana se abre por primera vez en lugar de abrir todos los registros.

También puedes limitar la cantidad de registros devueltos por consultas en la ventana de Roles para evitar que se devuelvan demasiados.

## Agregar Índices

ADempiere no aplica índices en las tablas de la base de datos de forma predeterminada. Los índices tienen un costo en la operación de escritura que compensa la velocidad ganada en algunas operaciones de lectura. Se requiere una estrategia de índices para asegurar que los índices sean efectivos y no solo añadan sobrecarga. Considera el consejo de Craig Mullens en el artículo [Top 10 Steps to Building Useful Database Indexes](http://www.dbta.com/Columns/DBA-Corner/Top-10-Steps-to-Building-Useful-Database-Indexes-100498.aspx).

::: info Nota

Los índices deben construirse para optimizar el acceso a tus consultas SQL. Para crear adecuadamente un conjunto óptimo de índices se requiere una lista de las consultas SQL que se utilizarán, una estimación de la frecuencia con la que se ejecutará cada declaración SQL y la importancia de cada consulta. Solo entonces se puede realizar el delicado equilibrio de crear los índices correctos para optimizar las consultas correctas la mayor parte del tiempo.
:::

Aquí tienes algunos ejemplos:

- Grandes tablas no transaccionales

```sql
create index with (AD_Org_ID, AD_Client_ID, IsActive)
create index with (UPPER(Value))
create index with (UPPER(Name))
```

- Grandes tablas de transacciones

```sql
create index with (AD_Org_ID, AD_Client_ID, DocStatus, Processed, Posted)
```

- Gran AD_ChangeLog

```sql
create index for ad_changelog with (ad_table_id, record_id)
```
