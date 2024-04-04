import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [message,setMessage] = useState("");
const [prodects, setProdects] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:5001/prodect").then((result)=>{
      console.log(result.data);
      setProdects(result.data)
      setMessage(result.data.message)
  }).catch((err)=>{
      console.log(err);
      setMessage(err.response.data.message)
  })
  },[])
  return (
    <div className='Home'>

    </div>
  )
}

export default Home