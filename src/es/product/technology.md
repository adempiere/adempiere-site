---
title: Tecnología
category: Producto
star: 9
sticky: 9
tag:
  - Software
article: false
---

![Tecnología](/assets/img/product/technology.jpg)

## Elementos tecnológicos

- ADempiere es una solución Java 100% pura.
- Se basa en la tecnología Oracle Database
- Es compatible de forma nativa con la base de datos de código abierto de Postgresql
- Cuenta con un cliente 100% Java
- Aprovecha un cliente HTML que permite el acceso a la aplicación donde un cliente local no es apropiado (por ejemplo, funcionalidad de autoservicio para proveedores, clientes y empleados). (Java Servlets y Java Server Pages).
- Cuenta con servidor de aplicaciones J2EE JBOSS.
- Los procesos intensivos del servidor están diseñados para ejecutarse en segundo plano con PL/SQL como idioma nativo

## Diccionario de aplicaciones

- El diccionario de datos contiene definiciones del tipo de entidad (tipo, validación, etc.)
- Determina cómo debe mostrarse, p. etiquetas en pantallas e informes, ayuda contextual, secuencia y posición relativa a otros campos, y las reglas para el despliegue.
- Reglas de acceso de seguridad
- El diccionario de datos es administrado y ampliado por el usuario, contiene reglas e información definida por el usuario.

## Interfaz de usuario inteligente

- Una interfaz de usuario coherente permite a los usuarios navegar rápidamente por el sistema, incluso en secciones desconocidas para ellos.
- La interfaz gráfica de usuario utiliza la potencia de los dispositivos modernos de hoy en día, donde la reacción y la navegación rápidas son importantes.
- La interfaz de usuario HTML permite el acceso a la aplicación desde cualquier lugar siempre que tenga un navegador compatible.
- Puede habilitar las funciones de Zoom desde cualquier tipo de lista desplegable.
- Puede consultar los registros. La consulta reduce el número de registros en una ventana para permitir los criterios de entrada en un estilo mejorado de "consulta por ejemplo" (query by example).
- Los propios usuarios pueden ajustar el contorno de la ventana y pueden definir pantallas especiales para una situación específica del cliente o cuando así lo requiera.
## Informes inteligentes

- Los listados de informes a través del visor del sistema se basan en el diccionario de datos, dado que el visor de informes tiene acceso a las definiciones de datos, permite de forma nativa búsquedas detalladas y detalladas.
- Los enlaces de datos se generan automáticamente, adhiriéndose a las definiciones de acceso de seguridad en tiempo real.
- Todos los resultados del informe se pueden previsualizar en pantalla antes de imprimir o generar archivos en varios formatos estándar (p. ej., Excel, HTML, XML, Word y PDF).
- Drill (Drill-down) se genera un nuevo reporte en base a la entidad seleccionada, reportes donde el número es una suma de números o se accede desde un devengo mensual al monto de la transacción original.
- Examinar referencias (Drill-across) permite al usuario crear un nuevo informe en el que se utiliza una entidad específica.
- Las listas se basan en la información de las ventanas. Puede generar un informe para cada pantalla del sistema.
- Los informes suelen basarse en información resumida basada en vistas de informes.
- El Visor OLAP puede mostrar diferentes dimensiones en una tabla o un gráfico.

## Arquitectura sostenible

Las aplicaciones comerciales cambian con el tiempo. Necesitan aprovechar las nuevas tecnologías y proporcionar una funcionalidad adicional más inteligente. Incluso las aplicaciones enlatadas deberían admitir funciones adicionales, aunque por lo general no son adecuadas para la integración con el núcleo funcional de una empresa en crecimiento.

Adempiere utiliza los siguientes principios de diseño para crear una arquitectura sostenible:

Smalltalk MVC Architecture, que es una derivación del enfoque Model-View-Controller. Motor de reglas explícitas para lógica de transacciones complejas y recuperación de fallas segura de transacciones.

ERP tiene una arquitectura de objetos, cada objeto es lo más independiente posible de otros objetos, incluida la derivación transaccional.

## Fallo seguro

Por lo general, las aplicaciones están diseñadas para estar libres de fallas (a prueba de fallas): se asume que todo funciona y que todos los datos se ingresan correctamente y son consistentes. En caso de falla, los expertos deben encontrar la causa y verificar si hubo daños. El usuario suele notar el problema. La realidad es que las aplicaciones a veces fallan.

En contraste, ADempiere está diseñado para ser seguro contra fallas. Cada transacción se puede repetir y regenerar. La mayoría de las fallas son identificadas por el sistema y el usuario puede intentar resolver el problema. Si la recuperación no es posible, el error se aísla y el resto del sistema sigue funcionando. La transacción basada en el diseño desacoplado está habilitada.

El sistema verifica regularmente si una transacción está completa. Si una transacción no es completa y consistente debido a una falla del sistema, se informa al administrador y al usuario.

A medida que las aplicaciones se vuelven más complejas con combinaciones cada vez mayores, los errores crecen exponencialmente. ERP proporciona un marco para una validación extensa y, en caso de falla, aísla el problema al garantizar una alta disponibilidad de las funciones centrales (núcleo de la aplicación).

## Seguridad

ADempiere admite funciones y seguridad de datos. La función de seguridad se basa en Roles de Usuario y Controles de Acceso Ventanas, Informes y Procesos.

La seguridad de los datos para la información del cliente y la Organización se mantiene a nivel de la base de datos a través del contexto de seguridad. Este es un nivel adicional de seguridad más allá de la identificación (login) del usuario habitual de la base de datos. Esto permite el uso de herramientas de terceros basadas en SQL para acceder a la base de datos. Antes de acceder a cualquier dato, el usuario debe identificarse mediante un procedimiento almacenado (procedimiento almacenado) con nombre de usuario, contraseña y, opcionalmente, rol de idioma. Esto proporciona las mismas reglas de acceso para herramientas de terceros que pueden existir en la aplicación.

La mayoría de las aplicaciones no tienen una capa de seguridad más allá del ID de usuario de la base de datos y tienen dificultades para restringir el acceso a través de herramientas SQL de terceros.

Las contraseñas de los clientes se almacenan en forma cifrada.
