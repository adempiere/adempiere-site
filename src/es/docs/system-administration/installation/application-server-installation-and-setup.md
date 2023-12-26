---
title: Instalación y Configuración del Servidor de Aplicaciones
category: Documentación
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

# Instalación y Configuración del Servidor de Aplicaciones ADempiere

Esta página proporciona consejos sobre la instalación del servidor de aplicaciones ADempiere.

Esta página está dirigida a los Administradores de Sistemas que necesitan instalar el Servidor de Aplicaciones ADempiere en un entorno de red donde el servidor de la base de datos podría estar ejecutándose en un servidor de red separado y los clientes se ejecutan en computadoras remotas.

## Requisitos previos

Antes de continuar, asegúrate de haber instalado una base de datos adecuada (por ejemplo, Oracle 10g, Oracle 10gXE, PostgreSQL, MySQL) y de que el servidor de la base de datos esté en ejecución. Consulta [Instalación y Configuración del Servidor de Base de Datos](./database-server-installation-and-setup.md).

## Descargas Requeridas

Descarga cada uno de los siguientes paquetes:

- **Java SE Development Kit**
  Obtén la última versión de [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html). Solo se requiere el JDK, sin los paquetes JavaFX, EE o NetBeans.

- **Última Versión de ADempiere**
  Descarga la última versión de ADempiere desde [aquí](https://github.com/adempiere/adempiere/releases).

- **Parches de ADempiere**
  Cualquier parche o archivos JAR de personalización que se deban aplicar.

## Instalar Java

Instala el JDK de JAVA con la configuración de instalación predeterminada. Acepta instalar también el JRE complementario. Toma nota cuidadosa del directorio completo para el JDK (por ejemplo: C:\Program Files\java\jdk1.5.0_19) y del directorio JRE que acabas de instalar.

::: info Nota

Puede haber varios directorios de JDK y JRE, ¡así que elige el correcto! El JDK debe incluir el JRE.

:::

Los scripts de ADempiere dependen de la existencia de una variable de entorno del sistema llamada **`JAVA_HOME`**. Cuando los scripts llaman a java, utilizan la ruta completa como **`JAVA_HOME/bin/java`**, así que es importante que exista esta variable.

Según tu sistema operativo, añade la siguiente ruta del JDK al PATH del sistema:

```bash
%JAVA_HOME%\bin o
$JAVA_HOME/bin
```

## Instalar el Software de ADempiere

No hay un script de instalación. Simplemente extrae el archivo de ADempiere a una ubicación adecuada: (por ejemplo, c: o /u01/). Como referencia, llama a este directorio ADEMPIERE_ROOT. Deberías terminar con los archivos en una carpeta como **`ADEMPIERE_ROOT\Adempiere`**. Como referencia, llama a esta carpeta **`ADEMPIERE_HOME`**.

::: info Nota

Evita los espacios en la ruta del directorio. Los scripts por lotes no toleran los nombres de directorio con espacios. Si usas ADEMPIERE_ROOT con varios directorios, evita los nombres de directorio con espacios.

:::

## Aplicar los Parches

Los parches son una combinación de archivos **.jar**, que reemplazan a los archivos **.jar** en el directorio **ADEMPIERE_HOME\lib**, y scripts de migración que actualizan la base de datos. En el directorio de Patches en Source Forge, puede haber más de un tipo de **.jar** que necesita parches. Si descargaste uno o más archivos de parches, reemplaza el archivo existente con el descargado, cambiando su nombre para que coincida. Por ejemplo, copia el archivo **_patches_.jar** a ***ADEMPIERE_HOME\lib\patches.jar***, sobrescribiendo el archivo existente. Consulta las instrucciones detalladas en [Instalación de Parches](http://wiki.adempiere.net/Patches_Installation).

::: info Nota

Es una buena idea renombrar el archivo *.jar existente a algo como patches.jar.old antes de reemplazarlo con el nuevo archivo.

:::

## Aplicar Personalizaciones, Paquetes y Otros Archivos

Si tienes un customization.jar con código personalizado o un archivo packages.jar con archivos *.jar de soporte, agrégelos al directorio ADEMPIERE_HOME\lib, sobrescribiendo los archivos existentes.

Para los scripts de migración que terminan en .xml, guárdalos en el directorio ADEMPIERE_HOME/migration.

::: info Nota

Asegúrate de seguir las instrucciones específicas de cada personalización o paquete para su aplicación correcta.

:::

## Configuración del Servidor ADempiere

El servidor de aplicaciones se configura mediante una utilidad RUN_Setup.(sh/bat) que se encuentra en el directorio ADEMPIERE_HOME. Esta utilidad inicia una herramienta donde se pueden configurar y probar los ajustes. Una vez que todo pasa las pruebas, la configuración se guarda y el software se vuelve a empaquetar con los nuevos ajustes. Luego puedes iniciar el servidor de aplicaciones.

Puedes volver a ejecutar esta utilidad tantas veces como sea necesario hasta que todo esté correcto.

::: info Nota

En caso de que estés cambiando configuraciones en un servidor de aplicaciones existente, asegúrate de que el servidor de aplicaciones esté apagado antes de comenzar. De lo contrario, obtendrás errores de puerto durante las pruebas. Puedes apagar el servidor de aplicaciones ejecutando el script RUN_Server2Stop.(sh/bat) desde ADEMPIERE_HOME/utils o deteniendo el "servicio".

:::

En una consola de comandos con privilegios administrativos, ejecuta el script **RUN_Setup**, que se encuentra en el directorio **ADEMPIERE_HOME**. Debería aparecer la ventana de configuración del servidor ADempiere, como se muestra a continuación:

![image](https://github.com/adempiere/adempiere-site/assets/134967453/1501c3e6-9c00-493d-81b5-df3bba0e9320)

***Ventana de configuración del servidor ADempiere***

La ventana de configuración se abre y carga sus valores desde el archivo AdempiereEnv.properties. Busca este archivo en el directorio ADEMPIERE_HOME. Si la variable de entorno ADEMPIERE_HOME no está configurada o es nula, buscará en el directorio definido en la propiedad del sistema "user.dir".

::: info Nota

El proceso de configuración crea un archivo llamado Adempiere.properties. Este es el archivo de configuración principal para tu Cliente. Puedes copiar este archivo y pasarlo como variable cuando inicies ADempiere usando el parámetro de la interfaz de línea de comandos -DPropertyFile=AdempiereProduction.properties. Si creas varios archivos, puedes usarlos para cambiar fácilmente entre entornos de desarrollo, prueba y producción, por ejemplo.

:::

## Configuración de Campos

Completa los campos de la ventana de configuración de la siguiente manera:

- **Java**
  - *Java Home:* Selecciona la ubicación del directorio de inicio de SDK de Java (por ejemplo, C:\jdk1.5.0_05). Esto debe ser lo mismo que la variable de entorno JAVA_HOME.
  - *Java VM:* El proveedor del motor virtual de Java (Predeterminado= Sun).

- **ADempiere**
  - *ADempiere Home:* El directorio base donde se encuentran los archivos de distribución (por ejemplo, C:\Adempiere). Esto debe ser lo mismo que la variable de entorno ADEMPIERE_HOME.
  - *KeyStore Password:* ADempiere requiere un certificado SSL. Crea automáticamente un certificado en el almacén de claves $ADEMPIERE_HOME/keystore/myKeystore con la contraseña del almacén de claves ingresada. El certificado autenticado por sí mismo creado tiene el alias adempiere y utiliza la misma contraseña que el almacén de claves. Puedes reemplazar el certificado utilizado con la herramienta Java "keytool" (ver documentación de la herramienta Java).

- **Application Server**
  - *Application Server:* El nombre, URL o IP de tu PC servidor (no uses localhost). El servidor de aplicaciones se establece automáticamente en el servidor que está ejecutando actualmente el programa. Evita el uso de direcciones IP; utiliza el nombre DNS del servidor.
  - *Web Port:* El puerto web en el que escuchará el servidor de aplicaciones. El acceso al servidor de aplicaciones será a través de una URL similar a [http://miServidorDeAplicaciones:puertoWeb](http://miServidorDeAplicaciones/:puertoWeb) ([http://appserver:8088](http://appserver/:8088)/). Ten en cuenta que, en Linux/Unix, los puertos por debajo de 1000 necesitan privilegios de root. Si usas Apache como frontal, es posible que necesites usar puertos como 8080 o 8088, en resumen, busca un puerto libre. Los puertos predeterminados son 80.
  - *SSL:* El puerto de la capa de sockets seguros. El valor predeterminado es 443. Si no está disponible, prueba con otro valor como 4443 o 8443.
  - *JNP Port:* El puerto del proveedor de nombres de Java y de Invocación Remota de Métodos (RMI). Los puertos predeterminados son 1099 (1098).

- **Database Server**
  - *Database Server:* El servidor de base de datos se establece automáticamente en el servidor que está ejecutando actualmente el programa. Evita el uso de direcciones IP; utiliza el nombre DNS del servidor. Solo se puede usar localhost si el servidor de base de datos se está ejecutando en la misma máquina que el servidor de aplicaciones y el software del cliente. Para Oracle, se descubren los nombres de servicio. Puedes sobrescribir las entradas si no son correctas.
  - *Database Name:*
    - PostgreSQL: Nombre de la base de datos PostgreSQL.
    - Oracle: SID/Nombre del servicio. Oracle 10g/11g predeterminado: orcl, OracleXE predeterminado: xe
  - *Database Type:* Selecciona la base de datos que has instalado (es decir, Oracle 10g, Oracle 10gXE, PostgreSQL).
  - *Database Port:* Selecciona el puerto para conectarse a la base de datos (por ejemplo, Oracle usa 1521 como puerto estándar, PostgreSQL 5432, etc.).
  - *System Password:*
    - Oracle: Contraseña para el usuario system.
    - PostgreSQL: Contraseña para el usuario postgres.
  - *Database User:* El nombre de usuario de la base de datos de la aplicación, el valor predeterminado es adempiere.
  - *Database Password:* La contraseña de la base de datos de la aplicación, el valor predeterminado es adempiere.


- **Mail Server (Ver notas abajo)**
  - *Server:* El servidor de correo (por ejemplo, smtp.gmail.com)
  - *Port:* El puerto del servidor de correo para enviar correos
  - *Protocol:* El protocolo a utilizar, SMTP o IMAP
  - *Admin E-Mail:* El correo electrónico que se utilizará como dirección "Desde"
  - *Encryption Type:* El tipo de cifrado a utilizar
  - *Auth. Mechanism:* Cómo se autoriza la cuenta. Login es el valor predeterminado.
  - *Mail User:* El nombre de usuario de correo
  - *Mail Password:* La contraseña del usuario de correo

La configuración de correo es opcional, pero es necesario identificar un servidor. La herramienta de configuración finalizará con éxito, ya sea que las pruebas de correo funcionen o no. Puede mantener la conexión del servidor de correo en la aplicación a nivel de cliente desde la [Ventana del Cliente](http://wiki.adempiere.net/ManPageW_Client). Si no desea configurar el correo o no tiene un servidor SMTP, simplemente ingrese un servidor válido; el campo se establecerá por defecto en el nombre de la computadora local. Mientras exista el servidor, la configuración se completará con éxito.

::: info Nota

El software solo necesita un método para enviar correos electrónicos. No hay capacidad para leer correos electrónicos en la aplicación.

:::

## Probando la Configuración

Después de llenar los campos de configuración, presiona el botón "Test" para verificarlos. A medida que la prueba avanza, verás que las casillas se marcan con un tick (√). Solo si todos los parámetros son verificados, podrás guardarlos. Si una entrada no se puede verificar, se mostrará una ventana emergente que indique el error. Arréglalo y prueba nuevamente.

Si, por ejemplo, el nombre del servidor de la aplicación es incorrecto, verás un mensaje como este:

![image](https://github.com/adempiere/adempiere-site/assets/134967453/516af4d6-7be3-4d33-85f6-6b4bc62a23a7)

***Ventana de error de configuración del servidor***

Cuando todas las pruebas pasan (puedes ver las casillas marcadas con un tick: √):

![image](https://github.com/adempiere/adempiere-site/assets/134967453/dcddb534-973e-48d3-b123-69470b2b3e1e)

***Configuración del servidor ADempiere con los resultados de la prueba mostrados***

- presiona el botón "Save". Esto guardará la configuración en el archivo AdempiereEnv.properties en el directorio ADEMPIERE_HOME.

- Después de aceptar la licencia, verás el siguiente cuadro de diálogo:

![image](https://github.com/adempiere/adempiere-site/assets/134967453/fd9d294a-224f-4bb8-96a5-a961dee83ac9)

***La configuración se guardó y el proceso está listo para comenzar el despliegue***

- Presiona el botón ***OK*** para continuar y echa un vistazo al registro. Asegúrate de ver el mensaje **BUILD SUCCESSFUL** y **Done**, algo como:

```bash
[echo] AppsDeployment= C:\Adempiere\jboss\server\adempiere\deploy
     [copy] Copying 1 file to C:\Adempiere\jboss\server\adempiere\deploy
     [copy] Copying 1 file to C:\Adempiere\jboss\server\adempiere\deploy
     [copy] Copying 1 file to C:\Adempiere\jboss\server\adempiere\deploy
     [copy] Copying 1 file to C:\Adempiere\jboss\server\adempiere\deploy

 setupTomcat:

 setupDeploy:
     [echo] AppsDeployment= C:\Adempiere\jboss\server\adempiere\deploy

 setup:

BUILD SUCCESSFUL
Total time: 2 minutes 22 seconds

*** 2006-12-28 14:15:35.53 Adempiere Log (CLogConsole) ***
ErrorLevel = 0
===================================
Setup Client Environment
===================================
SET ADEMPIERE_HOME=C:\Adempiere
SET JAVA_HOME=c:\Archivos de programa\Java\jdk1.5.0_05
Path is OK = c:\Archivos de programa\Java\jdk1.5.0_05\bin;C:\Archivos de programa\Java\jdk1.5.0_05\
bin;C:\oraclexe\app\oracle\product\10.2.0\server\bin;%SystemRoot%\system32;%SystemRoot%;
%SystemRoot%\System32\Wbem
Created Shortcut Adempiere.lnk
Created Shortcut Adempiere Web Site.url
Done
.
For problems, check log file in base directory
```

Si hay algún error, puedes corregirlo y volver a ejecutar el script hasta que todo esté correcto.
Una vez que la configuración esté completa, puedes pasar a [Inicializar la Base de Datos de ADempiere](./initialize-the-database.md).

## Problemas Comunes

- **Servidor de Aplicaciones y Servidor de Base de Datos:**
  - Nombre, URL o IP de tu PC de servidor. Si encuentras un error de JNP Port = 1099, podría indicar que hay un servicio previo en ejecución. Mátalo. Además, una discrepancia entre el nombre del host (en el archivo de hosts) y la dirección IP real puede causar este problema. Soluciónalo en "/etc/hosts" (Linux).
  
- **Puerto JNP:**
  - Si encuentras un error de JNP Port = 1099, podría indicar que hay un servicio previo en ejecución. Mátalo. Además, una discrepancia entre el nombre del host (en el archivo de hosts) y la dirección IP real puede causar este problema. Soluciónalo en "/etc/hosts" (Linux).

- **Puerto de la Base de Datos:**
  - Si encuentras un error de Database Port = 1521, se puede solucionar reiniciando la máquina de la base de datos.

- **Contraseñas del Sistema y de la Base de Datos:**
  - Estas son las contraseñas definidas cuando configuraste tu base de datos.

- **Servidor de Correo:**
  - Esto es opcional. RUN_Setup puede terminar incluso si no está configurado.

## Error en Java Home

Si recibes el siguiente mensaje:

![image](https://github.com/adempiere/adempiere-site/assets/134967453/f568e47e-35c2-4b9c-a069-d498ae89bb67)

***JAVA_HOME no se encontró***

Debes verificar las variables de entorno de Java. Asegúrate de que la variable de entorno del sistema JAVA_HOME apunte al directorio correcto.

## Error en el Puerto Web

Si recibes el siguiente mensaje del instalador:

![image](https://github.com/adempiere/adempiere-site/assets/134967453/dd529804-0a96-4319-8d2c-21fcccf12f42)

***Error en el puerto web***

Es probable que haya otro servidor web en ejecución o, si estás utilizando Linux, que necesites los privilegios adecuados.

Los puertos predeterminados son: 80 para conexiones http y 443 para conexiones SSL. Este mensaje significa que al usuario no se le permite usar el puerto, probablemente porque ya lo está usando otra aplicación. Cambia el puerto a algo diferente. Se recomienda usar WebPort 8088 y SSL 4443. Si estás utilizando Linux, recuerda que los puertos por debajo de 1000 requieren privilegios de root. Si estás utilizando la base de datos de Oracle, el puerto 8080 podría estar en uso.

## Error de Puerto JNP 1099

Otro posible error es el Error de Configuración del Servidor, Error de Puerto JNP (No es correcto: Puerto JNP = 1099) OK

El error de Puerto JNP = 1099 puede ser causado por otro proceso que ya está utilizando ese puerto TCP. Observa qué proceso está utilizando ese puerto y toma medidas para detenerlo. También puede ser causado por una discrepancia entre tu dirección IP y la entrada en tu archivo hosts. Consulta /etc/hosts (Linux) o %SystemRoot%/system32/drivers/etc/hosts (Windows).

::: info Nota

Para encontrar la dirección IP de tu servidor, prueba lo siguiente en un script de comandos: Linux /sbin/ifconfig o Windows IPCONFIG
:::

## Excepción de Nombre JNP No Encontrado

Este error suele estar relacionado con un problema de DNS. Es posible completar la configuración utilizando direcciones IP al instalar con PostgreSQL. Asegúrate de tener un entorno DNS funcional o agrega una entrada en /etc/hosts (Linux) o %SystemRoot%/system32/drivers/etc/hosts (Windows).

## Ver también

- [Inicializar la Base de Datos de ADempiere](http://wiki.adempiere.net/Inicializar_la_Base_de_Datos_de_ADempiere): Este es el siguiente paso después de instalar el servidor.

- [Lanzar la Aplicación ADempiere](http://wiki.adempiere.net/Lanzar_la_Aplicación_ADempiere): Realiza la instalación del cliente Cliente-Servidor, que es el siguiente paso después de completar la configuración de la base de datos.

- [Configuración Inicial del Cliente](http://wiki.adempiere.net/ManPageX_ConfiguracionInicialDelCliente): Inicia la configuración empresarial dentro de ADempiere.

- [Comenzando](http://wiki.adempiere.net/Comenzando): Tutorial sobre cómo configurar y ajustar ADempiere para operación en una sola computadora (base de datos, aplicación y cliente en la misma máquina).

- [Tutoriales](http://wiki.adempiere.net/Tutoriales): Cubre varios temas desde básicos hasta avanzados.
