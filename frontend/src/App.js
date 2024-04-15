import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Prodect from "./components/Prodect";
import Nav from "./components/Nav";
import Order from "./components/Order";
import Catogoey from "./components/Catogoey";
import Created from "./components/Created";
import History from "./components/History";
import Logout from "./components/Logout";


export const UserContext = createContext();
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "")
  return (
    <div className="App">
      
      
      <UserContext.Provider value={{ setToken, token,setUserId,userId}}>
      <Nav />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prodect" element={<Prodect />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/Catogoey/:id" element={<Catogoey />} />
          <Route path="/Created" element={<Created/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/logout" element={<Logout/>} />

        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
