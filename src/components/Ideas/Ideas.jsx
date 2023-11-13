import React from 'react';
import Loader from "../UI/Loader/Loader";
import IdeaList from "./IdeaList/IdeaList";
import IdeasError from "../UI/IdeasError/IdeasError";
import GettingStarted from "../UI/GettingStarted/GettingStarted";


// TODO: Возможно, при начальном рендеринге, кидать приветственный экран (в localstorage хранить, зашел ли пользователь впервые)

const Ideas = ({ideas, isIdeasLoading, ideaError, isNewUser}) => {
    return (
        <>
            {isNewUser
                ? <GettingStarted/>
                : isIdeasLoading
                    ? <Loader/>
                    : ideaError
                        ? <IdeasError errorMsg={ideaError}/>
                        : <IdeaList ideas={ideas}/>
            }
        </>
    );
};


export default Ideas;