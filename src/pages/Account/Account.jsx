import React, {useEffect, useState} from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";


function Account(props) {
    const {id} = useParams()
    const [accInfo, setAccInfo] = useState({})

    const [fetchAccInfo, isAccInfoLoading, accInfoError] = useFetching(async (token, id) => {
        const response = await UserService.getUserInfo(token, id);
        setAccInfo(response.data)
    })

    useEffect(() => {
        fetchAccInfo(props.token, id);
        props.fetchFriendLists(props.token);
    }, [id]);

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Друзья'}>
                <AccountPageSideBarContent
                    userFriends={accInfo.friends}
                    myFriends={props.myFriends}
                    token={props.token}
                    myID={props.userInfo.id}
                    sendFriendRequest={props.sendFriendRequest}
                    isAccInfoLoading={!accInfoError && (isAccInfoLoading || Object.keys(accInfo).length === 0)}
                    generateIdeas={props.generateIdeas}
                />

            </Sidebar>


            <AccountInfo isAccInfoLoading={!accInfoError && (isAccInfoLoading || Object.keys(accInfo).length === 0)}
                         token={props.token}
                         accInfo={accInfo}
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
            />

        </div>
    );
}

export default Account;