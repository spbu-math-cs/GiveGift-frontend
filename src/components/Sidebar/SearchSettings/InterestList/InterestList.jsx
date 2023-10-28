import React, {useState} from "react";
import {Interest} from "./Interest/Interest";
import styles from "./InterestList.module.css"
import setting_styles from "../SearchSettings.module.css"
import SettingsHeader from "../../../UI/SettingsHeader/SettingsHeader";
import PlusBtn from "./PlusBtn/PlusBtn";

const InterestList = () => {

    const [interests, setInterests] = useState(
        ['Кино', 'Цветы', 'Сладости', 'Рок', 'Мультфильмы']
    )

    return (
        <div className={setting_styles.setting_content}>
            <SettingsHeader text="Интересы"/>
            <div className={`${styles.interest_list} y_slider`}>
                {interests.map(interest =>
                    <Interest key={interest}>{ interest }</Interest> // Интересы уникальны!
                )}
                <PlusBtn/>
            </div>

        </div>
    )
}

export default InterestList