import React, {useState} from 'react';
import styles from './MainPageSideBarContent.module.css'
import ActiveButton from "../../UI/Button/ActiveButton/ActiveButton";
import SearchSettings from "./SearchSettings/SearchSettings";

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


    return (
        <div className={styles.mainpage_sidebar_content}>
            <ActiveButton className={styles.mainpage_sidebar_btn} onClick={(e) => {
                console.log(e)
            }}>Выдай идею!</ActiveButton>
            <SearchSettings userInterests={userInterests} remove={removeUserInterest} add    ={addUserInterest}/>
            <ActiveButton className={styles.mainpage_sidebar_btn} onClick={() => alert()}>Сохранить</ActiveButton>
        </div>
    );
};

export default MainPageSideBarContent;