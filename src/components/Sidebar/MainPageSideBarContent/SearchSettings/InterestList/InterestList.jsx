import React from "react";
import {Interest} from "./Interest/Interest";
import styles from "./InterestList.module.css"
import setting_styles from "../SearchSettings.module.css"
import SettingsHeader from "../../../../UI/SettingsHeader/SettingsHeader";
import PlusBtn from "./PlusBtn/PlusBtn";

const InterestList = ({userInterests, remove, add}) => {

    return (
        <div className={setting_styles.setting_content}>
            <SettingsHeader text="Интересы"/>
            <div className={`${styles.interest_list} y_slider`}>
                {userInterests.map(curr_interest =>
                    <Interest key={curr_interest} remove={remove}>{curr_interest}</Interest>
                )}
                <PlusBtn add={add}/>
            </div>

        </div>
    )
}

export default InterestList