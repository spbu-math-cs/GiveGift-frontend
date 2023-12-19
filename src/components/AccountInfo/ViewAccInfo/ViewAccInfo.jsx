import React from 'react';
import styles from "../AccountInfo.module.css";
import profile_pic from "../../../assets/user.svg";
import {get_prettified_age} from "../../../utils/ages";
import {
    Interest
} from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/Interest/Interest";
import ViewAccActionBtn from "../../UI/Button/ViewAccActionBtn/ViewAccActionBtn";

const ViewAccInfo = (props) => {
    return (
        <div className={`${styles.acc_info_content} fast_fadein`}>
            <div className={styles.acc_main_info}>
                <img className={styles.acc_profile_pic} src={profile_pic} alt={'user'}/>
                <div className={styles.main_info_desc}>
                    <span style={{fontSize: 25}}>{props.accInfo.nickname}</span>
                    {props.accInfo.birth_date &&
                        <span>{get_prettified_age(props.accInfo.birth_date)}</span>
                    }

                    <ViewAccActionBtn accInfo={props.accInfo}
                                      setIsEdit={props.setIsEdit}
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
        </div>
    );
};

export default ViewAccInfo;