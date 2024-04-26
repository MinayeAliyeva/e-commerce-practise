import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductTest = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setProducts(res.data));
  }, []);


  return (
    <div>
      {products?.map?.((product) => (
        <div key={product.name}>
          <h1> {product?.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductTest;
