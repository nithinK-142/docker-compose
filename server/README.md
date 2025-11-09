
# 🚀 Express Server (Docker)

## 🛠️ Build and Run Instructions

```bash
# 🏗️ Build a Docker image named 'express-server' from the current directory
docker build -t express-server .

# ▶️ Run the container interactively, mapping host port 3300 to container port 3300
docker run -p 3300:3300 express-server

# 🧩 Run the container in detached mode (background)
docker run -d -p 3300:3300 express-server

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
docker rmi express-server

# 🔥 Remove all unused containers, images, and networks
docker system prune -f
```

---
