import { createContext, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import UserService from "../../API/UserService";

export const AccContext = createContext(null);

export const AccContextProvider = ({ children }) => {
  const [accInfo, setAccInfo] = useState({});

  const [fetchAccInfo, isAccInfoLoading, accInfoError] = useFetching(
    async (token, id) => {
      const response = await UserService.getUserInfo(token, id);
      setAccInfo(response.data);
    },
  );

  const [changeAccInfo, isChangeAccInfoLoading, changeAccInfoError] =
    useFetching(async (token, setIsEdit, setUserInfo) => {
      const response = await UserService.changeUserInfo(token, accInfo);
      setAccInfo(response.data);
      setUserInfo(response.data);
      setIsEdit(false);
    });

  return (
    <AccContext.Provider
      value={{
        accInfo,
        setAccInfo,
        fetchAccInfo,
        isAccInfoLoading,
        accInfoError,
        changeAccInfo,
        isChangeAccInfoLoading,
        changeAccInfoError,
      }}
    >
      {children}
    </AccContext.Provider>
  );
};
