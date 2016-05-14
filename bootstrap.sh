#!/bin/bash

./database_build.sh
./app_build.sh
./database_start.sh
./app_spawn.sh 8082
./app_spawn.sh