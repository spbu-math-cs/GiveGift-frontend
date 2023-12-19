import React from 'react';
import styles from './MainPageSideBarContent.module.css'
import Separator from "../../UI/Separator/Separator";
import SelectFriendTextBtn from "../../UI/TextButton/SelectFriendTextBtn/SelectFriendTextBtn";
import CustomSettings from "./CustomSettings/CustomSettings";
import SelectFriendModal from "./SelectFriendModal/SelectFriendModal";
import SelectFriendForm from "./SelectFriendForm/SelectFriendForm";

const MainPageSideBarContent = (props) => {
    return (
        <div className={styles.mainpage_sidebar_content}>

            <SelectFriendModal visible={props.SelectFriendModalWindowVisibility}
                               setVisible={props.setSelectFriendModalWindowVisibility}>
                <SelectFriendForm
                    setIsNewUser={props.setIsNewUser}
                    setVisible={props.setSelectFriendModalWindowVisibility}
                />
            </SelectFriendModal>

            <SelectFriendTextBtn isIdeasLoading={props.isIdeasLoading}
                                 setVisible={props.setSelectFriendModalWindowVisibility}/>

            <Separator>или</Separator>

            <CustomSettings
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

                setIsNewUser={props.setIsNewUser}
                ideaGenProperties={props.ideaGenProperties}
            />
        </div>
    );
};

export default MainPageSideBarContent;