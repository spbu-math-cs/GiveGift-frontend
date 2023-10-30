import React from "react";
import styles from './Sidebar.module.css';
const Sidebar = ({children}) => {
    return (
        <div className={`${styles.sidebar} y_slider`}>
            {children}
        </div>
    )
}

export default Sidebar