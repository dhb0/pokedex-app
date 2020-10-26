import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fromAtoZ, fromZtoA, defaultSorting } from "../../../Actions/index";

const SortingButtons = () => {
  const pokemonList = useSelector((state) => state.pokemonList);
  const dispatch = useDispatch();
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Button group with nested dropdown"
    >
      <button
        type="button"
        className="btn btn-secondary"
        onClick={()=>dispatch(defaultSorting(pokemonList))}
      >
        Default
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch(fromAtoZ())}
      >
        A-Z
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch(fromZtoA())}
      >
        Z-A
      </button>
    </div>
  );
};

export default SortingButtons;
