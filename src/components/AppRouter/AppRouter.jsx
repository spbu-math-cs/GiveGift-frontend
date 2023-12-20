import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Friends from "../../pages/Friends/Friends";
import Account from "../../pages/Account/Account";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const AppRouter = () => {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Main />} />

      {token ? (
        <>
          <Route path="friends" element={<Friends />} />
          <Route path="account/:id" element={<Account />} />
        </>
      ) : (
        <>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
