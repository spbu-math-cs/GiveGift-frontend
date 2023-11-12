import React from 'react';
import Idea from "./Idea/Idea";
import styles from './Ideas.module.css'
import Loader from "../UI/Loader/Loader";
import NotFound from "../UI/NotFound/NotFound";

const Ideas = ({ideas, isIdeasLoading}) => {

    return (
        <div className={styles.ideas_list + " " + "slider"}>
            {isIdeasLoading
                ? <Loader/>
                :
                ideas && ideas.length !== 0
                    ? <>
                        <span className={styles.found_ideas_header}>По вашему запросу найдено</span>
                        <div className={styles.ideas}>
                            {ideas.map((idea, ind) => // Имеем право юзать индекс в мапе как key, т.к. контент не будет удаляться/изменяться до нажатия на кнопку генерации, а при нажатии весь прошлый контент уйдет, что позволяет нам сказать, что такой key-статичен и уникален
                                <Idea key={ind} market_link={idea.market_link} title={idea.title} img_link={idea.img_link}>
                                    {idea.description}
                                </Idea>
                            )}
                        </div>
                    </> : <NotFound/>
            }
        </div>
    );
};

export default Ideas;