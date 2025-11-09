import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

app.get("/", (req, res) => res.send("Server is up & running!!"))

app.get("/hello", (req, res) => res.json({ message: "Hello from Server" }))

const PORT = process.env.PORT || "3300"
app.listen(PORT, () => console.log(`Server is up & running on http://localhost:${PORT}`))