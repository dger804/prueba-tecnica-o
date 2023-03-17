import { useState } from "react";
import { Link } from "react-router-dom"

export const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">
          Login
        </button>
        <div>
          Don't have an account? Sign Up <Link to="/register">Here</Link>
        </div>
      </form>
    </div>
    </>
  )
}