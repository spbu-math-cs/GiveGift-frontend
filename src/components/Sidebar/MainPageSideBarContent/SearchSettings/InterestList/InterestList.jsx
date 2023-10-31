import React from "react";
import {Interest} from "./Interest/Interest";
import styles from "./InterestList.module.css"
import setting_styles from "../SearchSettings.module.css"
import SettingsHeader from "../../../../UI/SettingsHeader/SettingsHeader";
import PlusBtn from "./PlusBtn/PlusBtn";
import AddInterestModal from "../../../../UI/ModalWindow/AddInterestModal/AddInterestModal";
import AddUserInterestForm from "./AddUserInterestForm/AddUserInterestForm";

const InterestList = ({
                          userInterests, optionInterests, remove, add,
                          InterestModalWindowVisibility, setAddInterestModalWindowVisibility
                      }) => {

    return (
        <div className={setting_styles.setting_content}>
            <SettingsHeader text="Интересы"/>
            <div className={`${styles.interest_list} y_slider`}>
                {userInterests.map(curr_interest =>
                    <Interest key={curr_interest} remove={remove}>{curr_interest}</Interest>
                )}
                <PlusBtn onClick={() => setAddInterestModalWindowVisibility(true)}/>

                <AddInterestModal visible={InterestModalWindowVisibility}
                                  setVisible={setAddInterestModalWindowVisibility}>
                    <AddUserInterestForm optionInterests={optionInterests} add={add}/>
                </AddInterestModal>
            </div>
        </div>
    )
}

export default InterestList