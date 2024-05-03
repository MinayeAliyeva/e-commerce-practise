import express from "express";
import { users } from "../../db/users.js";
const router = express.Router();

router.get("", function (req, res) {
  if (req?.query?.name) {
    const findUser = users?.find((user) => user?.name == req?.query?.name);
    res.send(findUser);
    return;
  }
  res.send(users);
});
// // params understanding and query
// router.get("/", function (req, res) {
//   console.log("2req.query",req.query);
//   console.log("2req.params",req.params);
//   if (req?.query?.name) {
//     const findUser = users?.find((user) => user?.name == req?.query?.name);
//     res.send(findUser);
//     return;
//   }
//   res.send(users);
// });
export default router;

//paramlar : den sonra , queryler ise
