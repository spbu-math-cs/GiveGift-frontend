import React from "react";
import styles from './IdeaInfo.module.css'

const IdeaInfo = (props) => {
    return (
        <div className={styles.ideaInfo}>
            <img className={styles.img} src={props.ideaInfo.img} alt={props.ideaInfo.alt}/>
            <span className={styles.title}>{props.ideaInfo.title}</span>
            <div className={styles.description}>{props.ideaInfo.info}</div>
        </div>
    )
}

export default IdeaInfo