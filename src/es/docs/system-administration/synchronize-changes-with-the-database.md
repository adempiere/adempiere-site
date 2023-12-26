---
title: Sincronizar Cambios con la Base de Datos
category: Documentación
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

## Why Synchronization is Important

Los registros en el Diccionario de Aplicaciones para Columnas o Tablas describen columnas y tablas reales en la base de datos. Es importante que el Diccionario de Aplicaciones refleje con precisión la estructura de la base de datos. Si no lo hiciera, la aplicación, por ejemplo, podría intentar acceder a datos de una columna que no existe.

::: warning

No se recomienda realizar cambios que requieran sincronización en un entorno de producción, especialmente cuando hay muchos usuarios conectados a la base de datos. La transacción de sincronización que aplica los cambios en el DDL puede causar bloqueos en las tablas que pueden hacer que la aplicación se sienta lenta durante la duración de la transacción. Es mejor realizar los cambios fuera de línea o en un entorno de desarrollo y luego migrar los cambios al sistema de producción utilizando los scripts de migración XML o la funcionalidad de empaquetado/desempaquetado (pack-out/in).

:::

## Cómo Sincronizar Cambios

Cada vez que realizas un cambio en el Diccionario de Aplicaciones que afecta la definición de una columna o tabla, los cambios deben sincronizarse con la base de datos. Hay tres formas de hacer esto:

1. En la pestaña de Columna de la ventana de Tablas y Columnas, hay un botón para Sincronizar Columna. Haz clic en este botón para sincronizar la columna con la base de datos.
2. En el Menú del Diccionario de Aplicaciones, ejecuta el proceso Sincronizar Todas las Tablas y Columnas.
3. Configura la entrada de Configuración del Sistema "DATABASE_AUTO_SYNC" en 'Y' (o cualquier valor que no sea 'N').

| Cuando hagas...                                     | Entonces...                                                                                                                            |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Hacer clic en el botón Sincronizar Columna         | La columna se sincronizará con la base de datos. Si la columna es nueva, se añadirá. Si la columna ya existe, se renombrará si es necesario y se modificarán las restricciones adecuadas. Si la tabla no existe en la base de datos, también se añadirá. |
| Ejecutar el proceso Sincronizar Todas las Tablas y Columnas | Cualquier tabla o columna que necesite sincronización lo será.                                                                     |
| Configurar la entrada de Configuración del Sistema "DATABASE_AUTO_SYNC" en 'Y' | Cada vez que agregues o guardes un cambio en un registro de columna o tabla, el cambio se sincronizará.                           |

### Utilizando el Botón Sincronizar Columna

Cuando agregas una tabla por primera vez, se añaden automáticamente varias columnas a la pestaña de Columna para esa tabla. También puedes crear columnas por tu cuenta. Cuando haces clic en el botón Sincronizar Columna, la aplicación comprobará si la tabla existe en la base de datos y, si no existe, creará la tabla y todas las columnas, no solo la columna mostrada en la pestaña de Columna. Si la tabla existe, solo se sincroniza la columna actual.

