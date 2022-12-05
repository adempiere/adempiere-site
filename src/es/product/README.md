---
title: Características de ADempiere
category: Producto
star: 9
sticky: 9
tag:
  - Ventas
  - Compra
  - Inventario
  - Contabilidad
article: false
---

## Procesos de negocios

### Procesos de Ventas

- Levantar una cotización o propuesta
- Grabación de pedidos.
- Envío de las mercancías o prestación de los servicios.
- Facturar al cliente.
  ![image](https://user-images.githubusercontent.com/89487449/178346738-94e55508-4f6e-4052-9d55-4538278d6d97.png)

### Procesos de compra

- Levantar una solicitud de compra de un catálogo
- Emisión de una orden de compra.
- Recepción de bienes y servicios.
- Recepción de facturas de proveedores.
- Pago de Proveedores y Cobro de Deudas
  ![image](https://user-images.githubusercontent.com/89487449/178349327-7a1b57bf-16f9-40f7-839d-e9123d5ec26f.png)

### Procesos de inventario

- Seguimiento de inventario
- Reposición de almacenes.
- Múltiples sitios de almacén y localizadores
- Movimientos de existencias
- Transporte
  ![image](https://user-images.githubusercontent.com/89487449/178350265-de5d763a-86e2-4da1-aad3-22c7d8ebb700.png)

### Procesos Contables

- Fin de periodo y año
- Contabilidad financiera y de gestión
- Planes de cuentas
- IVA/IVA/IVA
- Reporting para otros organismos reguladores
  ![image](https://user-images.githubusercontent.com/89487449/178353973-baaf9d2a-d6b4-42be-b767-d66d515c5f7a.png)

## Información histórica en línea

- Se pueden crear muchos calendarios con fines informativos y los períodos dentro de esos calendarios se definen con una fecha de inicio y una fecha de finalización que el usuario elija.
- También se captura información de todos los cambios a la información estática registrando la fecha y hora del cambio así como el ID del usuario que creó y actualizó el registro.
- **ADempiere almacena toda la información y transacciones ingresadas al sistema por el tiempo que la organización usuaria elija.**
- No existe el concepto de "fin de año" y proceso de depuración.
- Los calendarios se establecen únicamente con fines informativos y de control de acceso a periodos.
- La información histórica se mantiene durante el tiempo que se desee y se puede informar mediante la función de calendario.

## Informes

:::

    ADempiere proporciona capacidades integrales de generación de informes.

:::

### Informes inteligentes

- Para la mayoría de las aplicaciones, la generación de informes es una entidad separada o adicional. Los informes de ADempiere se basan en el diccionario de datos.
  - Dado que el visor del informe tiene acceso a las definiciones, esto permite profundizar en cualquier entidad a la que se haga referencia y profundizar en las entidades en las que se utiliza la entidad informada.
  - Los enlaces se generan automáticamente, garantizando el cumplimiento de las definiciones de seguridad y acceso.
- El visor de informes proporciona la selección de datos, secuenciación, agrupación, totalización y formato de visualización.
  - El resultado del informe se puede ver en la pantalla antes de enviarlo a una impresora, una dirección de correo electrónico o fax o generar archivos en muchos formatos diferentes (por ejemplo, formatos de texto de Excel, HTML, XML, PDF y Postscript).

### Vistas comerciales

- Business Views está diseñado para usuarios finales y permite acceder a la información mediante herramientas basadas en SQL estándar sin necesidad de crear uniones de tablas SQL.
- La mayoría de las vistas comerciales se generan en función del diccionario de la aplicación.

### Navegar de forma Vertical y Navegar de forma Horizontal

- **Todos los resultados de los informes permiten a los usuarios profundizar o profundizar en cualquier entidad a la que se haga referencia en el contexto del informe.**
- Al usar el desglose, se genera un nuevo informe basado en la entidad seleccionada.
  - En un informe de pedido, por ejemplo, el usuario puede profundizar para generar un informe que muestre las líneas de pedido que componen el pedido.
  - El usuario puede identificar la entidad detallada (líneas de pedido) y luego hacer clic en el nombre del producto para mostrar un informe separado de las líneas de pedido para el producto en particular seleccionado.
- Siguiendo la convención de la interfaz de usuario web, los usuarios pueden profundizar en cualquier entidad subrayada en azul que se muestre en la pantalla del informe.
- Navegar de forma Horizontal permite al usuario crear un nuevo informe sobre una entidad relacionada en un informe. Por ejemplo, en un informe de producto, el usuario puede desear ver las líneas de pedido de un producto en particular.

### Tipos de informes

1. Listas: se basan en la información de la ventana. Los usuarios pueden generar un informe para cada ventana del sistema, incluidas las ventanas que contienen nuevos campos y tablas definidos por el usuario. Los informes se pueden modificar para especificar qué campos se mostrarán, en qué orden y cómo se agruparán. El informe puede calcular el mínimo, el máximo, la suma, el conteo, la desviación estándar y la varianza para las columnas seleccionadas.

2. Informes: generalmente se basan en información resumida y se basan en vistas de informes. Los informes permiten definir qué información aparecerá en las filas y qué aparecerá en las columnas; la combinación de una definición de conjunto de filas y una definición de conjunto de columnas determina el contenido del informe.

### Herramientas de informes de terceros

Herramientas de terceros como Jasper Reports; un equivalente basado en Java de Crystal Reports, también se puede usar para crear informes si es necesario. La versión actual de Adempiere ya tiene JasperReports sustancialmente integrado a su motor de informes.

### Personalización de informes

ADempiere diferencia la 'vista' del 'modelo'. Con la excepción de Vistas de informe, el modelo generalmente se proporciona. Si proporciona una instrucción SQL Select, se puede crear una vista de informe, el usuario no necesita resolver las referencias de claves externas (que requieren el conocimiento del modelo de datos) ni preocuparse por la seguridad de los datos, ya que ADempiere resuelve estos problemas para el usuario. Esto permite la escritura de sentencias 'simples'. Pocas personas están de acuerdo en cómo debe verse cada informe. ADempiere permite al usuario definir el formato de cualquier reporte a nivel de Sistema, Cliente, Organización o Usuario:

- Columnas de informe
- Orden de las columnas
- Clasificación de informes
- Encabezado de columna
- Sumas (para columnas numéricas)
- Agrupación
- Gráfico circular
- Gráfico de barras/líneas

La selección de datos se realiza a través de Parámetros de informe al iniciar el informe, o a través de Consulta, lo que permite al usuario ingresar criterios en un estilo mejorado de "consulta por ejemplo".

## Datos y metadatos

Los programadores de muchas aplicaciones que no utilizan la sofisticación de un Active Data Dictionary necesitan diseñar, codificar y probar cada pantalla. ADempiere utiliza el concepto más avanzado de un diccionario central de datos activos, también llamado repositorio de información. El diccionario de datos activos de ADempiere está en la capa de metadatos y sabe cómo acceder a los datos y cómo se relacionan los datos.

- **El diccionario de datos contiene:**

  - Definiciones de una entidad de datos (tipo, validación, etc.)
  - Modo de visualización (etiqueta en pantallas e informes, ayuda, secuencia de visualización y posición relativa a otros campos)
  - Reglas de visualización
  - Normas de seguridad y acceso

- **El diccionario de datos está 'activo', lo que significa que se usa en tiempo de ejecución y es sensible al contexto. Por ejemplo: 'sabe' que una venta en ventanilla no tiene plazo de pago y no lo muestra. Sin embargo, si cambia el tipo de transacción a un pedido estándar, un término de pago se convierte en una parte obligatoria de la transacción.**
- **El diccionario de datos activos es ampliable por el usuario y puede incluir reglas e información especificadas por el usuario. La extensibilidad del Active Data Dictionary simplifica las extensiones del usuario a la aplicación, ya que gran parte de lo que de otro modo tendría que ser codificado por programadores puede ser creado por usuarios informados y autorizados (con privilegios de sistema) desde dentro de la aplicación**

## Compatibilidad

El soporte de software representa una parte sustancial de los costos de por vida de cualquier sistema complejo. Una arquitectura modular y flexible es esencial para garantizar:

- Comprensibilidad
- Modificabilidad
- Interoperabilidad
- Reutilización
- Capacidad de expansión
- Portabilidad

todos los cuales son necesarios para el software que puede soportarse de manera eficiente y rentable. Muchos problemas asociados con el soporte de software pueden atribuirse a deficiencias en la forma en que se diseñó el producto de software original. La falta de atención al diseño de arquitecturas de software modulares durante el desarrollo puede causar problemas y costos de soporte de software excesivos. ADempiere está diseñado para ser lo más flexible posible y adaptarse al cambio. A menos que la arquitectura del sistema permita el cambio, es probable que las modificaciones al software sean difíciles y propensas a fallas. La arquitectura de software de ADempiere aborda cuidadosamente la abstracción, la encapsulación y la ocultación de información para minimizar las dependencias. Al maximizar el uso del diseño orientado a objetos, el software se puede modificar fácilmente. Active Data Dictionary de ADempiere garantiza que el soporte de software se pueda simplificar al garantizar que los cambios se realicen en una ubicación con un impacto constante en toda la aplicación. Además, ADempiere no utiliza conjuntos de herramientas de terceros que puedan dejar de ser compatibles debido a la falta de interés de sus respectivos proveedores. Aparte de la propia base de datos de Oracle, el código fuente de todos los aspectos del sistema está abierto y disponible, lo que garantiza que la comunidad de usuarios siempre podrá brindar soporte para todos los aspectos del sistema.
