import React from 'react'
import { useNavigate } from "react-router-dom";

const Created = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Exchange requested succesfully</p>
      <button onClick={()=>{navigate(`/home`)}}>Back to Home</button>
      <button onClick={()=>{navigate(`/history`)}}>Exchange History</button>
    </div>
  )
}

export default Created