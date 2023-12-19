import React, {useContext, useEffect, useState} from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";
import {useParams} from "react-router-dom";
import {isObjectEmpty} from "../../utils/checkers";
import {FriendContext} from "../../context/FriendContext/FriendContext";
import {UserContext} from "../../context/UserContext/UserContext";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import {AccContext} from "../../context/AccContext/AccContext";

function Account() {
    const {id} = useParams();
    const [isEdit, setIsEdit] = useState(false);

    const {fetchFriendLists} = useContext(FriendContext);
    const {fetchUserInfo} = useContext(UserContext);
    const {token} = useContext(AuthContext);
    const {accInfo, fetchAccInfo, accInfoError, isAccInfoLoading} = useContext(AccContext)

    useEffect(() => {
        const fetchInfo = async () => {
            await fetchUserInfo(token);
            await fetchAccInfo(token, id);
            await fetchFriendLists(token);
        }
        fetchInfo().catch(console.error)
    }, [id]);  // eslint-disable-line

    // TODO: подумать над async

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Друзья'}>
                <AccountPageSideBarContent
                    accFriends={accInfo.friends}
                    isAccInfoLoading={!accInfoError && (isAccInfoLoading || isObjectEmpty(accInfo))}
                />
            </Sidebar>

            <AccountInfo isEdit={isEdit} setIsEdit={setIsEdit}/>
        </div>
    );
}

export default Account;