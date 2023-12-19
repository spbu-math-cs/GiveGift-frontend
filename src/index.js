import './index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {UserContextProvider} from "./context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <App/>
    </UserContextProvider>
);