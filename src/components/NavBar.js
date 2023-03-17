import { useAuth } from "../context/authContext"

export const NavBar = () => {
  const {user, logout, isLoading} = useAuth()
  
  if(isLoading) return <h1>Loading...</h1>

  const handleLogout = async () => {
    await logout()
  }

  return(
  <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    { 
      user && (
        <>
         <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div>
              <h1>Welcome {user.email}</h1>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>logout</button>
            </div>
         </div>
        </>
      ) 
    } 
  </nav>
  )
}