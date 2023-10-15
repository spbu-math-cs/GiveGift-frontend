import React from "react";
import styles from './TagList.module.css'
import {Tag, PlusBtn} from "./Tag/Tag";

const TagList = () => {
    return (
        <div className={styles.taglist}>
            <Tag text="Кино"/>
            <Tag text="Цветы"/>
            <Tag text="Сладости"/>
            <Tag text="Рок"/>
            <Tag text="Мультфильмы"/>
            <PlusBtn />
        </div>

    )
}

export default TagList