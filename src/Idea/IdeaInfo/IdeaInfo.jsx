import React from "react";
import styles from './IdeaInfo.module.css'

const IdeaInfo = () => {
    return (
        <div className={styles.ideaInfo}>
            <img className={styles.img} src='https://cs4.pikabu.ru/post_img/big/2016/06/11/10/1465666690114064391.png' alt='Шоколад'/>
            <span className={styles.title}>Бла бла</span>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esse praesent aliquam luptatum,
                exercitation nulla non rebum aliquam magna est,
                laborum at nisi exercitation at est justo nam incidunt laoreet
                duis duis adipisici nonumy sanctus diam nihil ullamco aute in cum sanctus wisi excepteur exerci augue. Cum autem pariatur hendrerit quis nibh ullamco fugiat aliqua duo qui nobis reprehenderit imperdiet sanctus sunt ullamcorper. Odio ex facilisi. Pariatur enim quis facilisi. Exercitation facilisi facilisis.
            </div>
        </div>
    )
}

export default IdeaInfo