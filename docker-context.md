
---

# Docker Context Reference
Resolve sync issues between Docker CLI and Docker Desktop

## List Contexts

```bash
docker context ls
```

Sample output:

```
NAME              DESCRIPTION                               DOCKER ENDPOINT                                   ERROR
default           Current DOCKER_HOST based configuration   unix:///var/run/docker.sock                       
desktop-linux *   Docker Desktop                            /home/nithin/.docker/desktop/docker.sock   
```

* `*` → active context
* `ERROR` → shows connection issues (empty if no problems)

## Switch Context

```bash
docker context use desktop-linux
```

Output:

```
desktop-linux
Current context is now "desktop-linux"
```

---