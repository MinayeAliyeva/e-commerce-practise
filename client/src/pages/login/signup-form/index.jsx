import React from "react";
import "./style.scss";
const SignUpForm = () => {
  return (
    <form className="form">
      <div className="input-container">
        <label htmlFor="">Name</label>
        <input className="input" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="">Password</label>
        <input className="input" type="text" />
      </div>
      <div className="input-container">
        <label>Repeat Password</label>
        <input className="input" type="password" />
      </div>
      <div className="input-container">
        <label>Email address</label>
        <input className="input" type="email" />
      </div>
      <button className="signin-btn">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
