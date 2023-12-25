import React, {useContext} from "react";
import styles from "../../../AccountInfo.module.css";
import { AccContext } from "../../../../../context/AccContext/AccContext";

const ViewAbout = () => {
  const { accInfo } = useContext(AccContext);
  return (
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
  );
};

export default ViewAbout;