import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Ideas from "./Ideas/Ideas";

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Ideas/>
            </div>
        </div>
    );
}

export default App;
