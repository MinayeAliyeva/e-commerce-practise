import React from "react";

const Login = () => {
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
        <input type="text" style={{ border: "1px solid" }} />
        <br />
        <label>Password</label>
        <input type="password" style={{ border: "1px solid" }} />
      </form>
    </div>
  );
};

export default Login;
