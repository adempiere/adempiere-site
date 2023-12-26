---
title: ¿Cómo Documentar?
icon: list
star: 9
sticky: 9
tag:
  - Producto
  - ADempiere
  - Documentación
article: false
author: Jesús Albujas
---

**ADempiere** es un proyecto de código abierto que valora y aprecia las contribuciones de la comunidad. Si deseas agregar información valiosa a la documentación, aquí tienes una guía paso a paso.

## Requisitos:

1. Git
2. Visual Studio Code
3. NVM (Node Version Manager)
4. Node.js 14.x o posterior

---

### ¿Cómo instalar Git?

1. Para descargar git debe tener previamente una cuenta creada.

Si quieres instalar **Git** en Linux a través de un instalador binario, en general puedes hacerlo mediante la herramienta básica de administración de paquetes que trae tu distribución. Si estás en **Fedora** por ejemplo, puedes usar yum:

```shell
yum install git
```

Si estás en una distribución basada en Debian como Ubuntu, puedes usar apt-get:

```bash
sudo apt-get install git
```

Para opciones adicionales, la página web de **Git** tiene instrucciones de instalación en diferentes tipos de Unix. Puedes encontrar esta información [aqui](http://git-scm.com/download/linux).

- Para configurar Git para que utilice tu cuenta de GitHub al realizar commits, hay algunas configuraciones que debes verificar y ajustar.

```shell
git config --global user.name "TuNombreDeUsuarioGitHub"

git config --global user.email "TuCorreoElectronicoGitHub"
```

Asegúrate de reemplazar **"TuNombreDeUsuarioGitHub"** y **"TuCorreoElectronicoGitHub"** con tus credenciales de GitHub.

La opción **--global** establece estas configuraciones a nivel global, lo que significa que se aplicarán a todos tus repositorios.

- Verificar la configuración actual de Git:
Puedes verificar la configuración actual de Git ejecutando los siguientes comandos en tu terminal:

```shell
git config user.name
git config user.email
```

Estos comandos te mostrarán el nombre de usuario y la dirección de correo electrónico configurados en Git.

---

### ¿Cómo descargar Visual Studio Code?

1. Para descargar **VS Code** debes dirgirte a su página oficial [aquí](https://code.visualstudio.com/)

- Si estás utilizando un sistema operativo basado en Red Hat, como Fedora o Red Hat Enterprise Linux, deberías seleccionar el archivo **.rpm**.

- Si estás utilizando un sistema operativo basado en Debian, como Ubuntu, Linux Mint o Debian, entonces debes seleccionar el archivo **.deb**.

![vscode](/assets/img/product/how-to-install/vscode.png)

Para instalarlo tan solo basta con darle click al paquete:

![package-deb](/assets/img/product/how-to-install/package-deb.png)

![install](/assets/img/product/how-to-install/install-package.png)

Y así de sencillo tendrás Visual Studio Code instalado.

![vs-installed](/assets/img/product/how-to-install/vs-installed.png)

Se recomienda instalar las siguientes extensiones para trabajar cómodamente:

1. Git Graph
2. Git History
3. Git Tree Compare
4. Git Lens
5. Markdown Preview Github Styling
6. Markdownlint
7. Github Pull Requests And Issues

---

#### GitHub Pull Requests And Issues

Por último, es esencial configurar la autenticación en Git a través de VS Code para poder interactuar con GitHub. Para hacerlo, sigue estos pasos:

1. Abre VS Code.
2. Dirígete a Cuentas.
3. Selecciona Iniciar Sesión con GitHub....
4. Esto te redirigirá a la página oficial de GitHub. Asegúrate de haber iniciado sesión previamente en GitHub para vincular la cuenta de manera exitosa.

![sign-in](/assets/img/product/how-to-install/sign-in.png)

---

### ¿Cómo instalar NVM y Node.js?

- Ejecuta el siguiente comando para descargar e instalar NVM:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

- Actualiza el perfil:

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Esto carga nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Esto carga la completación de bash para nvm
```

- Instala Node.js

```shell
nvm install 20.10.0
```

---

## Hacer Fork al repositorio oficial de documentación de ADempiere

Puedes encontrar el repositorio dando clic [aquí](https://github.com/adempiere/adempiere-site).

Para hacer un fork del repositorio, sigue estos pasos:

Haz clic en el botón "Fork" en la esquina superior derecha de la página.

![go-to-fork](/assets/img/product/how-to-install/go-to-fork.png)

Serás redirigido a la sección de **Crear nuevo Fork**. Desmarca la opción de copiar solo la rama `main` y haz clic en **Crear fork**.

![create-new-fork](/assets/img/product/how-to-install/create-new-fork.png)

Con estos pasos, ya se habrá creado el fork.

---

### Descargar repositorio clonado

1. Copia el enlace del repositorio que fue clonado.

![copy-link](/assets/img/product/how-to-install/copy-link.png)

2. Ve al terminal y escribe el siguiente comando, por ejemplo:

```shell
git clone https://github.com/your-user/adempiere-site
```

3. Abrir el **Visual Studio Code** > **Abrir Carpeta**

![open-folder](/assets/img/product/how-to-install/open-folder.png)

4. Buscar el repositorio y abrirlo.

![select-folder](/assets/img/product/how-to-install/select-folder.png)

5. Visual Studio Code muestra un mensaje la primera vez que se abre una carpeta. Aquí Visual Studio Code pregunta si se debe confiar en él o no.

  - Si selecciona **No, I don't trust the authors**, Visual Studio Code abrirá el espacio de trabajo en **modo restringido**.

  - Si selecciona **Yes, I trust the authors**, Visual Studio Code confiará en el espacio de trabajo actual y habilitará todas las funciones de editor a las que está acostumbrado.

Active el check y seleccione **Yes, I trust the authors.**

![trust-authors](/assets/img/product/how-to-install/trust-authors.png)

---

### ¿Cómo hacer commit desde Visual Studio?

Ir a **Git Graph** > Click derecho sobre **main** > **Crear rama**

![create-branch](/assets/img/product/how-to-install/create-branch.png)

Colocar un nombre a la rama. Sobre esta rama creada es donde se va a trabajar, es decir, crear o modificar archivos, insertar imagénes, entre otras funciones.

![name-branch](/assets/img/product/how-to-install/name-branch.png)

Por ejemplo, los archivos de documentación se encuentran en **src**, tal como se muestra en la imagen.

![files](/assets/img/product/how-to-install/files.png)

Se agrega información a un archivo.

![changes](/assets/img/product/how-to-install/changes.png)

Al hacer un cambio en un archivo, se debe validar que este correcto para ello se construye la página visualizarlos.

Oprime **ctrl + j** para desplegar la terminal desde Visual Studio e instalar las dependencias:

```shell
# Utilizando npm
npm install

# O utilizando yarn
yarn install
```

Posteriormente ejecuta para correr la página:

```
npm run dev:vite
```

Acá se puede visualizar los cambios.

![changed-successfully](/assets/img/product/how-to-install/changed-successfully.png)

Para hacer commit, dirígete a **Control de Código Fuente** > y verás el archivo que surtió cambios > Puedes agregar un mensaje y luego hacer **commit**, una vez realizado el commit, debes dirigirte a tu repositorio en Github donde te aparecerá la opción de hacer pull request, siendo este el paso final y no queda más que esperar que sea aceptado por algún administrador.

![commit](/assets/img/product/how-to-install/commit.png)
