import React from 'react';
import styles from './MainPageSideBarContent.module.css'
import ActiveButton from "../../UI/Button/ActiveButton/ActiveButton";
import SearchSettings from "./SearchSettings/SearchSettings";

const MainPageSideBarContent = (props) => {

    return (
        <div className={styles.mainpage_sidebar_content}>
            <ActiveButton className={styles.mainpage_sidebar_btn} disabled={props.isIdeasLoading}
                          onClick={() => props.generateIdeas(props.ideaGenProperties)}>
                Выдай идею!
            </ActiveButton>
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
            <ActiveButton className={styles.mainpage_sidebar_btn} onClick={() => alert('TODO')}>
                Сохранить
            </ActiveButton>
        </div>
    );
};

export default MainPageSideBarContent;