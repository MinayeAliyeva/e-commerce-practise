import express from "express";
import users from "./data-base/users.json" assert { type: "json" };
import posts from "./data-base/posts.json" assert { type: "json" };
import cors from "cors";

const app = express(); // express funuksiadi

//giris ayarlamalarini edir
const port = 8000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// "http://localhost:8000/users"   - GET

app.get("/users", (requset, response) => {
  response.status(200).send(users?.data);
});

//http://localhost:8000/users/2
app.get("/users/:userId", (request, response) => {
  const { userId } = request.params;
  const findUser = users?.data?.find((user) => user.id.toString() === userId);
  if (findUser) {
    response.status(200).send(findUser);
  } else {
    response.status(404).send("User not found");
  }
});

// make get posts | get /posts/1 | get /posts/1/comments
// console.log("bd", posts);
//TASK
app.get("/posts", (req, res) => {
  res.status(200).send(posts?.data);
});
app.get("/posts/:postId", (req, res) => {
  const { postId } = req?.params;
  const post = posts?.data.find((post) => post?.id.toString() === postId);
  console.log("pott", post);
  if (post) {
    res.status(200).send(post);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log("Server successfully Started");
});
