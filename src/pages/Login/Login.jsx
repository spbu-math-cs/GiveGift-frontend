import React from "react";
import styles from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import "../../App.css";

function Login() {
  return (
    <div className={`${styles.login} app-wrapper-content slider`}>
      <LoginForm />
    </div>
  );
}

export default Login;
