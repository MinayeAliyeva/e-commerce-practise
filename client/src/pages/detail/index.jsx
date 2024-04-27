import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((response) => setDetail(response.data));
  }, [id]);
  console.log("detail", detail);
  return (
    <div>
      {detail.name} <br />
      {detail.price}
    </div>
  );
};

export default Detail;
