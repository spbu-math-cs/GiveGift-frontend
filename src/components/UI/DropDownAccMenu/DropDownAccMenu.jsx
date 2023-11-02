import React from 'react';
import styles from './DropDownAccMenu.module.css'

const DropDownAccMenu = ({children, visible}) => {
    return (
        <div className={`${styles.acc_menu_dropdown} ${visible ? 'active_dropdown' : ''}`}>
            {children}
        </div>
    );
};

export default DropDownAccMenu;