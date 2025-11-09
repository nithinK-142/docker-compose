# Docker CMDs

```bash
# List all running containers
docker ps

# List all containers (including stopped ones)
docker ps -a

# View logs from a running container
docker logs container_id

# Access a running container's shell (useful for debugging)
docker exec -it container_id /bin/sh

# Stop a running container
docker stop container_id

# Remove a stopped container
docker rm container_id

# Remove an image
docker rmi image-name

# Remove all unused containers, images, and networks
docker system prune -f
```