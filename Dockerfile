# Imagen base
FROM node:22

# Crea el directorio de la app
WORKDIR /app

# Copia archivos de dependencias primero (para aprovechar caché de Docker)
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto (usa el mismo que en tu app)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
