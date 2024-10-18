import { useState } from "react"
import "./index.css"

export const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formData = {
          username,
          password
        }
        console.log(formData);
    }
    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="password">Password</label>                        
                    <input type="password" name="password" required autoComplete="off" value={password} onChange={(e) => setpassword(e.target.value)}/>
                    <button type="submit">Login</button>
                    
                </form>
            </div>
        </div>

    )
}