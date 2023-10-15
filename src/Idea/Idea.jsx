import React from "react";
import GenerateIdeaBtn from "./GenerateIdeaBtn/GenerateIdeaBtn";
import IdeaInfo from "./IdeaInfo/IdeaInfo";
import styles from "./Idea.module.css"

const Idea = () => {
    return (
        <div className={styles.idea}>
            <IdeaInfo />
            <GenerateIdeaBtn/>
        </div>
    )
}

export default Idea