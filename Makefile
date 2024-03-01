DOCKER_COMPOSE=docker compose

start s:
	$(DOCKER_COMPOSE) up -d --remove-orphans

start-with-logs sl:
	$(DOCKER_COMPOSE) up

build b:
	$(DOCKER_COMPOSE) up --build core

stop:
	$(DOCKER_COMPOSE) stop

make console c:
	$(DOCKER_COMPOSE) exec core bash
