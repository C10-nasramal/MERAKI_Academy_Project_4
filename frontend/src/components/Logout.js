import React from 'react'
import "./Logout.css"
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
    <div className='Logout '>
      <p>Logged Out succesfully</p>
      <button className="LogoutButton"onClick={()=>{navigate(`/home`)}}>Back to Home</button>
    </div>
  )
}

export default Logout