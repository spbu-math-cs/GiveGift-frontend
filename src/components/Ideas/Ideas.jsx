import React from 'react';
import styles from './Ideas.module.css'
import Loader from "../UI/Loader/Loader";
import IdeaList from "./IdeaList/IdeaList";
import IdeasError from "../UI/IdeasError/IdeasError";

const Ideas = ({ideas, isIdeasLoading, ideaError}) => {
    return (
        <div className={`${styles.ideas_list} slider`}>
            {isIdeasLoading
                ? <Loader/>
                : ideaError
                    ? <IdeasError/>
                    : <IdeaList ideas={ideas}/>
            }
        </div>
    );
};


export default Ideas;