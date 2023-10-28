import React from 'react';
import SettingsHeader from "../../../UI/SettingsHeader/SettingsHeader";
import search_settings_style from "../SearchSettings.module.css"
import RangeSlider from "../../../UI/RangeSlider/RangeSlider";
import styles from "./Price.module.css"

const Price = () => {
    return (
        <div className={search_settings_style.setting_content}>
            <SettingsHeader text="Цена"/>
            <RangeSlider/>
            <div className={styles.range_inputs}>
            </div>
        </div>
    );
};

export default Price;