![imagen](https://github.com/adempiere/adempiere-site/assets/134967453/8a887ada-bf3e-496e-849e-ef7e3d57d544)

***Pestaña de Columna de la ventana de Tabla***

![imagen](https://github.com/adempiere/adempiere-site/assets/134967453/b646048f-7e11-44d7-ab69-c3f95ebf04e8)

***Proceso de Sincronizar Columna activado desde el botón en la pestaña de Columna.***

Después de que se haya ejecutado el proceso, los resultados mostrarán los comandos DDL utilizados para actualizar la base de datos.

::: info Nota

Si estás añadiendo o cambiando un número de columnas en una tabla que ha sido sincronizada en el pasado, tendrás que sincronizar cada columna nueva o modificada por separado.

:::

![image](https://github.com/adempiere/adempiere-site/assets/134967453/ce8a1d35-8c1e-4fae-ab7d-c39dafbdfc68)

***Resultados del proceso Sincronizar Columna mostrando los comandos SQL utilizados para actualizar la base de datos.***

### Utilizando el Proceso Sincronizar Todas las Tablas y Columnas

Este proceso, que se encuentra en el menú ***Diccionario de Aplicaciones***, sincronizará todas las tablas o columnas que requieran sincronización. Esta es una forma conveniente de lidiar con un gran número de cambios y asegurarse de que todos los cambios estén sincronizados. Los resultados del proceso mostrarán la cantidad de tablas y columnas actualizadas, así como los comandos DDL utilizados para realizar las actualizaciones.

Los parámetros del proceso te permiten seleccionar una sola tabla o una sola columna para sincronizar. También puedes optar por sincronizar solo los cambios "conocidos", es decir, los cambios reconocidos por la aplicación ADempiere. Alternativamente, las tablas y columnas se verificarán con los metadatos de la base de datos y cualquier diferencia se corregirá. Si lo deseas, los resultados se pueden informar antes de aplicarlos para que puedas verificar que la sincronización será correcta.

::: info Nota

Si eliges comparar el diccionario de aplicaciones con la base de datos para todas las tablas y columnas, ten en cuenta que esto llevará algún tiempo.

:::

### Utilizando la Entrada de Configuración del Sistema

Abre la ventana de Configuración del Sistema y encuentra la entrada para "DATABASE_AUTO_SYNC". Para desactivar la función de Auto Sincronización, establece el Valor en N. Para activarlo, establece el Valor en cualquier otro valor, típicamente Y.

Con la función de Auto Sincronización activada, cualquier cambio en la definición de columna o tabla que requiera sincronización se sincronizará cuando se guarde el registro. El cambio ocurrirá en segundo plano y se mostrará un error si hay algún problema.

Esta es una forma sencilla de gestionar cambios, ya que las tablas y columnas creadas/cambiadas están disponibles de inmediato para su uso.

## Limitaciones

En general, la sincronización funciona bien con columnas y tablas nuevas. Sin embargo, en otros casos, el proceso de sincronización no es perfecto y puede requerir intervención manual. Aquí tienes los casos a tener en cuenta:

- Las tablas definidas como vistas no se sincronizarán.
- Las columnas virtuales no se sincronizarán.
- Crear una nueva tabla también creará su clave primaria si la tabla tiene una clave primaria y el nombre de la columna clave termina en "_ID".
- Sincronizar una nueva tabla también sincronizará cualquier columna definida para la tabla.
- Sincronizar una columna en una nueva tabla también sincronizará la tabla y todas las demás columnas en esa tabla.
- Sincronizar una columna en una tabla previamente sincronizada solo sincronizará esa columna.
- Renombrar una tabla con una clave única renombrará su clave primaria, el elemento de la clave primaria y las restricciones asociadas siempre que el nombre de la columna clave termine en "_ID".
- Sincronizar una columna establecerá el tipo de datos de la columna, los valores predeterminados y el estado obligatorio.
- Si una tabla tiene múltiples claves, las claves y restricciones no se renombrarán cuando se renombre la tabla.
- Si se están agregando o renombrando tablas y columnas desde el software, realiza primero los cambios en la tabla y usa una transacción diferente para las columnas; de lo contrario, la tabla podría duplicarse.
- Al renombrar una tabla o columna, si ya existe una tabla o columna con ese nombre en la base de datos, se lanzará un error. Esto es para evitar la posible pérdida de datos en la tabla o columna existente.
- Eliminar una columna o tabla del Diccionario de Aplicaciones no eliminará el elemento correspondiente en la base de datos.
- Si una columna existente está marcada como obligatoria y no tiene un valor predeterminado, puede haber errores cuando se sincroniza la columna si la columna existente tiene valores nulos. Este problema se puede resolver especificando un valor predeterminado en la pestaña de Columna de la ventana de Tabla y Columna, sincronizando la columna y luego estableciendo el valor predeterminado en nulo y sincronizando de nuevo.
- Cambiar el tipo de datos de una columna existente puede causar un error durante la sincronización si la columna tiene datos y los tipos de datos no son compatibles. Se requiere intervención manual para convertir los datos existentes al nuevo tipo de datos.
