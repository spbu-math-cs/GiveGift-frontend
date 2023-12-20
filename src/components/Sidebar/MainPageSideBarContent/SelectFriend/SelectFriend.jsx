import React, { useState } from "react";
import SelectFriendModal from "./SelectFriendModal/SelectFriendModal";
import SelectFriendForm from "./SelectFriendForm/SelectFriendForm";
import SelectFriendTextBtn from "../../../UI/TextButton/SelectFriendTextBtn/SelectFriendTextBtn";

const SelectFriend = () => {
  const [
    SelectFriendModalWindowVisibility,
    setSelectFriendModalWindowVisibility,
  ] = useState(false);

  return (
    <>
      <SelectFriendModal
        visible={SelectFriendModalWindowVisibility}
        setVisible={setSelectFriendModalWindowVisibility}
      >
        <SelectFriendForm setVisible={setSelectFriendModalWindowVisibility} />
      </SelectFriendModal>

      <SelectFriendTextBtn setVisible={setSelectFriendModalWindowVisibility} />
    </>
  );
};

export default SelectFriend;
