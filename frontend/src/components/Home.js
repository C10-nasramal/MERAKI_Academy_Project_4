import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [message,setMessage] = useState("");
const [prodects, setProdects] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:5001/prodect").then((result)=>{
      console.log(result.data);
      setProdects(result.data.prodect)
      setMessage(result.data.message)
  }).catch((err)=>{
      console.log(err);
      setMessage(err.response.data.message)
  })
  },[])
  return (
    <div className='Home'>
      {prodects&& prodects.map((elem,i)=>{
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

export default Home