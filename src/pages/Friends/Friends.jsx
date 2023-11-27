import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import FriendPageSideBarContent from "../../components/Sidebar/FriendPageSideBarContent/FriendPageSideBarContent";

const Friends = () => {
    const [incomingRequests, setIncomingRequests] = useState(
        [
            {
                id: 1,
                nickname: '1Иван Иванов',
            },
            {
                id: 2,
                nickname: 'Иван Иванов',
            }, {
            id: 3,
            nickname: 'Иван Иванов',
        }, {
            id: 4,
            nickname: 'Иван Иванов',
        }, {
            id: 5,
            nickname: 'Иван Иванов',
        }, {
            id: 6,
            nickname: 'Иван Иванов',
        }, {
            id: 7,
            nickname: 'Иван Иванов',
        }, {
            id: 8,
            nickname: 'Иван Иванов',
        }, {
            id: 9,
            nickname: 'Иван Иванов',
        }, {
            id: 10,
            nickname: 'Иван Иванов',
        }
        ]
    )

    const [outgoingRequests, setOutgoingRequests] = useState(
        [
            {
                id: 1,
                nickname: 'Иван Иванов',
            },
            {
                id: 2,
                nickname: 'Иван Иванов',
            }, {
            id: 3,
            nickname: 'Иван Иванов',
        }, {
            id: 4,
            nickname: 'Иван Иванов',
        }, {
            id: 5,
            nickname: 'Иван Иванов',
        }, {
            id: 6,
            nickname: 'Иван Иванов',
        }, {
            id: 7,
            nickname: 'Иван Иванов',
        }, {
            id: 8,
            nickname: 'Иван Иванов',
        }]
    )

    const [FriendModalWindowVisibility, setFriendModalWindowVisibility] = useState(false);

    // TODO: tab - новая компонента
    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <FriendPageSideBarContent
                    incomingRequests={incomingRequests}
                    setIncomingRequests={setIncomingRequests}
                    outgoingRequests={outgoingRequests}
                    setOutgoingRequests={setOutgoingRequests}
                />
            </Sidebar>

            <FriendList
                FriendModalWindowVisibility={FriendModalWindowVisibility}
                setFriendModalWindowVisibility={setFriendModalWindowVisibility}
            />
        </div>
    );
};

export default Friends;