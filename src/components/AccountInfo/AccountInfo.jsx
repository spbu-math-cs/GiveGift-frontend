import React from 'react';
import styles from "./AccountInfo.module.css";
import IdeasError from "../UI/IdeasError/IdeasError";
import {ThemeProvider} from "@mui/material";
import {redTheme} from "../UI/muiThemes/themes";
import EditAccInfo from "./EditAccInfo/EditAccInfo";
import ViewAccInfo from "./ViewAccInfo/ViewAccInfo";

const AccountInfo = (props) => {

    return (
        <ThemeProvider theme={redTheme}>
            <div className={`${styles.acc_info_wrapper}`}>
                <div className={`${styles.acc_info_wrapper_bubble} slider`}>
                    {props.accInfoError
                        ? <IdeasError/>
                        : !props.isAccInfoLoading && !props.isSetUserInfoLoading &&
                        <div className={`${styles.acc_info_content} fast_fadein`}>
                            {props.isEdit
                                ? <EditAccInfo accInfo={props.accInfo}
                                               setAccInfo={props.setAccInfo}
                                               saveAccChanges={props.saveAccChanges}
                                               token={props.token}
                                               isEdit={props.isEdit}
                                               setInterestModalWindowVisibility={props.setInterestModalWindowVisibility}
                                               InterestModalWindowVisibility={props.InterestModalWindowVisibility}
                                               allInterests={props.allInterests}
                                />
                                : <ViewAccInfo isSetUserInfoLoading={props.isSetUserInfoLoading}
                                               userInfoError={props.userInfoError}
                                               setUserInfoError={props.setUserInfoError}
                                               accInfo={props.accInfo}
                                               myID={props.myID}
                                               myFriends={props.myFriends}
                                               setIsEdit={props.setIsEdit}
                                               myOutgoingRequests={props.myOutgoingRequests}
                                               revokeFriendRequest={props.revokeFriendRequest}
                                               token={props.token}
                                               myIncomingRequests={props.myIncomingRequests}
                                               sendFriendRequest={props.sendFriendRequest}
                                               generateIdeas={props.generateIdeas}
                                               removeFriend={props.removeFriend}
                                />
                            }
                        </div>
                    }
                </div>
            </div>
        </ThemeProvider>
    );
};
export default AccountInfo;