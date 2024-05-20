async function get(path, params) {
  // "http://localhost:8000/users"   - GET
  const options = {
    method: "GET",
  };
  const response = await fetch(`${path}/${params}`, options);
  const data = await response.json();

  return data;
}


const users = get("http://localhost:8000", "users")
  .then((res) => {
    console.log("CLIENT GET RESPONSE Users", res);
  })
  .catch((err) => {
    console.log(err);
  });

// id requset
async function getId(path, params, id) {
  // "http://localhost:8000/users"   - GET
  const options = {
    method: "GET",
  };

  const response = await fetch(`${path}/${params}/${id}`, options);
  const data = await response.json();

  return data;
}



const user = getId("http://localhost:8000", "users", 1)
  .then((res) => {
    console.log("CLIENT GET id RESPONSE id=1", res);
  })
  .catch((err) => {
    console.log({ err });
  });

// task https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts
/*
GET	/posts


GET	/posts/1
GET	/posts/1/comments
*/

async function getPosts(path, params) {
  const options = {
    method: "GET",
  };
  const response = await fetch(`${path}/${params}`, options);
  const data = await response.json();

  return data;
}

const posts = getPosts("http://localhost:8000", "posts", 1)
  .then((res) => {
    console.log("POSTS", res);
  })
  .catch((err) => {
    console.log(err);
  });

async function postID(path, params, postID) {
  const options = {
    method: "GET",
  };
  const response = await fetch(`${path}/${params}/${postID}`, options);
  const data = await response.json();
  return data;
}

const post = postID("http://localhost:8000", "posts", 2)
  .then((res) => {
    console.log("Post id=1", res);
  })
  .catch((err) => {
    console.log({ err });
  });
