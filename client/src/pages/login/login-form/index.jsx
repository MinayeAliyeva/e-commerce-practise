import React from "react";
import "./style.scss";
import { useState } from "react";
const LoginForm = () => {
  const [user, setUser] = useState({ name: "", password: "", signin: false });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUser({});
  };
  console.log(user);
  return (
    <form className="form">
      <div className="input-container">
        <label>Name</label>
        <input
          name="name"
          onChange={onChangeInput}
          className="input"
          type="text"
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          name="password"
          onChange={onChangeInput}
          className="input"
          type="text"
        />
      </div>
      <div style={{ width: "28%" }}>
        <div style={{ display: "flex" }}>
          <input name="signin" onChange={onChangeInput} type="checkbox" />
          <label htmlFor="">Keep me Sign in</label>
        </div>
      </div>
      <button type="button" onClick={onSubmit} className="signin-btn">
        Sign in
      </button>
      <div className="line"></div>
      <span>Forgot Password?</span>
    </form>
  );
};

export default LoginForm;
