import React, { useContext, useState } from "react";
import InterestList from "./InterestList/InterestList";
import AddUserInterestForm from "./InterestList/AddUserInterest/AddUserInterestForm/AddUserInterestForm";
import AddInterestModal from "./InterestList/AddUserInterest/AddInterestModal/AddInterestModal";
import { InterestContext } from "../../../../../../context/InterestContext/InterestContext";

const Interests = () => {
  const [InterestModalWindowVisibility, setInterestModalWindowVisibility] =
    useState(false);

  const { setUserInterests, userInterests, allInterests } =
    useContext(InterestContext);
  const removeUserInterest = (interest) => {
    setUserInterests(userInterests.filter((i) => i !== interest));
  };
  const addUserInterest = (newInterest) => {
    setUserInterests([
      ...userInterests,
      ...newInterest.filter((i) => allInterests.includes(i)),
    ]);
    setInterestModalWindowVisibility(false);
  };

  const optionInterests = allInterests.filter(
    (item) => !userInterests.includes(item),
  );

  return (
    <>
      <InterestList
        remove={removeUserInterest}
        setVisible={setInterestModalWindowVisibility}
      />
      <AddInterestModal
        visible={InterestModalWindowVisibility}
        setVisible={setInterestModalWindowVisibility}
      >
        <AddUserInterestForm
          add={addUserInterest}
          optionInterests={optionInterests}
        />
      </AddInterestModal>
    </>
  );
};

export default Interests;
