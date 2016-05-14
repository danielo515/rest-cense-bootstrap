#!/bin/bash
# Runs all the scripts in the correct order to bootstrap the application.
# Generates the required images and containers.
# Spawsn two instances of the application connected to the same database container

./database_build.sh
./app_build.sh
./database_start.sh
./app_spawn.sh 8082
./app_spawn.sh