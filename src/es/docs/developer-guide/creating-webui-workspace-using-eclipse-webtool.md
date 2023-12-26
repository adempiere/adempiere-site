---
title: Creación de Espacio de Trabajo WebUI usando Eclipse Webtool
category: Community
star: 9
sticky: 9
tag:
  - Guía
  - Desarrollador
  - Crear
article: false
---

# Descripción General

Este artículo es una continuación de "Crea tu entorno de desarrollo ADempiere" y describe cómo modificar el proyecto ADempiere y tu entorno de desarrollo para habilitar la depuración del **ZK WebUI** utilizando **Eclipse Webtool**. El soporte de Eclipse Webtool se agregó en la versión **3.4.1**. Esta adición te permite ejecutar o depurar el cliente web **ZK** mediante Eclipse Webtool (Europa JEE y superior) y **Apache Tomcat**.

## Configuración del Proyecto para Incluir el Soporte de Webtool

Antes de comenzar, consulta "Crea tu entorno de desarrollo ADempiere" y asegúrate de poder compilar y depurar el cliente swing.

### Lista de Verificación Adicional

- Si no tienes una versión de Eclipse Java EE, debes instalar en tu Eclipse los complementos Eclipse Java EE Tools, JST Server Adapters y JST Server Adapters - Extensions. De lo contrario, no verás ni configurarás la vista del servidor en Eclipse.
- Asegúrate de seleccionar la entrada del menú Ayuda/Instalar nuevo software y en el campo Trabajar con la URL de tu versión, por ejemplo, para Luna: <http://download.eclipse.org/releases/luna>.
- Puede ser necesario que debas configurar Tomcat manualmente (según <http://www.coreservlets.com/Apache-Tomcat-Tutorial/tomcat-7-with-eclipse.html>): Copia el directorio /tu-directorio-base-de-tomcat/webapps/ROOT a /tu-espacio-de-trabajo/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps.

Como la herramienta web no está configurada por defecto, hay un poco de trabajo que hacer cada vez que actualizas la rama principal del proyecto. Aquí están los pasos:

1. Haz checkout de la rama ADempiere de interés y compílala usando la construcción ant en utils_dev/build.xml.
2. Abre las Propiedades del proyecto ADempiere.
3. Selecciona Facetas del proyecto y haz clic en el enlace "Convertir a formulario facetado..."
4. Confirma que el Módulo web dinámico está seleccionado (la Versión 2.5 está bien).
5. Confirma que Java está seleccionado (selecciona una versión de JAVA compatible con el código en el proyecto).
6. Cierra las Facetas del proyecto y haz clic en Configuración del proyecto web en el cuadro de diálogo Propiedades del proyecto. Esto mostrará un error: "Contect Root no puede estar vacío". Esto es un problema con la versión de eclipse luna y necesitarás
verificar que las siguientes "naturalezas" estén incluidas en el archivo .project de eclipse (puede haber otras, pero necesitas al menos estas dos):

```xml
<natures>
  <nature>org.eclipse.wst.common.modulecore.ModuleCoreNature</nature>
  <nature>org.eclipse.wst.common.project.facet.core.nature</nature>
</natures>
```

7. Actualiza el proyecto y vuelve a mirar las Propiedades del proyecto, Configuración del proyecto web. Deberías ver el contexto raíz como "webui".
8. Ahora agrega servidores. Es más fácil hacer esto haciendo clic con el botón derecho en la pestaña del servidor y seleccionando "Nuevo" o haciendo clic en el enlace para agregar servidores si lo ves. En el cuadro de diálogo que aparece, puedes seleccionar el servidor que deseas usar y
descargarlo a un directorio. Apache Tomcat V6.0 instalado en un directorio como c:\dev\apache funcionará. El servidor debería identificar los proyectos web disponibles y puedes agregar el proyecto ADempiere al servidor.
9. Haz clic con el botón derecho en el servidor y selecciona Ejecutar. Ten en cuenta que esto no funcionará, pero publicará el proyecto y creará una configuración de inicio para él.
10. Edita la configuración de inicio y agrega lo siguiente a los argumentos:
```js
-DPropertyFile=${adempierePropertiesFile}
-DADEMPIERE_HOME=${ADEMPIERE_HOME}
```
(Nota: Estos argumentos usan variables, pero podrías reemplazar la variable con las rutas relevantes. El archivo adempiere.properties necesita existir, por eso necesitas construir e instalar ADempiere).
11. Guarda la configuración..
12. Ejecuta nuevamente el lanzador del servidor desde la configuración de depuración. Verifica la consola en busca de errores. Debería iniciarse normalmente.
13. Una vez que el servidor haya iniciado, abre un navegador e ingresa a localhost:puerto/webui. Por lo general, Tomcat usa el puerto 8080. Deberías ver la página de inicio de sesión estándar. Ahora puedes insertar puntos de interrupción en el código webui e interactuar con el código desde el navegador.
14. Para facilitar la reproducción de estos pasos, haz un stash de estos cambios en git y reaplícalos desde el stash cuando cambies a una nueva rama.

Para personalizar la interfaz zk, consulta Crea tu entorno de personalización ADempiere.

- Si deseas que ADempiere ZK se abra en Eclipse.
- Selecciona el Proyecto ADempiere
- Haz clic con el botón derecho del ratón
- Selecciona como desees ***Run As/Run on Server*** o ***Debug As/Debug on Server***
- En el cuadro de diálogo que se abre, selecciona el servidor y el recurso, presiona finalizar
- El cuadro de diálogo de inicio de sesión Adempiere ZK se abre en una vista de Eclipse.
- Resultado

![Tomcat_running_in_Eclipse](/assets/img/community/developers-guide/Tomcat_running_in_Eclipse.png)

## Instrucciones Antiguas

::: info Nota

Este artículo se basa en una versión anterior de eclipse. Si bien las capturas de pantalla no coincidirán exactamente, el proceso es similar.

:::

Puedes verificar que todo está en su lugar revisando las propiedades del proyecto:

- Facetas del Proyecto (no cambies nada aquí.)

![Project_Facets](/assets/img/community/developers-guide/Project_Facets.jpg)

- Configuración del Proyecto Web

![Web Project Settings](/assets/img/community/developers-guide/Web_Project_Settings.jpg)

## Instalar Tomcat Runtimes

Primero, necesitas instalar un tiempo de ejecución de Tomcat para implementar y ejecutar el zk Web Client. Usa Tomcat 5.5 o superior.

Para instalar un nuevo tiempo de ejecución de Tomcat, abre el cuadro de diálogo de preferencias ***Window->Preferences*** y selecciona ***Server->Installed Runtimes***. Usa el botón ***Search*** para localizar la carpeta de inicio de tu instalación de ***Tomcat***.

![Installed_Runtimes](/assets/img/community/developers-guide/Installed_Runtimes.jpg)

## Definir un Nuevo Servidor

En la vista Servidores, haz clic con el botón derecho para abrir el menú contextual y selecciona Nuevo->Servidor.

Si la vista del servidor no está visible, puedes usar **Window > Show** **View > Others** para abrirla.


![New_Server](/assets/img/community/developers-guide/New_Server.jpg)

- Selecciona el tipo de servidor correcto y el tiempo de ejecución del servidor que hayas configurado anteriormente.

![Define_a_new_server](/assets/img/community/developers-guide/Define_a_New_Server.jpg)

- Agrega tu proyecto a la instancia del servidor que se va a crear.

![Add_Project](/assets/img/community/developers-guide/Add_Project.jpg)

- La instancia del servidor creada está ahora lista para su uso. Simplemente inicia el servidor una vez y luego detenlo. No intentes depurarlo en este momento.

![start_server](/assets/img/community/developers-guide/Start_Server.jpg)

## Definir la ubicación del archivo de propiedades de ADempiere y ADempiere home

Ahora debes definir la ubicación de tu archivo existente de 'Adempiere.properties' y ADEMPIERE_HOME como parámetro del sistema para tu instancia de Tomcat. Para hacerlo, selecciona Run->Open Run Dialog... y selecciona la instancia del servidor que has creado. Ten en cuenta que las entradas para tu instancia de servidor en el cuadro de diálogo Run solo se crearán después de haberla iniciado al menos una vez. Selecciona la pestaña de argumentos y agrega al final de los argumentos la ruta de tu archivo de propiedades y el parámetro de inicio de tu hogar.

Está resaltado en las imágenes a continuación:

![tomcat_run_profile](/assets/img/community/developers-guide/Tomcat_Run_Profile.jpg)

[Hengsin](https://wiki.adempiere.net/User:Hengsin) 01:11, 4 August 2008 (EDT)

Para evitar el problema "NoClassDefFoundError", debes seguir las pautas sugeridas a continuación en 'Resolución de Problemas'. Por lo tanto, sigue primero esas instrucciones antes de depurar el zk webui.

## Resolución de Problemas

Tuve un problema al iniciar Tomcat con "NoClassDefFoundError". Faltaba la ruta de clases a los frascos de adempiere. Se solucionó editando la configuración de ejecución. Ve a la sección de classpath en las entradas de usuario y agrega bibliotecas externas desde tomcat\lib (o tomcat\server\lib) y luego agrega el proyecto - AdempiereTrunk.

Las bibliotecas de Apache deben estar en primer lugar en el classpath. Observa la imagen con cuidado junto con la descripción a continuación.

- Entradas de inicio
  - Biblioteca JRE
- Entradas de usuario
  - tomcat_dir/bin/*.jar
  - tomcat_dir/server/lib/*.jar
  - Proyecto Adempiere
  - Bibliotecas Adempiere

![webui_classpath](/assets/img/community/developers-guide/WebUI_Classpath.png)

## Ver también

- [Youtube: Servlet development using Eclipse and Tomcat](http://www.youtube.com/watch?v=EOkN5IPoJVs)
- [Create and Run Your First ZK Application with Eclipse](http://books.zkoss.org/wiki/ZK_Installation_Guide/Quick_Start/Create_and_Run_Your_First_ZK_Application_with_Eclipse_and_ZK_Studio)
- Q: [Debugging ZK webUI](http://sourceforge.net/projects/adempiere/forums/forum/610548/topic/4852616)
