# Nombre del proyecto e imagen
APP_NAME=proyecto-alexis
GHCR_USER=adqvelez-cloud
IMAGE=ghcr.io/$(GHCR_USER)/$(APP_NAME)

# ============================
#  📦 Comandos para desarrollo
# ============================

install:
	@echo "📦 Instalando dependencias..."
	npm install

build:
	@echo "🏗️  Generando build..."
	npm run build

start:
	@echo "🚀 Iniciando app local..."
	npm start


# ============================
#  🐳 Comandos Docker (local)
# ============================

docker-build:
	@echo "🐳 Construyendo imagen Docker..."
	docker build -t $(APP_NAME):local .

docker-run:
	@echo "▶️ Ejecutando contenedor en puerto 3000..."
	docker run -p 3000:3000 $(APP_NAME):local


# ============================
#  📤 Publicar en GHCR
# ============================

docker-login:
	@echo "🔐 Loggeando a GHCR..."
	echo "$$GHCR_TOKEN" | docker login ghcr.io -u $(GHCR_USER) --password-stdin

docker-push:
	@echo "📤 Enviando imagen a GHCR (latest)..."
	docker tag $(APP_NAME):local $(IMAGE):latest
	docker push $(IMAGE):latest


# ============================
#  🐳 Docker Swarm (VPS)
# ============================

deploy:
	@echo "🚀 Deploy manual a Docker Swarm..."
	ssh -p $$VPS_PORT $$VPS_USER@$$VPS_HOST "\
		docker pull $(IMAGE):latest && \
		docker stack deploy -c /home/$$VPS_USER/deploy/docker-stack.yml $(APP_NAME) \
	"

# ============================
#  🧹 Limpieza
# ============================

clean:
	@echo "🧹 Limpiando..."
	docker system prune -af
