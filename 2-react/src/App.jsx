import { useState } from "react"
import "./App.css"

function App() {
  const [loginInfo, setLoginInfo] = useState({ email: "", code: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, code } = loginInfo
    fetch(`http://localhost:4000/api/auth/login/${email}`, {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log({ resData })
        window.location.href = "/sales"
      })
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  return (
    <>
      <h1>Login</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="code"
            placeholder="code"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  )
}

export default App
