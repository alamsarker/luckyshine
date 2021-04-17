API=lucky-shine-api

.PHONY : start stop migrate seed test lint lint-fix

start:
	docker-compose down
	docker-compose up

api:
	docker exec -it $(API) bash

migrate:
	docker exec -it $(API) bash -c 'npx sequelize-cli db:migrate'

seed:
	docker exec -it $(API) bash -c 'npx sequelize-cli db:seed:all'

test:
	docker exec -it $(API) bash -c 'npm run test-integration'

lint:
	docker exec -it $(API) bash -c 'npm run lint'

lint-fix:
	docker exec -it $(API) bash -c 'npm run lint:fix'
stop:
	docker-compose down
