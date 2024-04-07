import React from 'react'
import "./App.css";
import { Routes, Route, Link} from "react-router-dom"
import  { useEffect, useState,createContext } from 'react'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Prodect from './components/Prodect';
import Nav from './components/Nav';
import Order from './components/Order';
import Catogoey from './components/Catogoey';
export const UserContext = createContext();
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token")|| "")
  return (
   <div className="App">
      <h1>Hello World!</h1>
      <Nav/>
      <UserContext.Provider value={{setToken,token}}>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/prodect' element={<Prodect/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/Catogoey/:id' element={<Catogoey/>}/>
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
