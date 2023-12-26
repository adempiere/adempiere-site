---
title: Securing Your ADempiere Installation
category: Documentation
star: 9
sticky: 9
article: false
author: Jesús Albujas
---

## Securing Access to the Application Server and Database

Servers used in production environments should be setup using industry standard security measures. Here are some suggestions. It is recommended that you seek the advice of your IT department and security experts to provide the highest level of security.

## General Security Measures

- Restrict User Access to the Servers

1. **Disable Default Vendor/Special User Accounts and Groups:**
   - Users: `adm`, `lp`, `shutdown`, `halt`, `news`, `mail`, `uucp`, `operator`, `games`, `gopher`, `ftp`, etc.
   - User groups: `adm`, `lp`, `news`, `mail`, `uucp`, `games`, `dip`, etc.

2. **Disable Root Logins via SSH:**
   - Disable password authentication for SSH; force private key-based access only.

3. **Use sudo to Control System Access:**
   - Create a user `adempiere` with restricted access on the ADempiere application server.
   - Install ADempiere with `ADEMPIERE_HOME` set to `/home/adempiere/` so that only the user `adempiere` has access to the application.
   - Set permissions on `.properties` files (e.g., `adempiere.properties`, `AdempiereEnv.properties`) to be readable only by the `adempiere` user as these files contain database and keystore passwords.

4. **PostgreSQL Database Server Security:**
   - Disable terminal login for the user `postgres` in `/etc/passwd`.
   - Configure PostgreSQL security (`pg_hba.conf`) using MD5 password hash and IP filtering.
   - Restrict access to the application server only if using ZK Web User Interface.

- Limit Server Functionality

1. **Limit, Disable, or Uninstall Other Applications and Services:**
   - Disable or uninstall unnecessary applications and services (ftp, inetd, sendmail, etc.).

2. **Secure JMX or Web Consoles:**
   - If not needed, disable or secure JMX or web consoles.
   - If required, enable authentication and limit access to specific known IP addresses.

3. **Secure Tomcat/JBoss:**
   - Remove all default applications (i.e., sample apps and manager console app) from Tomcat and JBoss.
   - Run Tomcat and JBoss with a restricted user, such as the `adempiere` user.

- Protect the Servers

1. **Firewall and Network Security:**
   - Ensure servers are behind firewalls and not directly accessible from the Internet.
   - Enable firewall rules to restrict access to specific ports and IP addresses.

2. **Limit Web Service Connections:**
   - Limit web service connections to known IP addresses.

3. **Secure Communication:**
   - Provide a secure means of communication with the server, such as VPN or remote desktop (NX, Citrix, etc.).

4. **PostgreSQL Security (for ZK):**
   - Configure PostgreSQL security (`pg_hba.conf`) using MD5 password hash and IP filtering (restrict to the local interface).

5. **Security Software:**
   - Install and configure security software such as Fail2Ban to detect and repel intrusions and brute-force attacks.

6. **Anti-virus Software:**
   - Install anti-virus software.

- Watch and Maintain

1. **Keep Software Up to Date:**
   - Keep all software applications up to date with the latest security patches.

2. **Regularly Review Security and Access Logs:**
   - Regularly review security and access logs.

## Securing the ADempiere Application

1. **Use the adempiere User:**
   - Setup the ADempiere application using the `adempiere` user.

2. **Use Non-Standard Port:**
   - Use a port other than the standard 80, for example, 8081.

3. **Local IP Address:**
   - Consider using a local IP address.
   - Edit the `AdempiereEnv.properties` file and change the IP address for the application server to `127.0.0.1` (cannot be done through `RUN_Setup`).

4. **Do Not Expose to the Web Directly:**
   - Do not expose the ADempiere application to the web or internet directly.
   - Always access the application through a firewall using a suitable means of access.

5. **Expose Webstore and Services Through Apache Proxy:**
   - Expose ADempiere webstore and services only through a separate Apache proxy server or by limiting access and routing with JBoss/Tomcat.

