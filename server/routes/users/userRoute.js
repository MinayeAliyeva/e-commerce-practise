import express from "express";
import { users } from "../../db/users.js";

const router = express.Router();


// localhost:8080/users?name=Elmar&password=1234
//localhost:8080/users

//name="elmar",password:"elmar12343#_",email:
//localhost:8080/users?name=Gultac&password=Gultac#1234_&email=gultacaslanova@gmail.com
//
router.get("/", function (req, res) {
  //req frontdan gelen data

  const findUser = users?.find(
    (user) =>
      user?.name === req?.query?.name && user?.password === req?.query?.password
  );
  // console.log("login", req.query);

  if (findUser && Object.keys(req.query).length) {
    //serverden fronta data gonderirik
    res.status(200).send(findUser);
  } else if (!Object.keys(req.query).length) {
    res.status(200).send(users);
  } else if (!findUser && Object.keys(req.query).length && req.query.email) {
    console.log("push side", req.query);
    users.push({
      name: req.query.name,
      password: req.query.password,
      token: req.query.name + req.query.password,
    });
    res.send(users);
  } else {
    res
      .status(404)
      .send({ message: "Kullanıcı bulunamadı: " + req?.query?.name });
  }
});

export default router;

//paramlar : den sonra , queryler ise

//TASK PASSWORD CONTROL ADD ET,
