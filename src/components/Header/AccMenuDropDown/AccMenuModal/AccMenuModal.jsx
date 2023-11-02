import React from 'react';
import ModalWindow from "../../../UI/ModalWindow/ModalWindow/ModalWindow";
import styles from './AccMenuModal.module.css'

const AccMenuModal = ({children, visible, setVisible}) => {

    return (
        <ModalWindow visible={visible} setVisible={setVisible}
                     className={`${styles.acc_menu_modal}`}>
            <div onClick={() => setVisible(false)}>{children}</div>
        </ModalWindow>
    )
};

export default AccMenuModal;