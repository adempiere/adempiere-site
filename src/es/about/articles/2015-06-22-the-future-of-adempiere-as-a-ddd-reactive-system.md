---
title: The Future Of ADempiere as a DDD reactive system
category: Articulos
star: 9
sticky: 9
tag:
  - ADempiere
  - Announcement
  - Blog
  - DDD
  - Reactive System

author: Victor Pérez
date: 2015-06-22
---

Antes de empezar a hablar de modularidad, me gustaría describir el camino para definir la arquitectura más adecuada para un software como ADempiere.

Durante los últimos años he estado leyendo y analizando los diferentes enfoques y arquitecturas para el desarrollo de software y al mismo tiempo descifrar cuál sería la mejor para ADempiere.

Como todos sabemos muy bien, el diseño de nuestro programa se basa en una combinación de dos capas [Cliente/servido](http://en.wikipedia.org/wiki/Cliente) (1) Swing, que en los años noventa del el siglo pasado fue uno de los que mejor se adoptó porque utilizó la red y las PC de manera que el servidor principal se liberó de la carga pesada al dejar ciertas tareas en el cliente. El objetivo principal era que el núcleo del software se ejecutara en un servidor central mientras los clientes se conectaban a él para acceder a los datos y realizar la lógica comercial localmente.

Irónicamente, creo que han regresado a donde comenzaron originalmente, ya que había un mainframe con terminales tontas que solo mostraban datos a los usuarios sin ningún tipo de procesamiento de datos complejo.

No estuve presente en la época en que se necesitaba una bata blanca para acceder a grandes centros de datos formados por varios IBM 390 o Systems 36 con cientos de terminales (ATM). Pero hoy, el contexto es de alguna manera similar a estos tiempos pasados: hay grandes centros de datos -que por cierto han ayudado a reducir costos- con servidores alquilados a los que se accede de manera virtual por un par de cientos de dólares al mes (Amazon, Google Cloud, Heroku, por nombrar algunos). La principal diferencia ahora es que las aplicaciones tienen que dar servicio a miles o incluso millones de usuarios, la capacidad de poder escalar horizontalmente es un requisito habitual hoy en día; este nuevo contexto exige que las aplicaciones se diseñen de manera diferente ya que los requisitos son totalmente diferentes.

El acceso a estos servidores se realiza mediante gadgets que, aunque no son totalmente tontos, ejecutan aplicaciones cliente que se ejecutan en un navegador web cuya única tarea es interpretar java script o código HTML, donde el valor más alto es la estandarización e integración de múltiples sistemas operativos y plataformas. .

En la próxima década, el enfoque principal fue el desarrollo de aplicaciones basadas en el paradigma del controlador de vista modelo [MVC] (http://en.wikipedia.org/wiki/Model) (2), que permitía la separación de código.

La capa del modelo permite el acceso y actualización de datos, en su mayoría guardados en una base de datos relacional. Por otro lado, permite trabajar con mapeo objeto-relacional (ORM) que consiste en una abstracción en la base de datos y persistencia, reemplazando el uso de sentencias SQL dependiendo de la implementación de un motor implementado en cada base de datos.
La capa de vista separa el código para la visualización y la interacción del usuario a través de una interfaz de usuario, que se implementa de acuerdo con el dispositivo de acceso.

La capa de controlador se encarga de vincular la capa de vista con el modelo de datos e implementa el código que responde a las acciones necesarias.

Cuando analizamos el código de ADempiere en retrospectiva, podemos ver el transcurso del tiempo y la evolución que sufrió. Se pasó del cliente/servidor original basado en Java swing con acceso directo a la base de datos a través de sentencias SQL puras al actual ORM propio combinado con SQL para acceder a los datos y la aplicación MVC basada en el cliente web AJAX.

Aunque la tecnología ha avanzado, nuestro modelo de dominio ha persistido; por eso podemos inferir que el activo más importante de ADempiere es el Diccionario de Aplicaciones que preserva el modelo de dominio y la lógica de negocio.

Gracias a que ADempiere fue redactado y desarrollado sobre una Arquitectura Dirigida por Modelos [MDA](http://en.wikipedia.org/wiki/Model-driven_architecture) (3), el modelo de dominio está protegido de obsolescencia por el Diccionario de Aplicaciones

Como persona voluntaria, responsable de la futura arquitectura de la querida ADempiere, adoptaremos el enfoque DDD como línea principal de desarrollo.

**Ahora: ¿qué es un desarrollo de software guiado por el [DDD de Diseño Impulsado por Dominio](http://en.wikipedia.org/wiki/Domain-driven_design)(4)?**

**DDD** es un enfoque para desarrollar software con requisitos complejos y que tiene un vínculo profundo con un modelo que define el núcleo de la lógica comercial que se está desarrollando.
Los mandamientos más importantes para desarrollar y mantener un modelo de dominio son:

- Situar el foco principal del proyecto en el core y la lógica de negocio del dominio.
- Todos los diseños complejos se basan en un modelo de dominio.
- Iniciar una colaboración creativa entre técnicos y expertos en modelos de dominio para definir iterativamente un modelo que aborde los problemas particulares del dominio.

El [Domain Driven Design](http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf) (5) no es una tecnología ni una metodología. Es un conjunto de patrones para la construcción de aplicaciones comerciales a partir del modelo de dominio, que proporciona una estructura útil, práctica y con una terminología consistente para la toma de decisiones en el curso del diseño de software.

**Dominio:** una esfera de conocimiento (ontología), influencia o actividad. El área donde un usuario aplica un programa es el dominio del software.
**Modelo:** un conjunto de abstracciones que describen secciones de un dominio seleccionado que se pueden usar para resolver problemas o tareas relacionadas con ese dominio.
**Lenguaje ubicuo:** un lenguaje estructurado en el contexto de un modelo de dominio y utilizado por todos los miembros del equipo para interconectar todas las actividades del equipo.
**Contexto:** el escenario en el que una palabra o declaración define su significado.
Una visión puramente técnica para el desarrollo de software podría ser la migración a una aplicación de múltiples capas (capa de persistencia, capa de datos de acceso, capa de servicio y capa de presentación).
**DDD** no está en conflicto con ninguna tecnología o patrón de diseño, por ejemplo [Inyección de dependencia DI] (http://en.wikipedia.org/wiki/Dependency_injection) (6),

pero sin cambios hay una premisa muy importante ¡El modelo de dominio debe permanecer aislado de las capas externas! ya que cualquier cambio tecnológico no debería afectar mi core business.

**Premisa importante:**

- ¡El modelo debe mantenerse aislado de las capas externas! La razón: ningún cambio tecnológico debe afectar al núcleo del negocio.
- Cada capa es un círculo concéntrico que define un área de software; mientras se mueve desde el centro hacia los niveles exteriores, el software evoluciona. Los círculos exteriores son mecanismos, mientras que los círculos interiores son las condiciones.
- La regla más importante para esta arquitectura es la regla de dependencia.
- Como regla general, las dependencias dentro del código fuente solo pueden apuntar hacia el centro. Nada en un círculo interior puede saber nada en un círculo exterior. Además, cualquier nombre declarado en un círculo exterior no puede ser mencionado por el código de un círculo interior. Esto incluye llamadas a funciones, clases, variables o cualquier otra entidad de software.
- Por la misma razón, los formatos de datos utilizados en un círculo exterior no pueden ser utilizados por un círculo interior, especialmente si estos formatos se generan en un ORM desde un círculo exterior. Nuestra intención es que nada de un círculo exterior afecte a los círculos interiores.
- Así, para la interacción entre círculos o capas es primordial establecer una API que permita la comunicación entre capas internas y externas mediante adaptadores o mensajes.

Hay algunas arquitecturas basadas en esta vista; son similares y difieren en algunos puntos, pero coinciden en la importancia de un modelo de dominio [Arquitectura hexagonal](http://alistair.cockburn.us/Hexagonal+architecture) (7), [Arquitectura cebolla](http:// www.infoq.com/news/2014/10/ddd-onion-architecture) (8), [La arquitectura limpia] (http://blog.8thlight.com/uncle-bob/2012/08/13/the- arquitectura limpia.html) (9).

Como la forma de definir cómo construiremos el software alrededor de ADempiere es crucial, adoptaremos la arquitectura limpia/Onion, donde el enfoque principal es mantener limpio el modelo de dominio interactuando con las capas externas por medio de contratos (API o interfaces) que permiten separar convenientemente el modelo de dominio de las implementaciones (API o contrato). Esto permitirá una evolución ordenada evitando la obsolescencia tecnológica.

Por otro lado, definiremos un [DSL de Lenguaje Específico de Dominio](http://en.wikipedia.org/wiki/Domain-specific_language) (10) para ADempiere enfocado al negocio, que permita construir nuestro lenguaje ubicuo y delimitando claramente los contextos. Esto ayuda a un desarrollo más natural de la lógica empresarial.
Como se dijo antes, toda decisión tiene que ser autorizada por los beneficios a obtener; avanzar hacia DDD nos permitirá obtener los siguientes beneficios:

**Los beneficios:**

- Código desacoplado
- Reducir el código de espagueti
- Servicios transversales independientes del modelo de dominio (Log, Transacciones, Seguridad).
- Código fácil de mantener
- Software adaptable a cambios
- Diseño basado en componentes
- Contextos delimitados por el proceso de negocio
- Construir nuestros propios conjuntos de prueba (funcional, integración, prueba de regresión)
- Mejor manejo de dependencias y modularidad.
- Crear un DSL (lenguaje específico del dominio) (9) para la empresa
- Compilación de Adempiere como un sistema reactivo (11) (Responsive, Resilient, Elastic, Message Driver)
- Una aplicación diseñada para las exigencias de hoy

Es importante que los desarrolladores interesados ​​en participar en este gran proyecto se familiaricen con los conceptos y la terminología.

En los próximos meses y semanas seguiré escribiendo más artículos con ejemplos concretos que permitan la discusión.

Víctor Pérez
Un fundador de ADempiere
victor.perez@e-evolution.com

Referencias:

- (1) [http://en.wikipedia.org/wiki/Client–server_model](http://en.wikipedia.org/wiki/Client–server_model)
- (2) [http://en.wikipedia.org/wiki/Model–view–controller](http://en.wikipedia.org/wiki/Model–view–controller)
- (3) [http://en.wikipedia.org/wiki/Model-driven_architecture](http://en.wikipedia.org/wiki/Model-driven_architecture)
- (4) [http://en.wikipedia.org/wiki/Domain-driven_design](http://en.wikipedia.org/wiki/Domain-driven_design)
- (5) [http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf](http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf)
- (6) [http://en.wikipedia.org/wiki/Dependency_injection](http://en.wikipedia.org/wiki/Dependency_injection)
- (7) [http://alistair.cockburn.us/Hexagonal+architecture](http://alistair.cockburn.us/Hexagonal+architecture)
- (8) [http://www.infoq.com/news/2014/10/ddd-onion-architecture](http://www.infoq.com/news/2014/10/ddd-onion-architecture)
- (9) [http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html](http://blog.8thlight.com/uncle-bob/2012/ 13/08/la-arquitectura-limpia.html)
- (10) [http://en.wikipedia.org/wiki/Domain-specific_language](http://en.wikipedia.org/wiki/Domain-specific_language)
- (11) [http://www.reactivemanifesto.org](http://www.reactivemanifesto.org)
