---
title: Database Server Installation and Setup
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

## Aspectos a tener en cuenta

Los scripts de ADempiere necesitarán encontrar las utilidades de línea de comandos de la base de datos, así que establezca su ruta para que apunte al directorio "bin" de la instalación de la base de datos. Puede hacer esto de la misma manera que se usó **JAVA_HOME** anteriormente. Cree una variable de entorno como **DATABASE_HOME** establecida en el directorio de instalación de la base de datos y agregue **DATABASE_HOME/bin** a su ruta según los métodos para su sistema.

::: info Nota

Los scripts de utilidad de la aplicación ADempiere necesitan acceso a los comandos binarios de la base de datos desde la máquina del servidor de aplicaciones. Es posible que necesite instalar una versión vacía de la base de datos en el servidor de aplicaciones de ADempiere o, al menos, una copia de los archivos binarios ejecutables necesarios.

:::

::: info Nota

Si por alguna razón retorcida también tiene Oracle ejecutándose en la misma máquina que PostgreSQL, tenga en cuenta que las dos bases de datos incluyen algunos ejecutables con el mismo nombre. Si tiene tanto POSTGRES_HOME como el equivalente de ORACLE_HOME en la ruta, es posible que tenga errores al ejecutar algunos de los scripts de ADempiere. Intente mantener la ruta apuntando a una u otra base de datos a la vez y cambie entre las dos según sea necesario.

:::

## Instalación y configuración de PostgreSQL

