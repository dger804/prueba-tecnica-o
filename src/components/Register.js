import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth} from "../context/authContext";

export const Register = () =>{
  const [user, setUser] = useState({
    email: "",
    password: "",
    birthday: ""
  })
  const [error, setError] = useState()
  
  const { signup } = useAuth()
  const navigate = useNavigate()

  const getAge = (dateString) => {
    const today = new Date()
    const birthDate = new Date(dateString)
    const age = today.getFullYear() - birthDate.getFullYear()

    return age
  }

  const handleChange = ({target: {name, value}}) => setUser({...user, [name]: value})  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateBirtday = new Date(user.birthday).toISOString().slice(0, 10)
    if (getAge(validateBirtday) < 18) {
      alert(`La persona debe ser mayor de 18 años y tiene ${getAge(validateBirtday)} año(s)`)
    }else{
      try{
        await signup(user.email, user.password, user.birthday)
        navigate("/")
      }catch(error){
        setError(error.message)
      }
    }    
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
        {error && <p>{error}</p>}
        <button className="bg-white p-2 rounded" type="submit">
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