import React from 'react';
import styles from "./AddInterestModal.module.css"
import ModalWindow from "../../../../../../UI/ModalWindow/ModalWindow/ModalWindow";

const AddInterestModal = ({children, visible, setVisible}) => {

    return (
        <ModalWindow visible={visible} setVisible={setVisible}
                     className={`${styles.add_interest_modal}`}>
            <div className={styles.content}>
                {children}
            </div>
        </ModalWindow>
    )
};

export default AddInterestModal;