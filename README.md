# RIG AI Verify Plugin

let op! deze repo maakt nog wel gebruik van files van ai verify. clone deze repo in de setup-aiverify/aiverify-user folder. 

Build docker container:
```bash
bash docker-build.sh
```

Start docker containers:
```bash
bash docker-start.sh
```

Stop docker containers:
```bash
bash docker-stop.sh
```

Restart docker environment:
```bash
bash docker-restart.sh
```

Remove cache to reload the plugins:
```bash
docker exec -it aiverify-user_redis_1 redis-cli hdel plugin:lastModified mtime
```

## (Optional) Hot-reload

### Install

Requirement is to install inotify (https://github.com/inotify-tools/inotify-tools/wiki).

#### Linux or WSL

```
sudo apt-get install inotify-tools
```

#### MacOS

Requirement install brew (https://brew.sh/)

```
brew update
brew install inotify-tools
```


### Run watcher

If not already:
```bash
chmod +x watch-plugins.sh
```

Run watcher:
```
./watch-plugins.sh
```
