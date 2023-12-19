import './index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {
    AppContext,
    AuthContextProvider,
    FriendContextProvider,
    IdeasContextProvider,
    InterestContextProvider,
    UserContextProvider
} from "./context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContext>
        <App/>
    </AppContext>
);