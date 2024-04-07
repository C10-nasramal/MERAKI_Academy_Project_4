import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Nav = () => {
  const navigate = useNavigate()

  const [message,setMessage] = useState("");
  const [catogoey, setCatogoey] = useState("")
  
  const getcatogoey = ()=>{
    
    axios.get("http://localhost:5001/category").then((result)=>{
        console.log(result.data);
        setCatogoey(result.data.
            category)
        setMessage(result.data.message)
    }).catch((err)=>{
        console.log(err);
        setMessage(err.response.data.message)
    })
}
    useEffect (()=>{
        getcatogoey()
    },[])
  return (

    <div className='Nav'>
     {catogoey && catogoey.map((elem,i)=>{
              return  <button onClick={()=>
              {
                    navigate(`/Catogoey/${elem._id}`)
              }}>{elem.title}</button>
            })
        }
    </div>
  )
}

export default Nav