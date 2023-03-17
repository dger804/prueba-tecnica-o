import { useAuth } from "../context/authContext"

export const NavBar = () => {
  const {user, logout, isLoading} = useAuth()
  
  if(isLoading) return <h1>Loading...</h1>

  const handleLogout = async () => {
    await logout()
  }

  return(
  <nav>
    { 
      user && (
        <>
        <div className="mb-2 sm:mb-0">
          <h1>Welcome {user.email}</h1>
        </div>
        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
        </>
      ) 
    } 
  </nav>
  )
}