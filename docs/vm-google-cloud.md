# VM en la NUBE

Para poder correr nuestro proyecto en una VM, debemos:

## 1°. Modificar los puertos en el archivo docker-compose.yml

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

## 2°. IMPORTANTE: subir el proyecto a GitHub para que lo pueda tomar la máquina virtual (VM) 

## 3°. Creación de la VM (virtual machine) en GOOGLE CLOUD

- Ir a la consola de Google Cloud (para ésto se debe estar registrado y logueado)

### 3.1. Creación de una VM
    
  - Seleccionar la opción "Crear de una VM"
  
  - En Firewall, activar HTTP y HTTPS

  - Presionar el botón <**Crear**>


### 3.2 Poner en funcionamiento la app en la VM
    
  - Seleccionar de la lista, nuestra VM y nos muestra la información correspondiente.

  - Seleccionar de la pestaña **SSH** la opción **"Abrir en otra ventana del navegador"**

  - Ahora nos muestra la Consola de nuestra VM, acá debemos ejecutar los siguientes comandos, que es todo lo que necesita nuestra app para correr:

    1°-> sudo apt update

    2°-> sudo apt install git

    3°-> sudo apt install docker.io

    4°-> sudo apt install docker-compose


### 3.3. Configurar GitHub para que podamos clonar el repo en la VM
    
  1°- Generar clave SSH, en consola correr el siguiente comando, el tipo de clave es ed25519 y debemos colocar el email con el que estamos registrados en Google Cloud:

    - ssh-keygen -t ed25519 -c "email@gmail.com"

  2°- Leer la clave SSH para utilizarla en GitHub

    - cat ~/.ssh/id_ed25519.pub
  
  3°- Copiamos la clave ssh que nos aparece en consola

  4°- En GitHub, ingresamos al repo y en Settings seleccionamos del menú la opción "SSH y GPG keys", luego "New SSH key", le colocamos un title "vm_star_wars" y en **key** copiamos la clave que nos dio la consola y comienza con **'ssh'**. Luego seleccionamos **Add SSH key**.

  5°- Para poder clonar el repo, debemos copiar el código que aparece en Code->Clone->SSH

  6°- En la consola colocar el comando: **git clone** seguido del código que acabamos de copiar.

  7°- Ahora ya tenemos el repo clonado en la VM. Debemos crear el archivo **.env** que contiene la constante **MONGO_URI** para que se pueda conectar la DB a MongoDB. Para ésto, nos posicionamos en la carpeta **database** y corremos el siguiente comando que nos crea el archivo **.env**:

    - echo "MONGO_URI=mongodb+srv://<user>:<password>@dbupskilling.xht53oa.mongodb.net/<name DB>" > .env

  8°- Ahora volvemos al directorio raíz de nuestra app y ejecutamos el siguiente comando:

    - sudo docker-compose build

  9°- Ahora ejecutamos:

      - sudo docker-compose up

   y Listo!!!!

  10°- Para poder probar en Postman o Insomnia, debemos:

  - En Google Cloud, buscar en la Información de nuestra VM, el item **Interfaces de red**, seleccionamos el enlace <default> que aparece en **Red** y nos muestra **Detalles de la red de VPC**. 
  - Seleccionamos **Firewall** del menú lateral.
  - Luego, en el listado que aparece, selecionamos el enlace <*default-allow-http*>
  - Ahora, estamos en **Detalles de la regla de firewall**, seleccionamos <*EDITAR*>
  - En **TCP**, indicar el puerto de nuestro gateway que es  **8000** y guardamos.
  - Copiamos desde **Rangos de IP externas**, el valor de la IP para poder usarla (ej:  34.125.59.148).
  - Luego desde Insomnia o Postman podemos acceder a: **34.125.59.148:8000/characters**, por ejemplo.