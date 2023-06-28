# instala de node
FROM node:16

# define la carpeta app como origen de nuestra aplicación
WORKDIR /app

# copia los archivos package.json y package-lock.json a la carpeta app
COPY package*.json ./

# instala todas las dependencias
RUN npm install

# copia todos los archivos y carpetas de origen (la compu) destino (contenedor de Docker) 
COPY . .

# expone el puerto 8001
EXPOSE 8003

# iniciar la aplicación
CMD [ "npm", "start"]