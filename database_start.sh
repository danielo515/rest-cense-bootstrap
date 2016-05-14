#!/bin/bash
# Starts the only required database container
# Don't runt this more than once

docker run --name mongo-cense-db -d danielo515/database