import React from 'react';
import styles from "./CustomSettings.module.css";
import SearchSettings from "./SearchSettings/SearchSettings";
import ActiveButton from "../../../UI/Button/ActiveButton/ActiveButton";

const CustomSettings = (props) => {
    return (
        <div className={styles.custom_settings}>
            <SearchSettings
                userInterests={props.userInterests}
                optionInterests={props.optionInterests}
                remove={props.remove}
                add={props.add}
                InterestModalWindowVisibility={props.InterestModalWindowVisibility}
                setInterestModalWindowVisibility={props.setInterestModalWindowVisibility}

                minNumOfIdeas={props.minNumOfIdeas}
                maxNumOfIdeas={props.maxNumOfIdeas}
                numOfIdeas={props.numOfIdeas}
                handleChangeNumOfIdeas={props.handleChangeNumOfIdeas}

                minPrice={props.minPrice}
                maxPrice={props.maxPrice}
                priceRangeValue={props.priceRangeValue}
                handlePriceRangeChange={props.handlePriceRangeChange}
            />

            <ActiveButton className={styles.mainpage_sidebar_btn} disabled={props.isIdeasLoading}
                          onClick={() => {
                              props.setIsNewUser(false);
                              props.generateIdeas(props.ideaGenProperties)
                          }}>
                Выдай идею!
            </ActiveButton>
        </div>
    );
};

export default CustomSettings;