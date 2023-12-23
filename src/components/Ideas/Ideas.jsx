import React, { useContext } from "react";
import Loader from "../UI/Loader/Loader";
import ProductsList from "./ProductsList/ProductsList";
import Error from "../UI/Error/Error";
import { IdeasContext } from "../../context/IdeasContext/IdeasContext";

const Ideas = () => {
  const { ideas, isIdeasLoading, ideaError } = useContext(IdeasContext);
  return (
    <>
      {isIdeasLoading ? (
        <Loader loadingText={"Придумываем идеи..."} />
      ) : ideaError ? (
        <Error errorMsg={ideaError} />
      ) : (
        <ProductsList products={ideas} />
      )}
    </>
  );
};

export default Ideas;
