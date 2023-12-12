import React, {useState} from 'react';
import styles from "./AccountInfo.module.css";
import profile_pic from '../../assets/user.svg'
import {Interest} from "../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/InterestList/Interest/Interest";
import FriendActionButton from "../UI/Button/FriendActionButton/FriendActionButton";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import IdeasError from "../UI/IdeasError/IdeasError";
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import PersonRemoveRoundedIcon from '@mui/icons-material/PersonRemoveRounded';
import MoreUserRequestMenu from "../IncomingRequestsList/MoreUserRequestMenu/MoreUserRequestMenu";
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const AccountInfo = ({
                         accInfo,
                         token,
                         sendFriendRequest,
                         accInfoError,
                         revokeFriendRequest,
                         acceptFriendRequest,
                         rejectFriendRequest,
                         myFriends,
                         isAccInfoLoading,
                         myID,
                         removeFriend,
                         myOutgoingRequests,
                         myIncomingRequests
                     }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (isAccepted, user_id) => {
        setAnchorEl(null);
        (isAccepted) ? acceptFriendRequest(token, user_id) : rejectFriendRequest(token, user_id);
    };

    return (
        <div className={`${styles.acc_info_wrapper}`}>
            <div className={`${styles.acc_info_wrapper_bubble} slider`}>
                {accInfoError
                    ? <IdeasError/>
                    : !isAccInfoLoading && <div className={styles.acc_info_content}>
                    <div className={styles.acc_main_info}>
                        <img className={styles.acc_profile_pic} src={profile_pic} alt={'user'}/>
                        <div className={styles.main_info_desc}>
                            <span style={{fontSize: 25}}>{accInfo.nickname}</span>
                            <span>18 лет</span>

                            {accInfo.id === myID
                                ?
                                <FriendActionButton
                                    onClick={() => revokeFriendRequest(token, accInfo.id)}>
                                    <EditRoundedIcon onClick={() => alert('TODO')}
                                                     color="white"/>
                                    <span>Изменить профиль</span>
                                </FriendActionButton>
                                : myFriends.findIndex((myFriend, _) => myFriend.id === accInfo.id) === -1
                                    ? myOutgoingRequests.findIndex((myFriend, _) => myFriend.id === accInfo.id) !== -1
                                        ? <FriendActionButton
                                            onClick={() => revokeFriendRequest(token, accInfo.id)}>
                                            <PersonAddRoundedIcon color="white"/>
                                            <span>Отозвать заявку</span>
                                        </FriendActionButton>
                                        : myIncomingRequests.findIndex((myFriend, _) => myFriend.id === accInfo.id) !== -1
                                            ? <>
                                                <FriendActionButton
                                                    onClick={handleClick}>
                                                    <PeopleOutlineRoundedIcon color="white"/>
                                                    <span>Ответить на заявку</span>
                                                </FriendActionButton>
                                                <MoreUserRequestMenu user_id={accInfo.id}
                                                                     open={open} handleClose={handleClose}
                                                                     anchorEl={anchorEl}/>
                                            </>
                                            : <FriendActionButton
                                                onClick={() => sendFriendRequest(token, accInfo.id)}>
                                                <PersonAddRoundedIcon color="white"/>
                                                <span>Добавить в друзья</span>
                                            </FriendActionButton>
                                    : <div className={styles.friend_main_activities}>
                                        <FriendActionButton onClick={() => alert('подарок надо подобрать')}>
                                            <CardGiftcardRoundedIcon color="white"/>
                                            <span>Подобрать подарок</span>
                                        </FriendActionButton>
                                        <FriendActionButton onClick={() => removeFriend(token, accInfo.id)}>
                                            <PersonRemoveRoundedIcon color="white"/>
                                        </FriendActionButton>
                                    </div>
                            }

                        </div>
                    </div>

                    <div className={styles.acc_info_part}>
                        <span className={styles.info_part_header}>О себе</span>
                        <span className={styles.acc_description}>{accInfo.about}</span>
                    </div>

                    <div className={styles.acc_info_part}>
                        <span className={styles.info_part_header}>Интересы</span>
                        <div className={styles.acc_tags}>
                            {
                                accInfo.interests.map(interest =>
                                    <Interest key={interest} is_editable={false}>{interest}</Interest>
                                )
                            }
                        </div>
                    </div>

                    <div className={styles.acc_info_part}>
                        <span className={styles.info_part_header}>Список желаний</span>
                        <div>Мб будет мб нет КХХХХХХХХХХХХХХХХХХХХХХХХХХУЙ ЕГО</div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default AccountInfo;