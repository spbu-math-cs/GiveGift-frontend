import React from "react";
import {Interest} from "./Interest/Interest";
import styles from "./InterestList.module.css"
import setting_styles from "../SearchSettings.module.css"
import SettingsHeader from "../../../UI/SettingsHeader/SettingsHeader";
import PlusBtn from "./PlusBtn/PlusBtn";

const InterestList = () => {
    return (
        <div className={setting_styles.setting_content}>
            <SettingsHeader text="Интересы"/>
            <div className={`${styles.interest_list} y_slider`}>
                <Interest text='Кино'/>
                <Interest text='Цветы'/>
                <Interest text='Сладости'/>
                <Interest text='Рок'/>
                <Interest text='Мультфильмы'/>
                <PlusBtn/>
            </div>

        </div>
    )
}

export default InterestList