import React, {useState} from 'react';
import {Alert} from "@mui/material";
import styles from "../AccountInfo.module.css";
import profile_pic from "../../../assets/user.svg";
import {get_prettified_age} from "../../../utils/ages";
import FriendActionButton from "../../UI/Button/FriendActionButton/FriendActionButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import MoreUserRequestMenu from "../../IncomingRequestsList/MoreUserRequestMenu/MoreUserRequestMenu";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import {
    Interest
} from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/InterestList/Interest/Interest";
import {useNavigate} from "react-router-dom";

const ViewAccInfo = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (isAccepted, user_id) => {
        setAnchorEl(null);
        (isAccepted) ? props.acceptFriendRequest(props.token, user_id) : props.rejectFriendRequest(props.token, user_id);
    };

    return (
        <>
            {!props.isSetUserInfoLoading && props.userInfoError &&
                <Alert onClose={() => props.setUserInfoError("")} severity="error">
                    {props.userInfoError.data}
                </Alert>
            }
            <div className={styles.acc_main_info}>
                <img className={styles.acc_profile_pic} src={profile_pic} alt={'user'}/>
                <div className={styles.main_info_desc}>
                    <span style={{fontSize: 25}}>{props.accInfo.nickname}</span>
                    {props.accInfo.birth_date &&
                        <span>{get_prettified_age(props.accInfo.birth_date)}</span>
                    }

                    {props.accInfo.id === props.myID
                        ?
                        <FriendActionButton
                            onClick={() => {
                                props.setIsEdit(true);
                            }}>
                            <EditRoundedIcon color="white"/>
                            <span>Изменить профиль</span>
                        </FriendActionButton>
                        : props.myFriends.findIndex((myFriend, _) => myFriend.id === props.accInfo.id) === -1
                            ? props.myOutgoingRequests.findIndex((myFriend, _) => myFriend.id === props.accInfo.id) !== -1
                                ? <FriendActionButton
                                    onClick={() => props.revokeFriendRequest(props.token, props.accInfo.id)}>
                                    <CancelRoundedIcon color="white"/>
                                    <span>Отозвать заявку</span>
                                </FriendActionButton>
                                : props.myIncomingRequests.findIndex((myFriend, _) => myFriend.id === props.accInfo.id) !== -1
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
                                        onClick={() => props.sendFriendRequest(props.token, props.accInfo.id)}>
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
                                    onClick={() => props.removeFriend(props.token, props.accInfo.id)}>
                                    <PersonRemoveRoundedIcon color="white"/>
                                </FriendActionButton>
                            </div>
                    }

                </div>
            </div>
            <div className={styles.acc_info_part}>
                <span className={styles.info_part_header}>О себе</span>
                {props.accInfo.about ?
                    <span className={styles.acc_description}>{props.accInfo.about}</span>
                    : <span className={styles.acc_description}
                            style={{color: "grey"}}>Здесь ничего нет</span>
                }
            </div>

            <div className={styles.acc_info_part}>
                <span className={styles.info_part_header}>Интересы</span>
                <div className={styles.acc_tags}>
                    {
                        props.accInfo.interests.map(interest =>
                            <Interest key={interest}
                                      is_editable={props.isEdit}>{interest}</Interest>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ViewAccInfo;