import React from 'react';
import styles from "./AccountInfo.module.css";
import profile_pic from '../../assets/user.svg'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {copyToClipboard} from "../../utils/copyToClipboard";
import {Interest} from "../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/InterestList/Interest/Interest";


const AccountInfo = ({accInfo}) => {

    return (
        <div className={`${styles.acc_info_wrapper}`}>
            <div className={`${styles.acc_info_wrapper_bubble} slider`}>
                <div className={styles.acc_info_content}>
                    <div className={styles.acc_main_info}>
                        <img className={styles.acc_profile_pic} src={profile_pic} alt={'user'}/>
                        <div className={styles.main_info_desc}>
                            <span style={{fontSize: 25}}>{accInfo.nickname}</span>
                            <span>18 лет</span>
                            <div className={styles.acc_ID}>
                                <span>ID {accInfo.id}</span>

                                <ContentCopyRoundedIcon fontSize={'small'} className={styles.copyIcon}
                                                        onClick={() => {
                                                            copyToClipboard('1243299').then().catch(() => console.log('Error occurred when copying ID'))
                                                        }}/>
                            </div>
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
                                eval(accInfo.interests).map(interest =>
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
            </div>
        </div>
    );
};

export default AccountInfo;