---
title: The Future Of ADempiere as a DDD reactive system
category: Articles
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

During the last years I’ve been reading and analyzing the different approaches and architectures for software development and at the same time figure out which would be the best for ADempiere.

As we all know too well, the design of our program is based on a two-layer combination [Client/serve](http://en.wikipedia.org/wiki/Client) (1) Swing, which in the nineties of the last century was one of the best adopted because it used the network and the PCs in a way that the main server was freed from heavy load by leaving certain tasks on the client. The main focus was to have the core of the software being executed on a central server while clients connect to it to access data and do the business logic locally.

Ironically think have swung back to where they originally started, as there was a mainframe with dumb terminals which only displayed data to users without any kind of complex data processing.

I was not present at the age where it was needed a white coat to access to big data centers consisting of several IBM 390s or Systems 36 with hundreds of terminals (ATMs). But today, the context is in a way similar to these former times: there are big data centers -which by the way have helped to reduce costs- with rented servers accessed on a virtual way for a couple of hundreds dollars a month (Amazon, Google Cloud, Heroku to name a few). The main difference now is that applications have to service thousands or even millions of users, the capability of being able to scale up horizontally is an usual requirement nowadays; these new context demands that applications are designed differently as the requirements are totally different.

The access to these servers is made by gadgets which though not totally dumb, they execute client applications run on a web browser whose only task is to interpret java script or HTML code, where the highest value is standardization and integration of multiple operating systems and platforms.

In the next decade the main focus was in developing applications based on the model view controller paradigm [MVC](http://en.wikipedia.org/wiki/Model) (2), which allowed code separation.

The model layer allows the access and updating of data, mostly saved in a relational database. On the other side it allows to work with Object-relational mapping (ORM) which consist of an abstraction on the database and persistency, replacing the usage of SQL sentences depending on the implementation of a motor implemented on every database.

The view layer separates the code for displaying and for user interaction via an user interface, which is implemented according to the access gadget.

The controller layer is in charge of linking the view layer with the data model, and implements the code that responds to the actions needed.

When we analyze the code of ADempiere in retrospective, we can see the course of time and evolution of underwent. It went from the original client/server based on Java swing with direct database access via pure SQL sentences to the current own ORM combined with SQL to access the data and the MVC application based on te AJAX web client.

Even though technology has moved on, our domain model has persisted; that is why we can infer that the most important asset of ADempiere is the Application Dictionary which preserves the domain model and the business logic.

Thanks to the fact that ADempiere was drafted and developed on a Model Driven Architecture [MDA](http://en.wikipedia.org/wiki/Model-driven_architecture) (3), the domain model is protected of obsolescence by the Application Dictionary

As a voluntary person, responsible for the future architecture of beloved ADempiere, we will adopt the DDD approach as the main line of development.

**Now: what is a software development guided by the [Domain Driven Design DDD](http://en.wikipedia.org/wiki/Domain-driven_design)(4)?**

**DDD** is an approach for developing software with complex requirements and having a deep linkage to a model that defines the core of the business logic being developed.
The most important commandments to develop and maintain a domain model are:

- Place the main focus of the project in the core and the business logic of the domain.
- All complex designs are based on a domain model.
- Initiate a creative collaboration between technicians and domain model experts to define iteratively a model that addresses the particular problems of the domain.

The [Domain Driven Design](http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf) (5) is not a technology nor a methodology. It is a set of patterns towards the building of business applications starting from the domain model, which provides an useful, practical structure with consistent terminology for decision-making in the course of designing software.

**Domain:** a knowledge sphere (ontology), influence or activity. The area where an user applies a program is the software domain.
**Model:** a set of abstractions describing sections of a selected domain than can be used to solve problems or tasks related to that domain.
**Ubiquitous language:** a structured language in the context of a domain model and used by all team members to interconnect all team activities.
**Context:** the scenario in which a word or statement defines her meaning.
A purely technical vision for the software development could be the migration to a multiple layer application (persistency layer, access data layer, service layer and presentation layer).
**DDD** is not quarrel with any technology or design pattern for example [Dependency Injection DI](http://en.wikipedia.org/wiki/Dependency_injection) (6),

but without change there is a very important premise The domain model should remain isolated from the outer layers! since any technological change should not affect my core business.

**Important Premise:**

- The model must be kept isolated from the external layers! The reason: no technological change should affect the core of the business.
- Each layer is a concentric circle which defines a software area; while moving from the center to the outer levels the software evolves. The outer circles are mechanisms, while the inner circles are the conditions.
- The most important rule for this architecture is the dependency rule.
- As a rule, dependencies within the source code can point only towards the center. Nothing in an inner circle can know about anything in an outer circle. Moreover, any declared name in an outer circle cannot be mentioned by the code of an inner circle. This includes function calls, classes, variables or any other software entity.
- Due to the same reason, the data formats used in an outer circle cannot be used by an inner circle, especially if these formats are generated in a ORM from an outer circle. It is our intention that nothing from an outer circle affects the inner circles.
- This way, for interacting between circles or layers is paramount to establish an API which allows the communication between inner and outer layers by means of adapters or messages

There are some architectures based on this view; they are similar and differ in some points, but coincide in the importance of a domain model [Hexagonal architecture](http://alistair.cockburn.us/Hexagonal+architecture) (7), [Onion Architecture](http://www.infoq.com/news/2014/10/ddd-onion-architecture) (8), [The Clean Architecture](http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html) (9).

As the way of defining how we will build the software around ADempiere is crucial, we will adopt the clean/Onion architecture, where the main focus is to keep clean the domain model interacting with the outer layers by means of contracts (APIs or interfaces) which allow to conveniently separate the domain model of the implementations (API or contract). This will provide for an ordered evolution avoiding technological obsolescence.

On the other hand, we will define a [Domain Specific Language DSL](http://en.wikipedia.org/wiki/Domain-specific_language) (10) for ADempiere focussed on the business, allowing the building of our ubiquitous language and clearly delimiting the contexts. This helps a more natural development of the business logic.
As stated before, every decision has to be authorized by the benefits to be gained; moving towards DDD will allow us to obtain the following benefits:

**The Benefits:**

- Decoupled code
- Reduce spaghetti code
- Traversal Services independent of the domain model (Log , Transactions , Security ).
- Code easy to maintain
- Software adaptable to changes
- Design based on components
- Contexts delimited by the business process
- Build our own testing sets (functional, integration, regression test)
- Better handling of dependencies and modularity.
- Create a DSL (Domain-specific language) (9) for the business
- Build to Adempiere as a Reactive System (11) (Responsive , Resilient , Elastic , Message Driver)
- An application designed for the demands of today

It is important that developers interested in participating in this big project become familiar with concepts and terminology.

In the next months and weeks, I will continue writing more articles with concrete examples permitting discussion.

Victor Perez
An ADempiere founder
victor.perez@e-evolution.com

References:

- (1) [http://en.wikipedia.org/wiki/Client–server_model](http://en.wikipedia.org/wiki/Client–server_model)
- (2) [http://en.wikipedia.org/wiki/Model–view–controller](http://en.wikipedia.org/wiki/Model–view–controller)
- (3) [http://en.wikipedia.org/wiki/Model-driven_architecture](http://en.wikipedia.org/wiki/Model-driven_architecture)
- (4) [http://en.wikipedia.org/wiki/Domain-driven_design](http://en.wikipedia.org/wiki/Domain-driven_design)
- (5) [http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf](http://domainlanguage.com/ddd/patterns/DDD_Reference_2011-01-31.pdf)
- (6) [http://en.wikipedia.org/wiki/Dependency_injection](http://en.wikipedia.org/wiki/Dependency_injection)
- (7) [http://alistair.cockburn.us/Hexagonal+architecture](http://alistair.cockburn.us/Hexagonal+architecture)
- (8) [http://www.infoq.com/news/2014/10/ddd-onion-architecture](http://www.infoq.com/news/2014/10/ddd-onion-architecture)
- (9) [http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html](http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- (10) [http://en.wikipedia.org/wiki/Domain-specific_language](http://en.wikipedia.org/wiki/Domain-specific_language)
- (11) [http://www.reactivemanifesto.org](http://www.reactivemanifesto.org)
