import React from 'react';
import InterestList from "./InterestList/InterestList";
import Price from "./Price/Price";
import NumOfIdeas from "./NumOfIdeas/NumOfIdeas";

const SearchSettings = ({userInterests, remove, add}) => {
    return (
        <>
            <InterestList userInterests={userInterests} remove={remove} add={add}/>
            <Price/>
            <NumOfIdeas/>
        </>
    );
};

export default SearchSettings;