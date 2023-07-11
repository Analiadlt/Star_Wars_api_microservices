# Configurar Docker

**IMPORTANTE: Correr Docker Desktop**

En primer lugar, hay que tener en cuenta que desde 'gateway' se configure el puerto en el index.js

## 1. Dockerfile 

Crear en cada una de las carpetas principales del gateway y de cada microservicio, los siguientes archivos:

    - Dockerfile
    - .dockerignore

## 2. Creación de imagen y contenedor de Docker para nuestro Gateway y cada microservicio (characters, films, planets), exponiendo su puerto

En la carpeta de cada microservicio, ejecutar los siguientes comandos, 
donde nombre es el nombre de cada alicación, por ejemplo: gateway, characters, films,
planets. no olvidar colocar el punto al final de la instrucción.

    docker build -t nombre .
ej:
    docker build -t characters .
    docker build -t films . 
    docker build -t planets .
    docker build -t gateway .
    docker build -t database .

luego, ejecutar el siguiente comando, donde puerto es el que corresponda a
 localhost y al de Docker (se recomienda colocar el mismo)  y nombre es el que
 corresponda a cada aplicación
 
    docker run -p puerto:puerto nombre
ej:
    docker run -p 8000:8000 gateway
    docker run -p 8001:8001 characters
    docker run -p 8002:8002 films
    docker run -p 8003:8003 planets
    docker run -p 8004:8004 database


## 3. Creación de una red virtual a la cual se conectarán nuestros contenedores
En la carpeta que contiene gateway y todos los microservicios, ejecutar el siguiente comando:

    docker network create starwars

. Hay que reemplazar "localhost" por el nombre de cada microservicio en gateway.
. Cuando se realizan cambios en un microservicio, en este caso en el gateway:
    - parar el servidor de gateway y eliminar imagen de gateway.
    - Volver a crear imagen de gateway (eliminando la anterior)

. En la carpeta gateway:
    * Ejecutar el siguiente comando para conectar el gateway a la red:

        docker run --network=starwars --name=gateway -p 8000:8000 gateway

. En la carpeta de cada microservicio:

        docker run --network=starwars --name=characters -p 8001:8001 characters
        docker run --network=starwars --name=films -p 8002:8002 films
        docker run --network=starwars --name=planets -p 8003:8003 planets
        docker run --network=starwars --name=database -p 8004:8004 database


# Docker Compose

## 1. Crear el archivo docker-compose.yml

Definir en la carpeta raíz del proyecto el archivo que contiene la siguiente configuración:

```
# versión de Docker
version: '3'

services:
  gateway:
    container_name: gateway
    restart: always
    build: ./gateway
    ports: 
      - "8000:8000"

  characters:
    container_name: characters
    restart: always
    build: ./characters
    ports: 
      - ":8001"
      
  films:
    container_name: films
    restart: always
    build: ./films
    ports: 
      - ":8002"
        
  planets:
    container_name: planets
    restart: always
    build: ./planets
    ports: 
      - ":8003"
          
  database:
    container_name: database
    restart: always
    build: ./database
    ports: 
      - ":8004"

```

## 2. En el directorio raíz, correr los siguientes comandos desde consola

        docker-compose build

        docker compose up

    y ya están configurados y corriendo nuestros sevicios en el PUERTO LOCAL!!



# Correr el proyecto en la NUBE

## 1. Modificar los puertos en el archivo docker-compose.yml

```
# versión de Docker
version: '3'

services:
  gateway:
    container_name: gateway
    restart: always
    build: ./gateway
    ports: 
      - "8000:8000"

  characters:
    container_name: characters
    restart: always
    build: ./characters
    ports: 
      - "8001:8001"
      
  films:
    container_name: films
    restart: always
    build: ./films
    ports: 
      - "8002:8002"
        
  planets:
    container_name: planets
    restart: always
    build: ./planets
    ports: 
      - "8003:8003"
          
  database:
    container_name: database
    restart: always
    build: ./database
    ports: 
      - "8004:8004"

```

## 2. IMPORTANTE: subir el proyecto a GitHub para que lo pueda tomar la máquina virtual (VM) 

