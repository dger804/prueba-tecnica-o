import { useState } from "react";
import { Link } from "react-router-dom"

export const Register = () =>{
  const [user, setUser] = useState({
    email: "",
    password: "",
    birthday: ""
  })  

  const handleChange = ({target: {name, value}}) => setUser({...user, [name]: value})  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)

  }

  return(
    <>
    <div>
      <h2>Register</h2>
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
        <div>
          <div>Re-type Password</div>
          <input
            type="password"
            name="repassword"
            onChange={handleChange}
          />
        </div>
        <div>
          <div>Date of Birthday</div>
          <input
            type="date"
            name="birthday"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login here</Link>
        </div>
      </form>
    </div>
    </>
  )
}