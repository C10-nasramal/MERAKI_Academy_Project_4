import React from "react";
import "./Order.css"
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App";
const Order = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { setToken, token, userId } = useContext(UserContext);
  const [order, setOrder] = useState("");
  const [prodects, setProdects] = useState("");

  const { id } = useParams();
  const getSelectedItem = () => {
    axios
      .get(`http://localhost:5001/prodect/ProdectById/${id}`)
      .then((result) => {
        console.log(result.data.prodect);
        setOrder(result.data.prodect);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };

  const getprodact = () => {
    const userid = userId;
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        `http://localhost:5001/prodect/getProdectByUserID/${userid}`,
        headers
      )
      .then((result) => {
        console.log(result.data.prodect);
        setProdects(result.data.prodect);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };
  useEffect(() => {
    getprodact();
  }, []);
  useEffect(() => {
    getSelectedItem();
  }, []);
  return (
    <div className="Order">
      <div>
        <div key={order._id}>
          <div>
            <p >The Item you selected to Exchange with:</p>
            <img className="imgprodact" src={order.img} />
            <p className="titlePage">{order.title}</p>
            <p className="description">{order.description}</p>
            <p className="pricePage">{order.price}</p>
            <button onClick={()=>{
              navigate("/home")
            }}>Cancel Exchange</button>
          </div>
        </div>
      </div>
      <div>
        <p>Please select one of the items you own to offer an exchange</p>
        {prodects.length &&
          prodects.map((elem, i) => {
            console.log(elem);
            return (
              <div key={i}>
                <div>
                <img className="imgprodact" src={elem.img} />
              <p className="titlePage">Title: {elem.title}</p>
              <p className="description">Description: {elem.description}</p>
              <p className="pricePage">{elem.price} $</p>
                  <button
                    onClick={() => {
                      const body = {
                        exchangeWantedId: order._id,
                        exchangeOwnerId: order.user,
                        exchangeOfferedId: elem._id,
                        exchangeAccepted: "Open",
                      };
                      const headers = {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      };
                      
                      axios
                        .post(
                          `http://localhost:5001/order/creatNewOrder`,
                          body,
                          headers
                        )
                        .then((result) => {
                          console.log(result.data);
                          navigate("/Created");

                          setMessage(result.data.message);
                        })
                        .catch((err) => {
                          console.log(err);
                          setMessage(err.response.data.message);
                        });
                      navigate("/Created");
                    }}
                  >
                    Exchange
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Order;
