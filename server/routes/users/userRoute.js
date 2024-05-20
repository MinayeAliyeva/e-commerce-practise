import express from "express";
import { users } from "../../db/users.js";
const router = express.Router();

//localhost:8080/users?name="Elmar"&passwword="1234"
router.get("", function (req, res) {
  const findUser = users?.find((user) => user?.name == req?.query?.name);
  if (findUser) {
    res.status(200).send(findUser);
    return;
  }
  res.status(404).send({ massege: "Don't find " + req.query.name });
});

export default router;

//paramlar : den sonra , queryler ise



//TASK PASSWORD CONTROL ADD ET, 
