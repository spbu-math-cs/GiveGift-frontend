import React, {useContext, useState} from 'react';
import FriendActionButton from "../FriendActionButton/FriendActionButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import MoreUserRequestMenu from "../../../IncomingRequestsList/MoreUserRequestMenu/MoreUserRequestMenu";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import styles from './ViewAccActionBtn.module.css'
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import {useNavigate} from "react-router-dom";
import {FriendContext} from "../../../../context";

const ViewAccActionBtn = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const {
        outgoingRequests,
        revokeFriendRequest,
        incomingRequests,
        sendFriendRequest,
        removeFriend,
        acceptFriendRequest,
        rejectFriendRequest,
        friends
    } = useContext(FriendContext);

    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (isAccepted, user_id) => {
        setAnchorEl(null);
        (isAccepted) ? acceptFriendRequest(props.token, user_id) : rejectFriendRequest(props.token, user_id);
    };

    return (<>
        {props.accInfo.id === props.myID
            ?
            <FriendActionButton
                onClick={() => {
                    props.setIsEdit(true);
                }}>
                <EditRoundedIcon color="white"/>
                <span>Изменить профиль</span>
            </FriendActionButton>
            : friends.findIndex((myFriend, _) => myFriend.id === props.accInfo.id) === -1
                ? outgoingRequests.findIndex((myFriend, _) => myFriend.id === props.accInfo.id) !== -1
                    ? <FriendActionButton
                        onClick={() => revokeFriendRequest(props.token, props.accInfo.id)}>
                        <CancelRoundedIcon color="white"/>
                        <span>Отозвать заявку</span>
                    </FriendActionButton>
                    : incomingRequests.findIndex((myFriend, _) => myFriend.id === props.accInfo.id) !== -1
                        ? <>
                            <FriendActionButton
                                onClick={handleClick}>
                                <PeopleOutlineRoundedIcon color="white"/>
                                <span>Ответить на заявку</span>
                            </FriendActionButton>
                            <MoreUserRequestMenu user_id={props.accInfo.id}
                                                 open={open}
                                                 handleClose={handleClose}
                                                 anchorEl={anchorEl}/>
                        </>
                        : <FriendActionButton
                            onClick={() => sendFriendRequest(props.token, props.accInfo.id)}>
                            <PersonAddRoundedIcon color="white"/>
                            <span>Добавить в друзья</span>
                        </FriendActionButton>
                : <div className={styles.friend_main_activities}>
                    <FriendActionButton onClick={() => props.generateIdeas({
                        friend_id: props.accInfo.id,
                        token: props.token
                    }) && navigate('/')}>
                        <CardGiftcardRoundedIcon color="white"/>
                        <span>Подобрать подарок</span>
                    </FriendActionButton>
                    <FriendActionButton
                        onClick={() => removeFriend(props.token, props.accInfo.id)}>
                        <PersonRemoveRoundedIcon color="white"/>
                    </FriendActionButton>
                </div>
        }
    </>);
};

export default ViewAccActionBtn;