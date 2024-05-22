import express from "express";
import cors from "cors";
import userRouter from "./routes/users/userRoute.js";
import productRouter from "./routes/products/productRouter.js";
const app = express();
app.use(cors());
const port = 8080;


app.get("/", (req, res) => res.send("welcome"));

app.use("/users", userRouter);

app.use("/products", productRouter);


app.listen(port, () => {});
