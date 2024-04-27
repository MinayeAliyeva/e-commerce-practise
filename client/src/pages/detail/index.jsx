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
    delay(2000).then(() => {
      axios
        .get(`http://localhost:8080/products/${id}`)
        .then((response) => {
          console.log("Res:", response.data);
          setDetail(response.data);
        });
    });
  }, [id]);

  return (
    <div>
      DETAIL 
      {detail?.id ? (
        <div>
          {detail.name} <br />
          {detail.price}
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};

export default Detail;
