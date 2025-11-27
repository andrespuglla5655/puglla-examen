# ============================
#  🔧 Configuración del proyecto
# ============================

APP_NAME=puglla-examen
GHCR_USER=andrespuglla5655
IMAGE=ghcr.io/$(GHCR_USER)/$(APP_NAME)

VERSION=1.0.5

# ============================
#  📦 Comandos para desarrollo
# ============================

install:
	@echo "📦 Instalando dependencias..."
	pip install -r requirements.txt

run:
	@echo "🚀 Iniciando app Flask..."
	python app.py


# ============================
#  🐳 Docker (local)
# ============================

docker-build:
	@echo "🐳 Construyendo imagen Docker local..."
	docker build -t $(APP_NAME):local .

docker-run:
	@echo "▶️ Ejecutando contenedor en puerto 5000..."
	docker run -p 5000:5000 $(APP_NAME):local


# ============================
#  📤 Publicación en GHCR
# ============================

docker-login:
	@echo "🔐 Loggeando en GHCR..."
	echo "$$GHCR_PAT" | docker login ghcr.io -u $(GHCR_USER) --password-stdin

docker-push:
	@echo "📤 Publicando imagen en GHCR..."
	docker tag $(APP_NAME):local $(IMAGE):$(VERSION)
	docker tag $(APP_NAME):local $(IMAGE):latest
	docker push $(IMAGE):$(VERSION)
	docker push $(IMAGE):latest


# ============================
#  🐳 Docker Swarm (VPS)
# ============================

deploy:
	@echo "🚀 Desplegando en Docker Swarm..."
	ssh -p $$VPS_SSH_PORT $$VPS_USER@$$VPS_HOST "\
		echo \"$$GHCR_PAT\" | docker login ghcr.io -u $(GHCR_USER) --password-stdin && \
		docker pull $(IMAGE):latest && \
		docker stack deploy --with-registry-auth -c /home/$$VPS_USER/deploy/stack.yml $(APP_NAME) \
	"


# ============================
#  🧹 Limpieza
# ============================

clean:
	@echo "🧹 Limpiando Docker..."
	docker system prune -af
