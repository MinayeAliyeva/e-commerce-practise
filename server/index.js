import express from "express";
import cors from "cors";
import { products } from "./db/products.js";
const app = express();
app.use(cors());
const port = 8080;

app.get("/", (req, res) => {
  res.send(JSON.stringify([{ name: "h" }]));
});

app.get("/products", (req, res) => {
  res.send(JSON.stringify(products));
});

app.get("/products/:id", (req, res) => {
  const findData = JSON.stringify(
    products?.filter((product) => product.id.toString() == req.params.id)
  );
  res.send(findData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
