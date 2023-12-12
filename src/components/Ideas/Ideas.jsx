import React from 'react';
import Loader from "../UI/Loader/Loader";
import IdeaList from "./IdeaList/IdeaList";
import IdeasError from "../UI/IdeasError/IdeasError";
import GettingStarted from "../UI/GettingStarted/GettingStarted";


const Ideas = ({ideas, isIdeasLoading, ideaError, isNewUser}) => {
    return (
        <>
            {isNewUser
                ? <GettingStarted/>
                : isIdeasLoading
                    ? <Loader loadingText={"Придумываем идеи..."}/>
                    : ideaError
                        ? <IdeasError errorMsg={ideaError}/>
                        : <IdeaList ideas={ideas}/>
            }
        </>
    );
};


export default Ideas;