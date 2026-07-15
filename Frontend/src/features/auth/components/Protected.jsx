import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

import React from 'react'



  // create a protected layer that hepls to protect the home page access from unauthorised user/access
  
const Protected = ({children}) => {

  const {loading,user} = useAuth()
  const navigate = useNavigate()

  if(loading){
    return <main><h1>Loading...</h1></main>
  }

  if(!user){
    navigate("/login")
  }

  return children
  
}

export default Protected
