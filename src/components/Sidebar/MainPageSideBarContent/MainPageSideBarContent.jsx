import React from 'react';
import styles from './MainPageSideBarContent.module.css'
import Separator from "../../UI/Separator/Separator";
import SelectFriendTextBtn from "../../UI/TextButton/SelectFriendTextBtn/SelectFriendTextBtn";
import CustomSettings from "./CustomSettings/CustomSettings";

const MainPageSideBarContent = (props) => {

    return (
        <div className={styles.mainpage_sidebar_content}>

            <SelectFriendTextBtn isIdeasLoading={props.isIdeasLoading}/>

            <Separator>или</Separator>

            <CustomSettings
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

                isIdeasLoading={props.isIdeasLoading}
                setIsNewUser={props.setIsNewUser}
                generateIdeas={props.generateIdeas}
                ideaGenProperties={props.ideaGenProperties}
            />
        </div>
    );
};

export default MainPageSideBarContent;