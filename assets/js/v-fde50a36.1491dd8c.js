"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8968],{38896:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t(68152);const a=[(0,i.IL)('<h2 id="securing-access-to-the-application-server-and-database" tabindex="-1"><a class="header-anchor" href="#securing-access-to-the-application-server-and-database" aria-hidden="true">#</a> Securing Access to the Application Server and Database</h2><p>Servers used in production environments should be setup using industry standard security measures. Here are some suggestions. It is recommended that you seek the advice of your IT department and security experts to provide the highest level of security.</p><h2 id="general-security-measures" tabindex="-1"><a class="header-anchor" href="#general-security-measures" aria-hidden="true">#</a> General Security Measures</h2><ul><li>Restrict User Access to the Servers</li></ul><ol><li><p><strong>Disable Default Vendor/Special User Accounts and Groups:</strong></p><ul><li>Users: <code>adm</code>, <code>lp</code>, <code>shutdown</code>, <code>halt</code>, <code>news</code>, <code>mail</code>, <code>uucp</code>, <code>operator</code>, <code>games</code>, <code>gopher</code>, <code>ftp</code>, etc.</li><li>User groups: <code>adm</code>, <code>lp</code>, <code>news</code>, <code>mail</code>, <code>uucp</code>, <code>games</code>, <code>dip</code>, etc.</li></ul></li><li><p><strong>Disable Root Logins via SSH:</strong></p><ul><li>Disable password authentication for SSH; force private key-based access only.</li></ul></li><li><p><strong>Use sudo to Control System Access:</strong></p><ul><li>Create a user <code>adempiere</code> with restricted access on the ADempiere application server.</li><li>Install ADempiere with <code>ADEMPIERE_HOME</code> set to <code>/home/adempiere/</code> so that only the user <code>adempiere</code> has access to the application.</li><li>Set permissions on <code>.properties</code> files (e.g., <code>adempiere.properties</code>, <code>AdempiereEnv.properties</code>) to be readable only by the <code>adempiere</code> user as these files contain database and keystore passwords.</li></ul></li><li><p><strong>PostgreSQL Database Server Security:</strong></p><ul><li>Disable terminal login for the user <code>postgres</code> in <code>/etc/passwd</code>.</li><li>Configure PostgreSQL security (<code>pg_hba.conf</code>) using MD5 password hash and IP filtering.</li><li>Restrict access to the application server only if using ZK Web User Interface.</li></ul></li></ol><ul><li>Limit Server Functionality</li></ul><ol><li><p><strong>Limit, Disable, or Uninstall Other Applications and Services:</strong></p><ul><li>Disable or uninstall unnecessary applications and services (ftp, inetd, sendmail, etc.).</li></ul></li><li><p><strong>Secure JMX or Web Consoles:</strong></p><ul><li>If not needed, disable or secure JMX or web consoles.</li><li>If required, enable authentication and limit access to specific known IP addresses.</li></ul></li><li><p><strong>Secure Tomcat/JBoss:</strong></p><ul><li>Remove all default applications (i.e., sample apps and manager console app) from Tomcat and JBoss.</li><li>Run Tomcat and JBoss with a restricted user, such as the <code>adempiere</code> user.</li></ul></li></ol><ul><li>Protect the Servers</li></ul><ol><li><p><strong>Firewall and Network Security:</strong></p><ul><li>Ensure servers are behind firewalls and not directly accessible from the Internet.</li><li>Enable firewall rules to restrict access to specific ports and IP addresses.</li></ul></li><li><p><strong>Limit Web Service Connections:</strong></p><ul><li>Limit web service connections to known IP addresses.</li></ul></li><li><p><strong>Secure Communication:</strong></p><ul><li>Provide a secure means of communication with the server, such as VPN or remote desktop (NX, Citrix, etc.).</li></ul></li><li><p><strong>PostgreSQL Security (for ZK):</strong></p><ul><li>Configure PostgreSQL security (<code>pg_hba.conf</code>) using MD5 password hash and IP filtering (restrict to the local interface).</li></ul></li><li><p><strong>Security Software:</strong></p><ul><li>Install and configure security software such as Fail2Ban to detect and repel intrusions and brute-force attacks.</li></ul></li><li><p><strong>Anti-virus Software:</strong></p><ul><li>Install anti-virus software.</li></ul></li></ol><ul><li>Watch and Maintain</li></ul><ol><li><p><strong>Keep Software Up to Date:</strong></p><ul><li>Keep all software applications up to date with the latest security patches.</li></ul></li><li><p><strong>Regularly Review Security and Access Logs:</strong></p><ul><li>Regularly review security and access logs.</li></ul></li></ol><h2 id="securing-the-adempiere-application" tabindex="-1"><a class="header-anchor" href="#securing-the-adempiere-application" aria-hidden="true">#</a> Securing the ADempiere Application</h2><ol><li><p><strong>Use the adempiere User:</strong></p><ul><li>Setup the ADempiere application using the <code>adempiere</code> user.</li></ul></li><li><p><strong>Use Non-Standard Port:</strong></p><ul><li>Use a port other than the standard 80, for example, 8081.</li></ul></li><li><p><strong>Local IP Address:</strong></p><ul><li>Consider using a local IP address.</li><li>Edit the <code>AdempiereEnv.properties</code> file and change the IP address for the application server to <code>127.0.0.1</code> (cannot be done through <code>RUN_Setup</code>).</li></ul></li><li><p><strong>Do Not Expose to the Web Directly:</strong></p><ul><li>Do not expose the ADempiere application to the web or internet directly.</li><li>Always access the application through a firewall using a suitable means of access.</li></ul></li><li><p><strong>Expose Webstore and Services Through Apache Proxy:</strong></p><ul><li>Expose ADempiere webstore and services only through a separate Apache proxy server or by limiting access and routing with JBoss/Tomcat.</li></ul></li><li><p><strong>Setting up Apache Proxy:</strong></p><ul><li>In <code>httpd.conf</code> (e.g., <code>/etc/httpd/conf/httpd.conf</code> in Fedora): <ul><li>Enable modules for proxy (normally enabled by default).</li></ul></li></ul></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>LoadModule proxy_module modules/mod_proxy.so\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then add the following lines to your httpd.conf:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SetEnv force-proxy-request-1.0 <span class="token number">1</span>\n\nProxyPass /wstore http://127.0.0.1:8081/wstore\nProxyPassReverse /wstore http://127.0.0.1:8081/wstore\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to expose the Web Store to an address other than wstore (e.g. root web site /), you also need to change the cookie path in order for the login to work:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ProxyPassReverseCookiePath /wstore /\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also expose the admin interface</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ProxyPass /admin http://127.0.0.1:8081/admin\nProxyPassReverse /admin http://127.0.0.1:8081/admin\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Or simply expose the whole installation</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ProxyPass / http://127.0.0.1:8081/\nProxyPassReverse / http://127.0.0.1:8081/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Note</p><p><img src="https://github.com/adempiere/adempiere-site/assets/134967453/8807c71e-0ee6-457c-95ff-d03c39fc40b8" alt="image"> The port and the IP address can/must be changed if you used different IP/port for RUN_setup.sh</p></div><ul><li>Security Best Practices</li></ul><ol><li><p><strong>Web Services Parameters:</strong></p><ul><li>Be cautious of &quot;free&quot; parameters in web services.</li><li>Use them wisely to avoid potential vectors for attacks.</li><li>Be specific with web service requests, especially with filters and table accesses.</li></ul></li><li><p><strong>Secure Access to the Server:</strong></p><ul><li>Use SSH public/private keys for server access.</li><li>Utilize the operating system&#39;s permission mechanisms to limit execution of the application and database to specific users with restricted access.</li><li>Restrict access to specific IP addresses, especially on the database. Only allow access from the application server.</li><li>Keep ADempiere behind a firewall and limit access using standard corporate security means like VPN, remote connections, or other RSA.</li><li>Consider using LDAP (can be enabled and managed through ADempiere) for more secure password access.</li></ul></li><li><p><strong>Database Security:</strong></p><ul><li>Follow the security advice of the specific database being used.</li><li>Key concepts include: <ul><li>Ensure the database server only responds to the application server.</li><li>Limit the access of the database data to a single user with limited permissions.</li><li>Run the database under this user.</li></ul></li></ul></li><li><p><strong>Regular Monitoring:</strong></p><ul><li>Regularly monitor installations and logs for any unusual activities.</li></ul></li></ol><h2 id="securing-the-software" tabindex="-1"><a class="header-anchor" href="#securing-the-software" aria-hidden="true">#</a> Securing the Software</h2><p>It is important that the ADempiere code be built using a secure private key and that all jars are signed. ADempiere provides a means to do so through the java keystore when RUN_Setup is executed. During every build/rebuild of ADempiere its binaries are unpacked, signed and repacked again (to the according JARs, WARs, EARs). Java security prevents any code modifications and won&#39;t allow unsigned jars to run. This prevents bytecode insertion attacks which can be an issue where hot-swappable code is allowed, such as in OSGI implementations.</p><p>When you first execute RUN_Setup, a dialog will appear allowing you to create a keystore. Alternatively, you can edit the AdempiereENV.properties file and define an existing keystore. If one doesn&#39;t exist it will be created automatically. This creation is done by the JDK&#39;s native keytool.exe which is being called automatically within the installation process. System Admins are obligated to do nothing more than to fill all the provided variables for the Keystore setting and Certificate details sections of the AdempiereEnv.properties file. For more information search for the documentation on the java keytool.</p><h2 id="securing-user-passwords" tabindex="-1"><a class="header-anchor" href="#securing-user-passwords" aria-hidden="true">#</a> Securing User Passwords</h2><p>All security measures depend on adequate passwords. Ensure all system admin passwords are strong and secure. Draconian password policies for end-users can backfire if end-users are writing down the passwords or sharing accounts to get around the policies - find a suitable level of security for your corporation and enforce it.</p><p>ADempiere, by default, does not encrypt data. System admins should enable encryption on all fields/columns that contain sensitive data including user passwords. In the demo sites and on initial install, these fields are not encrypted so it is important to take action.</p><p>As part of Release 380, a password salt and hash feature was added that will encrypt all passwords in an unrecoverable form. The password hash can be applied on migration from earlier releases and will encrypt all passwords in the database.</p><p>Change all standard user passwords in the system - SuperUser, System, GardenAdmin, GardenUser. After all are changed then log in as System in role System Adminsitrator. Find and run the process &quot;convert all passwords to hashes&quot;. Open the User window, open the record for System, look at the password field and confirm it is hashed (full of asterisks). Check the other passwords as well.</p>',33)],r={},o=(0,t(42272).c)(r,[["render",function(e,s){return(0,i.Wz)(),(0,i.An)("div",null,a)}]])},24100:(e,s,t)=>{t.r(s),t.d(s,{data:()=>i});const i=JSON.parse('{"key":"v-fde50a36","path":"/es/docs/system-administration/securing-your-adempiere.html","title":"Securing Your ADempiere Installation","lang":"es-ES","frontmatter":{"title":"Securing Your ADempiere Installation","category":"Documentation","star":9,"sticky":9,"article":false,"author":"Jesús Albujas","description":"Securing Access to the Application Server and Database Servers used in production environments should be setup using industry standard security measures. Here are some suggestions. It is recommended that you seek the advice of your IT department and security experts to provide the highest level of security.","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/adempiere/adempiere-site.github.io/docs/system-administration/securing-your-adempiere.html"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/es/docs/system-administration/securing-your-adempiere.html"}],["meta",{"property":"og:title","content":"Securing Your ADempiere Installation"}],["meta",{"property":"og:description","content":"Securing Access to the Application Server and Database Servers used in production environments should be setup using industry standard security measures. Here are some suggestions. It is recommended that you seek the advice of your IT department and security experts to provide the highest level of security."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-26T20:09:37.000Z"}],["meta",{"property":"article:author","content":"Jesús Albujas"}],["meta",{"property":"article:modified_time","content":"2023-12-26T20:09:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Securing Your ADempiere Installation\\",\\"description\\":\\"Securing Access to the Application Server and Database Servers used in production environments should be setup using industry standard security measures. Here are some suggestions. It is recommended that you seek the advice of your IT department and security experts to provide the highest level of security.\\"}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/atom.xml","title":" Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://github.com/adempiere/adempiere-site.github.io/es/feed.json","title":" JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://github.com/adempiere/adempiere-site.github.io/es/rss.xml","title":" RSS Feed"}]]},"headers":[{"level":2,"title":"Securing Access to the Application Server and Database","slug":"securing-access-to-the-application-server-and-database","link":"#securing-access-to-the-application-server-and-database","children":[]},{"level":2,"title":"General Security Measures","slug":"general-security-measures","link":"#general-security-measures","children":[]},{"level":2,"title":"Securing the ADempiere Application","slug":"securing-the-adempiere-application","link":"#securing-the-adempiere-application","children":[]},{"level":2,"title":"Securing the Software","slug":"securing-the-software","link":"#securing-the-software","children":[]},{"level":2,"title":"Securing User Passwords","slug":"securing-user-passwords","link":"#securing-user-passwords","children":[]}],"git":{"createdTime":1703621377000,"updatedTime":1703621377000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.32,"words":1297},"filePathRelative":"es/docs/system-administration/securing-your-adempiere.md","localizedDate":"26 de diciembre de 2023","excerpt":"<h2> Securing Access to the Application Server and Database</h2>\\n<p>Servers used in production environments should be setup using industry standard security measures. Here are some suggestions. It is recommended that you seek the advice of your IT department and security experts to provide the highest level of security.</p>","autoDesc":true}')}}]);