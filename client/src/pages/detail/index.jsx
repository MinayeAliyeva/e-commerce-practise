import React, { Suspense, useEffect, useState } from "react";
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
    delay(100000).then(() => {
      axios.get(`http://localhost:8080/products/${id}`).then((response) => {
        setDetail(response.data);
      });
    });
  }, [id]);

  return (
    // <div>
    //   DETAIL
    //   {detail?.id ? (
    //     <div>
    //       {detail.name} <br />
    //       {detail.price}
    //     </div>
    //   ) : (
    //     <h1>Loading ...</h1>
    //   )}
    // </div>
    <div>
      Detail
      <Suspense fallback={<h2>Loadingw...</h2>}>
        <div>
          {detail.name} <br />
          {detail.price}
        </div>
      </Suspense>
    </div>
  );
};

export default Detail;
