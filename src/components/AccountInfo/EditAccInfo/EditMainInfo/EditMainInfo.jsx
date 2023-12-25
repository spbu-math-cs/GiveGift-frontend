import React from "react";
import styles from "../../AccountInfo.module.css";
import EditAvatar from "./EditAvatar/EditAvatar";
import EditNickname from "./EditNickname/EditNickname";
import EditDate from "./EditDate/EditDate";

const EditMainInfo = () => {
  return (
    <div className={styles.acc_main_info}>
      <EditAvatar />

      <div className={styles.main_info_desc} style={{ gridRowGap: 10 }}>
        <EditNickname />

        <EditDate />
      </div>
    </div>
  );
};

export default EditMainInfo;
