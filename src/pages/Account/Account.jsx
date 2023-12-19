import React, {useContext, useEffect, useState} from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";
import {isObjectEmpty} from "../../utils/checkers";
import {FriendContext} from "../../context/FriendContext/FriendContext";
import {InterestContext} from "../../context/InterestContext/InterestContext";
import {UserContext} from "../../context/UserContext/UserContext";
import {AuthContext} from "../../context/AuthContext/AuthContext";

function Account() {
    const {id} = useParams();
    const [accInfo, setAccInfo] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const {fetchFriendLists} = useContext(FriendContext);
    const {fetchInterests} = useContext(InterestContext);
    const {fetchUserInfo, changeUserInfo} = useContext(UserContext);
    const {token} = useContext(AuthContext);

    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);


    // todo: возможно можно воткнуть в контекст
    const [fetchAccInfo, isAccInfoLoading, accInfoError] = useFetching(async (token, id) => {
        const response = await UserService.getUserInfo(token, id);
        setAccInfo(response.data)
    })

    const saveAccChanges = () => {
        changeUserInfo(token, accInfo, setIsEdit);
    }
    //-------

    useEffect(() => {
        const fetchInfo = async () => {
            await fetchUserInfo(token);
            await fetchAccInfo(token, id);
            await fetchFriendLists(token);
            isEdit && await fetchInterests();
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

            <AccountInfo isAccInfoLoading={!accInfoError && (isAccInfoLoading || isObjectEmpty(accInfo))}

                         accInfo={accInfo}
                         setAccInfo={setAccInfo}
                         accInfoError={accInfoError}

                         isEdit={isEdit}
                         setIsEdit={setIsEdit}

                         InterestModalWindowVisibility={InterestModalWindowVisibility}
                         setInterestModalWindowVisibility={setInterestModalWindowVisibility}

                         saveAccChanges={saveAccChanges}
            />
        </div>
    );
}

export default Account;