import Sidebar from "../../components/Sidebar/Sidebar";
import MainPageSideBarContent from "../../components/Sidebar/MainPageSideBarContent/MainPageSideBarContent";
import Ideas from "../../components/Ideas/Ideas";
import React, {useContext, useEffect, useState} from "react";
import {checkPrice} from "../../utils/checkers";
import GettingStarted from "../../components/UI/GettingStarted/GettingStarted";
import {FriendContext, InterestContext} from "../../context";

const Main = ({
                  token,
                  InterestModalWindowVisibility,
                  setInterestModalWindowVisibility
              }) => {

    const {fetchFriendLists} = useContext(FriendContext);
    const {fetchInterests, allInterests} = useContext(InterestContext);

    useEffect(() => {
        fetchInterests();

        token && fetchFriendLists(token);
    }, []); // eslint-disable-line


    const [userInterests, setUserInterests] = useState([])

    useEffect(() => {
        const userInterests = JSON.parse(localStorage.getItem('userInterests'));
        if (userInterests) {
            setUserInterests(userInterests);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userInterests', JSON.stringify(userInterests));
    }, [userInterests]);

    // Если юзер новый - покажем приветственный экран, а после первой генерации отключим его
    const [isNewUser, setIsNewUser] = useState(true);

    useEffect(() => {
        const isNewUser = JSON.parse(localStorage.getItem('isNewUser'));
        if (isNewUser !== null) {
            setIsNewUser(isNewUser);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isNewUser', JSON.stringify(isNewUser));
    }, [isNewUser]);
    // ----------------------------------------

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

                token={token}

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