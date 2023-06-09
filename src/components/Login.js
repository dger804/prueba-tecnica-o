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
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Login</h2>
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
          {error && <p>{error}</p>}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Login
          </button>
          <div>
            Don't have an account? Sign Up <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/register">Here</Link>
          </div>
        </form>
      </div>
      </div>
    </div>
    </>
  )
}