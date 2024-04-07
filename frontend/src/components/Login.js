import React from 'react'
import  { useContext } from "react"
import  { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App"


const Login = () => {
    const navigate = useNavigate()

    const {setToken} = useContext(UserContext)
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const toLog = ()=>{
    const body = {email,password}
    axios.post("http://localhost:5001/users/login",body).then((result)=>{
        console.log(result.data);
        setToken(result.data.token)
        localStorage.setItem("token",result.data.token)
        setMessage(result.data.message)
        navigate("/home")
    }).catch((err)=>{
        console.log(err.response);
        setMessage(err.response.data.message)
    })
}
  return (
    <div className='login'>
        <input type='string' placeholder='Email' onChange={(e)=>{
setEmail(e.target.value)
}}/>
<input type='string' placeholder='Password' onChange={(e)=>{
setPassword(e.target.value)
}}/>
<button onClick={()=>{
   toLog()
}}>Login</button>
{message&& <h1 className={sucess ?"success": "failes"}>{message}</h1>}
    </div>
  )
}

export default Login