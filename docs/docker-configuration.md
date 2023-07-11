# Configurar Docker

**IMPORTANTE:**
- Instalar y ejecutar Docker Desktop.

- En primer lugar, hay que tener en cuenta que desde 'gateway' se configure el puerto en el index.js

[Archivo index.js del microservicio **Gateway**](../gateway/index.js)

## 1. Dockerfile 

Crear en cada una de las carpetas principales del gateway y de cada microservicio, los siguientes archivos:

[Dockerfile](../gateway/index.js)

[.dockerignore](../gateway/.dockerignore)

## 2. Docker: Crear imagen y contenedor para cada microservicio

Se debe crear una imagen y un contenedor de Docker para nuestro Gateway y cada microservicio (characters, films, planets), exponiendo sus respectivos puertos.

1°. En la carpeta de cada microservicio, ejecutar los siguientes comandos (donde "nombre" es el nombre de cada microservicio) y no olvidar colocar el punto al final de la instrucción.

    docker build -t nombre .

comandos utilizados:

    docker build -t characters .
    docker build -t films . 
    docker build -t planets .
    docker build -t gateway .
    docker build -t database .

2°. Ejecutar el siguiente comando, donde "puerto" es el que corresponda a
 localhost y al de Docker (se recomienda colocar el mismo) y "nombre" es el que
 corresponda a cada aplicación.
 
    docker run -p puerto:puerto nombre

comandos utilizados:

    docker run -p 8000:8000 gateway
    docker run -p 8001:8001 characters
    docker run -p 8002:8002 films
    docker run -p 8003:8003 planets
    docker run -p 8004:8004 database


## 3. Docker: Crear red virtual para conectar todos los microservicios

Se debe crear una red virtual a la que se conectarán nuestros contenedores.
1. En la carpeta raíz que contiene gateway y todos los microservicios, ejecutar el siguiente comando:

        docker network create starwars

2. Hay que reemplazar "localhost" por el nombre de cada microservicio en gateway en index.js.

  Ejemplo: 
   - trabajando con puertos independientes: 
    target: "http://localhost:8001"
  - trabajando con los microservicios conectados a la red:  
  target: "http://characters:8001"

3. Cuando se realizan cambios en un microservicio, en este caso en el gateway:
    - Parar el servidor de gateway y eliminar imagen de gateway.
    - Volver a crear imagen de gateway.


4. En la carpeta gateway, ejecutar el siguiente comando para conectar el gateway a la red:

        docker run --network=starwars --name=gateway -p 8000:8000 gateway

5. En la carpeta de cada microservicio:

        docker run --network=starwars --name=characters -p 8001:8001 characters
        docker run --network=starwars --name=films -p 8002:8002 films
        docker run --network=starwars --name=planets -p 8003:8003 planets
        docker run --network=starwars --name=database -p 8004:8004 database
