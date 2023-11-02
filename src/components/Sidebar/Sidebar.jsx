import React from "react";
import styles from './Sidebar.module.css';

const Sidebar = ({children}) => {
    return (
        <div className={`${styles.sidebar} slider`}>
            {children}
        </div>
    )
}

export default Sidebar