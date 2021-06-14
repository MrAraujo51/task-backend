#!/bin/bash
set -e
export PGPASSWORD=$DATABASE_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$DATABASE_USERNAME" --dbname "$DATABASE_NAME" <<-EOSQL
  CREATE USER docker WITH PASSWORD 'docker';
  CREATE DATABASE test;
  GRANT ALL PRIVILEGES ON DATABASE test TO docker;
  \connect test docker
  BEGIN;

  COMMIT;
EOSQL