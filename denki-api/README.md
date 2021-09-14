# Denki API

## Preparação do projeto

Estrutura de diretórios:

```sh
.
└── src
    ├── main
    │   ├── java
    │   └── webapp
    │       └── WEB-INF
    │           └── classes
    │               └── META-INF
    └── test
        └── java
```

Arquivo `pom.xml`

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>br.com.denki</groupId>
  <artifactId>denki-api</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>war</packaging>
  <name>Denki API</name>
  <description>Projeto Denki API</description>
  <properties>
    <failOnMissingWebXml>false</failOnMissingWebXml>
  </properties>
  <dependencies>
    <!-- https://mvnrepository.com/artifact/jakarta.platform/jakarta.jakartaee-api -->
    <dependency>
      <groupId>jakarta.platform</groupId>
      <artifactId>jakarta.jakartaee-api</artifactId>
      <version>8.0.0</version>
      <scope>provided</scope>
    </dependency>
    <!-- Lombok -->
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.18.20</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
  <build>
    <plugins>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <source>11</source>
          <target>11</target>
        </configuration>
        <version>3.8.1</version>
      </plugin>
    </plugins>
  </build>
</project>

```

Arquivo `src/main/webapp/WEB-INF/jboss-web.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE xml>
<jboss-web>
    <context-root>denki-api</context-root>
</jboss-web>

```

Arquivo `src/main/webapp/WEB-INF/classes/META-INF/persistence.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE xml>
<persistence>
    <persistence-unit name="DenkiDS">
        <jta-data-source>java:/DenkiDS</jta-data-source>
    </persistence-unit>
</persistence>
```
