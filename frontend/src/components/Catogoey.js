import React from "react";
import "./Catogoey.css";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

import axios from "axios";
const Catogoey = () => {
  const navigate = useNavigate();
  const { setToken, token } = useContext(UserContext);
  const [Prodecttaker, setProdecttaker] = useState("");

  const [order, setOrder] = useState("");
  const [message, setMessage] = useState("");
  const [catogoey, setCatogoey] = useState("");
  const { id } = useParams();
  console.log("hello", id);
  const getWantedProduct = () => {
    axios
      .get(`http://localhost:5001/prodect/${id}`)
      .then((result) => {
        console.log(result.data);
        setCatogoey(result.data.prodect);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };
  useEffect(() => {
    console.log("useEffect", id);
    getWantedProduct();
  }, [id]);
  return (
    <div className="Catogoey">
      {catogoey &&
        catogoey.map((elem, i) => {
          console.log(elem);
          return (
            <div>
              <img className="imgprodact" src={elem.img} />
              <p className="titlePage">Title: {elem.title}</p>
              <p className="description">Description: {elem.description}</p>
              <p className="pricePage">{elem.price} $</p>
              <button onClick={()=>{navigate(`/order/${elem._id}`)}}>Exchange</button>
            </div>
          );
        })}
    </div>
  );
};

export default Catogoey;
