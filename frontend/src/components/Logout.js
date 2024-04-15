import React from 'react'
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
    const navigate = useNavigate();
    const {setToken,setUserId} = useContext(UserContext);
    localStorage.removeItem("token")
    setToken(null)
  return (
    <div>
      <p>Logged Out succesfully</p>
      <button onClick={()=>{navigate(`/home`)}}>Back to Home</button>
    </div>
  )
}

export default Logout