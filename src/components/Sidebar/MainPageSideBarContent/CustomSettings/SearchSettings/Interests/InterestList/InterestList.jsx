import React, { useContext } from "react";
import { Interest } from "./Interest/Interest";
import styles from "./InterestList.module.css";
import setting_styles from "../../SearchSettings.module.css";
import SettingsHeader from "../../../../../../UI/SettingsHeader/SettingsHeader";
import PlusBtn from "./PlusBtn/PlusBtn";
import { InterestContext } from "../../../../../../../context/InterestContext/InterestContext";

const InterestList = ({ remove, setVisible, setAdminVisible }) => {
  const { userInterests } = useContext(InterestContext);

  return (
    <div className={setting_styles.setting_content}>
      <SettingsHeader text="Интересы" />
      <div className={`${styles.interest_list} slider`}>
        {userInterests.map((curr_interest) => (
          <Interest key={curr_interest} is_editable={true} remove={remove}>
            {curr_interest}
          </Interest>
        ))}
        <PlusBtn onClick={() => setVisible(true)} />
      </div>
    </div>
  );
};

export default InterestList;
