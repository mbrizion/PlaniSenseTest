#!/bin/bash

export PGUSER="trees"
export PGPASSWORD="changeme"
export PGPORT="5433"
export PGHOST="localhost"
export PGDB="paristrees"

cd initdb

psql -U $PGUSER -h $PGHOST -p $PGPORT -a -f ./seed.sql $PGDB
psql -U $PGUSER -h $PGHOST -p $PGPORT -c "\copy trees FROM '$PWD/trees.csv' DELIMITER ';' CSV HEADER;" $PGDB
