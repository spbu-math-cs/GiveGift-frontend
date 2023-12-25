import React from "react";
import styles from "../../AccountInfo.module.css";
import profile_pic from "../../../../assets/user.svg";
import ViewAccActionBtn from "../../../UI/Button/ViewAccActionBtn/ViewAccActionBtn";
import ViewNickname from "./ViewNickname/ViewNickname";
import ViewBirthdate from "./ViewBirthdate/ViewBirthdate";

const ViewMainInfo = ({ setIsEdit }) => {
  return (
    <div className={styles.acc_main_info}>
      <img className={styles.avatar} src={profile_pic} alt={"user"} />
      <div className={styles.main_info_desc}>
        <ViewNickname />
        <ViewBirthdate />

        <ViewAccActionBtn setIsEdit={setIsEdit} />
      </div>
    </div>
  );
};

export default ViewMainInfo;
