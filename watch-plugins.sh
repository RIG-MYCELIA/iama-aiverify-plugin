#!/bin/bash
set -e

while inotifywait -e close_write ./plugins/* &>/dev/null; do 
    docker exec -it aiverify-user_redis_1 redis-cli hdel plugin:lastModified mtime &>/dev/null
    echo "Clear plugin reload cache..."
done
