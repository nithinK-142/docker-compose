
# React Client

```bash
# Build Docker image named 'react-client' from current dir
docker build -t react-client .

# Run the container interactively, mapping host port 6173 to container port 6173
docker run -p 6173:6173 react-client

# Run the container in detached mode (background)
docker run -d -p 6173:6173 react-client
```