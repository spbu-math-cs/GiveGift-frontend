import React from "react";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";

const AdminEditInterestModal = ({ children, visible, setVisible }) => {
  return (
    <ModalWindow
      visible={visible}
      setVisible={setVisible}
      title="Настроить интересы"
    >
      {children}
    </ModalWindow>
  );
};

export default AdminEditInterestModal;
