import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });
};

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    delay(4000).then((res) => {
      axios
        .get(`http://localhost:8080/products/${id}`)
        .then((response) => setDetail(response.data));
    });
  }, [id]);

  return (
    <div>
      {detail ? (
        <div>
          {detail.name} <br />
          {detail.price}
        </div>
      ) : (
        <h1>Lo</h1>
      )}
    </div>
  );
};

export default Detail;
