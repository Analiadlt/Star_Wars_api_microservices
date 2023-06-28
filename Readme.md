# Configurar Docker

## Dockerfile 

Crear en cada una de las carpetas principales del gateway y de cada microservicio, los siguientes archivos:

    - Dockerfile
    - .dockerignore

## Creación de imagen y contenedor de Docker para nuestro Gateway y cada microservicio (characters, films, planets), exponiendo su puerto

En la carpeta de cada aplicación, ejecutar los siguientes comandos, 
donde nombre es el nombre de cada alicación, por ejemplo: gateway, characters, films,
planets. no olvidar colocar el punto al final de la instrucción.

    docker build -t nombre .

luego, ejecutar el siguiente comando, donde puerto es el que corresponda a
 localhost y al de Docker (se recomienda colocar el mismo)  y nombre es el que
 corresponda a cada aplicación
 
    docker run -p puerto:puerto nombre


## Creación de una red virtual a la cual se conectarán nuestros contenedores
En la carpeta que contiene gateway y todos los microservicios, ejecutar el siguiente comando:

    docker network create starwars

. Hay que reemplazar "localhost" por el nombre de cada microservicio en gateway.
. Eliminar parar el servidor de gateway y eliminar imagen de gateway.
. Volver a crear imagen de gateway (eliminando la anterior)
. En la carpeta gateway:
    * Ejecutar el siguiente comando para conectar el gateway a la red:

        docker run --network=starwars --name=gateway -p 8000:8000 gateway

. En la carpeta de cada microservicio:

        docker run --network=starwars --name=characters -p 8001:8001 characters

        docker run --network=starwars --name=films -p 8002:8002 films

        docker run --network=starwars --name=planets -p 8003:8003 planets

