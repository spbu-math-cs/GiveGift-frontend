import Sidebar from "../components/Sidebar/Sidebar";
import MainPageSideBarContent from "../components/Sidebar/MainPageSideBarContent/MainPageSideBarContent";
import Ideas from "../components/Ideas/Ideas";
import React from "react";
import './Main.css'

function Main() {
    return (
        <div className="main">
            <Sidebar>
                <MainPageSideBarContent/>
            </Sidebar>
            <div className="app-wrapper-content y_slider">
                <Ideas/>
            </div>
        </div>
    );
}

export default Main;