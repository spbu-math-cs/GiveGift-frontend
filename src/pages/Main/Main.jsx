import Sidebar from "../../components/Sidebar/Sidebar";
import MainPageSideBarContent from "../../components/Sidebar/MainPageSideBarContent/MainPageSideBarContent";
import Ideas from "../../components/Ideas/Ideas";
import React, {useEffect, useState} from "react";
import {checkPrice} from "../../utils/checkers";
import {useFetching} from "../../hooks/useFetching";
import InterestService from "../../API/InterestService";

const Main = ({token, friends, ideas, generateIdeas, isIdeasLoading, ideaError}) => {

    const [allInterests, setAllInterests] = useState([])

    const [fetchInterests, ,] = useFetching(async () => {
        const response = await InterestService.getAll();
        setAllInterests(response.data && response.data['all_interests']);
    })

    useEffect(() => {
        fetchInterests()
    }, []);


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
        setUserInterests([...userInterests, ...newInterest])
        setInterestModalWindowVisibility(false)
    }

    const optionInterests = allInterests.filter(item => !userInterests.includes(item))

    const minPrice = 0, maxPrice = 150000;
    const [priceRangeValue, setPriceRangeValue] = useState([minPrice, maxPrice]);

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRangeValue(checkPrice(minPrice, maxPrice, newValue));
    };

    const [InterestModalWindowVisibility, setInterestModalWindowVisibility] = useState(false);

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

                isIdeasLoading={isIdeasLoading}
                generateIdeas={generateIdeas}
                ideaGenProperties={ideaGenProperties}

                setIsNewUser={setIsNewUser}

                token={token}

                friends={friends}
                SelectFriendModalWindowVisibility={SelectFriendModalWindowVisibility}
                setSelectFriendModalWindowVisibility={setSelectFriendModalWindowVisibility}
            />
        </Sidebar>
        <Ideas
            ideas={ideas}
            isIdeasLoading={isIdeasLoading}
            ideaError={ideaError}
            isNewUser={isNewUser}
        />
    </div>);
}

export default Main;