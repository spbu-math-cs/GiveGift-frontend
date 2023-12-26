import React, {useContext} from "react";
import styles from "../../../AccountInfo.module.css";
import { Interest } from "../../../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/Interest/Interest";
import { AccContext } from "../../../../../context/AccContext/AccContext";

const ViewInterests = () => {
  const { accInfo } = useContext(AccContext);
  return (
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
  );
};

export default ViewInterests;