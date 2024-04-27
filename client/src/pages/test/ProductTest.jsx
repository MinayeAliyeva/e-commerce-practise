import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const delay = (ms) => new Promise((resolve) => {setTimeout(() => resolve(ms), ms) });


const ProductTest = () => {
  const [data, setData] = useState([]);
  const [produvtDetail, setProductDetail] = useState({firstly: true});

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => setData(response?.data));
  }, []);

  const wievDetail = (productId) => {
     delay(3000)
      .then(()=>{
        axios.get(`http://localhost:8080/products/${productId}`).then((response) => setProductDetail(response?.data));
      });
  };

  return (
    <>
      {data?.map((product) => (
        <div key={product.id} style={{ border: "2px solid red" }}>
          {product.name} <br />
          <Link to={`/products/${product.id}`}>
            click
          </Link>
          <span style={{width: "30px"}}> | </span>
          <button onClick={() =>{
            setProductDetail(null)
            wievDetail(product.id)
          } }> detail ich seyfe </button>
        </div>
      ))}
      
      <div style={{marginTop: "30px", border:'5px solid black'}}>
       <h1>detail ich seyfe</h1><br/>
        <h1>
          {produvtDetail || produvtDetail?.firstly ? <h4>{produvtDetail.name ?? ""}</h4> : <span>LOADING...</span>}
        </h1>
      </div>

    </>
  );
};

export default ProductTest;
