import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.scss";
const LoginForm = () => {
  // const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    if (error && event?.target?.value < 5) {
      setError(true);
    } else {
      setError(false);
    }
  };
  console.log("event.target.value", inputValue?.length);

  const onSubmit = () => {
    if (inputValue && inputValue?.length < 5) {
      setError(true);
    }
  };
  // console.log(user);
  return (
    <form className="form">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "350px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="Name"
          variant="standard"
          error={error}
          helperText={error && "Error"}
          onChange={onChangeInput}
          value={inputValue}
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
