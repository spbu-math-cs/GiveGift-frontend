import React from 'react';
import InterestList from "./InterestList/InterestList";
import Price from "./Price/Price";
import NumOfIdeas from "./NumOfIdeas/NumOfIdeas";

const SearchSettings = (props) => {
    return (
        <>
            <InterestList
                userInterests={props.userInterests}
                remove={props.remove}
                add={props.add}
                optionInterests={props.optionInterests}
                setAddInterestModalWindowVisibility={props.setAddInterestModalWindowVisibility}
                InterestModalWindowVisibility={props.InterestModalWindowVisibility}
            />
            <Price
                minPrice={props.minPrice}
                maxPrice={props.maxPrice}
                priceRangeValue={props.priceRangeValue}
                handlePriceRangeChange={props.handlePriceRangeChange}
            />
            <NumOfIdeas
                minNumOfIdeas={props.minNumOfIdeas}
                maxNumOfIdeas={props.maxNumOfIdeas}
                numOfIdeas={props.numOfIdeas}
                handleChangeNumOfIdeas={props.handleChangeNumOfIdeas}
            />
        </>
    );
};

export default SearchSettings;