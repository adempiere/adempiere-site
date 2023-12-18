## Como instalar JDK 8 

1. Descargar el JDK 8

  - Para ello iremos al siguiente [enlace](https://www.mediafire.com/file/lp1mstbccgt15j7/jdk8.zip/file).

2. Una vez descargado el archivo, dirigirse a la ubicacion del archivo y descomprimirlo, para ello emplea el siguiente comando:

```bash
~ unzip jdk8.zip
```

  - Entrar como super usuario (te solicitara la clave):

```bash
~ sudo su
```

  -  Mover la carpeta de `jdk8` a `/usr/local/`:

```bash
~ mv jdk8 /usr/local/
```

  - Otorgar permisos al directorio de **jdk8**

```bash
~ chmod -R 777 /usr/local/jdk8
```

3. Configurar la variable de entorno para apuntar al directorio de **jdk8**

```bash
~ export JAVA_HOME=/usr/local/jdk8
```

4. Actuliza los repositorios

```bash
~ sudo apt update 
```

o tambien:

```bash
~ sudo apt-get update
```

5. Instala JDK 8
  ```bash
  ~ sudo apt-get install openjdk-8-jdk
  ``` 

  - Para conocer la version 

  ```bash
  ~ java -version
  ```

  Si no se utiliza la versión correcta de Java, utilice el comando de alternativas para cambiarla:

   i. Registre la direccion donde se movio el directorio JDK 8:

```bash
   ~ sudo update-alternatives --install /usr/bin/java java /usr/local/jdk8/bin/java 1
```

   ii. Cambie la ruta:
```bash
   ~ sudo update-alternatives --set java /usr/local/jdk8/bin/java
```

Fin de la Instalacion!