
# 🚀 Express Server (Docker)

## 🛠️ Build and Run Instructions

```bash
# 🏗️ Build a Docker image named 'express-server' from the current directory
sudo docker build -t express-server .

# ▶️ Run the container interactively, mapping host port 3000 to container port 3300
sudo docker run -p 3000:3300 express-server

# 🧩 Run the container in detached mode (background)
sudo docker run -d -p 3000:3300 express-server

# 📋 List all running containers
sudo docker ps

# 📦 List all containers (including stopped ones)
sudo docker ps -a

# 📜 View logs from a running container
sudo docker logs <container_id>

# 🧑‍💻 Access a running container's shell (useful for debugging)
sudo docker exec -it <container_id> /bin/sh

# 🛑 Stop a running container
sudo docker stop <container_id>

# 🧹 Remove a stopped container
sudo docker rm <container_id>

# ❌ Remove an image
sudo docker rmi express-server

# 🔥 Remove all unused containers, images, and networks
sudo docker system prune -f
```

---
