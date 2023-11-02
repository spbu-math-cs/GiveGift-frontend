import Sidebar from "../../components/Sidebar/Sidebar";
import MainPageSideBarContent from "../../components/Sidebar/MainPageSideBarContent/MainPageSideBarContent";
import Ideas from "../../components/Ideas/Ideas";
import React from "react";
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={`${styles.main} app-wrapper-content`}>
            <Sidebar>
                <MainPageSideBarContent/>
            </Sidebar>
            <Ideas/>
        </div>
    );
}

export default Main;