import React from 'react'
import "./App.css";
import { Routes, Route, Link} from "react-router-dom"
import  { useEffect, useState,createContext } from 'react'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Prodect from './components/Prodect';
export const UserContext = createContext();
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token")|| "")
  return (
   <div className="App">
      <h1>Hello World!</h1>
      <UserContext.Provider value={{setToken,token}}>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/prodect' element={<Prodect/>}/>
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
