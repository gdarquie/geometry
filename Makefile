DOCKER_COMPOSE=docker compose -f $(GEOMETRY_ROOT)/docker/compose/docker-compose.yaml

start s:
	$(DOCKER_COMPOSE) up -d --remove-orphans

start-with-logs sl:
	$(DOCKER_COMPOSE) up

build b:
	$(DOCKER_COMPOSE) up --build geometry -d && docker cp geometry_node:/usr/geometry/back/node_modules ./back/node_modules 

stop:
	$(DOCKER_COMPOSE) stop

console c:
	$(DOCKER_COMPOSE) exec geometry bash

logs l:
	$(DOCKER_COMPOSE) logs -f

run-console rc:
	$(DOCKER_COMPOSE) run --rm geometry bash

webpack w:
	$(DOCKER_COMPOSE) exec geometry npm run build

