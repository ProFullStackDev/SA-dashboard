## Setting up the project

The Atlas is made up of a ReactJS frontend app, a Django backend api, and a PostGIS database.

Some of the data files required to run the South Australia dataset are not included in this repo and must be downloaded separately. Instructions can be found in [data/datasets/south_australia](https://github.com/kevinorris/SA-dashboard/tree/backend-api/data/datasets/south_australia).

## Running the project

The recommended way to run the Atlas is via Docker Compose. For instructions on how to run each service locally, see their respective README files.

### Development

Docker Compose (recommended):

```sh
docker-compose up
open http://localhost:3000/
```

Run just the frontend locally:

```sh
docker-compose up -d postgis postprocessor api
cd frontend
npm install
npm start

open http://localhost:3000/
```

### Production

```sh
docker-compose -f docker-compose-prod.yml up
open http://localhost/
```
