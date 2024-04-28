import express from "express";
import { users } from "../../db/users.js";
const router = express.Router();

router.get("", function (req, res) {
  console.log("params", req.params);
  console.log("query", req.query);
  if (req?.query?.name) {
    const findUser = users?.find((user) => user?.name == req?.query?.name);
    res.send(findUser);
    return;
  }
  res.send(users);
});
// params understanding and query
router.get("/:info", function (req, res) {
  console.log("params", req.params);
  console.log("query", req.query);
  if (req?.query?.name) {
    const findUser = users?.find((user) => user?.name == req?.query?.name);
    res.send(findUser);
    return;
  }
  res.send(users);
});
export default router;
