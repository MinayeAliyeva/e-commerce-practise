import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import img from "../../assets/images/flower.jpg";
import { Link, Outlet } from "react-router-dom";
const ProductTest = () => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });
};

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => setData(response?.data));
  }, []);

  const wievDetail = (id) => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((response) => setDetail(response?.data));
  };
  console.log("det", detail);
  return (
    <>
      {data?.map((product) => (
        <div key={product.id} style={{ border: "2px solid red" }}>
          {product.name} <br />
          <Link to={`/products/${product.id}`}>
            click
          </Link>
          <button onClick={() => wievDetail(product.id)}>detail</button>
        </div>
      ))}
      //2
      <div>
        <h1 style={{border:'2px solid yellow'}}>
          DETAIL
          {detail.name}
        </h1>
      </div>

    </>
  );
};

export default ProductTest;
