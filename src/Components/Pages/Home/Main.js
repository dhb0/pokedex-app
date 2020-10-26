import React from "react";
import InputField from "./InputField";
import DisplayArea from "./DisplayArea";
import SortingButtons from "./SortingButtons";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";

const Main = () => {
  const isDataFetched = useSelector((state) => state.isDataFetched);
  return (
    <div className="container text-center">
      {isDataFetched ? (
        <>
          <InputField />
          <SortingButtons />
          <DisplayArea />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Main;
