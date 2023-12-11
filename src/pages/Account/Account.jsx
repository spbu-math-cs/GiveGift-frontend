import React, {useEffect, useState} from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountPageSideBarContent from "../../components/Sidebar/AccountPageSideBarContent/AccountPageSideBarContent";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../API/UserService";


function Account({token}) {
    // TODO: Для любого другого пользователя кнопочку добавить в друзья бахнуть а иначе изменить данные типа

    const params = useParams()
    const [accInfo, setAccInfo] = useState({})

    const [fetchAccInfo, isAccInfoLoading,] = useFetching(async (token, id) => {
        const response = await UserService.getUserInfo(token, id);
        setAccInfo(response.data)
    })

    useEffect(() => {
        fetchAccInfo(token, params.id)
    }, []);

    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Друзья'}>
                <AccountPageSideBarContent/>
            </Sidebar>

            {!isAccInfoLoading && Object.keys(accInfo).length !== 0 && <AccountInfo accInfo={accInfo}/>}
        </div>
    );
}

export default Account;