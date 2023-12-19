import React, {createContext} from "react";
import {useToken} from "../../hooks/useToken";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const {token, removeToken, setToken} = useToken();

    const [signUpUser, , signUpError] = useFetching(async (nickname, email, password) => {
        const response = await UserService.signUp(nickname, email, password);
        setToken(response.data['access_token']);
    })

    const [loginUser, , loginError] = useFetching(async (email, password) => {
        const response = await UserService.login(email, password);
        setToken(response.data['access_token']);
    })

    const [logout, ,] = useFetching(async (token) => {
        await UserService.logout(token)
    })

    return (<AuthContext.Provider value={
        {
            token, removeToken, setToken,
            signUpUser, signUpError,
            loginUser, loginError,
            logout
        }
    }>
        {children}
    </AuthContext.Provider>);
}