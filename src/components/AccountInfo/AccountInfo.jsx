import React, {useState} from 'react';
import styles from "./AccountInfo.module.css";
import profile_pic from '../../assets/user.svg'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import {copyToClipboard} from "../../utils/copyToClipboard";
import {Interest} from "../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/InterestList/Interest/Interest";


const AccountInfo = () => {
    const [accInterests, setAccInterests] = useState([
        'Тест', 'Тест2', 'Тест3', 'Тест5'
    ]);

    return (
        <div className={`${styles.acc_info_wrapper}`}>
            <div className={`${styles.acc_info_wrapper_bubble} slider`}>
                <div className={styles.acc_info_content}>
                    <div className={styles.acc_main_info}>
                        <img className={styles.acc_profile_pic} src={profile_pic} alt={'user'}/>
                        <div className={styles.main_info_desc}>
                            <span style={{fontSize: 25}}>Иван Иванов</span>
                            <span>18 лет</span>
                            <div className={styles.acc_ID}>
                                <span>ID 1243299</span>

                                <ContentCopyRoundedIcon fontSize={'small'} className={styles.copyIcon} onClick={() => {
                                    copyToClipboard('1243299').then().catch(() => console.log('Error occurred when copying ID'))
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.acc_info_part}>
                        <span className={styles.info_part_header}>О себе</span>
                        <span className={styles.acc_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis dicta dignissimos illum impedit molestias non obcaecati odio placeat voluptate. Alias asperiores assumenda beatae enim eos facere incidunt, laboriosam maxime natus temporibus? Accusamus aperiam doloribus fugit laborum libero obcaecati quam quo suscipit velit? Animi, aut deserunt dignissimos doloremque dolores, ea impedit ipsum laborum modi, necessitatibus nesciunt obcaecati recusandae tempore veniam.</span>
                    </div>

                    <div className={styles.acc_info_part}>
                        <span className={styles.info_part_header}>Интересы</span>
                        <div className={styles.acc_tags}>
                            {accInterests.map(interest =>
                                <Interest key={interest} is_editable={false}>{interest}</Interest>
                            )}
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