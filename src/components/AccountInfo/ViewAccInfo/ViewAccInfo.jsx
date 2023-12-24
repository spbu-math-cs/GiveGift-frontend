import React, { useContext, useState } from "react";
import styles from "../AccountInfo.module.css";
import profile_pic from "../../../assets/user.svg";
import {
  get_prettified_age,
  get_prettified_birthday,
} from "../../../utils/ages";
import { Interest } from "../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/Interest/Interest";
import ViewAccActionBtn from "../../UI/Button/ViewAccActionBtn/ViewAccActionBtn";
import { AccContext } from "../../../context/AccContext/AccContext";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton } from "@mui/material";

const ViewAccInfo = ({ setIsEdit }) => {
  const { accInfo } = useContext(AccContext);

  const [showFullAge, setFullAge] = useState(false);
  return (
    <div className={`${styles.acc_info_content} fast_fadein`}>
      <div className={styles.acc_main_info}>
        <img
          className={styles.acc_profile_pic}
          src={profile_pic}
          alt={"user"}
        />
        <div className={styles.main_info_desc}>
          <span className={styles.acc_nickname}>
            {accInfo.nickname}
            <span className={styles.acc_id}>#{accInfo.id}</span>
          </span>
          {accInfo.birth_date && (
            <span className={styles.acc_age}>
              {showFullAge
                ? get_prettified_birthday(accInfo.birth_date)
                : get_prettified_age(accInfo.birth_date)}
              <IconButton size={"small"}>
                <InfoOutlinedIcon
                  onClick={() => setFullAge(!showFullAge)}
                />
              </IconButton>
            </span>
          )}

          <ViewAccActionBtn setIsEdit={setIsEdit} />
        </div>
      </div>
      <div className={styles.acc_info_part}>
        <span className={styles.info_part_header}>О себе</span>
        {accInfo.about ? (
          <p className={`${styles.acc_description} slider`}>{accInfo.about}</p>
        ) : (
          <p className={styles.acc_description} style={{ color: "grey" }}>
            Здесь ничего нет
          </p>
        )}
      </div>

      <div className={styles.acc_info_part}>
        <span className={styles.info_part_header}>Интересы</span>
        <div className={styles.acc_tags}>
          {accInfo.interests.map((interest) => (
            <Interest key={interest} is_editable={false}>
              {interest}
            </Interest>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAccInfo;
