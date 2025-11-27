# Quinche - CI/CD con Docker y Railway

Aplicación Node.js básica desplegada automáticamente usando GitHub Actions, Docker y Railway.
## 🚀 Características

- **Framework**: Express.js
- **Lenguaje**: JavaScript (ES Modules)
- **CI/CD**: GitHub Actions
- **Despliegue**: Railway
- **Contenedor**: Docke
- **Testing**: Jest

## 📋 Prerrequisitos

- Node.js 22+
- Docker
- Cuenta en Railway
- Repositorio en GitHub

## 🛠️ Instalación y Desarrollo Local

1. **Clonar el repositorio**:
   ```bash
   git clone <tu-repositorio>
   cd quinche
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm start
   ```

4. **Ejecutar tests**:
   ```bash
   npm test
   ```

## 🐳 Docker

### Construir imagen:
```bash
docker build -t quinche .
```

### Ejecutar contenedor:
```bash
docker run -p 3000:3000 quinche
```

## 🚀 Despliegue

### Opción 1: Render (Recomendado - Automático)

1. **Crear cuenta en Render**: Ve a [render.com](https://render.com) y regístrate

2. **Conectar repositorio**:
   - En el Dashboard de Render, haz clic en "New" → "Web Service"
   - Conecta tu cuenta de GitHub
   - Selecciona este repositorio
   - Configura el servicio:
     - **Runtime**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Branch**: `quinche` (o tu rama principal)

3. **Configuración adicional**:
   - **Environment**: Production
   - **Instance Type**: Free (750 horas/mes)
   - El despliegue se activa automáticamente en cada push

### Opción 2: Manual

```bash
# Desplegar localmente
npm start

# O usando Docker
docker build -t quinche .
docker run -p 3000:3000 quinche
```

### CI/CD con GitHub Actions

El workflow actual ejecuta automáticamente:
- ✅ Tests en cada push/PR
- ✅ Build verification
- ✅ Code quality checks
- ✅ Construcción de imagen Docker
- ✅ Publicación en GitHub Container Registry (GHCR)

### Imágenes Docker Publicadas

Cada push genera automáticamente imágenes Docker disponibles en:
```
ghcr.io/adqvelez-cloud/velez-alexis-examen/quinche:latest
ghcr.io/adqvelez-cloud/velez-alexis-examen/quinche:1.0.5
```

**Para usar con Render:**
1. Crea un **nuevo servicio web** en Render
2. Selecciona **"Docker"** como runtime
3. Configura:
   - **Registry**: `ghcr.io`
   - **Image**: `ghcr.io/adqvelez-cloud/velez-alexis-examen/quinche:latest`
4. Render se actualizará automáticamente cuando publiques nuevas versiones

## 📁 Estructura del Proyecto

```
quinche/
├── src/
│   └── index.js          # Aplicación principal Express
├── tests/
│   └── index.test.mjs    # Tests unitarios con Jest
├── .github/
│   └── workflows/
│       └── ci.yml        # Pipeline CI (build + tests)
├── Dockerfile            # Configuración Docker (opcional)
├── jest.config.js        # Configuración de Jest
├── package.json          # Dependencias y scripts
├── .gitignore           # Archivos ignorados
└── readme.md            # Esta documentación
```

## 🔧 Scripts Disponibles

- `npm start`: Inicia el servidor
- `npm test`: Ejecuta los tests
- `npm run build`: Ejecuta el build (opcional)

## 🌐 Endpoints

- `GET /`: Mensaje de bienvenida

## 📝 Notas

- La aplicación usa ES Modules
- Puerto por defecto: 3000
- Rama de despliegue: `quinche`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request