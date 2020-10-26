import React from "react";
import { useDispatch } from "react-redux";
import { setSearchKey } from "../../../Actions/index";
import { Link } from "react-router-dom";

const SinglePokeItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <Link
        to={{
          pathname: `/pokemonDetails/${data.name}`,
          state: { url: data.url },
        }}
        onClick={() => dispatch(setSearchKey(""))}
      >
        {data.name.toUpperCase()}
      </Link>
    </li>
  );
};

export default SinglePokeItem;
