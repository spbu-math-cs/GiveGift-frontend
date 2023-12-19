import React, {createContext, useState} from "react";
import {useFetching} from "../../hooks/useFetching";
import IdeaService from "../../API/IdeaService";

export const IdeasContext = createContext(null);

export const IdeasContextProvider = ({children}) => {
    const [ideas, setIdeas] = useState([])

    const [generateIdeas, isIdeasLoading, ideaError] = useFetching(async ({
                                                                              userIdeaProperties,
                                                                              friend_id,
                                                                              token
                                                                          }) => {
        const response = await
            ((friend_id && token)
                ? IdeaService.getIdeasForFriend(token, friend_id)
                : IdeaService.getIdeas(userIdeaProperties));
        setIdeas(response.data);
    })

    return (<IdeasContext.Provider value={
        {
            ideas,
            generateIdeas, isIdeasLoading, ideaError
        }
    }>
        {children}
    </IdeasContext.Provider>);
}