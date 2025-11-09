import { useState } from "react"
import docker from "./assets/docker.svg"

function App() {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function sayHelloToServer() {
    setLoading(true)
    setMessage("")

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/hello`)
      if (!response.ok) {
        throw new Error("Server error")
      }

      const data = await response.json()
      setMessage(data.message || "Hello from server!")
    } catch (error) {
      console.error(error)
      setMessage("❌ Could not reach the server.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <img src={docker} alt="docker-compose" className="logo" />
      <h1 className="title">Docker Compose</h1>
      <p className="subtitle">
        Easily manage multi-container Docker applications 🚀
      </p>
      <button className="primary-btn" onClick={sayHelloToServer} disabled={loading}>
        {loading ? "Loading..." : "Say hello to server"}
      </button>
      {message && <p className="server-message">{message}</p>}
    </div>
  )
}

export default App
