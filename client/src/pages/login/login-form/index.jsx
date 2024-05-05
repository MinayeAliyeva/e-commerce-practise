import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

import "./style.scss";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });
  const [isClicked, setIsClicked] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));

    if (isClicked) {
      if (name === "name" && value?.length <= 5) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: true,
        }));
      } else if (name === "email" && !validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: true,
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: false,
        }));
      }
    }
  };

  const onSubmit = () => {
    setIsClicked(true);
    if (inputValue?.name?.length <= 5 || !validateEmail(inputValue.email)) {
      setErrors({
        name: inputValue.name.length <= 5,
        email: !validateEmail(inputValue.email),
      });
      return;
    }
  };

  return (
    <form className="form">
      <Box
        sx={{
          width: "350px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="standard-basic"
          label="Name"
          variant="standard"
          error={errors.name}
          helperText={errors.name && " 5 harf olmali"}
          onChange={onChangeInput}
          value={inputValue.name}
          name="name"
        />
      </Box>
      <Box
        sx={{
          width: "350px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          variant="standard"
          error={errors.email}
          helperText={errors.email && "Yanlis email"}
          onChange={onChangeInput}
          value={inputValue.email}
          name="email"
        />
      </Box>

      <button type="button" onClick={onSubmit} className="signin-btn">
        Sign in
      </button>
      <div className="line"></div>
      <span>Forgot Password?</span>
    </form>
  );
};

export default LoginForm;
