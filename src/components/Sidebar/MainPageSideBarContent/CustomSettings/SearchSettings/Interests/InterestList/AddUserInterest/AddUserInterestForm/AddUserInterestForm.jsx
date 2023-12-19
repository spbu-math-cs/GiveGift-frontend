import React, {useState} from 'react';
import {AutoCompleteSearch} from "../../../../../../../../UI/AutoCompleteSearch/AutoCompleteSearch";
import styles from "./AddUserInterestForm.module.css"


const AddUserInterestForm = ({add}) => {

    const [selectedInterests, setSelectedInterests] = useState([]);

    const addNewUserInterest = (e) => {
        e.preventDefault();
        if (selectedInterests) {
            add(selectedInterests);
            setSelectedInterests([]);
        }
    }

    return (
        <form className={styles.add_interest_form}>
            <AutoCompleteSearch selectedInterests={selectedInterests}
                                setSelectedInterests={setSelectedInterests}
                                onChange={(e) => setSelectedInterests(e.currentTarget)}
                                onClick={addNewUserInterest}
                                className={styles.add_interest_form_button}/>
        </form>
    );
};

export default AddUserInterestForm;


