import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth} from "../context/authContext";

export const Login = () =>{
  const [user, setUser] = useState({
    email: "",
    password: "",
    birthday: ""
  })
  const [error, setError] = useState()

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({target: {name, value}}) => setUser({...user, [name]: value})  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try{
      await login(user.email, user.password)
      navigate("/")
    }catch(error){
      setError(error.message)
    }
  }

  return(
    <>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Email</div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        {error && <p>{error}</p>}
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