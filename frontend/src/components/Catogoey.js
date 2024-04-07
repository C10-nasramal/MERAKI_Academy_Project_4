import React from 'react'
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import axios from "axios";
const Catogoey = () => {
    const [message,setMessage] = useState("");
  const [catogoey, setCatogoey] = useState("")
  const { id } = useParams()
  const getcatogoey = ()=>{
    
    axios.get(`http://localhost:5001/prodect/${id}`).then((result)=>{
        console.log(result.data);
        setCatogoey(result.data.
            prodect)
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
    <div className='Catogoey'>
           { catogoey && catogoey.map((elem,i)=>{
              return  <div>
                <img src={elem.img}/>
                <p>{elem.title}</p>
                <p>{elem.description}</p>
                <p>{elem.price}</p>
              </div>
            })}
    </div>
  )
}

export default Catogoey