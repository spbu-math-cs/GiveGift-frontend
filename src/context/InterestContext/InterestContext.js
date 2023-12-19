import React, {createContext, useState} from "react";
import {useFetching} from "../../hooks/useFetching";
import InterestService from "../../API/InterestService";

export const InterestContext = createContext(null);

export const InterestContextProvider = ({children}) => {
    const [allInterests, setAllInterests] = useState([])

    const [fetchInterests, ,] = useFetching(async () => {
        const response = await InterestService.getAll();
        setAllInterests(response.data && response.data['all_interests']);
    })

    return (<InterestContext.Provider value={
        {allInterests, fetchInterests}
    }>
        {children}
    </InterestContext.Provider>);
}