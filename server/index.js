import express from "express";
import cors from "cors";
import { products } from "./db/products.js";
const app = express();
app.use(cors());
const port = 8080;

app.get("/", (req, res) => {
  res.send(JSON.stringify([{ name: "h" }]));
});
//bu endpointde productlar duruyor
app.get("/products", (req, res) => {
  res.send(JSON.stringify(products));
});

//bu endpointde ise detail
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id); // URL'den gelen id'yi int'e çeviriyoruz
  const product = products.find((product) => product.id === productId); 
  res.send(product);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
