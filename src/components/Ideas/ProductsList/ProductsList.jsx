import styles from "./ProductsList.module.css";
import Product from "./Product/Product";
import NotFound from "../../UI/NotFound/NotFound";
import React from "react";

/*
 * */
const ProductsList = ({ products }) => {
  return (
    <>
      {products && products.length === 0 ? (
        <NotFound />
      ) : (
        <div className={`${styles.idea_list} fadein slider`}>
          <span className={styles.found_ideas_header}>
            По вашему запросу найдено
          </span>
          <div className={styles.ideas}>
            {products.map(
              (
                idea,
                ind, // Имеем право юзать индекс в мапе как key, т.к. контент не будет удаляться/изменяться до нажатия на кнопку генерации, а при нажатии весь прошлый контент уйдет, что позволяет нам сказать, что такой key-статичен и уникален
              ) => (
                <Product
                  key={ind}
                  market_link={idea.market_link}
                  title={idea.title}
                  img_link={idea.img_link}
                />
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsList;
