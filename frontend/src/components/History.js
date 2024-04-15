import React from "react";
import "./History.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const History = () => {
  const navigate = useNavigate();
  const { setToken, token, userId } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState("");
  const [offers, setOffers] = useState("");

  const getRequests = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5001/order/getOrderByOwnerId`, headers)
      .then((result) => {
        console.log(result.data);
        setRequests(result.data.order);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };

  const getOffers = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5001/order/getOrderByTakerId`, headers)
      .then((result) => {
        console.log(result.data);
        setOffers(result.data.order);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };

  useEffect(() => {
    getOffers();
    getRequests();
  }, []);
  return (
    <div className="History">
      <p>Exchange History</p>
      <div>
        <p>Exchange Requests</p>
        {requests.length > 0 ? (
          requests.map((elem, i) => {
            console.log(elem);
            return (
              <div key={i}>
                {elem.exchangeAccepted === "Open" ? (
                  <div>
                    <p>My Item</p>
                    <img
                      className="imgprodact"
                      src={elem.exchangeWantedId.img}
                    />
                    <p className="titlePage">
                      Title: {elem.exchangeWantedId.title}
                    </p>
                    <p className="description">
                      Description: {elem.exchangeWantedId.description}
                    </p>
                    <p className="pricePage">{elem.exchangeWantedId.price} $</p>

                    <p>Offered Item</p>
                    <img
                      className="imgprodact"
                      src={elem.exchangeOfferedId.img}
                    />
                    <p className="titlePage">
                      Title: {elem.exchangeOfferedId.title}
                    </p>
                    <p className="description">
                      Description: {elem.exchangeOfferedId.description}
                    </p>
                    <p className="pricePage">
                      {elem.exchangeOfferedId.price} $
                    </p>
                    <button
                      onClick={() => {
                        const id = elem._id;
                        const body = {
                          exchangeWantedId: elem.exchangeWantedId,
                          exchangeOwnerId: elem.exchangeOwnerId,
                          exchangeTakerId: elem.exchangeTakerId,
                          exchangeOfferedId: elem.exchangeOfferedId,
                          exchangeAccepted: "Accepted",
                        };
                        const headers = {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        };
                        axios
                          .put(
                            `http://localhost:5001/order/AccepOrderbyId/${id}`,
                            body,
                            headers
                          )
                          .then((result) => {
                            console.log(result.data);
                            getRequests();
                            setMessage(result.data.message);
                          })
                          .catch((err) => {
                            console.log(err);
                            setMessage(err.response.data.message);
                          });
                      }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => {
                        const id = elem._id;
                        const headers = {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        };
                        axios
                          .delete(
                            `http://localhost:5001/order/delete/${id}`,
                            headers
                          )
                          .then((result) => {
                            console.log(result.data);
                            getRequests();
                            setMessage(result.data.message);
                          })
                          .catch((err) => {
                            console.log(err);
                            setMessage(err.response.data.message);
                          });
                      }}
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })
        ) : (
          <p>No Requests</p>
        )}
      </div>
      <div>
        <p>My Offers</p>
        {offers.length > 0 ? (
          offers.map((elem, i) => {
            console.log(elem);
            return (
              <div key={i}>
                <div>
                  <p>Offered Item</p>
                  <img className="imgprodact" src={elem.exchangeWantedId.img} />
                  <p className="titlePage">
                    Title: {elem.exchangeWantedId.title}
                  </p>
                  <p className="description">
                    Description: {elem.exchangeWantedId.description}
                  </p>
                  <p className="pricePage">{elem.exchangeWantedId.price} $</p>

                  <p>My Item</p>
                  <img
                    className="imgprodact"
                    src={elem.exchangeOfferedId.img}
                  />
                  <p className="titlePage">
                    Title: {elem.exchangeOfferedId.title}
                  </p>
                  <p className="description">
                    Description: {elem.exchangeOfferedId.description}
                  </p>
                  <p className="pricePage">{elem.exchangeOfferedId.price} $</p>
                  {elem.exchangeAccepted === "Open" ? (
                    <button
                      onClick={() => {
                        const id = elem._id;
                        const headers = {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        };
                        axios
                          .delete(
                            `http://localhost:5001/order/delete/${id}`,
                            headers
                          )
                          .then((result) => {
                            console.log(result.data);
                            getOffers();
                            setMessage(result.data.message);
                          })
                          .catch((err) => {
                            console.log(err);
                            setMessage(err.response.data.message);
                          });
                      }}
                    >
                      Cancel Request
                    </button>
                  ) : (
                    <p>Request is already accepted</p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p>No Offers</p>
        )}
      </div>
    </div>
  );
};

export default History;
