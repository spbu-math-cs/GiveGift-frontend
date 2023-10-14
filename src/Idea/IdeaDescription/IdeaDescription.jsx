import React from "react";
import styles from './IdeaDescription.module.css'

const IdeaDescription = () => {
    return (
        <div>
            <img className={styles.img} src='https://ir.ozone.ru/s3/multimedia-v/c1000/6273919495.jpg' alt='Шоколад'/>
            <div>
                Blah Blah Blah
            </div>
        </div>
    )
}

export default IdeaDescription