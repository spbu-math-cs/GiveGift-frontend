import React, {useContext, useEffect, useState} from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";
import {isObjectEmpty} from "../../utils/checkers";
import {FriendContext, InterestContext, UserContext} from "../../context";


function Account(props) {
    const {id} = useParams();
    const [accInfo, setAccInfo] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const {fetchFriendLists} = useContext(FriendContext);
    const {fetchInterests} = useContext(InterestContext);
    const {fetchUserInfo, token, setUserAccInfo} = useContext(UserContext);


    // todo: возможно можно воткнуть в контекст
    const [fetchAccInfo, isAccInfoLoading, accInfoError] = useFetching(async (token, id) => {
        const response = await UserService.getUserInfo(token, id);
        setAccInfo(response.data)
    })

    const saveAccChanges = () => {
        setUserAccInfo(token, accInfo);
        setIsEdit(false);
    }
    //-------

    useEffect(() => {
        fetchUserInfo(token);
        fetchAccInfo(token, id);
        fetchFriendLists(token);
        isEdit && fetchInterests();
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

            <AccountInfo isAccInfoLoading={!accInfoError && (isAccInfoLoading || isObjectEmpty(accInfo))}

                         accInfo={accInfo}
                         setAccInfo={setAccInfo}
                         accInfoError={accInfoError}

                         isEdit={isEdit}
                         setIsEdit={setIsEdit}

                         InterestModalWindowVisibility={props.InterestModalWindowVisibility}
                         setInterestModalWindowVisibility={props.setInterestModalWindowVisibility}

                         saveAccChanges={saveAccChanges}
            />
        </div>
    );
}
/*
*          setUserInfo={props.setUserInfo}
                         userInfo={props.userInfo}
                         isSetUserInfoLoading={props.isSetUserInfoLoading}
                         userInfoError={props.userInfoError}
                         setUserInfoError={props.setUserInfoError}
                         setUserAccInfo={props.setUserAccInfo}*/

export default Account;