import React from 'react';
import styles from './ActiveButton.module.css'

const ActiveButton = ({children, className, ...props}) => {
    return (
        <button {...props} className={styles.active_btn + ' ' +  className}>
            {children}
        </button>
    );
};

export default ActiveButton;