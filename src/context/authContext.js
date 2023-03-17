import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase";

export const authContext = createContext()

export const useAuth = () =>{
  const context = useContext(authContext)

  return context
}

export const AuthProvider = ({children}) =>{
  const[user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const signup = (email, password, birthday) => 
    createUserWithEmailAndPassword(auth, email, password, birthday)
  
  const login = (email,password ) => 
    signInWithEmailAndPassword(auth, email, password)

  const logout = () =>signOut(auth)

  useEffect(()=>{
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setIsLoading(false)
    })
  },[])
  return (
    <authContext.Provider value={{signup, login, user, logout, isLoading}}>
      {children}
    </authContext.Provider>
  )
}