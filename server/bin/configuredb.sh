#!/bin/bash
export PGPASSWORD='node_password'
database="renewable-energy"
echo "Configuring database: $database"

dropdb -U node_user renewable-energy
createdb -U node_user renewable-energy

psql -U node_user renewable-energy < ./bin/sql/renewable-energy.sql

echo "$database configured"