import React from 'react';
import InterestList from "./InterestList/InterestList";
import Price from "./Price/Price";
import NumOfIdeas from "./NumOfIdeas/NumOfIdeas";

const SearchSettings = () => {
    return (
        <>
            <InterestList/>
            <Price/>
            <NumOfIdeas/>
        </>
    );
};

export default SearchSettings;