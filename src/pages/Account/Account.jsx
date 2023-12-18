import React, {useEffect, useState} from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";
import {isObjectEmpty} from "../../utils/checkers";


function Account(props) {
    const {id} = useParams();
    const [accInfo, setAccInfo] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const [fetchAccInfo, isAccInfoLoading, accInfoError] = useFetching(async (token, id) => {
        const response = await UserService.getUserInfo(token, id);
        setAccInfo(response.data)
    })

    const saveAccChanges = () => {
        props.setUserAccInfo(props.token, accInfo);
        //props.setUserInfo(accInfo);
        setIsEdit(false);
    }

    useEffect(() => {
        props.fetchUserInfo(props.token);
        fetchAccInfo(props.token, id);
        props.fetchFriendLists(props.token);
        isEdit && props.fetchInterests();
    }, [id]);  // eslint-disable-line

    // TODO: подумать над async

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Друзья'}>
                <AccountPageSideBarContent
                    userFriends={accInfo.friends}
                    myFriends={props.myFriends}
                    token={props.token}
                    myID={props.userInfo.id}
                    sendFriendRequest={props.sendFriendRequest}
                    isAccInfoLoading={!accInfoError && (isAccInfoLoading || isObjectEmpty(accInfo))}
                    generateIdeas={props.generateIdeas}
                />
            </Sidebar>

            <AccountInfo isAccInfoLoading={!accInfoError && (isAccInfoLoading || isObjectEmpty(accInfo))}
                         token={props.token}
                         accInfo={accInfo}
                         setAccInfo={setAccInfo}
                         accInfoError={accInfoError}
                         sendFriendRequest={props.sendFriendRequest}
                         revokeFriendRequest={props.revokeFriendRequest}
                         myFriends={props.myFriends}
                         acceptFriendRequest={props.acceptFriendRequest}
                         rejectFriendRequest={props.rejectFriendRequest}
                         myOutgoingRequests={props.myOutgoingRequests}
                         myIncomingRequests={props.myIncomingRequests}
                         removeFriend={props.removeFriend}
                         myID={props.userInfo.id}
                         generateIdeas={props.generateIdeas}
                         isEdit={isEdit}
                         setIsEdit={setIsEdit}
                         allInterests={props.allInterests}
                         InterestModalWindowVisibility={props.InterestModalWindowVisibility}
                         setInterestModalWindowVisibility={props.setInterestModalWindowVisibility}
                         saveAccChanges={saveAccChanges}
                         setUserInfo={props.setUserInfo}
                         userInfo={props.userInfo}
                         isSetUserInfoLoading={props.isSetUserInfoLoading}
                         userInfoError={props.userInfoError}
                         setUserInfoError={props.setUserInfoError}
                         setUserAccInfo={props.setUserAccInfo}
            />
        </div>
    );
}

export default Account;