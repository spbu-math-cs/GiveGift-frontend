import React, {useContext} from 'react';
import styles from "./AccountInfo.module.css";
import Error from "../UI/Error/Error";
import {ThemeProvider} from "@mui/material";
import {redTheme} from "../UI/muiThemes/themes";
import EditAccInfo from "./EditAccInfo/EditAccInfo";
import ViewAccInfo from "./ViewAccInfo/ViewAccInfo";
import {UserContext} from "../../context/UserContext/UserContext";

const AccountInfo = (props) => {

    const {isChangeUserInfoLoading} = useContext(UserContext)

    return (
        <ThemeProvider theme={redTheme}>
            <div className={`${styles.acc_info_wrapper}`}>
                <div className={`${styles.acc_info_wrapper_bubble} slider`}>
                    {props.accInfoError
                        ? <Error/>
                        : !props.isAccInfoLoading && !isChangeUserInfoLoading &&
                        <>
                            {props.isEdit
                                ? <EditAccInfo
                                               accInfo={props.accInfo}
                                               setAccInfo={props.setAccInfo}
                                               saveAccChanges={props.saveAccChanges}
                                               isEdit={props.isEdit}

                                />
                                : <ViewAccInfo
                                               accInfo={props.accInfo}
                                               setIsEdit={props.setIsEdit}
                                />}
                        </>
                    }
                </div>
            </div>
        </ThemeProvider>
    );
};
export default AccountInfo;