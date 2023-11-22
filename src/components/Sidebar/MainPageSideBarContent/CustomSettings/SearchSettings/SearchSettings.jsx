import React from 'react';
import InterestList from "./InterestList/InterestList";
import Price from "./Price/Price";
import AddUserInterestForm from "./InterestList/AddUserInterest/AddUserInterestForm/AddUserInterestForm";
import AddInterestModal from "./InterestList/AddUserInterest/AddInterestModal/AddInterestModal";

const SearchSettings = (props) => {
    return (
        <>
            <InterestList
                userInterests={props.userInterests}
                remove={props.remove}
                setInterestModalWindowVisibility={props.setInterestModalWindowVisibility}
            />
            <Price
                minPrice={props.minPrice}
                maxPrice={props.maxPrice}
                priceRangeValue={props.priceRangeValue}
                handlePriceRangeChange={props.handlePriceRangeChange}
            />
            <AddInterestModal visible={props.InterestModalWindowVisibility}
                              setVisible={props.setInterestModalWindowVisibility}>
                <AddUserInterestForm optionInterests={props.optionInterests} add={props.add}/>
            </AddInterestModal>
        </>
    );
};


/*
* <NumOfIdeas
                minNumOfIdeas={props.minNumOfIdeas}
                maxNumOfIdeas={props.maxNumOfIdeas}
                numOfIdeas={props.numOfIdeas}
                handleChangeNumOfIdeas={props.handleChangeNumOfIdeas}
            />
* */
export default SearchSettings;