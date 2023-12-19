import './index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {AuthContextProvider, FriendContextProvider, UserContextProvider} from "./context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <UserContextProvider>
            <FriendContextProvider>
                <App/>
            </FriendContextProvider>
        </UserContextProvider>
    </AuthContextProvider>
);