import React from "react";
import"./Register.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const abbUser = () => {
    const body = { firstName, lastName, email, password };
    axios
      .post("http://localhost:5001/users/register", body)
      .then((result) => {
        console.log(result.data);
        setMessage(result.data.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };
  return (
    <div className="Register">
      <input className="input"
        type="string"
        placeholder="FirstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input className="input"
        type="string"
        placeholder="LastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input className="input"
        type="string"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input className="input"
        type="string"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="SignUpbutton"
        onClick={() => {
          abbUser();
          navigate("/login");

        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Register;
