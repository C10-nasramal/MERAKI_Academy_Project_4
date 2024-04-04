import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'
const Register = () => {
    const [message, setMessage] = useState("")
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const abbUser = ()=>{
    const body = {firstName,lastName,email,password}
    axios.post("http://localhost:5001/users/register",body).then((result)=>{
        setMessage(result.data.message)
    }).catch((err)=>{
        console.log(err.response.data);
        setMessage(err.response.data.message)
    })
}
  return (
    <div className='Register'>
<input type='string' placeholder='FirstName' onChange={(e)=>{
setFirstName(e.target.value)
}}/>
<input type='string' placeholder='LastName' onChange={(e)=>{
setLastName(e.target.value)
}}/>
<input type='string' placeholder='Email' onChange={(e)=>{
setEmail(e.target.value)
}}/>
<input type='string' placeholder='Password' onChange={(e)=>{
setPassword(e.target.value)
}}/>
<button onClick={()=>{
    abbUser()
}}>Register</button>
    </div>
  )
}

export default Register