import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";

import "./style.scss";

const LoginForm = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({ name: false, password: false });
  const [isClicked, setIsClicked] = useState(false);

  // const validateEmail = (password) => {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(password);
  // };

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    setUser((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));

    if (isClicked) {
      if (name === "name" && value?.length < 3) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: true,
        }));
      } else if (name === "password" && value.length < 3) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: true,
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
    if (user?.name?.length < 3) {
      setErrors({
        name: user.name.length < 3,
        password: user.password.length < 3,
      });
    } else {
      const params = {
        name: user?.name,
        password: user?.password,
      };
      console.log("params", params);
      axios
        .get("http://localhost:8080/users", { params })
        .then((res) => {
          console.log("res", res?.data?.token);
        })
        .catch((err) => {
          console.log("error", err?.response?.data?.massege);
        });
    }
  };

  //TOKENI GOTUR LOCALSTOREGE YA CONTEXTDE SAXLA TOKENE GORE TOKEN VARDSA ADD TO CARD GORESSEN ,my profile sehifesi gore bilsin

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
          helperText={errors.name && " 3 harf olmali"}
          onChange={onChangeInput}
          value={user.name}
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
          error={errors.password}
          helperText={errors.password && "Yanlis password"}
          onChange={onChangeInput}
          value={user.password}
          name="password"
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
