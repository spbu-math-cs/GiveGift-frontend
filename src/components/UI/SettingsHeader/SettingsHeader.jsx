import React from 'react';
import styles from "./SettingsHeader.module.css"

const SettingsHeader = ({text}) => {
    return <span className={styles.settings_h}>{text}</span>
};

export default SettingsHeader;