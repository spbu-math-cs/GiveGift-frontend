import React, { createContext, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import UserService from "../../API/UserService";
import { isAuthError } from "../../utils/checkers";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const myID = userInfo.id;

  const [isNewUser, setIsNewUser] = useLocalStorage("isNewUser", true);

  const [fetchUserInfo, ,] = useFetching(
    async (token, setToken, removeToken) => {
      try {
        const response = await UserService.getUserInfo(token, 0);
        const { access_token, ...userData } = response.data;
        access_token && setToken(access_token);
        setUserInfo(userData);
      } catch (err) {
        isAuthError(err.response) && removeToken();
      }
    },
  );

  const [changeUserInfo, isChangeUserInfoLoading, changeUserInfoError] =
    useFetching(async (token, accInfo, setIsEdit) => {
      setUserInfo(accInfo);
      setIsEdit(false);
      await UserService.changeUserInfo(token, accInfo);
    });

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        myID,
        fetchUserInfo,
        changeUserInfo,
        isChangeUserInfoLoading,
        changeUserInfoError,
        isNewUser,
        setIsNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
