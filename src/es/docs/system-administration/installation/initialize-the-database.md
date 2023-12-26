---
title: Inicializar la Base de Datos
category: Documentación
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

Después de haber instalado la base de datos y configurado el servidor de aplicaciones ADempiere, es necesario inicializar la base de datos antes de lanzar el servidor de aplicaciones y cualquier software cliente.

::: info
![image](https://github.com/adempiere/adempiere-site/assets/134967453/2a3d33b8-d2d9-4c38-900c-2967c0a7e5fa)
  Nota: Los scripts de utilidad proporcionados con el software de aplicación necesitan tener acceso a las funciones de la base de datos para ejecutarse. En una instalación de red, es posible que deba copiar los archivos ejecutables de la base de datos a la máquina del servidor de aplicaciones, instalar una copia local de la base de datos en el servidor de aplicaciones o instalar manualmente la base de datos de inicio en el servidor de la base de datos. Se proporcionan instrucciones detalladas a continuación. | | :--- | :--- |

:::

Antes de comenzar con la creación de la base de datos, asegúrate de tener instalado lo siguiente:

- Una base de datos adecuada (por ejemplo, Oracle XXg, Oracle XXgXE, PostgreSQL, MySQL) y que el servidor de la base de datos esté en ejecución. Consulta [Instalación y Configuración del Servidor de Base de Datos](./database-server-installation-and-setup.md).

- La instalación del servidor de aplicaciones está completa. Consulta [Instalación y Configuración del Servidor de Aplicaciones](./application-server-installation-and-setup.md).

## Creación de la Base de Datos

La base de datos creada cuando instalaste Oracle/Postgres/MySQL no tiene datos de ADempiere. Antes de que la aplicación ADempiere pueda ejecutarse, se debe crear una base de datos adecuada. Esto se puede hacer instalando la Base de Datos de Inicio proporcionada con el software o restaurando una base de datos creada anteriormente.

## Creación de la Base de Datos desde el Seed

La base de datos inicial de ADempiere Seed se importa desde el archivo Adempiere.dmp para Oracle o Adempiere_pg.dmp para PostgreSQL, ubicado en el directorio ADEMPIERE_HOME/data.

Abre la terminal y cambia al directorio ADEMPIERE_HOME/utils.

::: info Nota

![image](https://github.com/adempiere/adempiere-site/assets/134967453/3499ed3a-24a2-4bb9-8645-fa1f5dc5fa1b)
 ¡Precaución! El siguiente script ELIMINARÁ cualquier base de datos de adempiere existente. No ejecutes este comando si ya tienes datos cargados.

:::

**Ejecuta el script RUN_ImportAdempiere (.bat o .sh).**

Verás información sobre el archivo .dmp (como la fecha de creación, el tamaño, etc.) y el mensaje: == La importación mostrará advertencias. Esto está bien.

![image](https://github.com/adempiere/adempiere-site/assets/134967453/a17114df-996f-41f9-a32e-ab46beccf30f)

Presiona cualquier tecla para iniciar el proceso.

No te preocupes si ves advertencias (como "Advertencia: objeto creado con advertencias de compilación"). Esto es normal y se puede ignorar. Después de que la importación haya terminado, un procedimiento SQL se asegurará de que todo se haya importado correctamente y mostrará cualquier objeto no válido.

![image](https://github.com/adempiere/adempiere-site/assets/134967453/18de5877-1ff9-41e0-bd13-a70014b4e4d6)

Al finalizar el proceso, deberías ver un mensaje similar al que se muestra a continuación, con el texto "no rows selected".

![image](https://github.com/adempiere/adempiere-site/assets/134967453/4adcae87-f3db-4029-bee4-28a51b9cca8b)

Una causa común de problemas al ejecutar este script es no tener las variables de entorno configuradas correctamente. El script no se ejecutará si ADEMPIERE_HOME, JAVA_HOME están configurados incorrectamente o si los ejecutables de la base de datos no están en la ruta. También puede ser necesario agregar el directorio bin de Postgres/Oracle a la variable de entorno PATH en algunos entornos.

## Siguiente Paso

El siguiente paso es [Completar la Instalación del Servidor ADempiere](http://wiki.adempiere.net/InstallComplete).

## Notas

Para Usuarios de Oracle:

1. Asegúrese de que los tablespace para el usuario de la base de datos Adempiere existan. Los nombres predeterminados de los tablespace de la base de datos son:
   - Default tablespace = USER (150 MB, 10 MB de autoextensión),
   - Index tablespace = INDX (100 MB, 10 MB de autoextensión),
   - Temporary tablespace = TEMP (100 MB, 10 MB de autoextensión).

2. El script de configuración ha sido modificado para utilizar el método de nombre EZCONNECT en lugar de TNSNAMES. Abra su Oracle Net Manager, en profile -> Naming, asegúrese de que EZCONNECT sea uno de los métodos seleccionados. Alternativamente, verifique que el archivo SQLNET.ORA tenga las siguientes entradas:

   - **`NAMES.DIRECTORY_PATH = (EZCONNECT, TNSNAMES)`**

## Detalles de la Instalación

El script RUN_ImportAdempiere simplemente llama al script ImportAdempiere en la carpeta

```bash
$ADEMPIERE_HOME/utils/<database>
```

directorio. La versión de ImportAdempiere llamada se ocupa de las necesidades específicas de configuración de las diferentes bases de datos.

Desde la versión 3.8.0, el script RUN_ImportAdempiere también importará y aplicará cualquier migración que se encuentre en el directorio $ADEMPIERE_HOME/migrations.

Después de la importación de la base de datos, la base de datos se firma, indicando la versión de la base de datos.

El script ImportAdempiere se llama con los siguientes parámetros:

En el contexto de la instalación de ADempiere:

- Para la instalación de PostgreSQL, no se utilizan los siguientes:
  - `%ADEMPIERE_DB_SYSTEM%`
  - `%ADEMPIERE_DB_SYSTEM%`

- Para ambas instalaciones de PostgreSQL y Oracle, normalmente se utilizan los siguientes:
  - `%ADEMPIERE_DB_USER%` (normalmente Adempiere)
  - `%ADEMPIERE_DB_PASSWORD%` (normalmente Adempiere)

Además, se requieren las siguientes variables de entorno y deben haber sido establecidas por el proceso de configuración de la aplicación:

- `ADEMPIERE_HOME`: por ejemplo, `D:\ADEMPIERE2`
- `ADEMPIERE_DB_NAME`: por ejemplo, `adempiere` o `xe`
- `ADEMPIERE_DB_SERVER`: por ejemplo, `dbserver.adempiere.org`
- `ADEMPIERE_DB_PORT`: por ejemplo, `5432` o `1521`

Las descripciones a continuación no son código correcto y son solo con fines informativos. Consulte los scripts reales para obtener los detalles.

#### Postgres

El script ADEMPIERE_HOME/utils/postgresql/ImportAdempiere ejecutará los siguientes comandos:

```bash
-- Drop the ADempiere database if it exists
dropdb -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -U postgres %ADEMPIERE_DB_NAME%

-- Drop the ADempiere user if it exists
dropuser -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -U postgres %ADEMPIERE_DB_PASSWORD%

-- Recreate the ADempiere user
set ADEMPIERE_CREATE_ROLE_SQL=CREATE ROLE %ADEMPIERE_DB_USER% SUPERUSER LOGIN PASSWORD '%ADEMPIERE_DB_PASSWORD%'
psql -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -U postgres -c "%ADEMPIERE_CREATE_ROLE_SQL%"

-- Create the ADempiere database (empty)
set PGPASSWORD=%ADEMPIERE_DB_PASSWORD%
createdb -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -E UNICODE -O %ADEMPIERE_DB_USER% -U %ADEMPIERE_DB_USER% %ADEMPIERE_DB_NAME%

-- Import the seed data
@psql -h %ADEMPIERE_DB_SERVER% -p %ADEMPIERE_DB_PORT% -d %ADEMPIERE_DB_NAME% -U %ADEMPIERE_DB_USER% -f %ADEMPIERE_HOME%/data/Adempiere_pg.dmp
```

#### Oracle and OracleXE

El script ADEMPIERE_HOME/utils/oracle(XE)/ImportAdempiere ejecutará los siguientes comandos:

```bash
-- Re-Create DB user
sqlplus system/%ADEMPIERE_DB_SYSTEM%@%ADEMPIERE_DB_SERVER%:%ADEMPIERE_DB_PORT%/%ADEMPIERE_DB_NAME% _
   @%ADEMPIERE_HOME%\Utils\%ADEMPIERE_DB_PATH%\CreateUser.sql %ADEMPIERE_DB_USER% %ADEMPIERE_DB_SYSTEM%

-- Import Adempiere.dmp
imp system/%ADEMPIERE_DB_SYSTEM%@%ADEMPIERE_DB_SERVER%:%ADEMPIERE_DB_PORT%/%ADEMPIERE_DB_NAME% _
   FILE=%ADEMPIERE_HOME%\data\Adempiere.dmp FROMUSER=(reference) TOUSER=%ADEMPIERE_DB_USER% STATISTICS=RECALCULATE

-- Create SQLJ 
call %ADEMPIERE_HOME%\Utils\%ADEMPIERE_DB_PATH%\create %ADEMPIERE_DB_USER%/%ADEMPIERE_DB_PASSWORD%

-- System Check - The Import phase showed warnings. 
-- This is OK as long as the following does not show errors
sqlplus %ADEMPIERE_DB_USER%/%ADEMPIERE_DB_PASSWORD%@%ADEMPIERE_DB_SERVER%:%ADEMPIERE_DB_PORT%/%ADEMPIERE_DB_NAME% _
   @%ADEMPIERE_HOME%\Utils\%ADEMPIERE_DB_PATH%\AfterImport.sql
```

## Ver también

- [Instalación Completa del Servidor ADempiere](http://wiki.adempiere.net/InstallComplete) es lo siguiente después de Crear la Base de Datos ADempiere.

- [Configuración Inicial del Cliente](http://wiki.adempiere.net/ManPageX_InitialClientSetup) es la configuración inicial del negocio dentro de ADempiere.

- [Primeros Pasos](http://wiki.adempiere.net/Getting_Started) Tutorial sobre cómo configurar y configurar ADempiere.

- [Tutoriales](http://wiki.adempiere.net/Tutorials) sobre varios temas, desde básicos hasta avanzados.

Si tienes algún problema adicional al instalar la base de datos de Oracle o deseas eliminarla, puedes encontrar información adicional aquí: [[1]](http://download-east.oracle.com/docs/cd/B25329_01/doc/install.102/b25143/toc.htm#CIHDDHJD)
