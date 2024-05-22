import React, { useState } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import "./style.scss";

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    repeatpassword: false,
  });

  const onChangeInput = ({ target: { name, value } }) => {
    // const { name, value } = e.target;
    setUser((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const onSubmit = () => {
    const nameError = user.name.length < 3;
    const emailError = !isValidEmail(user.email);
    const passwordError = !isValidPassword(user.password);
    const repeatPasswordError = user.password !== user.repeatpassword;

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      repeatpassword: repeatPasswordError,
    });

    if (!nameError && !emailError && !passwordError && !repeatPasswordError) {
      //axios ile post etme hissesi
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
  };

  return (
    <form action="" className="form">
      <Box sx={{ width: "350px", display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="standard-basic"
          label="Name"
          variant="standard"
          error={errors.name}
          helperText={errors.name && "Name must be at least 3 characters"}
          onChange={onChangeInput}
          value={user.name}
          name="name"
        />
      </Box>
      <Box sx={{ width: "350px", display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          variant="standard"
          error={errors.email}
          helperText={errors.email && "Enter a valid email address"}
          onChange={onChangeInput}
          value={user.email}
          name="email"
        />
      </Box>
      <Box sx={{ width: "350px", display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          error={errors.password}
          helperText={
            errors.password &&
            "Password must be at least 8 characters, including one uppercase letter, one lowercase letter, and one digit"
          }
          onChange={onChangeInput}
          value={user.password}
          name="password"
        />
      </Box>
      <Box sx={{ width: "350px", display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="standard-basic"
          label="Repeat Password"
          variant="standard"
          type="password"
          error={errors.repeatpassword}
          helperText={errors.repeatpassword && "Passwords do not match"}
          onChange={onChangeInput}
          value={user.repeatpassword}
          name="repeatpassword"
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button onClick={onSubmit} variant="outlined">
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
