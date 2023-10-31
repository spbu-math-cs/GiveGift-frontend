import React, {useState} from 'react';
import Idea from "./Idea/Idea";
import styles from './Ideas.module.css'

const Ideas = () => {

    const [ideas, setIdeas] = useState([
        {
            url: "https://www.youtube.com/watch?v=5f-9tVC5q5E",
            title: "test",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus in minima, molestias nisi nulla omnis perspiciatis quis sapiente unde velit veniam, vero. Amet at eligendi, expedita facere incidunt ratione!",
            img_src: "https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg"
        },
        {
            url: "https://www.youtube.com/watch?v=5f-9tVC5q5E",
            title: "test",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus in minima, molestias nisi nulla omnis perspiciatis quis sapiente unde velit veniam, vero. Amet at eligendi, expedita facere incidunt ratione!",
            img_src: "https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg"
        },
        {
            url: "https://www.youtube.com/watch?v=5f-9tVC5q5E",
            title: "test",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus in minima, molestias nisi nulla omnis perspiciatis quis sapiente unde velit veniam, vero. Amet at eligendi, expedita facere incidunt ratione!",
            img_src: "https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg"
        },
        {
            url: "https://www.youtube.com/watch?v=5f-9tVC5q5E",
            title: "test",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus in minima, molestias nisi nulla omnis perspiciatis quis sapiente unde velit veniam, vero. Amet at eligendi, expedita facere incidunt ratione!",
            img_src: "https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg"
        },
        {
            url: "https://www.youtube.com/watch?v=5f-9tVC5q5E",
            title: "test",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet delectus in minima, molestias nisi nulla omnis perspiciatis quis sapiente unde velit veniam, vero. Amet at eligendi, expedita facere incidunt ratione!",
            img_src: "https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg"
        }
    ])

    return (
        <div className={styles.ideas_list + " " + "slider"}>
            <span className={styles.found_ideas_header}>По вашему запросу найдено</span>
            <div className={styles.ideas}>
                {ideas.map((idea, ind) => // Имеем право юзать индекс в мапе как key, т.к. контент не будет удаляться/изменяться до нажатия на кнопку генерации, а при нажатии весь прошлый контент уйдет, что позволяет нам сказать, что такой key-статичен и уникален
                    <Idea key={ind} url={idea.url} title={idea.title} img_src={idea.img_src}>
                        {idea.description}
                    </Idea>
                )}
            </div>
        </div>
    );
};

export default Ideas;