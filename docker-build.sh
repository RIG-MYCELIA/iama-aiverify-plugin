#!/bin/bash

docker build --build-arg UID=$(id -u) --build-arg GID=$(id -g) ${@:1} -t aiverify:0.9 .

