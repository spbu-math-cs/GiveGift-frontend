import React from 'react';
import Idea from "./Idea/Idea";
import styles from './Ideas.module.css'

const Ideas = () => {
    return (
        <>
            <span className={styles.found_ideas_header}>По вашему запросу найдено</span>

            <div className={styles.ideas}>
                <Idea url="https://www.youtube.com/watch?v=5f-9tVC5q5E" title='test'
                      img_src="https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet delectus in minima, molestias nisi nulla omnis perspiciatis
                    quis sapiente unde velit veniam, vero. Amet at eligendi, expedita
                    facere incidunt ratione!
                </Idea>
                <Idea url="https://www.youtube.com/watch?v=5f-9tVC5q5E" title='test'
                      img_src="https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet delectus in minima, molestias nisi nulla omnis perspiciatis
                    quis sapiente unde velit veniam, vero. Amet at eligendi, expedita
                    facere incidunt ratione!
                </Idea>
                <Idea url="https://www.youtube.com/watch?v=5f-9tVC5q5E" title='test'
                      img_src="https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet delectus in minima, molestias nisi nulla omnis perspiciatis
                    quis sapiente unde velit veniam, vero. Amet at eligendi, expedita
                    facere incidunt ratione!
                </Idea>
                <Idea url="https://www.youtube.com/watch?v=5f-9tVC5q5E" title='test'
                      img_src="https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet delectus in minima, molestias nisi nulla omnis perspiciatis
                    quis sapiente unde velit veniam, vero. Amet at eligendi, expedita
                    facere incidunt ratione!
                </Idea>
                <Idea url="https://www.youtube.com/watch?v=5f-9tVC5q5E" title='test'
                      img_src="https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet delectus in minima, molestias nisi nulla omnis perspiciatis
                    quis sapiente unde velit veniam, vero. Amet at eligendi, expedita
                    facere incidunt ratione!
                </Idea>
                <Idea url="https://www.youtube.com/watch?v=5f-9tVC5q5E" title='test'
                      img_src="https://cdn.freerunce.ru/iblock/b43/kmbba6rt93zwyey57b643oz0gacwi8ap/8569131_1595103871.jpg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet delectus in minima, molestias nisi nulla omnis perspiciatis
                    quis sapiente unde velit veniam, vero. Amet at eligendi, expedita
                    facere incidunt ratione!
                </Idea>

            </div>
        </>
    );
};

export default Ideas;