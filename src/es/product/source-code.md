---
title: Código fuente
category: Código fuente
star: 9
sticky: 9
tag:
  - Demo
  - Producto
  - Github
article: false
---

![Código fuente](/assets/img/product/source-code.png)

## Repositorio de Proyectos Adempiere

El repositorio principal de ADempiere se puede encontrar en[GitHub](https://github.com/adempiere/adempiere).

::: tip Git

Antes de continuar, consulte el[Git SCM Documentation](http://git-scm.com/doc)

Para colaborar con el equipo de ADempiere, usamos el modelo Git Hub Fork and Pull. Desde el [GitHub website](https://help.github.com/articles/using-pull-requests/#fork--pull)

:::

::: tip colaborar

Para colaborar con el equipo de ADempiere, usamos el modelo Git Hub Fork and Pull. Desde el[GitHub website](https://help.github.com/articles/using-pull-requests/#fork--pull)

:::

El modelo de bifurcación y extracción permite que cualquier persona bifurque un repositorio existente y envíe cambios a su bifurcación personal sin necesidad de que se le otorgue acceso al repositorio de origen. Luego, el mantenedor del proyecto debe extraer los cambios al repositorio de origen. Este modelo reduce la cantidad de fricción para los nuevos colaboradores y es popular entre los proyectos de código abierto porque permite que las personas trabajen de forma independiente sin una coordinación inicial.

Consulte el artículo de GitHub sobre[Pull Requests](https://help.github.com/articles/using-pull-requests) para obtener más información e instrucciones sobre cómo empezar.

### Instrucciones resumidas

La configuración es fácil. Sigue estos pasos:

- Instalar el software Git. Puede trabajar con la línea de comandos de Git o con cualquiera de las herramientas de GUI de Git. Como el repositorio está en GitHub, se recomienda seguir los [procedimientos de configuración de GitHub](https://help.github.com/articles/set-up-git/).
- Crear una cuenta de GitHub
- Crea tu tenedor personal del proyecto Adempiere
- Crea un clon local de tu bifurcación personal
- ¡Empieza a desarrollar!
- Encomienda tu trabajo a tu propio tenedor. Siga el [Procedimiento de desarrollo de software de Adempiere](http://wiki.adempiere.net/Software_Development_Procedure) para la denominación de sucursales.
- Enviar una solicitud de extracción al proyecto Adempiere.

### Clonación de un repositorio

Clonar un repositorio en su computadora local es simple. Siga las instrucciones con el software de GitHub o su herramienta GUI, muchas de las cuales permiten clonar un repositorio de GitHub en una computadora local con unos pocos clics del mouse. Si quieres hacerlo desde la línea de comandos,

::: vue-demo Clonar el proyecto por defecto

```Concha
# Navegue hasta el directorio principal donde se colocará el repositorio y escriba el siguiente comando
clon de git https://github.com/adempiere/adempiere
```

:::

Esto creará un directorio usando el nombre del proyecto URL, inicializará un directorio .git dentro de él, extraerá todos los datos para ese repositorio y obtendrá una copia de trabajo de la última versión. Si ingresa al nuevo directorio, verá los archivos del proyecto allí, listos para trabajar o usar.

Para cambiar el nombre del directorio de clonación use lo siguiente

::: vue-demo Clona el proyecto con Nombre Opcional

```Concha
# Navegue hasta el directorio principal donde se colocará el repositorio y escriba el siguiente comando
clon de git https://github.com/adempiere/adempiere <Nombre opcional>
```

:::

### Clonación del repositorio con una conexión lenta

Para clonar un repositorio a través de una conexión a Internet lenta o intermitente, intente usar git fetch en lugar de clonar de la siguiente manera:

::: vue-demo Para Linux

```Concha
  # Ir a la carpeta predeterminada
  cd /opt/Development/repos

  # Crea un directorio para el repositorio y cámbialo
  mkdir adempiere

  # Ir a nueva carpeta
  cd admière

  # Inicializar el repositorio
  iniciar git
  Repositorio Git vacío inicializado en/opt/Development/repos/github/adempiere/.git/

  # La referencia predeterminada al repositorio fuente en un clon es "origen". Clona tu
  # bifurcación personal de tu cuenta <cuenta>.
  git remoto añadir origen https://github.com/adempiere/adempiere.git

  # Obtener el contenido.
  buscar

  # Actualizar a la rama maestra actual - por ejemplo
  git reset --hard origin/master
```

:::
