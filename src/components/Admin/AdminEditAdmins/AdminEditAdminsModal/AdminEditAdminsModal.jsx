import React from "react";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";

const AdminEditAdminsModal = ({ children, visible, setVisible }) => {
  return (
    <ModalWindow
      visible={visible}
      setVisible={setVisible}
      title="Настроить админов"
    >
      {children}
    </ModalWindow>
  );
};

export default AdminEditAdminsModal;
