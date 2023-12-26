---
title: Entorno de Personalización
category: Documentación
star: 9
sticky: 9
tag:
  - Guía
  - Desarrollo
article: false
---

### Cómo configurar un entorno de personalización para el software ADempiere

Este tutorial te mostrará cómo personalizar el software central de ADempiere sin realizar cambios directos en el proyecto ADempiere. En su lugar, los cambios de personalización se incluyen en customization.jar y zkcustomization.jar, que se pueden implementar en la instalación de ADempiere.

## Introducción

A veces te das cuenta de que ADempiere no se adapta perfectamente a tus necesidades y necesitas hacer algunos cambios en partes del código fuente. Algunas personalizaciones no son posibles de lograr a través del [Diccionario de Aplicaciones](http://wiki.adempiere.net/Application_Dictionary) de ADempiere, y debes modificar el código fuente para eso. La forma recomendada de personalizar el software es hacerlo en un proyecto separado. Allí puedes crear tus clases personalizadas y generar archivos jar de personalización que se pueden agregar a ADempiere durante la construcción de la instalación.

### Cómo configurar tu entorno

Necesitarás tener dos proyectos en tu entorno de desarrollo: uno para el proyecto ADempiere y otro para tu código personalizado que se convertirá en la nueva aplicación y dependerá del proyecto ADempiere. Se proporciona una Plantilla de Personalización para ayudarte a empezar.

### Crear el Proyecto ADempiere

1. Si aún no lo has hecho, sigue el proceso de [Control de Versiones de ADempiere](https://github.com/docs/developer-guide/adempiere-version-control) para bifurcar, clonar y realizar el checkout de la rama objetivo del proyecto ADempiere que deseas personalizar.

2. [Crea tu entorno de desarrollo de ADempiere](https://github.com/docs/developer-guide/development-environments) y, si estás modificando la interfaz zk, [configura tu espacio de trabajo WebUI con la herramienta Eclipse Webtool](https://github.com/docs/developer-guide/development-environments/creating-webui-workspace-using-eclipse-webtool).

3. Compila la aplicación ADempiere (utilizando utils_dev/build.xml), instala, configura el software (para crear el archivo .properties) e importa la semilla de la base de datos.
4. Modifica las configuraciones de inicio según sea necesario y verifica que puedes ejecutar el cliente e interfaces zk para el proyecto ADempiere.

Ahora has creado el proyecto principal ADempiere. Los cambios en este proyecto deben realizarse como parte del [Procedimiento de Desarrollo de Software](https://github.com/docs/developer-guide/software-development-procedure) para corregir errores, agregar funciones y generar código común que será compartido por todas las implementaciones de ADempiere.

### Crear el Proyecto de Personalización

Bifurca el proyecto de la plantilla de personalización en GitHub desde [aquí](https://github.com/adempiere/Customization-Template).
Añade el código bifurcado como un nuevo proyecto a tu espacio de trabajo IDE que contiene el proyecto ADempiere que creaste anteriormente. Luego, modifica las Propiedades del Proyecto para que apunten al proyecto ADempiere principal.

![imagen](https://github.com/adempiere/adempiere-site/assets/134967453/5f661e3a-2b0b-4d2e-8879-be4b42842ec4)

### Personalización de la Interfaz de Usuario Swing

Para Swing, es bastante sencillo. Copia el código fuente que deseas personalizar desde el proyecto principal, manteniendo la estructura del directorio fuente igual. Puedes modificar el código y luego ejecutar el proyecto de personalización para ver los efectos. Muchos cambios realizados mientras el código se está ejecutando se aplicarán de inmediato.

### Personalización de la Interfaz de Usuario ZK

Para reducir los retrasos al iniciar Tomcat cada vez que realizas un cambio, hay un truco que puedes usar basado en un artículo en el [blog Beyond Java.](https://www.beyondjava.net/eliminate-cumbersome-tomcat-deployment-waits) Utilizando una herramienta de sincronización de archivos, puedes copiar las clases actualizadas al servidor Tomcat sin tener que volver a cargar todo el servidor. Puedes perder el estado de la aplicación, pero no tendrás que esperar 30 segundos o más después de cada cambio para reiniciar el servidor.

Descarga e instala el [plugin de Eclipse FileSync](https://marketplace.eclipse.org/content/filesync).

En Eclipse, abre el diálogo ***Window*** -> ***Preferences*** y encuentra las preferencias para ***Run/Debug*** -> ***String Substitution***. Agrega una nueva variable y ruta de la siguiente manera:

![image](https://github.com/adempiere/adempiere-site/assets/134967453/d2070ca8-2eaa-4678-b38b-f452d3369c80)

***Agrega ADEMPIERE_PROJECT_LOC como una Sustitución de Cadena en las Preferencias de Eclipse.***

Luego, haz que estas variables estén disponibles para los scripts de compilación de Ant agregándolas a las propiedades de ***Ant*** -> ***Runtime*** en el mismo diálogo de ***Windows*** -> ***Preferences***.

![image](https://github.com/adempiere/adempiere-site/assets/134967453/e4f03b8e-ad21-4028-91d8-91d6c08a4007)

***Añadiendo las variables a las propiedades de ejecución de Ant***

Elimina todo el contenido de la carpeta zkwebui en la plantilla, excepto el archivo build_custom.xml. La plantilla contiene un archivo fuente en zkwebui/WEB-INF/src, Login.java, como ejemplo. Esto simplemente cambia el encabezado de la ventana de inicio de sesión a "¡Mi Personalización Funciona!". Si lo deseas, puedes dejar este archivo en su lugar.

Copia el directorio zkwebui del proyecto ADempire a la plantilla. Ten cuidado de no sobrescribir el archivo build_custom.xml en la plantilla. Esto proporcionará la misma estructura de implementación que el proyecto ADempiere principal. (Este paso es necesario y podría automatizarse, pero existe el riesgo de sobrescribir tu personalización, por lo que se ha dejado como un proceso manual.)

En las ***Propiedades del Proyecto*** para la plantilla, verifica que la Asignación de Implementación (Deployment Assembly) para el proyecto de la plantilla coincida con la Asignación de Implementación en el proyecto ADempiere.

::: note Nota
Si tienes dudas, simplemente copia las entradas de la Asignación de Implementación (Deployment Assembly) desde el archivo .settings/org.eclipse.wst.common.component del proyecto ADempiere al mismo archivo en el proyecto de la plantilla. Elimina cualquier directorio src que no vayas a personalizar y solo conserva aquellos que utilizarás en la plantilla.

:::

Ejecuta el Lanzador Externo `MyCustomizationProject InitializeZKCustomizations` - esto copiará todas las clases necesarias desde el proyecto ADempiere a la plantilla. Dependiendo de la versión de ADempiere, es posible que necesites modificar el archivo build.xml asociado. (Si haces esto manualmente desde el archivo de construcción, no olvides actualizar los archivos del proyecto).

Crea un servidor y agrega la plantilla al servidor siguiendo el [mismo proceso](https://github.com/docs/developer-guide/development-environments/creating-webui-workspace-using-eclipse-webtool#setup-the-webtool) que para el proyecto ADempiere. Abre las propiedades del servidor y toma nota de la ubicación donde se implementará el proyecto. Esto suele ser una carpeta como la siguiente:

```shell
C:\dev\eclipse\carpeta-de-plantilla-personalizada\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\MyCustomizationProject
```

En el explorador de proyectos, abre la carpeta del servidor y modifica el archivo context.xml. Cambia la etiqueta "context" para que lea

```js
<context reloadable="false">
```

Esto evitará que Tomcat recargue el contexto/aplicación cada vez que haya un cambio. Solo afecta al servidor Tomcat de Eclipse y no es necesario en ningún servidor de producción.

Abre las propiedades del proyecto y actualiza las propiedades de sincronización de archivos. Agrega la carpeta "MyCustomizationProject/zkwebui" como fuente y establece el destino en la ubicación de implementación del servidor.

![image](https://github.com/adempiere/adempiere-site/assets/134967453/4157e195-8d16-41b7-8203-bb98980a6d71)

Publica el proyecto en el servidor y luego abre la configuración del servidor y establece la configuración de publicación en "Never publish". Cualquier cambio realizado después de esto será gestionado por el complemento FileSync.

![image](https://github.com/adempiere/adempiere-site/assets/134967453/8c0dac35-d301-4696-b482-4975998bb4e4)

### Pruebas con la plantilla

Con la plantilla configurada, deberías estar listo para comenzar. Es posible que necesites actualizar los archivos de compilación para adaptarlos a las versiones de ADempiere. Si personalizas directorios distintos de build y client, también copia los archivos build.xml del proyecto ADempiere y modifícalos para agregar las clases personalizadas a los archivos jar. Compara el build.xml del directorio base en tanto la plantilla como el proyecto ADempiere para ver cómo y qué cambiar.

Si inicias el servidor, deberías ver los cambios en los archivos zk. Cuando realizas un cambio, la sincronización de archivos debería publicarlo inmediatamente y verás los efectos al actualizar la página web. Puedes perder el contexto y tener que iniciar sesión nuevamente.

El lanzador para el cliente ejecutará el cliente según el proyecto principal. Aquí, la mayoría de los cambios que realices se cargarán automáticamente en la aplicación, lo cual es muy útil para el desarrollo.

### Exportación de los archivos JAR de personalización

Cuando tu personalización esté lista, hay un lanzador para construir los archivos JAR de personalización. Los dos archivos customization.jar y zkcustomization.jar se agregarán al directorio lib. Puedes añadir estos archivos al directorio lib de una instalación de ADempiere desplegada (***ADEMPIERE_HOME/lib***) y ejecutar la configuración (***RUN_Setup o RUN_SilentSetup***) para ver los cambios.
