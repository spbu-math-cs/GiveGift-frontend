import React, {useContext} from 'react';
import styles from "./CustomSettings.module.css";
import SearchSettings from "./SearchSettings/SearchSettings";
import ActiveButton from "../../../UI/Button/ActiveButton/ActiveButton";
import {IdeasContext} from "../../../../context";

const CustomSettings = (props) => {
    const {generateIdeas, isIdeasLoading} = useContext(IdeasContext)

    return (
        <div className={styles.custom_settings}>
            <SearchSettings
                userInterests={props.userInterests}
                optionInterests={props.optionInterests}
                remove={props.remove}
                add={props.add}
                InterestModalWindowVisibility={props.InterestModalWindowVisibility}
                setInterestModalWindowVisibility={props.setInterestModalWindowVisibility}

                minPrice={props.minPrice}
                maxPrice={props.maxPrice}
                priceRangeValue={props.priceRangeValue}
                handlePriceRangeChange={props.handlePriceRangeChange}
            />

            <ActiveButton className={styles.mainpage_sidebar_btn} disabled={isIdeasLoading}
                          onClick={() => {
                              props.setIsNewUser(false);
                              generateIdeas({userIdeaProperties: props.ideaGenProperties})
                          }}>
                Выдай идею!
            </ActiveButton>
        </div>
    );
};

export default CustomSettings;