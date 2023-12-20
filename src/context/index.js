import React from "react";
import { FriendContextProvider } from "./FriendContext/FriendContext";
import { IdeasContextProvider } from "./IdeasContext/IdeasContext";
import { UserContextProvider } from "./UserContext/UserContext";
import { InterestContextProvider } from "./InterestContext/InterestContext";
import { AuthContextProvider } from "./AuthContext/AuthContext";
import { AccContextProvider } from "./AccContext/AccContext";

export const AppContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <AccContextProvider>
          <FriendContextProvider>
            <InterestContextProvider>
              <IdeasContextProvider>{children}</IdeasContextProvider>
            </InterestContextProvider>
          </FriendContextProvider>
        </AccContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
};
