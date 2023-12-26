import React, { useContext, useState } from "react";
import styles from "../../../AccountInfo.module.css";
import { Interest } from "../../../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/Interest/Interest";
import PlusBtn from "../../../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/PlusBtn/PlusBtn";
import AddInterestModal from "../../../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/AddUserInterest/AddInterestModal/AddInterestModal";
import AddUserInterestForm from "../../../../Sidebar/MainPageSideBarContent/CustomSettings/SearchSettings/Interests/InterestList/AddUserInterest/AddUserInterestForm/AddUserInterestForm";
import { AccContext } from "../../../../../context/AccContext/AccContext";
import { InterestContext } from "../../../../../context/InterestContext/InterestContext";

const EditInterests = () => {
  const { accInfo, setAccInfo } = useContext(AccContext);
  const { allInterests } = useContext(InterestContext);

  const [InterestModalWindowVisibility, setInterestModalWindowVisibility] =
    useState(false);

  const addUserInterest = (newInterests) => {
    setAccInfo((prev) => ({
      ...prev,
      interests: [
        ...prev.interests,
        ...newInterests.filter((i) => allInterests.includes(i)),
      ],
    }));
    setInterestModalWindowVisibility(false);
  };

  const removeUserInterest = (interest) => {
    setAccInfo((prev) => ({
      ...prev,
      interests: prev.interests.filter((i) => i !== interest),
    }));
  };

  return (
    <div className={styles.acc_info_part}>
      <span className={styles.info_part_header}>Интересы</span>
      <div className={styles.acc_tags}>
        {accInfo.interests.map((interest) => (
          <Interest
            key={interest}
            remove={removeUserInterest}
            is_editable={true}
          >
            {interest}
          </Interest>
        ))}
        <PlusBtn
          onClick={() => {
            setInterestModalWindowVisibility(true);
          }}
        />

        <AddInterestModal
          visible={InterestModalWindowVisibility}
          setVisible={setInterestModalWindowVisibility}
        >
          <AddUserInterestForm
            optionInterests={allInterests.filter(
              (item) => !accInfo.interests.includes(item),
            )}
            add={addUserInterest}
          />
        </AddInterestModal>
      </div>
    </div>
  );
};

export default EditInterests;