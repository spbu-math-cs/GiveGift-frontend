import Sidebar from "../../components/Sidebar/Sidebar";
import MainPageSideBarContent from "../../components/Sidebar/MainPageSideBarContent/MainPageSideBarContent";
import Ideas from "../../components/Ideas/Ideas";
import React, {useContext, useEffect, useState} from "react";
import {checkPrice} from "../../utils/checkers";
import GettingStarted from "../../components/UI/GettingStarted/GettingStarted";
import {FriendContext} from "../../context/FriendContext/FriendContext";
import {InterestContext} from "../../context/InterestContext/InterestContext";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";

const Main = ({
                  InterestModalWindowVisibility,
                  setInterestModalWindowVisibility
              }) => {

    const {fetchFriendLists} = useContext(FriendContext);
    const {fetchInterests, allInterests} = useContext(InterestContext);
    const {token} = useContext(AuthContext);

    const [userInterests, setUserInterests,] = useLocalStorage('userInterests', []);
    const [isNewUser, setIsNewUser,] = useLocalStorage('isNewUser', true);

    useEffect(() => {
        const fetchInfo = async () => {
            await fetchInterests();
            token && await fetchFriendLists(token);
        }
        fetchInfo().catch(console.error);
    }, []); // eslint-disable-line

    const removeUserInterest = (interest) => {
        setUserInterests(userInterests.filter(i => i !== interest))
    }
    const addUserInterest = (newInterest) => {
        setUserInterests([...userInterests, ...newInterest.filter(i => allInterests.includes(i))])
        setInterestModalWindowVisibility(false)
    }

    const optionInterests = allInterests.filter(item => !userInterests.includes(item))

    const minPrice = 0, maxPrice = 150000;
    const [priceRangeValue, setPriceRangeValue] = useState([minPrice, maxPrice]);

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRangeValue(checkPrice(minPrice, maxPrice, newValue));
    };

    const [SelectFriendModalWindowVisibility, setSelectFriendModalWindowVisibility] = useState(false);

    const ideaGenProperties = {
        interests: userInterests,
        price_range: priceRangeValue
    }

    return (<div className={`content-with-sidebar app-wrapper-content`}>
        <Sidebar header={"Фильтры идей"}>
            <MainPageSideBarContent
                userInterests={userInterests}
                optionInterests={optionInterests}

                remove={removeUserInterest}
                add={addUserInterest}

                InterestModalWindowVisibility={InterestModalWindowVisibility}
                setInterestModalWindowVisibility={setInterestModalWindowVisibility}

                minPrice={minPrice}
                maxPrice={maxPrice}
                priceRangeValue={priceRangeValue}
                handlePriceRangeChange={handlePriceRangeChange}

                ideaGenProperties={ideaGenProperties}

                setIsNewUser={setIsNewUser}

                SelectFriendModalWindowVisibility={SelectFriendModalWindowVisibility}
                setSelectFriendModalWindowVisibility={setSelectFriendModalWindowVisibility}
            />
        </Sidebar>
        {isNewUser
            ? <GettingStarted/>
            : <Ideas/>
        }
    </div>);
}

export default Main;