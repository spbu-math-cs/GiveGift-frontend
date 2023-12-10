import React from 'react';
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";

const SelectFriendModal = ({children, visible, setVisible}) => {

    return (
        <ModalWindow visible={visible} setVisible={setVisible} title='Найти подарок для друга'>
            {children}
        </ModalWindow>
    )
};

export default SelectFriendModal;