# Docker Compose

## 1. Definir el archivo docker-compose.yml

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

## 2. Ejecutando Docker compose
En el directorio raíz, correr los siguientes comandos desde consola

    docker-compose build

    docker compose up

y ya están configurados y corriendo nuestros sevicios en el PUERTO LOCAL!!