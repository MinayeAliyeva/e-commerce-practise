import express from "express";
import { users } from "../../db/users.js";

const router = express.Router();

// localhost:8080/users?name=Elmar&password=1234
router.get("/", function (req, res) {
  //req frontdan gelen data
  const findUser = users?.find(
    (user) =>
      user?.name === req?.query?.name && user?.password === req?.query?.password
  );
  if (findUser) {
    //serverden fronta data gonderirik
    res.status(200).send(findUser);
  } else {
    res
      .status(404)
      .send({ message: "Kullanıcı bulunamadı: " + req?.query?.name });
  }
});

export default router;

//paramlar : den sonra , queryler ise

//TASK PASSWORD CONTROL ADD ET,
