import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [inputUser, setInputUser] = useState({});
  const [users, setUsers] = useState([]);
  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputUser((prevs) => ({
      ...prevs,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => setUsers(response?.data));
  }, []);

  const checkUser = () => {
    users?.filter((user) => {
      if (user.name == inputUser.name && user.password == inputUser.password) {
        console.log("exists");
      }
      console.log("not exsits");
    });
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          border: "3px solid",
          width: "300px",
          margin: "50px",
        }}
      >
        {" "}
        <h1>Check Login</h1>
        <label htmlFor="">Name</label>
        <input
          onChange={onChange}
          name="name"
          type="text"
          style={{ border: "1px solid" }}
        />
        <br />
        <label>Password</label>
        <input
          onChange={onChange}
          type="password"
          name="password"
          style={{ border: "1px solid" }}
        />
        <button type="submit" onClick={checkUser}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
