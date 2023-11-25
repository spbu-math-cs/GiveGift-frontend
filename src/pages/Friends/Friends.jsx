import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import '../../App.css'
import FriendList from "../../components/FriendList/FriendList";
import styles from './Friends.module.css'
import IncomingRequestsList from "../../components/IncomingRequestsList/IncomingRequestsList";
import OutgoingRequestsList from "../../components/OutgoingRequestsList/OutgoingRequestsList";

const Friends = () => {

    const activeClass = 'active_request_list';

    const [incomingRequestsClasses, setIncomingRequestsClasses] = useState([styles.request_bubble, activeClass]);
    const [outgoingRequestsClasses, setOutgoingRequestsClasses] = useState([styles.request_bubble]);

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

    // TODO: tab - новая компонента
    return (
        <div className={'app-wrapper-content content-with-sidebar'}>
            <Sidebar header={'Заявки в друзья'}>
                <div className={styles.friend_requests}>

                    <div className={styles.request_bubble_block}>
                        <div className={incomingRequestsClasses.join(' ')} onClick={() => {
                            setIncomingRequestsClasses([...incomingRequestsClasses, activeClass]);
                            setOutgoingRequestsClasses(outgoingRequestsClasses.filter((curr_class) => curr_class !== activeClass));
                        }}>
                            <span>Входящие</span>
                        </div>
                        <div className={outgoingRequestsClasses.join(' ')} onClick={() => {
                            setOutgoingRequestsClasses([...outgoingRequestsClasses, activeClass]);
                            setIncomingRequestsClasses(incomingRequestsClasses.filter((curr_class) => curr_class !== activeClass));
                        }}>
                            <span>Исходящие</span>
                        </div>
                    </div>

                    <div className={styles.requests_list}>
                    {incomingRequestsClasses.includes(activeClass)
                        ? <IncomingRequestsList incomingRequests={incomingRequests}/>
                        : <OutgoingRequestsList outgoingRequests={outgoingRequests}/>
                    }
                    </div>
                </div>
            </Sidebar>

            <FriendList/>
        </div>
    );
};

export default Friends;