
# 🚀 React Client (Docker)

## 🛠️ Build and Run Instructions

```bash
# 🏗️ Build a Docker image named 'react-client' from the current directory
docker build -t react-client .

# ▶️ Run the container interactively, mapping host port 6173 to container port 6173
docker run -p 6173:6173 react-client

# 🧩 Run the container in detached mode (background)
docker run -d -p 6173:6173 react-client

# 📋 List all running containers
docker ps

# 📦 List all containers (including stopped ones)
docker ps -a

# 📜 View logs from a running container
docker logs <container_id>

# 🧑‍💻 Access a running container's shell (useful for debugging)
docker exec -it <container_id> /bin/sh

# 🛑 Stop a running container
docker stop <container_id>

# 🧹 Remove a stopped container
docker rm <container_id>

# ❌ Remove an image
docker rmi react-client

# 🔥 Remove all unused containers, images, and networks
docker system prune -f
```

---
