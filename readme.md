# LuckyShine API

LuckyShine api has been implemented.


## Installation

Step 1: Prerequisites

    * Install docker
        * Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/
        * Windows: https://docs.docker.com/docker-for-windows/install/
    * Install docker-compose
        * Ubuntu: https://docs.docker.com/compose/install/
        * Windows: Not necessary. Windows docker installer has docker-composer included.

    Run `docker -v` and `docker-compose -v` to make sure the installation.

Step 2: Install NodeJS and packages

   * Clone repository and go to project directory.
   * Run `cp .env.example .env`.
   * Run `make` or `make start`. If it's not working, then try to use `sudo` as `sudo make start`.
   * Run `make migrate`.
   * Run `make seed`.

    * LuckyShine API via http://localhost:7000

## Migrations
   * Migrate script `make migrate`
   * Migrate seed `make seed`

## Usages
```
Enpoint 1:
GET http://localhost:7000/api/v1/treasures?distance=1&priceValue=$15,$30&latitude=1.3273451&longitude=103.8756757

Endpoint 2:
POST http://localhost:7000/api/v1/users/login
{
	"email": "u1@luckyshine.xyz",
	"password": "luckyshine001"
}
```

## Tests
  * Run integration test `make test`

## Lint
  * Run Lint `make lint`
  * Fix Lint `make lint-fix`

## Technical Notes

1) Added prefix `api/v1` for each api route.
2) Added Abstract controller with the implemention of default CRUD. Though it has not used for this case but its useful and reduce a big efforts.
3) The Bonus Enpoint 2 has been implemented for login. I think this is required to track the user who collect how much money.
4) For the sake of simplicity, password has not been encrypted.
