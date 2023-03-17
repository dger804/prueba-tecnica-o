import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

export const authContext = createContext()

export const useAuth = () =>{
  const context = useContext(authContext)

  return context
}

export const AuthProvider = ({children}) =>{

  const signup = (email, password, birthday) => 
    createUserWithEmailAndPassword(auth, email, password, birthday) 

  return (
    <authContext.Provider value={{signup}}>
      {children}
    </authContext.Provider>
  )
}