# Full Stack Portfolio Back-End

Before getting started, you should have a basic understanding of Node.js, Express, and PostgreSQL. PostgreSQL needs to be installed and set up on your local machine.

### Getting Started
- Clone this repo
- `cd` to the directory where the repo was cloned
- `npm install` to install the dependencies
- create a `.env` file in the outmost level and make sure it contains:
    - PORT=3816 (or your chosen port number)
    - PG_HOST=localhost
    - PG_PORT=5432
    - PG_DATABASE=travel_dev (the name of the db)
    - PG_USER=postgres
    - SECRET_TOKEN= (a value will be needed for the JWT auth system)
    - SECRET_RTOKEN= (a value will be needed for the JWT auth system)
- Run `npm run dbinit` to create a DB
- Run `npm run dbseed` to add example seed data
- Run `npm run dev` to start the server

### For more details on the routes you may check the controller files

### Visit the repo for the front-end, with the main project readme
[Front-End Repo](https://github.com/Daniel-Mazzilli/full-stack-portfolio-front-end)