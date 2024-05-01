async function get(path, params) {

    // "http://localhost:8000/users"   - GET
    const options = {
        method: 'GET',
    };

    const response = await fetch(`${path}/${params}`, options);
    const data = await response.json();

    return data;
};
// id requset
async function getId(path, params,id) {

    // "http://localhost:8000/users"   - GET
    const options = {
        method: 'GET',
    };

    const response = await fetch(`${path}/${params}/${id}`, options);
    const data = await response.json();

    return data;
};

const users = get("http://localhost:8000", "users").then((res)=>{
    console.log("CLIENT GET RESPONSE", res);
}).catch(err=>{
    console.log(err);
});

const user = getId("http://localhost:8000", "users", 289898938).then((res)=>{
    console.log("CLIENT GET id RESPONSE", res);
}).catch(err=> {
    console.log({err});
});

// task https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts
/*
GET	/posts
GET	/posts/1
GET	/posts/1/comments
*/
//https://www.youtube.com/watch?v=wmjdN487j4I&list=PLXgAcfdITZF8DyCMs0q8l9cFRtHvybabE
