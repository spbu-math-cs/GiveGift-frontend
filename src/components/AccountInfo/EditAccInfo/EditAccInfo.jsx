import React, {useContext, useEffect, useState} from 'react';
import styles from "../AccountInfo.module.css";
import profile_pic from "../../../assets/user.svg";
import {Alert, TextField} from "@mui/material";
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import FriendActionButton from "../../UI/Button/FriendActionButton/FriendActionButton";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import {
    Interest
} from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/Interest/Interest";
import PlusBtn
    from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/PlusBtn/PlusBtn";
import AddInterestModal
    from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/AddUserInterest/AddInterestModal/AddInterestModal";
import AddUserInterestForm
    from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/AddUserInterest/AddUserInterestForm/AddUserInterestForm";
import {InterestContext} from "../../../context/InterestContext/InterestContext";
import {AuthContext} from "../../../context/AuthContext/AuthContext";
import {UserContext} from "../../../context/UserContext/UserContext";
import {AccContext} from "../../../context/AccContext/AccContext";

const EditAccInfo = ({saveAccChanges}) => {

    const {allInterests, fetchInterests} = useContext(InterestContext);
    const {token} = useContext(AuthContext);
    const {isChangeUserInfoLoading, changeUserInfoError} = useContext(UserContext);
    const {accInfo, setAccInfo} = useContext(AccContext);
    
    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);

    const addUserInterest = (newInterests) => {
        setAccInfo(prevAccInfo => {
                let accInfoCopy = Object.assign({}, prevAccInfo);
                //accInfoCopy.interests = [...accInfoCopy.interests, ...newInterests];
                accInfoCopy.interests = [...accInfoCopy.interests, ...newInterests.filter(i => allInterests.includes(i))];
                return accInfoCopy;
            }
        )
        setInterestModalWindowVisibility(false)
    }

    const removeUserInterest = (interest) => {
        setAccInfo(prevAccInfo => {
            let accInfoCopy = Object.assign({}, prevAccInfo);
            accInfoCopy.interests = accInfoCopy.interests.filter(i => i !== interest);
            return accInfoCopy;
        })
    }

    useEffect(() => {
        const fetchInfo = async () => {
            await fetchInterests();
        }

        fetchInfo().catch(console.error);
    }, []); // eslint-disable-line

    return (
        <form className={`${styles.acc_info_content} fast_fadein`}>
            {!isChangeUserInfoLoading && changeUserInfoError &&
                <Alert severity="error">
                    {changeUserInfoError.data}
                </Alert>
            }
            <div className={styles.acc_main_info}>
                <img className={styles.acc_profile_pic} src={profile_pic} alt={'user'}/>
                <div className={styles.main_info_desc} style={{gridRowGap: 10}}>
                    <TextField
                        label="Имя"
                        inputProps={{style: {fontSize: 25, fontWeight: 700}}}
                        size={'small'}
                        value={accInfo.nickname}
                        onChange={(event) => {
                            setAccInfo(prevAccInfo => {
                                let accInfoCopy = Object.assign({}, prevAccInfo);
                                accInfoCopy.nickname = event.target.value;
                                return accInfoCopy;
                            })
                        }}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateField
                            label="Дата рождения"
                            size={'small'}
                            value={dayjs(accInfo.birth_date)}
                            style={{width: "fit-content"}}
                            inputProps={{style: {fontSize: 15}}}
                            onChange={(newDate) => {
                                setAccInfo(prevAccInfo => {
                                    let accInfoCopy = Object.assign({}, prevAccInfo);
                                    accInfoCopy.birth_date = newDate.toString();
                                    return accInfoCopy;
                                })
                            }}
                            format="DD-MM-YYYY"
                        />
                    </LocalizationProvider>

                    <FriendActionButton
                        onClick={(e) => {
                            e.preventDefault();
                            saveAccChanges(token, accInfo);
                        }}>
                        <SaveRoundedIcon color="white"/>
                        <span>Сохранить изменения</span>
                    </FriendActionButton>
                </div>
            </div>
            <div className={styles.acc_info_part}>
                <span className={styles.info_part_header}>О себе</span>

                <TextField
                    value={accInfo.about}
                    onChange={(event) => {
                        setAccInfo(prevAccInfo => {
                            let accInfoCopy = Object.assign({}, prevAccInfo);
                            accInfoCopy.about = event.target.value;
                            return accInfoCopy;
                        })
                    }}
                    multiline
                    rows={2}
                    inputProps={{className: "slider"}}
                />
            </div>

            <div className={styles.acc_info_part}>
                <span className={styles.info_part_header}>Интересы</span>
                <div className={styles.acc_tags}>
                    {
                        accInfo.interests.map(interest =>
                            <Interest key={interest}
                                      remove={removeUserInterest}
                                      is_editable={false}>{interest}</Interest>
                        )
                    }
                    <PlusBtn onClick={() => {
                        setInterestModalWindowVisibility(true);
                    }}/>

                    <AddInterestModal visible={InterestModalWindowVisibility}
                                      setVisible={setInterestModalWindowVisibility}>
                        <AddUserInterestForm
                            optionInterests={allInterests.filter(item => !accInfo.interests.includes(item))}
                            add={addUserInterest}/>
                    </AddInterestModal>
                </div>
            </div>
        </form>
    );
};

export default EditAccInfo;
