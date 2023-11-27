import React from 'react';
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";

const AddFriendModal = ({children, visible, setVisible}) => {

    return (
        <ModalWindow visible={visible} setVisible={setVisible} title='Добавить друга'>
            {children}
        </ModalWindow>
    )
};

export default AddFriendModal;