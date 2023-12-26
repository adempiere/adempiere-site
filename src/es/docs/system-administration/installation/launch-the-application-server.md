---
title: Iniciar el Servidor de Aplicaciones
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

## Prerequisites

Antes de iniciar el servidor de aplicaciones, ya deberías haber completado:

- [Instalación y Configuración del Servidor de Base de Datos](./database-server-installation-and-setup.md)

- [Instalación y Configuración del Servidor de Aplicaciones](./application-server-installation-and-setup.md)

- [Inicializar la Base de Datos ADempiere](./initialize-the-database.md)

Si has completado los pasos anteriores, puedes iniciar el servidor de aplicaciones ADempiere basado en JBoss. Para demostraciones, está bien lanzar el servidor desde una consola. Para sistemas de producción, es mejor utilizar un método que mantenga el servidor en funcionamiento después de que el usuario haya cerrado sesión.

## Ejecutar el Servidor como un Proceso Independiente

Para ejecutar el Servidor ADempiere desde una consola, abre una ventana de consola y ve al directorio ADEMPIERE_HOME/utils. Ejecuta el script RUN_Server2[.bat|.sh]. Luego verás la salida de RUN_Server2, como se muestra a continuación:

![image](https://github.com/adempiere/adempiere-site/assets/134967453/20e0e12b-b45d-435c-8412-6d092c154b5d)

Si el servidor se inició sin errores, puedes pasar a [Iniciar la Aplicación ADempiere](https://github.com/docs/introduction/getting-started/launching-the-application).

## Como Servicio en Sistemas Operativos Windows

En sistemas operativos Windows, el Servidor de Aplicaciones ADempiere se puede instalar como un servicio, y se proporcionan scripts con ese propósito. Abre una consola de DOS con Privilegios de Administrador, navega a %ADEMPIERE_HOME%\utils\windows y ejecuta:

- Adempiere_Service_Install.bat para sistemas de 32 bits; o
- Adempiere_Service_Install_64.bat para sistemas de 64 bits (desde 380LTS hotfix 2).

La instalación establece las opciones de inicio como manuales. Deberás abrir la ventana de Servicios (Panel de Control → Herramientas Administrativas → Servicios) para configurar las propiedades de modo que el servicio se inicie automáticamente o manualmente según lo requiera tu implementación.

(Desde 380LTS hotfix 2) En sistemas de 64 bits, el servicio registrará la salida completa de la consola en ADEMPIERE_HOME\jboss\bin\run.log. Como resultado, run.log puede volverse grande con el tiempo. Para evitar esto, comenta la appender-ref CONSOLE en el archivo ADEMPIERE_HOME\jboss\server\adempiere\conf\jboss-log4j.xml:

```html
<root>
     <appender-ref ref="CONSOLE"/>
     <appender-ref ref="FILE"/>
</root>
```

Una vez que el servicio está en ejecución, puedes pasar a [Iniciar la Aplicación ADempiere](https://github.com/docs/system-administration/installation/installing-adempiere-manually/launch-the-application-server).

## As a Service on Linux

ADempiere se puede configurar como un servicio en Ubuntu utilizando systemd. Crea un archivo llamado "adempiere.service" en el directorio /lib/systemd/system/.

```bash
[Unit] Description=Task that runs the ADempiere ERP Service After=network.target After=systemd-user-sessions.service After=network-online.target
[Service] Environment=ADEMPIERE_HOME=/opt/Adempiere Type=forking ExecStart=/opt/Adempiere/utils/RUN_Server2.sh ExecStop=/opt/Adempiere/utils/RUN_Server2Stop.sh TimeoutSec=30 Restart=on-failure RestartSec=30 StartLimitInterval=350 StartLimitBurst=10
[Install] WantedBy=multi-user.target
```

Con el servicio definido, puedes ejecutar los siguientes comandos para controlarlo. Deberás ejecutar estos comandos como root o utilizando `sudo`.

| Comando                           | Descripción                                                                      |
|-----------------------------------|----------------------------------------------------------------------------------|
| systemctl daemon-reload           | Recarga el daemon de systemctl para cargar el nuevo servicio.                    |
| systemctl start adempiere          | Inicia el servicio ADempiere.                                                   |
| service adempiere status           | Muestra el estado del servicio ADempiere.                                       |
| systemctl enable adempiere         | Habilita el servicio ADempiere para reiniciar en el próximo evento de reinicio.  |
| systemctl stop adempiere           | Detiene el servicio ADempiere.                                                  |
| systemctl disable adempiere        | Desactiva el servicio ADempiere en el próximo evento de reinicio. Evita que el servicio ADempiere se reinicie. |
| systemctl is-enabled adempiere     | Úsalo para verificar si el servicio está actualmente configurado para iniciarse o no en el próximo reinicio. |

::: info Nota

El script de systemd puede fallar si la memoria se agota. Cuando el montón de memoria está lleno por alguna razón, el script de detención fallará. En ese caso, intenta ejecutar `kill -9` usando el PID del servicio, espera unos segundos y luego vuelve a iniciar el servicio. Los administradores del sistema deben agregar una verificación de salud para manejar esta condición.

:::

Si el servidor se inició sin errores, puedes continuar con [Lanzar la Aplicación ADempiere](https://github.com/docs/introduction/getting-started/launching-the-application).

(Agradecimientos a [@pmdw](https://github.com/pmdw) y [Horacio Miranda @piracio](https://github.com/piracio) por sus contribuciones.)

## Uso de nohup en Sistemas Linux

Para otros sistemas operativos, verifica ADEMPIERE_HOME/utils/unix o utiliza el comando nohup de Linux (no hangup) de la siguiente manera:

```shell
nohup ./RUN_Server2.sh &
```

Para ver la salida del servidor, utiliza:

```shell
cat nohup.out | more
```

ó

```shell
tail nohup.out
```

Si el servidor se inició sin errores, puedes pasar a [Lanzar la Aplicación ADempiere](https://github.com/docs/introduction/getting-started/launching-the-application).

## Solución de Problemas

1. Verifica los registros en busca de errores.

   - Para JBoss, los registros se encuentran en ADEMPIERE_HOME/jboss/server/adempiere/logs o ADEMPIERE_HOME/jboss/bin.
   - Para Tomcat, los encontrarás en ADEMPIERE_HOME/tomcat/log/Catalina.out.

2. Los problemas más comunes suelen estar relacionados con puertos que ya están en uso. Los puertos típicamente conflictivos son:

   - HTTP: 80, 443, 8080, 8443

   - RMI: 1098, 1099

3. Para usuarios de Linux, a veces ayuda reiniciar la estación de trabajo/servidor y ejecutar RUN_Server2 como root.

4. ¡Cualquier conflicto de puertos al iniciar el servidor de aplicaciones debe resolverse!

5. Si encuentras errores relacionados con la base de datos, verifica que la base de datos esté instalada, que los datos de ADempiere se hayan importado y que el servidor de la base de datos esté en ejecución.
