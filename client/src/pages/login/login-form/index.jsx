import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControl, { useFormControl } from "@mui/material/FormControl";

import "./style.scss";
const LoginForm = () => {
  const { focused } = useFormControl() || {};
  console.log("focused", focused);
  // const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    if (isClicked && inputValue?.length <= 2) {
      setError(true);
    } else {
      setError(false);
    }
  };
  console.log("event.target.value", inputValue?.length);

  const onSubmit = () => {
    setIsClicked(true);
    if (inputValue && inputValue?.length <= 2) {
      setError(true);
    }
  };
  // console.log(user);
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
