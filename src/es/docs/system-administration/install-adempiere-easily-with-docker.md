---
title: Instalar ADempiere facilmente con Docker
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

## Describe los pasos para instalar ADempiere con Docker.

### Instala Docker en tu sistema operativo

- Para instalar Docker en MacOS, consulta [Docker for Mac](https://docs.docker.com/docker-for-mac/install/).
- Para instalar Docker en Windows, consulta [Docker for Windows](https://docs.docker.com/docker-for-windows/install/).
- Para instalar Docker en Debian Linux, consulta [Docker Engine - Debian](https://docs.docker.com/engine/install/debian/).

### Verifica que Docker esté instalado:

```bash
docker --version
Docker version 20.10.2, build 2291f61
```

### Instala Docker Compose en tu sistema operativo

- Para instalar Docker Compose, consulta [Docker Compose](https://docs.docker.com/compose/install/).

```bash
docker-compose --version
docker-compose version 1.27.4, build 40524192
```

### Instala git en tu sistema operativo

Para instalar git, consulta [aquí](https://adempiere.io/docs/how-to-contribute/getting-started.html#how-to-install-git).

```bash
git --version
git version 2.24.3 (Apple Git-128)
```

### Clona el Repositorio de Docker de ADempiere

```bash
git clone https://github.com/adempiere/adempiere-docker.git
```

### Configurar la Instalación de ADempiere Docker

Abre una terminal de comandos y ejecuta los siguientes comandos:

Edita y modifica la configuración predeterminada para la base de datos PostgreSQL.

```bash
cd adempiere-docker
cat .env
#  Copyright (C) 2010-2017, OpenUp S.A. , http://www.openup.com.uy
#  Copyright (C) 2003-2017, e-Evolution Consultants S.A. , http://www.e-evolution.com
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  You should have received a copy of the GNU General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
#  Email: raul.capecce@openupsolutions.com, http://openupsolutions.com , http://github.com/rcapecce
#  Email: victor.perez@e-evolution.com, http://www.e-evolution.com , http://github.com/e-Evolution
ADEMPIERE_DB_PORT=55432
ADEMPIERE_DB_PASSWORD=adempiere
ADEMPIERE_DB_ADMIN_PASSWORD=postgres
PG_VERSION=12.2
vi .env
```

Edita y modifica la configuración predeterminada para ADempiere.

```bash
cd adempiere
cat .env
#  Copyright (C) 2003-2017, e-Evolution Consultants S.A. , http://www.e-evolution.com
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  You should have received a copy of the GNU General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.ce
#  Email: victor.perez@e-evolution.com, http://www.e-evolution.com , http://github.com/e-Evolution
ADEMPIERE_WEB_PORT=8274
ADEMPIERE_SSL_PORT=4444
ADEMPIERE_VERSION=3.9.3
# ATENTION If is "Y" it will be replace de actual defined database with a empty ADempiere seed
ADEMPIERE_DB_INIT=Y
vi .env
```

Implementación de ADempiere utilizando el script de shell de la aplicación.

```bash
cd ..

pwd 

# From the adempiere-docker directory execute
./application.sh adempiere up -d --build

# Wait a few minutes while the ADempiere Server installation is done 
docker ps |grep postgres

# The output should show something like 
e70086fe9f89   dd4fa36a9c2f             "docker-entrypoint.s…"   11 months ago       Up 4 minutes       0.0.0.0:55432->5432/tcp                          postgres122_db_1

docker ps |grep adempiere

# The output should show something like 
fe8cc0a49e77   adempiere                "/bin/sh -c '/root/s…"   11 months ago       Up 8 minutes       0.0.0.0:4444->4444/tcp, 0.0.0.0:8274->8888/tcp   adempiere

docker logs adempiere
```

Basado en la configuración de ./adempiere/.env, Docker mostrará los puertos disponibles donde se implementaron los servicios de ADempiere: 0.0.0.0:4444->4444/tcp, 0.0.0.0:8274->8888/tcp.

Si todo va bien hasta este punto, abre la siguiente URL **http://0.0.0.0:8274/webui/** en el navegador de tu elección.

![image](https://github.com/adempiere/adempiere-site/assets/134967453/dd1df426-66ee-4a99-a1da-18e03dac0db2)

Para acceder, utiliza el nombre de usuario y la contraseña GardenAdmin

![image](https://github.com/adempiere/adempiere-site/assets/134967453/5003bdf3-bf94-4e7c-8308-ddb0d076196f)

***Rol de ADempiere***

Felicidades, ahora puedes evaluar y probar ADempiere localmente

![image](https://github.com/adempiere/adempiere-site/assets/134967453/af21ce6f-4f6a-4872-bed0-417f22810bc2)

***Pantalla principal de ADempiere***

::: danger Advertencia

La implementación en Docker se realiza con fines didácticos. Para una instalación en producción, se requieren ajustes específicos en los parámetros de la base de datos y la memoria.

:::

### Ver también

- [Github ADempiere Docker Repository](https://github.com/adempiere/adempiere-docker/blob/master/README.md)
