import React, { useContext, useState } from "react";
import styles from "./CustomSettings.module.css";
import SearchSettings from "./SearchSettings/SearchSettings";
import ActiveButton from "../../../UI/Button/ActiveButton/ActiveButton";
import { IdeasContext } from "../../../../context/IdeasContext/IdeasContext";
import { UserContext } from "../../../../context/UserContext/UserContext";
import { maxPrice, minPrice } from "../../../../utils/constants";
import { checkPrice } from "../../../../utils/checkers";

const CustomSettings = () => {
  const { generateIdeas, isIdeasLoading } = useContext(IdeasContext);
  const { setIsNewUser, userInterests } = useContext(UserContext);

  const [priceRangeValue, setPriceRangeValue] = useState([minPrice, maxPrice]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRangeValue(checkPrice(minPrice, maxPrice, newValue));
  };

  const getIdeas = () => {
    setIsNewUser(false);
    generateIdeas({
      userIdeaProperties: {
        interests: userInterests,
        price_range: priceRangeValue,
      },
    });
  };

  return (
    <div className={styles.custom_settings}>
      <SearchSettings
        priceRangeValue={priceRangeValue}
        handlePriceRangeChange={handlePriceRangeChange}
      />

      <ActiveButton
        className={styles.mainpage_sidebar_btn}
        disabled={isIdeasLoading}
        onClick={getIdeas}
      >
        Выдай идею!
      </ActiveButton>
    </div>
  );
};

export default CustomSettings;
