---
title: Script Callout
category: Comunidad
star: 9
sticky: 9
tag:
  - Wiki
article: false
author: Jesús Albujas
---

Un Script Callout (también conocido como Callout) es un mecanismo que permite a los desarrolladores y usuarios avanzados personalizar y extender la funcionalidad del sistema.

Un Script Callout es un fragmento de código que se ejecuta en respuesta a un evento específico en ADempiere, como por ejemplo:

- Al guardar un registro
- Al validar un campo
- Al procesar un documento
- Al realizar una acción específica en una ventana

Los Script Callouts son una forma poderosa de personalizar ADempiere sin necesidad de modificar el código fuente del sistema, lo que facilita la implementación de requisitos específicos de los usuarios.

## Variables y Párametros

Dentro del script puedes usar:

- Las variables de contexto de ventana comienzan con el prefijo `W_`.
- Las variables de contexto de inicio de sesión comienzan con el prefijo `G_`.
- Los parámetros para llamadas (callouts) comienzan con el prefijo `A_`:
  - `A_WindowNo`: Número de la ventana desde la cual se invoca la llamada.
  - `A_Tab`: La pestaña actual.
  - `A_Field`: El campo con el que se está interactuando.
  - `A_Value`: El valor actual del campo.
  - `A_OldValue`: El valor anterior del campo.
  - `A_Ctx`: El contexto actual de la llamada.

## Lenguajes de Scripting y Sintaxis

Ahora, ADempiere ha subido los JARs para trabajar con [Groovy](https://groovy-lang.org/index.html), [Jython](https://www.jython.org/) y [Beanshell](https://beanshell.github.io/manual/contents.html).

Cuando crees la regla, debes establecer en el campo **Código** lo siguiente dependiendo del lenguaje que estes empleando:

```sh
beanshell:YourCalloutName
groovy:YourCalloutName
jython:YourCalloutName
```

Para llamar a un script desde un Callout, sigue esta sintaxis de ejemplo:

```sh
@script:beanshell:YourCalloutName
@script:groovy:YourCalloutName
@script:jython:YourCalloutName
```

- Establezca el Tipo de Evento como Callout y el Tipo de Regla como JSR 223 Scripting APIs.

## Crear Regla

Para este ejemplo realizaremos un "Hola Mundo" que se imprimirá en consola.

![Crear una Regla](/assets/img/community/developers-guide/CreateRule.png)

Formato usado proporcionado para copiar y pegar:

- Código: `beanshell:HelloWorld`
- Nombre: `HelloWorldInCallout`
- Tipo de Evento: `Callout`
- Tipo de Regla: `JSR 223 Scripting APIs`
- Script:

```java
System.out.println("Hello World ADempiere");
result = "";
```

## Configurar Callout desde `Tabla y Columna`

Para llamar el callout debes ir a la ventana **Tabla y Columna** buscar la tabla deseada, entrar en la pestaña **Columna** y rellenar el campo **Callout** ubicado al final.

Para este ejemplo se colocará el callout en la tabla **A_Asset** (Activo Fijo), en la columna **M_Product_ID** (Producto)

![Callout en Columna](/assets/img/community/developers-guide/CalloutInColumn.png)

::: note

Para llamar el **Callout** se debe seguir la estructura antes explicada en [Lenguajes de Scripting y Sintaxis](https://www.adempiere.io/es/community/wiki/developers-guide/script-callout.html#lenguajes-de-scripting)

:::

Este Callout se activará cuando en la ventana **Activos Fijos** se seleccione un producto cualquiera:

![Callout en Columna](/assets/img/community/developers-guide/SelectProductInAsset.png)

En consola veremos nuestro "Hola Mundo"

![Hola Mundo](/assets/img/community/developers-guide/HelloWorld.png)

- Este **Callout** también puede ser llamado desde la ventana de [Informe y Procesos](script-process.md). Solo recuerda establecer en la ventana de **Reglas** desde qué **Tipo de Evento** estás llamando a este Script de Regla.

## Variable Result

La variable **result** debe asignarse dentro del contexto del Callout para definir el mensaje o el resultado que se devolverá después de ejecutar la lógica del Callout. Esta variable se utiliza para indicar mensajes de error, advertencias o información que debe mostrarse al usuario.

La línea `result = "";` en el script:

```java
System.out.println("Hello World ADempiere");
result = "";
```

Está asignando un valor vacío a **result**. Esto significa que no se está devolviendo ningún mensaje de error o advertencia al usuario. Si necesitas devolver un mensaje específico, deberías asignarlo a result como se muestra:

```java
result = "Mensaje personalizado para el usuario";
```

Al activarse el Callout muestra el mensaje:

![Mensaje al Usuario](/assets/img/community/developers-guide/Message.png)

## Ejemplo

- Al seleccionar un **Producto** en la ventana **Activo Fijo**, el contenido del campo **Código** de la ventana **Producto** debe ser copiado automáticamente en el campo **Código** de la ventana **Activo Fijo**.

```java
import org.compiere.util.DB;
String value = "";
String productType= "";

if (A_Tab.getValue("M_Product_ID") != null) {
    int productId = (int) A_Tab.getValue("M_Product_ID");
    String sql = "SELECT Value FROM M_Product WHERE M_Product_ID = ?";
    value = DB.getSQLValueString(null, sql, productId);
}
if (value != null && value != "") {
    A_Tab.setValue("Value", value);
}

result = "";
```

<video width="640" height="360" controls>
  <source src="/assets/img/community/developers-guide/CalloutInProduct.mp4" type="video/mp4">
</video>

## Vea también

- [Script Process](script-process.md)
- [Script ModelValidatorLogin](a)
- [Script ModelValidator](script-modelvalidator)
- [Rule Engine Implementation](a)
- [Java Scripting](http://scripting.dev.java.net/)
- [Callout](callout.md)
- [Rule Engine / Script Callout / Script Process](https://wiki.adempiere.net/ZH/Case-Study-01-Journal-31) - Chinese