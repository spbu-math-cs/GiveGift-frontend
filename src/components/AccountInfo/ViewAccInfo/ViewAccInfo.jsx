import React from 'react';
import {Alert} from "@mui/material";
import styles from "../AccountInfo.module.css";
import profile_pic from "../../../assets/user.svg";
import {get_prettified_age} from "../../../utils/ages";
import {
    Interest
} from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/InterestList/Interest/Interest";
import ViewAccActionBtn from "../../UI/Button/ViewAccActionBtn/ViewAccActionBtn";

const ViewAccInfo = (props) => {
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

                    <ViewAccActionBtn accInfo={props.accInfo}
                                      acceptFriendRequest={props.acceptFriendRequest}
                                      token={props.token}
                                      rejectFriendRequest={props.rejectFriendRequest}
                                      myID={props.myID}
                                      setIsEdit={props.setIsEdit}
                                      myFriends={props.myFriends}
                                      myOutgoingRequests={props.myOutgoingRequests}
                                      revokeFriendRequest={props.revokeFriendRequest}
                                      myIncomingRequests={props.myIncomingRequests}
                                      sendFriendRequest={props.sendFriendRequest}
                                      generateIdeas={props.generateIdeas}
                                      removeFriend={props.removeFriend}
                    />

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