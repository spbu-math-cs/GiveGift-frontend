import React from 'react';
import NumOfIdeasSlider from "../../../../../UI/Slider/Slider";
import SettingsHeader from "../../../../../UI/SettingsHeader/SettingsHeader";
import styles from "../SearchSettings.module.css";

const NumOfIdeas = (props) => {
    return (
        <div className={styles.setting_content}>
            <SettingsHeader text="Количество идей"/>
            <NumOfIdeasSlider {...props}/>
        </div>
    );
};

export default NumOfIdeas;