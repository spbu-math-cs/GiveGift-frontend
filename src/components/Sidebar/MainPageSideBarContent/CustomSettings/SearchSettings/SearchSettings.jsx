import React from "react";
import Price from "./Price/Price";
import Interests from "./Interests/Interests";

const SearchSettings = ({ priceRangeValue, handlePriceRangeChange }) => {
  return (
    <>
      <Interests />
      <Price
        priceRangeValue={priceRangeValue}
        handlePriceRangeChange={handlePriceRangeChange}
      />
    </>
  );
};

export default SearchSettings;
