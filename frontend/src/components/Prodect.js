import React from "react";
import "./Prodect.css"
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";

const Prodect = () => {
  const navigate = useNavigate();
  const { setToken, token ,userId } = useContext(UserContext);

  const [catogoey, setCatogoey] = useState("");
  const [catId, setCatId] = useState("");

  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  console.log(catId);
  const newProdect = () => {
    const body = { title, description, img: url, price, catogoey: catId ,user:userId };
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post("http://localhost:5001/prodect", body,headers)
      .then((result) => {
        console.log(result.data);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "ns1nraad");
    data.append("cloud_name", "dzjcu7dzf");
    fetch("  https://api.cloudinary.com/v1_1/dzjcu7dzf/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  const getcatogoey = () => {
    axios
      .get("http://localhost:5001/category")
      .then((result) => {
        console.log(result.data);
        setCatogoey(result.data.category);
        setMessage(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };
  useEffect(() => {
    getcatogoey();
  }, []);

  return (
    <div className="Prodect">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="string"
        placeholder="Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <select
        onChange={(e) => {
          setCatId(e.target.value);
        }}
      >
        <option value="Select">Select category</option>
        {catogoey &&
          catogoey.map((elem, i) => {
            return <option value={elem._id}>{elem.title}</option>;
          })}
      </select>

      <input type="file" onChange={(e) => setImg(e.target.files[0])}></input>
      <button onClick={uploadImage}>Upload Image</button>
      <button
        onClick={() => {
          newProdect();
          navigate("/home");
        }}
      >
        New Prodect{" "}
      </button>
    </div>
  );
};

export default Prodect;
