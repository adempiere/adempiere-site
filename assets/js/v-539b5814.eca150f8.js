"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5e3],{74884:(e,a,i)=>{i.r(a),i.d(a,{default:()=>z});var r=i(68152);const s=(0,r.IL)('<p><em><strong>Instrucciones para actualizar la aplicación y migrar los datos a la nueva versión.</strong></em></p><p>Una de las grandes características de ADempiere es que las actualizaciones y migraciones a nuevas versiones siempre son gratuitas. El proceso de migración es relativamente sencillo con las herramientas de migración que se han añadido en la versión 3.8.0.</p><p>Existen dos actividades principales:</p><ol><li>Actualizar tu software; y</li><li>Migrar tu base de datos para asegurar que todos los campos y datos necesarios sean compatibles con el software.</li></ol><div class="hint-container warning"><p class="hint-container-title">Aviso</p><p><strong>¡Precaución!</strong> Realiza una copia de seguridad de tu base de datos (utilizando utils/RUN_DBExport) y crea una copia del contenido del directorio de la aplicación ($ADEMPIERE_HOME) antes de intentar actualizar tu sistema. La instalación de la última versión del software podría sobrescribir archivos necesarios, por lo que es mejor tenerlos respaldados. En entornos de producción, realiza la actualización primero en un entorno de prueba.</p></div><h2 id="actualizaciones-de-software" tabindex="-1"><a class="header-anchor" href="#actualizaciones-de-software" aria-hidden="true">#</a> Actualizaciones de Software</h2><p>El software que impulsa la aplicación siempre se está actualizando con correcciones y nuevas características. Mantener una implementación actualizada ayuda a que los usuarios se beneficien del trabajo de la comunidad.</p><p>Al actualizar el software, es importante asegurarse de que cualquier código personalizado incorporado en la implementación funcione con la actualización. Si no estás seguro, por favor contacta a los desarrolladores de tus personalizaciones o solicita asistencia. Los desarrolladores deberían poder proporcionarte todos los elementos de la actualización, asegurando que el código principal, los parches y las personalizaciones funcionen de manera conjunta.</p><h2 id="actualizar-a-una-nueva-version" tabindex="-1"><a class="header-anchor" href="#actualizar-a-una-nueva-version" aria-hidden="true">#</a> Actualizar a una Nueva Versión</h2><p>Advierte a los usuarios que el software estará fuera de línea durante la actualización. Apaga el servidor de aplicaciones. Descarga desde GitHub o genera desde tu entorno de desarrollo, la versión del software a la que deseas actualizar. Esto estará en forma de un archivo zip o tar, por ejemplo, &quot;Release_380lts.zip&quot;. Copia tu directorio ADEMPIERE_HOME o renómbralo. Por ejemplo, de c:\\adempiere a c:\\adempiere_old.</p><p>Si estás instalando sobre la instalación existente, deberías, como mínimo, eliminar el contenido de lo siguiente.</p><ul><li>ADEMPIERE_HOME\\migration (desde la versión 3.8.0)</li><li>ADEMPIERE_HOME\\lib</li><li>ADEMPIERE_HOME\\jboss</li></ul><p>Extrae el nuevo archivo de ADempiere en el directorio ADEMPIERE_ROOT (es decir, si ADEMPIERE_HOME es c:\\adempiere, extrae en c:).</p><h2 id="aplicar-parches" tabindex="-1"><a class="header-anchor" href="#aplicar-parches" aria-hidden="true">#</a> Aplicar Parches</h2>',14),n=(0,r.QD)("em",null,".jar",-1),t=(0,r.QD)("em",null,".jar",-1),o=(0,r.QD)("em",null,".jar",-1),l=(0,r.QD)("em",null,[(0,r.QD)("em",null,"patches"),(0,r.mY)(".jar")],-1),c={href:"http://wiki.adempiere.net/Patches_Installation",target:"_blank",rel:"noopener noreferrer"},d=(0,r.IL)('<div class="hint-container info"><p class="hint-container-title">Nota</p><p>Si estás actualizando un archivo de parche, es una buena idea cambiar el nombre del archivo *.jar existente a algo como patches.jar.old.</p></div><h2 id="aplicar-personalizaciones-paquetes-y-otros-archivos" tabindex="-1"><a class="header-anchor" href="#aplicar-personalizaciones-paquetes-y-otros-archivos" aria-hidden="true">#</a> Aplicar Personalizaciones, Paquetes y Otros Archivos</h2><div class="hint-container info"><p class="hint-container-title">Nota</p><p>Asegúrate de que las personalizaciones aplicadas sean compatibles con la versión de software objetivo.</p></div><p>Si tienes un customization.jar con código personalizado o un archivo packages.jar con archivos *.jar de soporte, agrégales al directorio $ADEMPIERE_HOME\\lib, sobrescribiendo los archivos existentes.</p><p>Además, si tienes otros archivos personalizados, como archivos *.bat, un archivo CustomReport.war, imágenes, etc., no olvides agregarlos a la nueva instalación.</p><h2 id="migracion-de-base-de-datos" tabindex="-1"><a class="header-anchor" href="#migracion-de-base-de-datos" aria-hidden="true">#</a> Migración de Base de Datos</h2>',6),p={href:"http://wiki.adempiere.net/Migrate",target:"_blank",rel:"noopener noreferrer"},u={href:"http://wiki.adempiere.net/Migrate",target:"_blank",rel:"noopener noreferrer"},m={href:"http://wiki.adempiere.net/Migrate",target:"_blank",rel:"noopener noreferrer"},h=(0,r.QD)("h2",{id:"migracion-con-scripts-xml-o-sql",tabindex:"-1"},[(0,r.QD)("a",{class:"header-anchor",href:"#migracion-con-scripts-xml-o-sql","aria-hidden":"true"},"#"),(0,r.mY)(" Migración con Scripts XML o SQL")],-1),g={href:"http://wiki.adempiere.net/Creating_a_New_Seed_Database",target:"_blank",rel:"noopener noreferrer"},v=(0,r.QD)("p",null,"Una vez que se hayan aplicado todos los scripts, puedes iniciar el servidor de la aplicación y probar la actualización.",-1),b={},z=(0,i(42272).c)(b,[["render",function(e,a){const i=(0,r.E1)("ExternalLinkIcon");return(0,r.Wz)(),(0,r.An)("div",null,[s,(0,r.QD)("p",null,[(0,r.mY)("Los parches son una combinación de archivos "),n,(0,r.mY)(", que reemplazan los archivos "),t,(0,r.mY)(" en el directorio ADEMPIERE_HOME\\lib. En el directorio de Parches en GitHub, puede haber más de un tipo de archivo "),o,(0,r.mY)(" que necesite parches. Si descargaste uno o más archivos de parches, reemplaza el archivo existente con el descargado, cambiando su nombre para que coincida. Por ejemplo, copia el archivo "),l,(0,r.mY)(" a ADEMPIERE_HOME\\lib\\patches.jar, sobrescribiendo el archivo existente. Consulta las instrucciones detalladas en "),(0,r.QD)("a",c,[(0,r.mY)("Instalación de Parches"),(0,r.K2)(i)]),(0,r.mY)(".")]),d,(0,r.QD)("p",null,[(0,r.mY)("El siguiente paso es actualizar la base de datos. Antes de la versión 3.8.0, esto se hacía aplicando archivos sql en secuencia, lo que requería acceso a herramientas de base de datos. Con la versión 3.8.0 se ha añadido una nueva "),(0,r.QD)("a",p,[(0,r.mY)("Herramienta de Migración ADempiere"),(0,r.K2)(i)]),(0,r.mY)(" que simplifica mucho el proceso. En resumen, en lugar de aplicar scripts a una base de datos para convertirla en otra, la herramienta de migración compara la base de datos de producción con la base de datos de referencia (o semilla) y se asegura de que todos los elementos de diccionario necesarios estén en su lugar. La herramienta es muy versátil y permite migraciones entre múltiples versiones del software y transferencias de bases de datos de un proveedor a otro. Para obtener más detalles, consulta el manual de la "),(0,r.QD)("a",u,[(0,r.mY)("Herramienta de Migración"),(0,r.K2)(i)]),(0,r.mY)(".")]),(0,r.QD)("p",null,[(0,r.mY)("Para utilizar la herramienta, primero deberás importar la base de datos de referencia como referencia. Puedes hacer esto con el script RUN_ImportReference.[sh|bat]. Cuando la importación esté completa, ejecuta el script RUN_Migrate.[sh|bat] para iniciar la "),(0,r.QD)("a",m,[(0,r.mY)("Herramienta de Migración"),(0,r.K2)(i)]),(0,r.mY)('. Si la herramienta ha identificado correctamente la configuración de la base de datos, simplemente haz clic en "Iniciar Migración" y deja que la herramienta complete la tarea. La mayoría de las bases de datos de producción requerirán alguna intervención, así que consulta el manual de la Herramienta de Migración para obtener instrucciones más detalladas.')]),h,(0,r.QD)("p",null,[(0,r.mY)("Puede ser necesario migrar aún más la base de datos aplicando scripts que están incluidos en parches o personalizaciones y que no se han aplicado a la base de datos de semilla o referencia. Las migraciones XML se pueden aplicar ejecutando RUN_MigrateXML.[sh|bat] después de la instalación y construcción del software. Los scripts XML que se deben aplicar deben encontrarse/guardarse en el directorio ADEMPIERE_HOME/migration. Los scripts SQL se pueden aplicar con cualquiera de varias herramientas. El proceso es similar a generar una nueva base de datos de semilla. Consulta "),(0,r.QD)("a",g,[(0,r.mY)("Creación de una Nueva Base de Datos de Semilla"),(0,r.K2)(i)]),(0,r.mY)(" para obtener más detalles.")]),v])}]])},82616:(e,a,i)=>{i.r(a),i.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-539b5814","path":"/es/docs/system-administration/upgrading-and-migration.html","title":"Actualización y Migración","lang":"es-ES","frontmatter":{"title":"Actualización y Migración","category":"Documentación","star":9,"sticky":9,"article":false,"author":"Jesús Albujas","description":"Instrucciones para actualizar la aplicación y migrar los datos a la nueva versión. Una de las grandes características de ADempiere es que las actualizaciones y migraciones a nuevas versiones siempre son gratuitas. El proceso de migración es relativamente sencillo con las herramientas de migración que se han añadido en la versión 3.8.0.","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/adempiere/adempiere-site.github.io/docs/system-administration/upgrading-and-migration.html"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/es/docs/system-administration/upgrading-and-migration.html"}],["meta",{"property":"og:title","content":"Actualización y Migración"}],["meta",{"property":"og:description","content":"Instrucciones para actualizar la aplicación y migrar los datos a la nueva versión. Una de las grandes características de ADempiere es que las actualizaciones y migraciones a nuevas versiones siempre son gratuitas. El proceso de migración es relativamente sencillo con las herramientas de migración que se han añadido en la versión 3.8.0."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Actualización y Migración\\",\\"description\\":\\"Instrucciones para actualizar la aplicación y migrar los datos a la nueva versión. Una de las grandes características de ADempiere es que las actualizaciones y migraciones a nuevas versiones siempre son gratuitas. El proceso de migración es relativamente sencillo con las herramientas de migración que se han añadido en la versión 3.8.0.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/es/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Actualizaciones de Software","slug":"actualizaciones-de-software","link":"#actualizaciones-de-software","children":[]},{"level":2,"title":"Actualizar a una Nueva Versión","slug":"actualizar-a-una-nueva-version","link":"#actualizar-a-una-nueva-version","children":[]},{"level":2,"title":"Aplicar Parches","slug":"aplicar-parches","link":"#aplicar-parches","children":[]},{"level":2,"title":"Aplicar Personalizaciones, Paquetes y Otros Archivos","slug":"aplicar-personalizaciones-paquetes-y-otros-archivos","link":"#aplicar-personalizaciones-paquetes-y-otros-archivos","children":[]},{"level":2,"title":"Migración de Base de Datos","slug":"migracion-de-base-de-datos","link":"#migracion-de-base-de-datos","children":[]},{"level":2,"title":"Migración con Scripts XML o SQL","slug":"migracion-con-scripts-xml-o-sql","link":"#migracion-con-scripts-xml-o-sql","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.09,"words":927},"filePathRelative":"es/docs/system-administration/upgrading-and-migration.md","localizedDate":"26 de diciembre de 2023","excerpt":"<p><em><strong>Instrucciones para actualizar la aplicación y migrar los datos a la nueva versión.</strong></em></p>\\n<p>Una de las grandes características de ADempiere es que las actualizaciones y migraciones a nuevas versiones siempre son gratuitas. El proceso de migración es relativamente sencillo con las herramientas de migración que se han añadido en la versión 3.8.0.</p>","autoDesc":true}')}}]);