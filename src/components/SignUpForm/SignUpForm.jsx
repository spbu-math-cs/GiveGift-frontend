import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Alert, OutlinedInput, ThemeProvider } from "@mui/material";
import { redTheme } from "../UI/muiThemes/themes";
import styles from "./SignUpForm.module.css";
import EmailInput from "../UI/Input/EmailInput/EmailInput";
import PasswordInput from "../UI/Input/PasswordInput/PasswordInput";
import SignUpButton from "../UI/Button/SignUpButton/SignUpButton";
import { AuthContext } from "../../context/AuthContext/AuthContext";

function SignUpForm() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUpUser, signUpError } = useContext(AuthContext);

  return (
    <form className={styles.signUpForm}>
      <span className={styles.signUpHeader}>Регистрация</span>

      {signUpError && (
        <ThemeProvider theme={redTheme}>
          <Alert severity="error" style={{ borderRadius: "10px", whiteSpace: 'pre-line'}}>
            {signUpError.data}
          </Alert>
        </ThemeProvider>
      )}

      <ThemeProvider theme={redTheme}>
        <OutlinedInput
          placeholder={"Логин"}
          type={"email"}
          name={"email"}
          value={nickname}
          autoComplete="text"
          sx={{ width: "100%" }}
          style={{ borderRadius: "10px" }}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
      </ThemeProvider>

      <SignUpButton
        signUpUser={signUpUser}
        password={password}
        email={email}
        nickname={nickname}
        setPassword={setPassword}
        setEmail={setEmail}
        setNickname={setNickname}
      />

      <span className={styles.login_suggestion}>
        Уже есть аккаунт?{" "}
        <NavLink end to={"/login"} className={styles.login_link}>
          Войти
        </NavLink>
      </span>
    </form>
  );
}

export default SignUpForm;
