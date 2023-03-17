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
    const validateBirthday = new Date(user.birthday).toISOString().slice(0, 10)
    if (getAge(validateBirthday) < 18) {
      alert(`La persona debe ser mayor de 18 años y tiene ${getAge(validateBirthday)} año(s)`)
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
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Register</h2>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      </div>
    </div>
    </>
  )
}