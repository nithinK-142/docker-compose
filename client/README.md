
# 🚀 React Client (Docker)

## 🛠️ Build and Run Instructions

```bash
# 🏗️ Build a Docker image named 'react-client' from the current directory
sudo docker build -t react-client .

# ▶️ Run the container interactively, mapping host port 6173 to container port 6173
sudo docker run -p 6173:6173 react-client

# 🧩 Run the container in detached mode (background)
sudo docker run -d -p 6173:6173 react-client

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
sudo docker rmi react-client

# 🔥 Remove all unused containers, images, and networks
sudo docker system prune -f
```

---
