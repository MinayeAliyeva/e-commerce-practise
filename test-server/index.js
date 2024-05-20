import express from "express";
import https from "https";
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

// "http://localhost:8000/users" - GET

app.get("/users", (requset, response) => {
  response.status(200).send(users?.data);
});

//http://localhost:8000/users/2
app.get("/users/:userId", (request, response) => {
  const { userId } = request.params;
  const findUser = users?.data?.find((user) => user.id.toString() === userId);
  console.log("findUser", findUser);
  if (findUser) {
    response.status(200).send(findUser);
  } else {
    response.status(404).send("User not found");
  }
});

// make get posts | get /posts/1 | get /posts/1/comments
// console.log("bd", posts);
//TASK
// /posts method:GET

app.get("/posts", (request, response) => {
  // console.log("posts.data", posts.data);
  // console.log("posts.data.lenght", posts.data.lenght);

  if (!posts?.data) {
    response.status(500).send("SERVER ERROR");
  } else {
    response.status(200).send(posts);
  }
});
//  /posts/:postId METHOD:GET
app.get("/posts/:postId", (request, response) => {
  const { postId } = request?.params;
  const findPost = posts?.data.find((post) => post?.id.toString() === postId);
  if (!findPost) {
    response
      .status(404)
      .send(`${request?.params?.postId} id -li user bulunamadi`);
  } else {
    response.status(200).send(findPost);
  }
});

//  /posts/:postId/comments    METHOD:GET

// /posts/1/comments

//https://jsonplaceholder.typicode.com/posts/postId/comments
app.get("/posts/:postId/comments", (request, response) => {
  const { postId } = request?.params;

  //backendden ---> basqa bir urle sorgu atma
  https.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    (res) => {
      let data = "";
      //buffer tip arasdir
      res
        .on("data", (chunk) => {
          data += chunk;
        })
        .on("end", () => {
          let comments = JSON.parse(data);
          response.status(200).send(comments);
        })
        .on("error", (err) => {
          response.status(500).send(err.message);
        });
    }
  );
});

app.listen(port, () => {
  console.log("Server successfully Started");
});
