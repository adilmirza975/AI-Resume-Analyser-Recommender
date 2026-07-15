import { createContext,useState,useEffect } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext()




// the whole application (app.jsx) should be wrapped under AuthProvider so that the entire aplication can get the access of user,setUser,loading,setLoading

export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      const getAndSetuser = async() =>{
        const data = await getMe()
        setUser(data.user)
        setLoading(false)
      }
      getAndSetuser()
    },[])



    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

    
}



