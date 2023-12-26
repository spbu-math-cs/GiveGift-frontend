import React from "react";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";

const AdminModal = ({ children, visible, setVisible }) => {
  return (
    <ModalWindow
      visible={visible}
      setVisible={setVisible}
      title="Настройки"
    >
      {children}
    </ModalWindow>
  );
};

export default AdminModal;