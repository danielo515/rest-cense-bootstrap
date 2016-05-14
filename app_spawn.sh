#!/bin/bash
# Spawns an instance of the application and links it to the mongo container
# it is recomended to call it the first time providing a port number
# consecutive executions can rely on automatic port selection

if [[ -z $1 ]];then
echo No port provided, trying latest plus one
    if [[ -e lastPort ]];then
        read PORT < lastPort
        PORT=$((PORT+1))
    else
        echo No lastPort file found, trying 8081
        PORT=8081
    fi
else
PORT=$1
fi

echo $PORT > lastPort

docker run -d --link mongo-cense-db:mongo  -p $PORT:3000 danielo515/cense