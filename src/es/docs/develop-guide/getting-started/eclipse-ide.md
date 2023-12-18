---
title: Eclipse IDE
category:
  - Eclipse IDE
  - IDE
star: 9
sticky: 9
article: false
author: Yamel Senih
---

![Eclipse IDE](/assets/img/docs/develop-guide/getting-started/eclipse-ide-opening.png)

::: tip Versión de Eclipse

Eclipse IDE para desarrolladores de Java (incluye componentes en incubación)

Versión: 2021-12 (4.22.0)
ID de compilación: 20211202-1639

:::

## Eclipse IDE

El IDE Eclipse es famoso por nuestro Entorno de Desarrollo Integrado (IDE) para Java, pero tenemos varios IDE bastante geniales, incluido nuestro IDE para C/C++, IDE para JavaScript/TypeScript, IDE para PHP, entre otros.

Puedes combinar fácilmente el soporte para varios lenguajes y otras características en cualquiera de nuestros paquetes predeterminados, y el Eclipse Marketplace permite una personalización y extensión virtualmente ilimitadas.

Puedes descargarlo [aquí](https://www.eclipse.org/downloads/packages/release/2022-09/r/eclipse-ide-enterprise-java-and-web-developers)

### Crear un nuevo proyecto
Después de clonar el repositorio, debes abrir Eclipse y crear un nuevo proyecto. Para ello, simplemente presiona `Shift+Alt+N` o ve a `File` -> `New`, después selecciona **Java Project**.

::: tip Espacio de trabajo

Ten en cuenta que el espacio de trabajo de Eclipse es la ubicación de la configuración de las fuentes; puedes seleccionar otra ubicación del repositorio también.

:::

Mi espacio de trabajo es `/opt/Development/workspace-jdk-11` y acabo de clonar ADempiere dentro de esta ruta.

![Crear nuevo proyecto](/assets/img/docs/develop-guide/getting-started/create-project.png)

### Compilar el proyecto
Para compilar el proyecto, simplemente selecciona el proyecto ADempiere y luego ve a `Project` -> `Clean` -> Presiona el botón `Clean`

![Limpiar Proyecto](/assets/img/docs/develop-guide/getting-started/clean-project.png)

### Cambiar la perspectiva
Ahora necesitamos cambiar la perspectiva de Eclipse a **Java EE**, esto permite que veas el proyecto `adempiere` como un proyecto web.

Ve al menú `Window` -> `Perspective` -> `Open Perspective` -> `Other...`, después selecciona **Java EE**.

![Java EE](/assets/img/docs/develop-guide/getting-started/java-ee-perspective.png)


### Crear el servidor Tomcat
El servidor Tomcat es un servidor popular y ADempiere puede ejecutarse sobre él.

::: tip Servidores compatibles

ADempiere puede ejecutarse en Tomcat, Wildfly y Jetty.

:::

- Ve al panel `Servers` y presiona la opción "No servers are available. Click this link to create new server..."

![Seleccionar Servidores](/assets/img/docs/develop-guide/getting-started/select-servers.png)

- Selecciona la carpeta `Apache` y `Tomcat v10.0 Server`, también puedes cambiar el nombre del servidor, yo lo cambio a `My Tomcat Server`. Presiona `Next`

![Crear Servidor Tomcat](/assets/img/docs/develop-guide/getting-started/create-tomcat-server-name.png)


- Después del paso anterior, debes definir el directorio de instalación del servidor y otros detalles; ten en cuenta que uso `/opt/Development/workspace-jdk-11` como directorio de instalación, pero existe un error "Unknown version of Tomcat was specified.", el asistente de Eclipse ayuda a instalarlo, simplemente presiona **Download and Install...** y acepta la licencia de Apache. Finalmente, solo presiona el botón **Finish**.

![Instalando Tomcat](/assets/img/docs/develop-guide/getting-started/installing-tomcat.png)

![Aceptar la Licencia de Apache](/assets/img/docs/develop-guide/getting-started/acept-apache-license.png)

- Ahora existe un servidor con el nombre **My Tomcat Server**, haz doble clic sobre él; ahora puedes ver la configuración del servidor.

![Servidor Creado](/assets/img/docs/develop-guide/getting-started/server-created.png)

![Configuración del Servidor](/assets/img/docs/develop-guide/getting-started/server-setup.png)

- Ahora tenemos un servidor con las características predeterminadas de Tomcat. Este servidor es básicamente un Tomcat sin la configuración de ADempiere. Para obtener todas las características de ADempiere, simplemente cambia la **Ruta de configuración** por la ruta predeterminada de ADempiere ubicada en `adempiere/tomcat/conf`

![Cambiar la ruta de Tomcat](/assets/img/docs/develop-guide/getting-started/tomcat-default-config.png)

- Selecciona la pestaña **Modules** y luego presiona el botón **Add Web Module...**

![Seleccionar Módulo de ADempiere](/assets/img/docs/develop-guide/getting-started/adempiere-modules.png)

- Selecciona **adempiere** y presiona **Ok**

![Agregar Módulo de ADempiere](/assets/img/docs/develop-guide/getting-started/add-adempiere-module.png)

- Observa el Módulo de ADempiere habilitado y presiona `Ctrl+S` para guardar el archivo de configuración

![Ver Módulo](/assets/img/docs/develop-guide/getting-started/see-adempiere-module-added.png)


- Después presiona **Open Launch Configuration** y observa el diálogo de lanzamiento

![Configuración de Lanzamiento](/assets/img/docs/develop-guide/getting-started/launch-dialog.png) y selecciona la opción **Debug Configurations...**, luego presiona la pestaña **Classpath**.

- Presiona **User Entries** y después presiona el botón **Add External Jars...**

![Configuración de Lanzamiento](/assets/img/docs/develop-guide/getting-started/launch-dialog.png)


- Ve a `/opt/Development/workspace-jdk-11/apache-tomcat-10.0.13/lib` y selecciona todas las bibliotecas.

![Agregar todas las bibliotecas de Tomcat](/assets/img/docs/develop-guide/getting-started/launcher-tomcat-add-lib.png)

- Presiona **Add Jars...** y selecciona todas las bibliotecas del proyecto **adempiere** ubicadas en `adempiere/tools/lib`

![Agregar Jars de ADempiere](/assets/img/docs/develop-guide/getting-started/add-jars-from-adempiere.png)

- Repite el paso anterior para las carpetas:
  - `adempiere/tools/lib/discord`
  - `adempiere/tools/lib/openid`
  - `adempiere/tools/lib/storefront`
  - `adempiere/JasperReportTools/lib`

- Presiona **Add Projects...** y selecciona **adempiere**

![Agregar todo el proyecto de ADempiere](/assets/img/docs/develop-guide/getting-started/add-adempiere-project.png)

- Presiona el botón **Debug**

Ahora está listo
