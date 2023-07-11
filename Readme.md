# Microservicios

Esta app ha sido desarrollada durante el curso de **HENRY - Upskilling Backend**

## Módulo 1: Microservicios y configuración de Docker

- Una de las principales características de la arquitectura de microservicios es la comunicación a través de interfaces bien definidas. Los microservicios se comunican entre sí a través de interfaces, como API RESTful, mensajes asincrónicos o eventos, lo que permite una mayor desacoplamiento entre los servicios y facilita la integración y evolución de la aplicación en el tiempo. 

- Docker: "Es una plataforma de virtualización a nivel de sistema operativo que permite la creación, empaquetado y distribución de aplicaciones en contenedores. Los contenedores Docker son aislados y encapsulan todo lo necesario para que una aplicación se ejecute de manera consistente en cualquier entorno, independientemente de las diferencias en la infraestructura subyacente." RedHat.com

### => [Configurando Docker](docs/docker-configuration.md)

## Módulo 2: MongoDB y MongoDB Atlas 

- Integrar una Base de Datos No SQL, como MongoDB, en una arquitectura de microservicios.
Crear y configurar un cluster de datos de MongoDB en MongoDB Atlas, utilizando las herramientas disponibles en la capa gratuita.
- Delegar la comunicación de datos a un microservicio especializado, separando así la lógica de las consultas a la Base de Datos de los demás microservicios.
- Utilizar la librería Mongoose para comunicarte con la Base de Datos MongoDB desde Javascript.


## Módulo 3: Docker Compose

- Comprender el proceso de despliegue de una aplicación utilizando Docker Compose.
- Orquestar microservicios utilizando Docker Compose para asegurar un funcionamiento unificado en una Máquina Virtual.
- Desplegar la aplicación de manera efectiva y exitosa.

### Ventajas de Docker Compose

1. Simplifica la administración de aplicaciones en entornos de desarrollo, pruebas y producción.
2. Permite crear y arrancar todos los contenedores definidos en el archivo de configuración con comandos simples.
3. Facilita la detención y eliminación de todos los contenedores y recursos asociados.
4. Es portátil, lo que permite compartir el archivo de configuración con otros miembros del equipo.
5. Permite la colaboración y la replicación del entorno de desarrollo en diferentes máquinas.
6. Es compatible con diferentes plataformas.
7. Se integra fácilmente con otras herramientas de Docker, como Docker Swarm o Kubernetes.
8. Permite gestionar entornos de producción más complejos.

### => [Configurando Docker Compose](docs/docker-compose.md)

### Máquinas virtuales

Una máquina virtual (VM, por sus siglas en inglés) es una representación virtual de un sistema informático completo, que incluye hardware y software, y que se ejecuta en un entorno aislado dentro de un host físico. 

Una máquina virtual consta de dos componentes principales: el *hipervisor* y la *imagen* de la máquina virtual.

Las máquinas virtuales se utilizan ampliamente en entornos de servidores para consolidar infraestructuras, mejorar la flexibilidad, facilitar la migración y aumentar la eficiencia energética. También son útiles para el desarrollo y la prueba de aplicaciones, ya que permiten la creación de entornos aislados y reproducibles.

### => [Configurando VM - Google Cloud](docs/vm-google-cloud.md)
