import React from "react";
import styles from "../AccountInfo.module.css";
import ViewOtherInfo from "./ViewOtherInfo/ViewOtherInfo";
import ViewMainInfo from "./ViewMainInfo/ViewMainInfo";

const ViewAccInfo = ({ setIsEdit }) => {
  return (
    <div className={`${styles.acc_info_content} fast_fadein`}>
      <ViewMainInfo setIsEdit={setIsEdit} />
      <ViewOtherInfo />
    </div>
  );
};

export default ViewAccInfo;
