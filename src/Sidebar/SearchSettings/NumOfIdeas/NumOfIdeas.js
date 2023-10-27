import React from 'react';
import ContinuousSlider from "../../../UI/Slider/Slider";
import SettingsHeader from "../../../UI/SettingsHeader/SettingsHeader";
import styles from "../SearchSettings.module.css";

const NumOfIdeas = () => {
    return (
        <div className={styles.setting_content}>
            <SettingsHeader text="Количество идей"/>
            <ContinuousSlider/>
        </div>
    );
};

export default NumOfIdeas;