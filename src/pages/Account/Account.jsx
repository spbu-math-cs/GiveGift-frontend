import React from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";

function Account() {
    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Друзья'}>
                <AccountPageSideBarContent/>
            </Sidebar>

            <AccountInfo/>
        </div>
    );
}

export default Account;