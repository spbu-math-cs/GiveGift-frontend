import styles from "./IdeaList.module.css";
import Idea from "../Idea/Idea";
import NotFound from "../../UI/NotFound/NotFound";
import React from "react";

const IdeaList = ({ ideas }) => {
  return (
    <>
      {ideas && ideas.length === 0 ? (
        <NotFound />
      ) : (
        <div className={`${styles.idea_list} fadein slider`}>
          <span className={styles.found_ideas_header}>
            По вашему запросу найдено
          </span>
          <div className={styles.ideas}>
            {ideas.map(
              (
                idea,
                ind, // Имеем право юзать индекс в мапе как key, т.к. контент не будет удаляться/изменяться до нажатия на кнопку генерации, а при нажатии весь прошлый контент уйдет, что позволяет нам сказать, что такой key-статичен и уникален
              ) => (
                <Idea
                  key={ind}
                  market_link={idea.market_link}
                  title={idea.title}
                  img_link={idea.img_link}
                >
                  {idea.description}
                </Idea>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default IdeaList;
