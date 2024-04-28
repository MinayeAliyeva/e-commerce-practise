import express from "express";
import { products } from "../../db/products.js";
const router = express.Router();

//bu endpointde productlar duruyor
router.get("/", (req, res) => {
  res.send(JSON.stringify(products));
});

//bu endpointde ise detail
router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id); // URL'den gelen id'yi int'e çeviriyoruz
  const product = products.find((product) => product.id === productId);
  res.send(product);
});

export default router;
