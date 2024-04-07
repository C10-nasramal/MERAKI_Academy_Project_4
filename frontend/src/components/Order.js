import React from 'react'
import  { useContext } from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App"
const Order = () => {
  const {setToken,token} = useContext(UserContext)
  const [order, setOrder] = useState("")
  // const body = {Prodectgiver,Prodecttaker,usergiver,usertaker}
  // const headers = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
    
  // };
  return (
    <div className='Order'>
      {order&&order.map((elem,i)=>{
        return <div key={i}>
<button onClick={()=>{
  const params= elem._id
  axios.delete(`http://localhost:5001/order/${params}`).then((res) => {
    console.log(res);
    if (res.data.success) {
      const newarr = articles.filter((elem, i) => {
        return elem._id !== params;
      });
      setOrder(newarr);
    }
  })
  .catch((err) => {
    console.log(err);
  });
}}>delete</button>
        </div>
      })}
    </div>
  )
}

export default Order