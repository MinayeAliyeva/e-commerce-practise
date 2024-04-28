import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const arr = ["a", "b", "c"];
const findEl = arr.find((el) => {
  return el == "a";
});
const Login = () => {
  const [inputUser, setInputUser] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const onChange = (event) => {
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
    axios
      .get("http://localhost:8080/users/info", {
        params: { name: "Elmar", age: 27, surname: "Amanov" },
      })
      .then((response) => console.log(response));

    // users?.find((user) => {
    //   if (user.name != inputUser.name || user.password != inputUser.password) {
    //     navigate("/");
    //     return null;
    //   } else {
    //     navigate("/main");
    //     localStorage.setItem(JSON.stringify(user?.token));
    //     return user;
    //   }
    // });
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
        <button type="button" onClick={checkUser}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
