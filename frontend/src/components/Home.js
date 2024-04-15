import React from "react";
import "./Home.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Home = () => {
  const navigate = useNavigate();
  
  const { setToken, token, userId } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [prodects, setProdects] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/prodect")
      .then((result) => {
        console.log(result.data);
        setProdects(result.data.prodect);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  }, []);

  return (
    <div className="Home">
      {prodects &&
        prodects.map((elem, i) => {
          return (
            token && elem.user != userId ? (<div>
              <img className="imgprodact" src={elem.img} />
              <p className="titlePage">Title: {elem.title}</p>
              <p className="description">Description: {elem.description}</p>
              <p className="pricePage">{elem.price} $</p>
              <button onClick={()=>{navigate(`/order/${elem._id}`)}}>Exchange</button>
            </div>) : (!token ? (<div>
              <img className="imgprodact" src={elem.img} />
              <p className="titlePage">Title: {elem.title}</p>
              <p className="description">Description: {elem.description}</p>
              <p className="pricePage">{elem.price} $</p>
            </div>) : (<></>)) 
            
          );
        })}
        <button className="Add"  onClick={()=>{
          navigate("/prodect")
        }}>Add Prodects</button>
    </div>
  );
};

export default Home;
