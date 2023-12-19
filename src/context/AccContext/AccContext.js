import {createContext, useState} from "react";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";

export const AccContext = createContext(null);

export const AccContextProvider = ({children}) => {
    const [accInfo, setAccInfo] = useState({});

    const [fetchAccInfo, isAccInfoLoading, accInfoError] = useFetching(async (token, id) => {
        const response = await UserService.getUserInfo(token, id);
        setAccInfo(response.data)
    });

    return (<AccContext.Provider value={
        {
            accInfo, setAccInfo,
            fetchAccInfo, isAccInfoLoading, accInfoError
        }
    }>
        {children}
    </AccContext.Provider>);
}