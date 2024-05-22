import React, { useState } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
import "./style.scss";

const LoginForm = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({ name: false, password: false });
  const [isClicked, setIsClicked] = useState(false);

  //password regexim
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.* ).{8,16}$/;

  const onChangeInput = ({ target: { name, value } }) => {
    setUser((prevs) => ({ ...prevs, [name]: value }));
    console.log("name budur", name);
    // clikden sonra yoxlayir sonra click olunub
    if (isClicked) {
      setErrors((prev) => ({
        ...prev,
        [name]:
          name === "password" ? !passwordRegex.test(value) : value.length < 3,
      }));
    }
  };

  const onSubmit = () => {
    setIsClicked(true);
    const { name, password } = user;
    //name password yoxlayir
    const nameError = name.length < 3;
    const passwordError = !passwordRegex.test(password);
    setErrors({ name: nameError, password: passwordError });
    if (!nameError && !passwordError) {
      axios
        .get("http://localhost:8080/users", { params: user })
        .then((res) =>
          localStorage.setItem("loginUser", JSON.stringify(res.data))
        )
        .catch((err) => console.error("error", err?.response?.data?.message));
    }
  };

  return (
    <form className="form">
      <Box
        sx={{ width: "350px", display: "flex", alignItems: "flex-end", mb: 2 }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="name-basic"
          label="İsim"
          variant="standard"
          error={errors.name}
          helperText={errors.name && "İsim en az 3 karakter olmalı"}
          onChange={onChangeInput}
          value={user.name}
          name="name"
        />
      </Box>
      <Box
        sx={{ width: "350px", display: "flex", alignItems: "flex-end", mb: 2 }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="password-basic"
          label="Şifre"
          variant="standard"
          type="password"
          error={errors.password}
          helperText={
            errors.password &&
            "Şifre en az bir küçük harf, bir büyük harf, bir rakam ve bir alt çizgi (_) içermeli ve 8-16 karakter uzunluğunda olmalıdır"
          }
          onChange={onChangeInput}
          value={user.password}
          name="password"
        />
      </Box>

      {/* Giriş Yap butonu */}
      <Stack direction="row" spacing={2}>
        <Button onClick={onSubmit} variant="outlined">
          Giriş Yap
        </Button>
      </Stack>

      {/* Şifremi Unuttum linki */}
      <div className="line"></div>
      <span>Şifremi Unuttum?</span>
    </form>
  );
};

export default LoginForm;
