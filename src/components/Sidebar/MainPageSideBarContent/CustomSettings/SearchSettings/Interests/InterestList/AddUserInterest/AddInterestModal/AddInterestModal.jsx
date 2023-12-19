import React from 'react';
import ModalWindow from "../../../../../../../../UI/ModalWindow/ModalWindow";

const AddInterestModal = ({children, visible, setVisible}) => {

    return (
        <ModalWindow visible={visible} setVisible={setVisible} title='Добавить интересы'>
            {children}
        </ModalWindow>
    )
};

export default AddInterestModal;