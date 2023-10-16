import React from "react";
import styles from './GenerateIdeaBtn.module.css'

const GenerateIdeaBtn = (props) => {
    let generateIdea = () => {
        props.generateIdea()
    }

    return (
        <button onClick={ generateIdea } className={styles.button}>{props.btnText}</button>
    )
}

export default GenerateIdeaBtn