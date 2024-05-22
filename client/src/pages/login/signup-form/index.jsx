import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./style.scss";
import { Button, Stack } from "@mui/material";
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
  const [isClicked, setIsClicked] = useState(false);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // console.log("user",user);
  };

  const onSubmit = () => {
    setIsClicked(!isClicked);
    if(user?.name?.length<3){
     setErrors
    }
    console.log("sub User", user);
  };
  return (
    <form action="" className="form">
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
          // error={errors.name}
          // helperText={errors.name && " 3 harf olmali"}
          onChange={onChangeInput}
          value={user?.name}

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
          // error={errors.name}
          // helperText={errors.name && " 3 harf olmali"}
          onChange={onChangeInput}
          // value={user.name}
          name="email"
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
          label="Password"
          variant="standard"
          // error={errors.name}
          // helperText={errors.name && " 3 harf olmali"}
          onChange={onChangeInput}
          // value={user.name}
          name="password"
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
          label="Repeat Password"
          variant="standard"
          // error={errors.name}
          // helperText={errors.name && " 3 harf olmali"}
          onChange={onChangeInput}
          // value={user.name}
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
