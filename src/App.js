import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Ideas from "./components/Ideas/Ideas";

function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className="app-wrapper-content y_slider">
                <Ideas/>
            </div>
        </div>
    );
}

export default App;