6. **Setting up Apache Proxy:**
   - In `httpd.conf` (e.g., `/etc/httpd/conf/httpd.conf` in Fedora):
     - Enable modules for proxy (normally enabled by default).

```bash
LoadModule proxy_module modules/mod_proxy.so
```

Then add the following lines to your httpd.conf:

```bash
SetEnv force-proxy-request-1.0 1

ProxyPass /wstore http://127.0.0.1:8081/wstore
ProxyPassReverse /wstore http://127.0.0.1:8081/wstore
```

If you want to expose the Web Store to an address other than wstore (e.g. root web site /), you also need to change the cookie path in order for the login to work:

```shell
ProxyPassReverseCookiePath /wstore /
```

You can also expose the admin interface

```bash
ProxyPass /admin http://127.0.0.1:8081/admin
ProxyPassReverse /admin http://127.0.0.1:8081/admin
```

Or simply expose the whole installation

```bash
ProxyPass / http://127.0.0.1:8081/
ProxyPassReverse / http://127.0.0.1:8081/
```

::: info Note
![image](https://github.com/adempiere/adempiere-site/assets/134967453/8807c71e-0ee6-457c-95ff-d03c39fc40b8)
The port and the IP address can/must be changed if you used different IP/port for RUN_setup.sh
:::

- Security Best Practices

1. **Web Services Parameters:**
   - Be cautious of "free" parameters in web services.
   - Use them wisely to avoid potential vectors for attacks.
   - Be specific with web service requests, especially with filters and table accesses.

2. **Secure Access to the Server:**
   - Use SSH public/private keys for server access.
   - Utilize the operating system's permission mechanisms to limit execution of the application and database to specific users with restricted access.
   - Restrict access to specific IP addresses, especially on the database. Only allow access from the application server.
   - Keep ADempiere behind a firewall and limit access using standard corporate security means like VPN, remote connections, or other RSA.
   - Consider using LDAP (can be enabled and managed through ADempiere) for more secure password access.

3. **Database Security:**
   - Follow the security advice of the specific database being used.
   - Key concepts include:
     - Ensure the database server only responds to the application server.
     - Limit the access of the database data to a single user with limited permissions.
     - Run the database under this user.

4. **Regular Monitoring:**
   - Regularly monitor installations and logs for any unusual activities.

## Securing the Software

It is important that the ADempiere code be built using a secure private key and that all jars are signed. ADempiere provides a means to do so through the java keystore when RUN_Setup is executed. During every build/rebuild of ADempiere its binaries are unpacked, signed and repacked again (to the according JARs, WARs, EARs). Java security prevents any code modifications and won't allow unsigned jars to run. This prevents bytecode insertion attacks which can be an issue where hot-swappable code is allowed, such as in OSGI implementations.

When you first execute RUN_Setup, a dialog will appear allowing you to create a keystore. Alternatively, you can edit the AdempiereENV.properties file and define an existing keystore. If one doesn't exist it will be created automatically. This creation is done by the JDK's native keytool.exe which is being called automatically within the installation process. System Admins are obligated to do nothing more than to fill all the provided variables for the Keystore setting and Certificate details sections of the AdempiereEnv.properties file. For more information search for the documentation on the java keytool.

## Securing User Passwords

All security measures depend on adequate passwords. Ensure all system admin passwords are strong and secure. Draconian password policies for end-users can backfire if end-users are writing down the passwords or sharing accounts to get around the policies - find a suitable level of security for your corporation and enforce it.

ADempiere, by default, does not encrypt data. System admins should enable encryption on all fields/columns that contain sensitive data including user passwords. In the demo sites and on initial install, these fields are not encrypted so it is important to take action.

As part of Release 380, a password salt and hash feature was added that will encrypt all passwords in an 
unrecoverable form. The password hash can be applied on migration from earlier releases and will encrypt all passwords in the database.

Change all standard user passwords in the system - SuperUser, System, GardenAdmin, GardenUser. After all are changed then log in as System in role System Adminsitrator. Find and run the process "convert all passwords to hashes". Open the User window, open the record for System, look at the password field and confirm it is hashed (full of asterisks). Check the other passwords as well.

