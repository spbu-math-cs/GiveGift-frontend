import React from "react";
import {Interest} from "./Interest/Interest";
import styles from "./InterestList.module.css"
import setting_styles from "../SearchSettings.module.css"
import SettingsHeader from "../../../../UI/SettingsHeader/SettingsHeader";
import PlusBtn from "./PlusBtn/PlusBtn";
import AddInterestModal from "./AddUserInterest/AddInterestModal/AddInterestModal";
import AddUserInterestForm from "./AddUserInterest/AddUserInterestForm/AddUserInterestForm";

const InterestList = ({
                          userInterests, optionInterests, remove, add,
                          InterestModalWindowVisibility, setInterestModalWindowVisibility
                      }) => {

    return (
        <div className={setting_styles.setting_content}>
            <SettingsHeader text="Интересы"/>
            <div className={`${styles.interest_list} slider`}>
                {userInterests.map(curr_interest =>
                    <Interest key={curr_interest} remove={remove}>{curr_interest}</Interest>
                )}
                <PlusBtn onClick={() => setInterestModalWindowVisibility(true)}/>

                <AddInterestModal visible={InterestModalWindowVisibility}
                                  setVisible={setInterestModalWindowVisibility}>
                    <AddUserInterestForm optionInterests={optionInterests} add={add}/>
                </AddInterestModal>
            </div>
        </div>
    )
}

export default InterestList