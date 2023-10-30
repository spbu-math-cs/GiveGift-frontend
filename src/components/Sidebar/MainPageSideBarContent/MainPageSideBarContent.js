import React, {useState} from 'react';
import styles from './MainPageSideBarContent.module.css'
import ActiveButton from "../../UI/Button/ActiveButton/ActiveButton";
import SearchSettings from "./SearchSettings/SearchSettings";
import {checkPrice} from "../../../utils/checkers";

const MainPageSideBarContent = () => {

    const [userInterests, setUserInterests] = useState(
        ['Кино', 'Цветы', 'Сладости', 'Рок', 'Мультфильмы']
    )
    const removeUserInterest = (interest) => {
        setUserInterests(userInterests.filter(i => i !== interest))
    }
    const addUserInterest = (newInterest) => {
        if (!userInterests.includes(newInterest)) {
            setUserInterests([...userInterests, newInterest])
        }
    }

    const minNumOfIdeas = 1, maxNumOfIdeas = 5;
    const [numOfIdeas, setNumOfIdeas] = useState(minNumOfIdeas)

    const handleChangeNumOfIdeas = (event, newNumOfIdeas) => {
        setNumOfIdeas(newNumOfIdeas);
    };

    const minPrice = 0, maxPrice = 150000;
    const [priceRangeValue, setPriceRangeValue] = useState([minPrice, maxPrice]);

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRangeValue(checkPrice(minPrice, maxPrice, newValue));
    };

    // TODO: Возможно, придется перенести ее куда-нибудь
    function getIdeaGenProperties() {
        return {
            interests: userInterests,
            num_of_ideas: numOfIdeas,
            price_range: priceRangeValue
        }
    }

    return (
        <div className={styles.mainpage_sidebar_content}>
            <ActiveButton className={styles.mainpage_sidebar_btn} onClick={() => {
                console.log(getIdeaGenProperties())
            }}>
                Выдай идею!
            </ActiveButton>
            <SearchSettings
                userInterests={userInterests}
                remove={removeUserInterest}
                add={addUserInterest}

                minNumOfIdeas={minNumOfIdeas}
                maxNumOfIdeas={maxNumOfIdeas}
                numOfIdeas={numOfIdeas}
                handleChangeNumOfIdeas={handleChangeNumOfIdeas}

                minPrice={minPrice}
                maxPrice={maxPrice}
                priceRangeValue={priceRangeValue}
                handlePriceRangeChange={handlePriceRangeChange}
            />
            <ActiveButton className={styles.mainpage_sidebar_btn} onClick={() => alert('TODO')}>
                Сохранить
            </ActiveButton>
        </div>
    );
};

export default MainPageSideBarContent;