import express from "express";
import cors from "cors";
import fs from "fs";
import userRouter from "./routes/users/userRoute.js";
import productRouter from "./routes/products/productRouter.js";
import { users } from "./db/users.js";

const app = express();

app.use(cors());

const port = 8080;

// const jsonUsers = JSON.stringify(users);

// fs.writeFile("./data.json", jsonUsers, "utf8", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("writeFile complete");
//     return;
//   }
// });


//req=>>>header ,orign ,params,query (queryparams),body
app.get("/", (req, res) => res.send("welcome"));


app.use("/users", userRouter);


app.use("/products", productRouter);


app.listen(port, () => {});

//DNS serverler
