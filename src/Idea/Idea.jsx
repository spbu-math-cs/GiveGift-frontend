import React from "react";
import GenerateIdeaBtn from "./GenerateIdeaBtn/GenerateIdeaBtn";
import IdeaInfo from "./IdeaInfo/IdeaInfo";
import styles from "./Idea.module.css"

const Idea = (props) => {
    return (
        <div className={styles.idea}>
            <IdeaInfo ideaInfo={props.idea.ideaInfo}/>
            <GenerateIdeaBtn btnText={props.idea.btnText} generateIdea={props.generateIdea}/>
        </div>
    )
}

export default Idea