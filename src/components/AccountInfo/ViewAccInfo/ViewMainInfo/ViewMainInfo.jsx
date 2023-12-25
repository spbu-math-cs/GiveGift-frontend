import React, { useContext } from "react";
import styles from "../../AccountInfo.module.css";
import ViewAccActionBtn from "../../../UI/Button/ViewAccActionBtn/ViewAccActionBtn";
import ViewNickname from "./ViewNickname/ViewNickname";
import ViewBirthdate from "./ViewBirthdate/ViewBirthdate";
import { avatarSrc } from "../../../../utils/avatarSrc";
import { AccContext } from "../../../../context/AccContext/AccContext";

const ViewMainInfo = ({ setIsEdit }) => {
  const { accInfo } = useContext(AccContext);
  return (
    <div className={styles.acc_main_info}>
      <img className={styles.avatar} src={avatarSrc(accInfo.avatar)} alt={"user"} />
      <div className={styles.main_info_desc}>
        <ViewNickname />
        <ViewBirthdate />

        <ViewAccActionBtn setIsEdit={setIsEdit} />
      </div>
    </div>
  );
};

export default ViewMainInfo;
