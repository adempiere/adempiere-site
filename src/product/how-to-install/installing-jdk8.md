---
title: How to Install JDK 8
icon: fa-brands fa-java
star: 9
sticky: 9
tag:
  - Product
  - ADempiere
  - Software
article: false
author: Jesús Albujas
---

1. Download JDK 8

   - Go to the following [link](https://www.mediafire.com/file/lp1mstbccgt15j7/jdk8.zip/file).

2. Once the file is downloaded, navigate to the file location and unzip it using the following command:

```bash
unzip jdk8.zip
```

- Switch to superuser (it will prompt for the password):
  
```bash
sudo su
```

- Move the **jdk8** folder to **/usr/local/**:

```bash
mv jdk8 /usr/local/
```

- Grant permissions to the **jdk8** directory:

```bash
chmod -R 777 /usr/local/jdk8
```

- Set the environment variable to point to the jdk8 directory:

```bash
export JAVA_HOME=/usr/local/jdk8
```

- Update the repositories

```bash
sudo apt update 
```

or alternatively:

```bash
sudo apt-get update
```

3. Install JDK 8

```bash
sudo apt-get install openjdk-8-jdk
```

- To check the version

```bash
java -version
```

- If the correct Java version is not in use, use the alternatives command to change it:

i. Register the location where the JDK 8 directory was moved:

```bash
sudo update-alternatives --install /usr/bin/java java /usr/local/jdk8/bin/java 1
```

ii. Change the path:

```bash
sudo update-alternatives --set java /usr/local/jdk8/bin/java
```

Installation Completed!