import React from "react";
import {FriendContextProvider} from "./FriendContext/FriendContext";
import {IdeasContextProvider} from "./IdeasContext/IdeasContext";
import {UserContextProvider} from "./UserContext/UserContext";
import {InterestContextProvider} from "./InterestContext/InterestContext";
import {AuthContextProvider} from "./AuthContext/AuthContext";


export const AppContext = ({children}) => {
    return (<AuthContextProvider>
        <UserContextProvider>
            <FriendContextProvider>
                <InterestContextProvider>
                    <IdeasContextProvider>
                        {children}
                    </IdeasContextProvider>
                </InterestContextProvider>
            </FriendContextProvider>
        </UserContextProvider>
    </AuthContextProvider>);
}