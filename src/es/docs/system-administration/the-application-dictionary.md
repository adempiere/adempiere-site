---
title: Diccionario de la Aplicación
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

El Diccionario de Aplicaciones en ADempiere es una herramienta poderosa que permite al Administrador del Sistema definir los metadatos de la aplicación o cómo se ve y se comporta la aplicación. Prácticamente todos los aspectos de la aplicación pueden ser modificados a través del Diccionario de Aplicaciones. Se puede agregar nueva funcionalidad creando nuevas entradas en el Diccionario, a menudo sin necesidad de agregar software. De hecho, es a través del Diccionario de Aplicaciones que los desarrolladores de ADempiere añaden nuevas funcionalidades con cada versión.

Existen muchas formas de cambiar la aplicación, pero los cambios más comunes involucran:

## Personalización en ADempiere

1. **Agregar Tablas y Columnas:**
   - Ampliar el modelo de datos introduciendo nuevas tablas y columnas.
   - Definir la estructura que se alinee con necesidades comerciales específicas.

2. **Agregar Ventanas, Pestañas y Campos:**
   - Crear nuevas interfaces de usuario añadiendo ventanas y pestañas.
   - Introducir campos adicionales para capturar información relevante.

3. **Modificar la Visualización de Datos:**
   - Personalizar la forma en que se presenta la información a los usuarios.
   - Modificar diseños y formatos para mejorar la experiencia del usuario.

4. **Limitar Valores a Listas:**
   - Controlar y limitar los valores que los usuarios pueden introducir.
   - Utilizar listas para reforzar la integridad de los datos y estandarizar las entradas.

5. **Crear Informes y Procesos:**
   - Desarrollar nuevos informes para extraer conocimientos significativos.
   - Implementar procesos personalizados para automatizar flujos de trabajo comerciales específicos.

En el núcleo de estos cambios está un "Tipo de Entidad". Esta es una descripción de quién es el propietario del cambio y quién es responsable de él. Hay dos Tipos de Entidad reservados: Diccionario y Adempiere. Estos son utilizados por los desarrolladores de la aplicación y cualquier entrada en el diccionario de la aplicación que los utilice corre el riesgo de ser sobrescrita en la próxima migración.

Otro concepto importante es el "Elemento", que es una definición común de un campo que incluye el nombre, el tipo de datos, las referencias, la descripción y los comentarios asociados con el campo. Esta es una herramienta útil, ya que toda esta información se puede establecer una vez y luego aplicar en todos los lugares donde se define o se utiliza el campo como columna. Además, cualquier cambio en el Elemento se puede propagar a cada campo o columna que utilice ese elemento.

1. Crear o seleccionar el Tipo de Entidad a utilizar para cada cambio.
2. Crear definiciones de Elementos para las columnas personalizadas que se agregarán.
3. Crear una Tabla para almacenar los datos.
4. Crear Columnas en la Tabla utilizando los Elementos del paso 2.
5. Crear una nueva Ventana y agregar una Pestaña que extraiga datos de la Tabla.
6. Crear los Campos para las Columnas y ordenarlos en la pestaña.
7. Agregar la Ventana al menú.
8. Ejecutar el proceso de Actualización de Acceso a Roles para asegurar que los usuarios puedan ver la nueva ventana.
9. Cerrar sesión e iniciar sesión para ver los cambios.

Ahora puedes utilizar la ventana para recopilar y gestionar los datos como en cualquier otra ventana.

Este ejemplo es bastante trivial ya que no tiene funcionalidad asociada. El verdadero poder de ADempiere proviene de los procesos que operan en los datos. Estos procesos realizan el trabajo, la automatización, que hace que un sistema ERP sea tan valioso.

Las siguientes secciones describirán el uso del Diccionario de Aplicaciones en detalle.
