import React from 'react';
import styles from './Separator.module.css'

const Separator = ({children}) => {
    return (
        <div className={styles.separator}>
            <div className={styles.separator_text}>{children}</div>
        </div>
    );
};

export default Separator;