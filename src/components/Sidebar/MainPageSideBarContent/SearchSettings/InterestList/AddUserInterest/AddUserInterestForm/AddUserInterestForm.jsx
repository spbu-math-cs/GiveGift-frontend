import React, {useState} from 'react';
import {AutoCompleteSearch} from "../../../../../../UI/AutoCompleteSearch/AutoCompleteSearch";
import ActiveButton from "../../../../../../UI/Button/ActiveButton/ActiveButton";
import styles from "./AddUserInterestForm.module.css"


const AddUserInterestForm = ({add, optionInterests}) => {

    const [userInterest, setUserInterest] = useState('');

    const addNewUserInterest = (e) => {
        e.preventDefault();
        if (userInterest) {
            add(userInterest);
            setUserInterest('');
        }
    }

    return (
        <form className={styles.add_interest_form}>
            <AutoCompleteSearch userInterest={userInterest}
                                setUserInterest={setUserInterest}
                                optionInterests={optionInterests}/>
            <ActiveButton onClick={addNewUserInterest} className={styles.add_interest_form_button}>ОК</ActiveButton>
        </form>
    );
};

export default AddUserInterestForm;


