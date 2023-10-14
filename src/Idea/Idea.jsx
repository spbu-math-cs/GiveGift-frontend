import React from "react";
import styles from './Idea.module.css'
import GenerateIdeaBtn from "./GenerateIdeaBtn/GenerateIdeaBtn";
import IdeaDescription from "./IdeaDescription/IdeaDescription";

const Idea = () => {
    return (
        <div>
            <IdeaDescription />
            <GenerateIdeaBtn/>
        </div>
    )
}

export default Idea