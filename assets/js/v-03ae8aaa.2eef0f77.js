"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2920],{87860:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});var o=i(68152);const s=[(0,o.IL)('<p>El Diccionario de Aplicaciones en ADempiere es una herramienta poderosa que permite al Administrador del Sistema definir los metadatos de la aplicación o cómo se ve y se comporta la aplicación. Prácticamente todos los aspectos de la aplicación pueden ser modificados a través del Diccionario de Aplicaciones. Se puede agregar nueva funcionalidad creando nuevas entradas en el Diccionario, a menudo sin necesidad de agregar software. De hecho, es a través del Diccionario de Aplicaciones que los desarrolladores de ADempiere añaden nuevas funcionalidades con cada versión.</p><p>Existen muchas formas de cambiar la aplicación, pero los cambios más comunes involucran:</p><h2 id="personalizacion-en-adempiere" tabindex="-1"><a class="header-anchor" href="#personalizacion-en-adempiere" aria-hidden="true">#</a> Personalización en ADempiere</h2><ol><li><p><strong>Agregar Tablas y Columnas:</strong></p><ul><li>Ampliar el modelo de datos introduciendo nuevas tablas y columnas.</li><li>Definir la estructura que se alinee con necesidades comerciales específicas.</li></ul></li><li><p><strong>Agregar Ventanas, Pestañas y Campos:</strong></p><ul><li>Crear nuevas interfaces de usuario añadiendo ventanas y pestañas.</li><li>Introducir campos adicionales para capturar información relevante.</li></ul></li><li><p><strong>Modificar la Visualización de Datos:</strong></p><ul><li>Personalizar la forma en que se presenta la información a los usuarios.</li><li>Modificar diseños y formatos para mejorar la experiencia del usuario.</li></ul></li><li><p><strong>Limitar Valores a Listas:</strong></p><ul><li>Controlar y limitar los valores que los usuarios pueden introducir.</li><li>Utilizar listas para reforzar la integridad de los datos y estandarizar las entradas.</li></ul></li><li><p><strong>Crear Informes y Procesos:</strong></p><ul><li>Desarrollar nuevos informes para extraer conocimientos significativos.</li><li>Implementar procesos personalizados para automatizar flujos de trabajo comerciales específicos.</li></ul></li></ol><p>En el núcleo de estos cambios está un &quot;Tipo de Entidad&quot;. Esta es una descripción de quién es el propietario del cambio y quién es responsable de él. Hay dos Tipos de Entidad reservados: Diccionario y Adempiere. Estos son utilizados por los desarrolladores de la aplicación y cualquier entrada en el diccionario de la aplicación que los utilice corre el riesgo de ser sobrescrita en la próxima migración.</p><p>Otro concepto importante es el &quot;Elemento&quot;, que es una definición común de un campo que incluye el nombre, el tipo de datos, las referencias, la descripción y los comentarios asociados con el campo. Esta es una herramienta útil, ya que toda esta información se puede establecer una vez y luego aplicar en todos los lugares donde se define o se utiliza el campo como columna. Además, cualquier cambio en el Elemento se puede propagar a cada campo o columna que utilice ese elemento.</p><ol><li>Crear o seleccionar el Tipo de Entidad a utilizar para cada cambio.</li><li>Crear definiciones de Elementos para las columnas personalizadas que se agregarán.</li><li>Crear una Tabla para almacenar los datos.</li><li>Crear Columnas en la Tabla utilizando los Elementos del paso 2.</li><li>Crear una nueva Ventana y agregar una Pestaña que extraiga datos de la Tabla.</li><li>Crear los Campos para las Columnas y ordenarlos en la pestaña.</li><li>Agregar la Ventana al menú.</li><li>Ejecutar el proceso de Actualización de Acceso a Roles para asegurar que los usuarios puedan ver la nueva ventana.</li><li>Cerrar sesión e iniciar sesión para ver los cambios.</li></ol><p>Ahora puedes utilizar la ventana para recopilar y gestionar los datos como en cualquier otra ventana.</p><p>Este ejemplo es bastante trivial ya que no tiene funcionalidad asociada. El verdadero poder de ADempiere proviene de los procesos que operan en los datos. Estos procesos realizan el trabajo, la automatización, que hace que un sistema ERP sea tan valioso.</p><p>Las siguientes secciones describirán el uso del Diccionario de Aplicaciones en detalle.</p>',10)],r={},n=(0,i(42272).c)(r,[["render",function(e,a){return(0,o.Wz)(),(0,o.An)("div",null,s)}]])},2012:(e,a,i)=>{i.r(a),i.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-03ae8aaa","path":"/es/docs/system-administration/the-application-dictionary.html","title":"Diccionario de la Aplicación","lang":"es-ES","frontmatter":{"title":"Diccionario de la Aplicación","category":"Documentation","star":9,"sticky":9,"article":false,"author":"Jesús Albujas","description":"El Diccionario de Aplicaciones en ADempiere es una herramienta poderosa que permite al Administrador del Sistema definir los metadatos de la aplicación o cómo se ve y se comporta la aplicación. Prácticamente todos los aspectos de la aplicación pueden ser modificados a través del Diccionario de Aplicaciones. Se puede agregar nueva funcionalidad creando nuevas entradas en el Diccionario, a menudo sin necesidad de agregar software. De hecho, es a través del Diccionario de Aplicaciones que los desarrolladores de ADempiere añaden nuevas funcionalidades con cada versión.","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/adempiere/adempiere-site.github.io/docs/system-administration/the-application-dictionary.html"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/es/docs/system-administration/the-application-dictionary.html"}],["meta",{"property":"og:title","content":"Diccionario de la Aplicación"}],["meta",{"property":"og:description","content":"El Diccionario de Aplicaciones en ADempiere es una herramienta poderosa que permite al Administrador del Sistema definir los metadatos de la aplicación o cómo se ve y se comporta la aplicación. Prácticamente todos los aspectos de la aplicación pueden ser modificados a través del Diccionario de Aplicaciones. Se puede agregar nueva funcionalidad creando nuevas entradas en el Diccionario, a menudo sin necesidad de agregar software. De hecho, es a través del Diccionario de Aplicaciones que los desarrolladores de ADempiere añaden nuevas funcionalidades con cada versión."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Diccionario de la Aplicación\\",\\"description\\":\\"El Diccionario de Aplicaciones en ADempiere es una herramienta poderosa que permite al Administrador del Sistema definir los metadatos de la aplicación o cómo se ve y se comporta la aplicación. Prácticamente todos los aspectos de la aplicación pueden ser modificados a través del Diccionario de Aplicaciones. Se puede agregar nueva funcionalidad creando nuevas entradas en el Diccionario, a menudo sin necesidad de agregar software. De hecho, es a través del Diccionario de Aplicaciones que los desarrolladores de ADempiere añaden nuevas funcionalidades con cada versión.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/es/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Personalización en ADempiere","slug":"personalizacion-en-adempiere","link":"#personalizacion-en-adempiere","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.9,"words":571},"filePathRelative":"es/docs/system-administration/the-application-dictionary.md","localizedDate":"26 de diciembre de 2023","excerpt":"<p>El Diccionario de Aplicaciones en ADempiere es una herramienta poderosa que permite al Administrador del Sistema definir los metadatos de la aplicación o cómo se ve y se comporta la aplicación. Prácticamente todos los aspectos de la aplicación pueden ser modificados a través del Diccionario de Aplicaciones. Se puede agregar nueva funcionalidad creando nuevas entradas en el Diccionario, a menudo sin necesidad de agregar software. De hecho, es a través del Diccionario de Aplicaciones que los desarrolladores de ADempiere añaden nuevas funcionalidades con cada versión.</p>","autoDesc":true}')}}]);