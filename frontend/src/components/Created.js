import React from 'react'
import "./Created.css"
import { useNavigate } from "react-router-dom";

const Created = () => {
  const navigate = useNavigate();
  return (
    <div className='Created'>
      <p>Exchange requested succesfully</p>
      <button className="createdbutton"onClick={()=>{navigate(`/home`)}}>Back to Home</button>
      <button className="createdbutton"onClick={()=>{navigate(`/history`)}}>Exchange History</button>
    </div>
  )
}

export default Created