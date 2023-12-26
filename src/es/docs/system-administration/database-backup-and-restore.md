---
title: Respaldo y Restauración de la Base de Datos
category: Documentación
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

## Cómo hacer una copia de seguridad y restaurar la Base de Datos de ADempiere

### Realizar una Copia de Seguridad de los Datos

La base de datos de ADempiere se puede respaldar fácilmente utilizando el script RUN_DBExport.(sh/bat) que se encuentra en ADEMPIERE_HOME/utils/. La base de datos se puede respaldar en cualquier momento sin detener el servidor de la base de datos.

El script RUN_DBExport provocará que la base de datos se exporte a un archivo llamado Exp.dmp en el directorio ADEMPIERE_HOME/data y se comprimirá en Exp.jar. El script también llamará a myDBcopy.(sh/bat) en ADEMPIERE_HOME/utils/, el cual se puede modificar para copiar el archivo Exp.jar a una ubicación externa u otro medio.

Si modificas myDBcopy, guarda una copia del archivo en otro lugar por si se sobrescribe durante una actualización de software.

Se recomienda tener una tarea programada regularmente que ejecute RUN_DBExport para asegurar la seguridad de tus datos.

## Recovering from a Backup

## Recuperación desde una Copia de Seguridad

Para recuperar una copia de seguridad, copia el archivo de respaldo Exp.jar en el directorio ADEMPIERE_HOME/data. En una terminal, ejecuta el comando java para expandir el archivo jar.

```bash
jar -xvf Exp.jar
```

Cuando el archivo Exp.dat esté disponible, ejecuta RUN_DBRestore.(sh/bat) desde el directorio ADEMPIERE_HOME/utils. Esto restaurará la base de datos desde la copia de seguridad, sobrescribiendo cualquier dato en la base de datos de ADempiere.
