---
title: Entornos de Desarrollo
category: Documentación
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

Crear un entorno de desarrollo es el emocionante primer paso para convertirse en un desarrollador con ADempiere. El entorno de desarrollo te permitirá probar y depurar la aplicación y realizar cambios que beneficiarán a la comunidad. Antes de comenzar, debes estar familiarizado con el [Procedimiento de Desarrollo de Software](a) y el [Control de Versiones de ADempiere](a). Para probar la Interfaz de Usuario Web (webui), deberás seguir los pasos en [Creación del Espacio de Trabajo WebUI utilizando Eclipse Webtool](https://wiki.adempiere.net/Creating_WebUI_Workspace_using_Eclipse_Webtool) después de crear tu entorno de desarrollo. También se recomienda que crees un proyecto separado para el trabajo de personalización que no se compartirá con todos los usuarios de ADempiere. Consulta [Crea tu entorno de personalización ADempiere](https://wiki.adempiere.net/Create_your_ADempiere_customization_environment) para obtener más información.

Si tienes algún problema, únete a nuestro [chat](http://www.adempiere.net/web/guest/chat-on-line). Estaremos encantados de ayudarte.

## Preparación de tu Entorno

Descarga e instala el Java JDK desde el [sitio web de Oracle](http://www.oracle.com/us/technologies/java/overview/index.html). Necesitarás la versión del Java Development Kit (JDK) de la Edición Estándar (SE) o Edición Empresarial (EE) que funcione con la versión del software que estás compilando. Para algunas de las versiones más recientes, estas son:

- ADempiere 3.6: requiere Java 6
- ADempiere 3.7 o 3.8: requiere Java 7
- Rama 380#002 de ADempiere: requiere Java 8

Sigue las instrucciones de instalación y configura la variable de entorno JAVA_HOME para que apunte al JDK instalado y agrega %JAVA_HOME%\bin a tu variable de entorno PATH.

::: info Nota

Puedes tener instaladas varias versiones de JDK y cambiar cuál usar cambiando la ubicación a la que apunta JAVA_HOME. También, utiliza los comandos "which" en Linux y "where" en DOS para ver dónde está instalada la versión llamada y "java -version" para verificar la versión.

:::

Descarga e instala una base de datos. Puedes utilizar PostgreSQL, Oracle o MySQL. Se recomienda PostgreSQL. Lee más en [Instalación y Configuración del Servidor de Base de Datos](A).

::: info Nota:

Si tienes acceso a un servidor de bases de datos, puedes utilizarlo en lugar de instalar una copia local de la base de datos.

:::

Descarga e instala la última versión del Entorno de Desarrollo Integrado (IDE) Eclipse para Desarrolladores de Java EE desde el [sitio web de Eclipse](https://www.eclipse.org/).

## Descargar el Código Fuente de ADempiere

Descarga, instala y configura tus herramientas de control de versiones. Consulta [Control de Versiones de ADempiere](./adempiere-version-control.md) para obtener instrucciones. Puedes encontrar herramientas que se integren directamente con Eclipse, pero se recomienda usar aquellas que incluyan las últimas versiones de Mercurial y Git. Una vez que hayas creado tus clones originales y funcionales, debes actualizar el clon de trabajo al encabezado de la rama deseada.

Puedes importar el proyecto ADempiere y otros proyectos/módulos en tu IDE de la siguiente manera:

- Abre Eclipse, selecciona la perspectiva de Java y la vista de explorador de paquetes.
- Menú de Eclipse -> Archivo -> Nuevo -> Proyecto
- En el siguiente cuadro de diálogo, selecciona "Proyecto Java" y "Siguiente".
- Escribe "ADempiere" como nombre del proyecto.
- Desactiva la casilla "Usar ubicación predeterminada" y establece la ubicación para que apunte a la ubicación de tu repositorio de trabajo (por ejemplo, c:\dev\repos\workspace\adempiere). El asistente creará automáticamente el proyecto a partir del código fuente existente. Haz clic en "Siguiente" y luego en "Finalizar".

::: info Nota

En versiones antiguas de Eclipse, es posible que debas marcar la opción "Crear proyecto a partir del código fuente existente" y buscar el proyecto o módulo que deseas incluir.

:::

## Compilar y Depurar ADempiere

Utiliza Eclipse para compilar, construir y depurar/ejecutar ADempiere como cliente o como una aplicación web.

Antes de poder ejecutar o depurar la aplicación, debes:

- configurar Eclipse;
- asegurarte de que la aplicación se compila correctamente;
- realizar una "construcción" de la aplicación; e
- importar los datos iniciales en la base de datos.

Una forma alternativa de comenzar es instalar la última versión del cliente ADempiere en tu computadora de desarrollo. Consulta [Instalar ADempiere Manualmente](a). Esto garantizará que los parámetros de configuración funcionen y que los datos iniciales de la base de datos se carguen correctamente. Lo más importante es que creará varios archivos que serán útiles cuando desees iniciar una instancia de ADempiere desde Eclipse. Desde el directorio de inicio de ADempiere donde se instaló el software, estos archivos son:

- adempiereEnv.properties: copiado de adempiereEnvTemplate.properties, este archivo define el entorno utilizado para configurar ADempiere.
- adempiere.properties: este archivo es generado por el proceso de configuración y no debe editarse. Una vez creado, puedes copiarlo y renombrarlo en otras ubicaciones y usarlo en las configuraciones de inicio descritas a continuación para cambiar fácilmente las configuraciones. Esto te permitirá cambiar las bases de datos o puertos de destino según sea necesario para probar tu aplicación.
- utils->myEnvironment.bat/sh: copiado de myEnvironmentTemplate.bat por el proceso de configuración. Por lo general, no debes editar este archivo directamente, sino usar los scripts run_setup/run_silentsetup.

Puedes personalizar estos archivos y guardar una copia de ellos en una ubicación separada en caso de que sean sobrescritos por los procesos de control de versiones.

### Configurar Eclipse

Antes de compilar el software ADempiere, hay algunas cosas que puedes hacer para facilitar el proceso:

- Crear configuraciones de "debug" y "run" para poder lanzar la aplicación de manera confiable en un estado conocido.
- Crear configuraciones de herramientas externas para iniciar los procesos de construcción y otras herramientas.

::: info Nota:

Muchas de estas configuraciones ya se comparten dentro del proyecto. Si no puedes verlas en las "Debug Configurations" o "Run Configurations" de Eclipse, es probable que tu proyecto esté configurado de manera ligeramente diferente a la forma en que se generó la configuración. Verifica el diálogo "Filter launch configurations..." y deselecciona "Filter Deleted/Unavailable Projects". Todas las configuraciones compartidas deberían aparecer en la lista. Para usar una de estas, cópiala y modifícala para que se ajuste a tu configuración. Asegúrate de hacer una copia local en la pestaña "Common". Esto evitará que tu trabajo sea sobrescrito. Una diferencia común podría estar en el nombre del proyecto o si el repositorio está configurado como un proyecto único o múltiple. Algunas de las configuraciones usan variables como ${adempierePropertiesFile} que deben configurarse antes de que la configuración pueda ejecutarse.

:::

#### Crear Configuraciones de Debug y Run

Las configuraciones de Debug y Run facilitan el lanzamiento de ADempiere. Las configuraciones se pueden crear en el menú "Run" de Eclipse o en las listas desplegables de los íconos de Debug/Run.

Las configuraciones necesitan los siguientes ajustes:

1. Crea una nueva configuración de Java Application.
   - Nombre: Llámala de manera específica en caso de que tengas varios proyectos.
   - Pestaña Main: Selecciona tu proyecto ADempiere.
   - Pestaña Main - Main class: org.compiere.Adempiere.
   - Pestaña Arguments - VM Arguments: -Xms64m -Xmx64m -Dorg.adempiere.server.embedded=true -DPropertyFile="C:\Adempiere\Adempiere.properties"
   - Pestaña Common: Selecciona Debug y Run en "Display in favorites menu".

::: info Nota

Reemplaza la ruta al archivo Adempiere.properties con la que deseas utilizar. También puedes cambiar los VM Arguments para aumentar o disminuir la cantidad de memoria. Los VM arguments definen la asignación mínima y máxima de RAM para la Máquina Virtual Java. Consulta la documentación de Java para obtener más información.

:::

Crea configuraciones adicionales para otros proyectos según sea necesario.

## Crear Configuraciones de Herramientas Externas

Para ayudar con la construcción de ADempiere y otras funciones de utilidad, puedes crear configuraciones de herramientas externas que ejecutarán los objetivos de construcción de Ant para realizar diversas funciones. Las configuraciones de herramientas externas se pueden crear desde el menú Run->External Tools->External Tools Configurations... Cada configuración necesita los siguientes ajustes:

- Selecciona "Ant Build" y crea una nueva configuración de lanzamiento. Dale a la nueva configuración un buen nombre como "ADempiere - build".
- Pestaña Main - BuildFile: ${workspace_loc:/adempiereTrunk/utils_dev/build.xml} - o donde sea que se encuentre utils_dev/build.xml.
- Pestaña Build - Selecciona "Build before launch."
- Pestaña Targets - Selecciona uno o más objetivos. Para la construcción básica, selecciona el predeterminado, "complete".
- Pestaña Common - Guardar como archivo local y selecciona Display in favorites menu - External Tools.

Crea configuraciones adicionales según sea necesario. Una útil utiliza el objetivo de construcción "install" que eliminará parcialmente la ubicación de instalación e instalará el software ADempiere. El objetivo "Clean" limpiará los directorios de clases y "clean all" realizará una limpieza y eliminará la ubicación de instalación. Revisa el código utils_dev/build.xml para más detalles.

Hay muchos archivos de construcción en el proyecto que realizan tareas específicas. También puedes crear configuraciones de herramientas externas para estos. Una útil está en el directorio de migración para instalar migraciones. Por ejemplo, en el directorio adempiereTrunk/migration/380lts-release/postgresql, el archivo build.xml puede aplicar la larga lista de scripts de migración desde Eclipse. Deberás copiar el archivo adempiereTrunk/migration/postgresql.properties.template a postgresql.properties y modificarlo para tu instalación. Luego, crea una configuración de herramienta externa para ejecutar el objetivo "run-scripts".

También puedes crear configuraciones de herramientas externas para algunos de los scripts básicos de shell en ADempiere. Estos se crean en la categoría "Program" de la herramienta externa. Suponiendo que has instalado Adempiere en la unidad C:\, los objetivos sugeridos son:

- c:\adempiere\Run_Setup.bat/sh
- c:\adempiere\Run_SilentSetup.bat/sh
- c:\adempiere\utils\Run_ImportAdempiere.bat/sh

### Compilando ADempiere

ADempiere está configurado para utilizar dos directorios para cada proyecto: un directorio src y un directorio build. Tienen la misma estructura dentro de cada proyecto, diferenciándose solo en los sufijos de archivo: .class para el directorio build y .java para el directorio src. Compilar es el proceso de generar los archivos .class a partir de los archivos .java.

Hay dos formas de compilar:

- Automáticamente: por defecto, Eclipse compila automáticamente cuando se producen cambios. Project > Build está marcado por defecto después de la instalación de Eclipse.
- Manualmente: en casos deseables, es posible que desees decidir cuándo compilar (por ejemplo, al depurar el software ZK). Asegúrate de que Project > Build Automatically no esté marcado. Debes recordar compilar manualmente con Eclipse antes de ejecutar ADempiere.

## Construyendo ADempiere

La construcción es el proceso de archivar los archivos de clase en archivos jar y crear los archivos de instalación. No te confundas con el uso del término "build". Para Eclipse, significa compilar los archivos java, mientras que para ADempiere es construir los archivos jar.

Hay tres formas de construir:

- A través de la consola: abre una consola, cambia al directorio /adempiere_trunk/utils_dev y ejecuta RUN_build.sh. Este script realiza una limpieza antes de construir. Verás los mensajes en la consola.
- A través de Eclipse ANT: en la vista del navegador, expande utils_dev y selecciona el archivo build.xml. Ejecútalo mediante el menú contextual (Run as > ANT Build). Es más rápido porque realiza una construcción sin limpiar.
- A través de las configuraciones de herramientas externas creadas anteriormente para ejecutar la construcción ANT.

Build.xml extrae información de los archivos build.properties y properties.xml. También puedes crear un archivo mybuild.properties para anular estos según sea necesario.

Si no has instalado una copia del cliente ADempiere, puedes hacerlo con la construcción ANT de la siguiente manera:

- Copia el archivo utils_dev/build.properties a utils_dev/mybuild.properties o a ${user.home}/.adempiere.properties. Edita el archivo y cambia las líneas según donde debería ir la copia instalada de Adempiere. Por ejemplo, para instalar una copia en c:\adempiere, utiliza estas líneas:

~~~
env.ADEMPIERE_ROOT=c:/
env.ADEMPIERE_HOME=${env.ADEMPIERE_ROOT}/Adempiere
~~~

- Crea una configuración de herramienta externa para ejecutar el destino ANT utils_dev/build.xml->install.
- Construye ADempiere, si aún no lo has hecho (utiliza tu herramienta externa o selecciona utils_dev/build.xml y ejecútalo como construcción ANT).
- Instala ADempiere, utilizando la configuración de herramienta externa creada anteriormente.
- Crea configuraciones de herramientas externas para ejecutar los programas c:\adempiere\run_setup y c:\adempiere\run_silentsetup como se describe anteriormente. Ejecuta run_setup la primera vez y luego run_silentsetup si lo necesitas en el futuro. Configura los parámetros según las instrucciones en [Application Server Installation & Setup](a). Esto creará varios de los archivos necesarios: adempiere.properties y utils/myEnvironment.bat.

## Configuración de la Base de Datos

ADempiere necesita una base de datos para funcionar. Si aún no has instalado una, sigue las instrucciones en [Database Server Installation & Setup](a).

Antes de ejecutar ADempiere, deberás [Inicializar la Base de Datos de ADempiere](a). Esto se hace ejecutando el script RUN_ImportAdempiere en el directorio c:/adempiere/utils.

::: info Nota

Puedes configurar una herramienta externa según se describe anteriormente para ejecutar cualquiera de los scripts en la instalación de ADempiere desde Eclipse.
:::

## Depuración y Ejecución del Cliente

Una vez que se hayan completado todos los elementos de instalación, depurar o ejecutar el cliente es tan simple como seleccionar la configuración adecuada. La aplicación debería iniciarse de inmediato y puedes utilizar el poder de Eclipse y Java para depurar y cambiar la aplicación. La capacidad de hot-swapping de la JVM permite que los cambios que realices en el código afecten a la instancia en ejecución a medida que guardas los cambios. Para obtener más información sobre el uso de Eclipse, consulta la [documentación de Eclipse (Kepler)](http://help.eclipse.org/kepler/index.jsp).

## Ejecución y Depuración de la Versión Web

Consulta [Creación del Espacio de Trabajo de WebUI utilizando Eclipse Webtool](./creating-webui-workspace-using-eclipse-webtool.md).

## Depuración del Servidor

Para depurar el servidor, debes ser capaz de compilar y ejecutar el cliente.

Habilita la depuración de la siguiente manera:

- Añade lo siguiente a la línea que comienza con ADEMPIERE_JAVA_OPTIONS en el archivo utils/myEnvironment.bat|sh:

- `-Xdebug -Xnoagent -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8888`

El resultado será algo como:

- `@SET ADEMPIERE_JAVA_OPTIONS=-Xms64M -Xmx512M -DADEMPIERE_HOME=D:\Develop\Adempiere\stable\adempiere\Adempiere 
-Xdebug -Xnoagent -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8888`

- Inicia el servidor (usando utils/RUN_Server2.sh). Si has compilado usando el script RUN_build.sh mencionado en los requisitos, encontrarás este script en adempiere/Adempiere/utils con el directorio de checkout como raíz.
- Usa la opción "Adjuntar depurador" en tu IDE. Si estás utilizando NetBeans, encontrarás esa opción en el menú principal "Run". Adjunta al servidor en el que estás ejecutando ADempiere usando el puerto especificado (en este ejemplo, el puerto 8888).
- Añade puntos de interrupción según sea necesario.

## Procedimientos a Considerar

Si estás utilizando una base de datos de producción para pruebas, no es necesario importar los datos de semilla. Es posible que debas migrar tu base de datos a una versión que coincida con el software. Puedes hacerlo aplicando scripts de migración (consulta [Migración](https://wiki.adempiere.net/Migration)) o utilizando una Herramienta de Migración que comparará tu base de datos con una referencia y asegurará que toda la información necesaria se añada a tu base de datos. Para obtener más información, consulta la página [Migración](a).

### Uso por Primera Vez

Antes de poder depurar el software, deberás generar algunos de los archivos de configuración clave requeridos por la aplicación. Suponiendo que has instalado todo el software necesario y has configurado Eclipse adecuadamente, aquí están los pasos:

1. Actualiza tu repositorio a la revisión deseada utilizando tu software de control de versiones. (Elige una versión de trabajo para la primera vez, no una versión en desarrollo.)
2. Actualiza Eclipse para asegurarte de que está sincronizado con los archivos en el repositorio después de la actualización.
3. Copia uitls_dev/build.properties a mybuild.properties y modifícalo para que apunte al directorio de instalación local, por lo general, c:\ en máquinas Windows.
4. Limpia tu entorno de desarrollo para eliminar clases antiguas.
5. Compila el código utilizando la construcción ANT utils_dev/build.xml.
6. Instala el código utilizando el objetivo de instalación ANT en utils_dev/build.xml.
7. Ejecuta el script RUN_Setup en la ubicación de la instalación (por ejemplo, ${ADEMPIERE_HOME}/Run_Setup). Para obtener más información, consulta la página de Instalación y Configuración del Servidor de Aplicaciones.
8. Copia el archivo adempiere.properties resultante a una ubicación segura donde no se sobrescriba involuntariamente.
9. Crea o modifica tus configuraciones de ejecución/depuración para que apunten a los argumentos de la máquina virtual en el archivo adempiere.properties copiado.
10. Importa la semilla de la base de datos (utils\Run_ImportAdempiere).
11. Aplica migraciones a la semilla (solo si es necesario. Las migraciones serán archivos sql o xml ubicados en la carpeta migration\<versión>-release. Si esta carpeta está vacía, no se requiere ninguna acción).
    1. Aplica migraciones SQL, generalmente para versiones anteriores al lanzamiento 380.
        1. En Eclipse, copia el adempiere/migration/postgres.properties.template a postgres.properties (o el archivo equivalente con oracle/mysql según tu base de datos). Modifica el archivo según tu configuración de base de datos.
        2. Ve al directorio aplicable en la carpeta adempiere/migration (por ejemplo, adempiere/migration/370LTS-release/postgres) y ejecuta el ANT build.xml en ese directorio.
    2. Aplica migraciones XML, después de la versión 380LTS. Ejecuta la configuración de ejecución/depuración "Load XML Migrations". Esto también aplicará todos los scripts post migración.

Después de estos pasos, deberías poder depurar la aplicación desde Eclipse utilizando una configuración de ejecución/depuración.

::: info Nota

Si cambias el nombre del archivo adempiere.properties, puedes crear copias con diferentes opciones de configuración para que puedas cambiar las opciones principales simplemente seleccionando diferentes configuraciones de ejecución/depuración.

:::

### Actualización Importante del Software

Después de una actualización de tu repositorio realizada a través del sistema de control de versiones, deberás realizar los siguientes pasos, según la extensión y naturaleza del cambio.

::: info Nota

Este procedimiento asume que tienes todo el software necesario instalado y has depurado con éxito ADempiere desde Eclipse en el pasado.

:::

1. Actualiza tu entorno de desarrollo.
2. Limpia tu entorno de desarrollo para eliminar clases antiguas.
3. Compila el código, es decir, utiliza la construcción ANT discutida anteriormente. Esto creará los archivos de biblioteca necesarios.
4. Importa la semilla de la base de datos y aplica migraciones como se describe anteriormente.

Después de estos pasos, deberías poder depurar la aplicación.

## Trabajando con un Clon del Repositorio Oficial de ADempiere

El Proyecto ADempiere utiliza un modelo de Fork y Pull. Es una práctica recomendada bifurcar el repositorio ADempiere, desarrollar dentro de esa bifurcación y luego hacer que el equipo técnico "tire" de tus cambios al repositorio ADempiere.

Esta es la mejor práctica para los desarrolladores de ADempiere, para personas que desean contribuir o cuando estás trabajando en un módulo/funcionalidad con un equipo y realizas ciclos de confirmación, envío, reversión, fusión, etc. antes de decidir publicar.

Los pasos para hacerlo se describen en [ADempiere Version Control](https://wiki.adempiere.net/ADempiere_Version_Control) pero, en resumen, aquí están los pasos:

- Ve al [repositorio de Adempiere en Github](https://github.com/adempiere/adempiere), inicia sesión con tu cuenta de Github y bifurca desde allí siguiendo [estas instrucciones](https://help.github.com/articles/fork-a-repo/).
- Ve a tu cuenta de Github (por ejemplo, https://github.com/MY_GITHUB_ACCOUNT) y mira tu bifurcación. Estará en https://github.com/MY_GITHUB_ACCOUNT/adempiere.
- Clona el repositorio ADempiere localmente, por ejemplo, con git clone git@github.com:MY_GITHUB_ACCOUNT/adempiere.git o con Eclipse o tu IDE favorito.
- Crea una nueva rama para tu trabajo de desarrollo. Sigue las convenciones de nombres de ramas en el [Procedimiento de Desarrollo de Software](https://wiki.adempiere.net/Software_Development_Procedure) - sé específico. Limita tus ramas locales a una única corrección de errores o desarrollo de características. Usa tantas ramas como necesites.
- Realiza algunos cambios de software y confirma y envía tus cambios locales como de costumbre y luego envía a tu bifurcación en Github.
- Cuando desees que tus cambios se envíen al Equipo Técnico para que los acepten, sigue [estas instrucciones](https://yangsu.github.io/pull-request-tutorial) o [estas instrucciones](https://help.github.com/articles/using-pull-requests/). Presta atención a la rama de destino en el repositorio ADempiere.
- Mantén sincronizada tu bifurcación
    - Cuando sea necesario, sincroniza tu bifurcación con el repositorio ADempiere [como se describe aquí](http://stackoverflow.com/questions/20984802/how-can-i-keep-my-fork-in-sync-without-adding-a-separate-remote/21131381#21131381).
    - Luego, abre tu proyecto local en Eclipse y extrae cambios de tu bifurcación.
  
## Solución de Problemas

Problemas (y sus soluciones) que las personas suelen tener al compilar ADempiere.

- Utiliza la versión correcta de Java. Asegúrate de que el JDK y los JRE utilizados en Eclipse e instalados en tu computadora sean consistentes. Verifica la configuración del espacio de trabajo de Eclipse, la configuración del proyecto y la configuración de compilación si encuentras problemas.
- En sistemas Linux, debes agregar el permiso "ejecutar" a todos los scripts de shell antes de comenzar. Ejecuta el siguiente comando desde el directorio superior al directorio de Adempiere para convertir todos los archivos de script de shell.

```bash
  find Adempiere -name *.sh -exec chmod +x "{}" \;
```

Gracias a "DeathMeat" en Freenode #adempiere por eso. Notas: para OpenSuSE 10.1, se requieren comillas para el *.sh, que debemos escribir:

- `find Adempiere -name "*.sh" -exec chmod +x "{}" \;`

- Errores al ejecutar scripts estándar de shell en Unix
  Los scripts de shell estándar de Unix fueron creados en una plataforma DOS/Windows y contienen caracteres especiales incompatibles con Unix, lo que puede causar errores extraños al ejecutar los scripts. La utilidad común dos2unix corregirá este problema. Ejecuta el siguiente comando desde el directorio superior al directorio de instalación de Adempiere para solucionar esto.

- `find Adempiere -name *.sh -exec dos2unix -d "{}" \;`

Gracias nuevamente a DeathMeat de freenode #adempiere por eso.

Además de los scripts de shell (es decir, archivos *.sh), es posible que también necesites ejecutar esta utilidad (dos2unix) contra el archivo Adempiere/jboss/bin/run.conf.

- OutOfMemoryError al ejecutar la compilación con Ant
  Permite que el proceso de Ant utilice más memoria (heap). Una forma de hacerlo es configurando la variable de entorno ANT_OPTS. Ejemplo para Windows:

- `set ANT_OPTS=-Xmx256M`

Para muchos sistemas Linux, como OpenSuSE, Fedora, Red Hat
- `export ANT_OPTS=-Xmx256M`

- Puedes obtener una excepción de MailLogger **"MailLogger no pudo enviar el correo electrónico. java.lang.Exception: Parámetro requerido faltante: MailLogger.from"**
Agrega estas líneas a Adempiere/utils_dev/mybuild.properties:

- `MailLogger.from=username@domain.com`
- `MailLogger.success.to=username@domain.com`
- `MailLogger.failure.to=username@domain.com`

## Ver también

The interesting German version [De_DE/eclipse-setup](https://wiki.adempiere.net/De_DE/eclipse-setup) that goes right through debugging from the JBoss server.
[Hacker's guide](https://wiki.adempiere.net/Hacker%27s_guide)
[Compile](https://wiki.adempiere.net/Compile)
[Creating WebUI Workspace using Eclipse Webtool](./creating-webui-workspace-using-eclipse-webtool.md)