Se recomienda leer cuidadosamente los [Manuales de PostgreSQL](http://www.postgresql.org/docs/manuals). Hay muchos consejos útiles y trucos en la documentación y los comentarios de los usuarios.

Si utiliza el Instalador de Windows de Postgres, muchos de los siguientes pasos se realizarán automáticamente con el instalador, pero deberá prestar atención a la configuración de seguridad.

Lo siguiente proviene de la guía de instalación de PostgreSQL después de que el software se haya compilado e instalado desde la fuente.

Cree un usuario sin privilegios en la computadora del servidor de la base de datos que sea único para la instalación de PostgreSQL y tenga acceso exclusivo/propiedad de los datos que crea la base de datos pero poco más. No use este usuario para instalar el software, pero asegúrese de que el daemon del servidor PostgreSQL se ejecute bajo esta cuenta. El usuario "postgres" es una elección común.

Inicie sesión como usuario "postgres" y [cree el clúster de la base de datos](http://www.postgresql.org/docs/8.4/interactive/creating-cluster.html) - un grupo de bases de datos. Esto se hace definiendo la ubicación donde se almacenarán las bases de datos. Esto puede ser en cualquier lugar del sistema de archivos. El clúster se crea con el comando initdb que viene con PostgreSQL. El formato es

```bash
$ initdb -D /usr/local/pgsql/data
```

donde **`/usr/local/pgsql/data`** es la ubicación del clúster de la base de datos. Como alternativa a la opción -D, se puede definir la variable de entorno PGDATA.

::: info Nota

Si el usuario postgres no tiene privilegios, es posible que el comando initdb no pueda crear el directorio de datos si aún no existe. En ese caso, inicie sesión como root/administrador y cree el directorio de datos antes de ejecutar el comando como usuario postgres. El comando initdb eliminará todos los permisos de acceso al directorio de datos para todos excepto el usuario postgres. Consulte los manuales de PostgreSQL para obtener configuraciones de seguridad adicionales.

:::

Es importante configurar correctamente el archivo [pg_hba.conf](http://www.postgresql.org/docs/8.4/interactive/auth-pg-hba-conf.html) para asegurar que el servidor de la aplicación ADempiere pueda comunicarse con la base de datos. Las conexiones TCP/IP remotas no serán posibles hasta que se modifique este archivo, ya que el comportamiento predeterminado es escuchar las conexiones TCP/IP solo en la dirección de bucle local "localhost". Cuando el servidor de la aplicación y el servidor de la base de datos son máquinas separadas, el archivo pg_hba.conf debe configurarse para permitir conexiones desde el servidor de la aplicación. Por razones de seguridad, utilice una conexión lo más restrictiva posible.

Siga las instrucciones para iniciar el servidor de la base de datos.

Continúe con [Instalación y Configuración del Servidor de Aplicaciones](./application-server-installation-and-setup.md).

## Instalación y Configuración de Oracle

::: info Nota

La versión Oracle XE (Express Edition) está disponible de forma gratuita, pero tiene limitaciones en términos del tamaño máximo de la base de datos, el número de instancias en ejecución permitidas, la cantidad de RAM utilizada, el número de CPU utilizadas para procesar consultas (solo se utiliza 1) y la falta de soporte https. Si bien estas limitaciones son aceptables para demostraciones y desarrollo, no se recomienda su uso en entornos de producción y multiusuario. Revise la documentación de Oracle Database Express Edition sobre restricciones de licencia antes de tomar su decisión. Si necesita Oracle, considere comprar licencias para las ediciones estándar.

:::

La instalación de Oracle es sencilla. Siga las instrucciones en la documentación de Oracle.

Continúe con [Instalación y Configuración del Servidor de Aplicaciones](./application-server-installation-and-setup.md).

## Instalación y Configuración de MySQL

::: info Nota

La integración de ADempiere con MySQL requiere soporte del desarrollador. Verifique en el repositorio y los foros si MySQL es compatible con la versión de ADempiere que desea utilizar.

:::

Esta sección es de [Naquib13](http://wiki.adempiere.net/User:Naquib13). Está documentando desde el [hilo de SF de Trifon](http://sourceforge.net/projects/adempiere/forums/forum/610546/topic/3854274).

**SUN JDK**
- [MySQL 5.x](http://www.mysql.com/downloads/mysql/) (Recomiendo usar [Workbench](http://www.mysql.com/downloads/workbench/))

Haz lo siguiente después de instalar lo anterior:
1. Cambia el archivo my.cnf.
   - Establece que los nombres de las tablas sean en minúsculas.
   - Habilita procedimientos almacenados recursivos.
   - Habilita el modo ANSI de MySQL.
     ```bash
     $ sudo vim /etc/mysql/my.cnf
     lower_case_table_names=1
     max_sp_recursion_depth=128
     sql_mode='ANSI'
     ```
2. Reinicia el servidor MySQL.
   ```bash
   $ sudo /etc/init.d/mysql restart

- Crea la base de datos "adempiere".

```bash
$ mysql -u root -p
mysql> create database adempiere DEFAULT CHARACTER SET = utf8 DEFAULT COLLATE = utf8_bin;
```

- Crea el usuario de MySQL "adempiere" para la base de datos "adempiere".

```bash
$ mysql -u root -p
mysql> GRANT ALL ON adempiere.* TO 'adempiere'@'localhost' IDENTIFIED BY 'adempiere';
```

- Importa la semilla inicial de la base de datos MySQL (ADempiere versión 3.6.0LTS).

```bash
$ mysql -u adempiere -p -h localhost adempiere < <ADEMPIERE_HOME>/data/Adempiere_mysql.dmp
```

- Sigue el proceso de instalación estándar de ADempiere.

```bash
$ <ADEMPIERE_HOME>/RUN_setup.sh
```

- Inicia el servidor de ADempiere.

```bash
$ <ADEMPIERE_HOME>/utils/RUN_Server2.sh
```

- Inicia el cliente Swing de ADempiere.

```bash
$ <ADEMPIERE_HOME>/RUN_Adempiere.sh
```

Continúa con [Instalación y configuración del servidor de aplicaciones](./application-server-installation-and-setup.md).

## Links

- [ADempiere on MySQL](http://sourceforge.net/projects/adempiere/forums/forum/610546/topic/3854274)- SF.net thread by Trifon on 2010 & 2011.

- [Running ADempiere on MySQL](http://blogs.sun.com/praneet/entry/mysqling_adempiere) by Praneet on Jul 03, 2009.

- [MySQL Download](http://www.mysql.com/downloads/mysql/)
