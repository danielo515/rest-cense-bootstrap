# Bootstrap scripts for mongodb-rest-cense

This is a collection of scripts for bootstraping my example app
[mongodb-rest-cense](https://github.com/danielo515/mongodb-rest-cense)

Most of the script names are self-explanatory, so if you don't find instructions below for a particular script ,
try to guess yourself what it does from its name. A ***nix** like environment is required for scripts executions.
Scripts should have access to the **docker** executable in the system's `PATH`.
If you are going to run them on `Windows` or `OS X` do it in *Docker's Quickstart Terminal* 
wich is included as part of 
[docker toolbox](https://www.docker.com/products/docker-toolbox)

## First run
This scripts are all that you need to get the application up and running.  
For starting from scratch and bootstraping everything execute the script `bootstrap.sh` .
This is the sequence the script will follow:

1. It will generate the required MongoDB docker image. This step also populates the database with some test data (please check [Test data](#Test data) )
1. It will generate the required application docker image
1. Starts the database in a mongo container.
1. Spawns two application instances in two docker containers linked with the mongodb container

## Start an application instance

Once you have a MongoDB container running execute `app_spawn.sh` 
to spawn a new instance of the application linked with the mongo container. 
It is a **good idea** to provide a port number to the script in the first execution. 
Consecutive executions without port number will use consecutive port numbers, so:

```shell
./app_spawn.sh 8081 # app instance is listening at port 8081
./app_spawn.sh # another instance listening at 8082
./app_spawn.sh # another instance listening at 8083
```

## Test data

By default, the mongo image comes with some test data built-in.
To alter this data, add more test cities or increase the number of test records, please modify `populateDB.js` before building database's image.
You can rebuild database's image by running `database_build.sh`