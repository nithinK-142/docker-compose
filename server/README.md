
# Express Server

```bash
# Build Docker image named 'express-server' from current dir
docker build -t express-server .

# Run the container interactively, mapping host port 3300 to container port 3300
docker run -p 3300:3300 express-server

# Run the container in detached mode (background)
docker run -d -p 3300:3300 express-server
```