import React from "react";
import { useDispatch } from "react-redux";
import { setAlert, deleteFromBookmarks } from "../../../Actions/index";

const SinglePokeCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="card text-center mypokemons-card mt-4">
      <div className="card-header text-capitalize">
        <h3>{data.name}</h3>
        <button
          className="btn btn-danger d-flex align-items-center mx-auto"
          onClick={() => {
            dispatch(deleteFromBookmarks(data.id));
            dispatch(
              setAlert("danger", `${data.name} was deleted from MyPokemons`)
            );
          }}
        >
          Delete from my Pokemons
          <i className="fa fa-trash fa-lg ml-2" aria-hidden="true"></i>
        </button>
        <img
          className="card-img-top"
          src={data.sprites.other["official-artwork"].front_default}
          alt="Card image cap"
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">Details</h5>
        <p className="card-text">
          Base Experience: <strong>{data.base_experience}</strong>
          <br />
          Height: <strong>{data.height}</strong>
          <br />
          Weight: <strong>{data.weight}</strong>
          <br />
          Order: <strong>{data.order}</strong>
          <br />
          Type(s):{" "}
          {data.types.map((item, index) => {
            return (
              <strong key={index} className="text-capitalize">
                {item.type.name}{" "}
              </strong>
            );
          })}
        </p>
        <ul className="list-group mx-auto">
          <h5>Game Statistics</h5>
          {data.stats.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center text-capitalize"
                key={index}
              >
                {item.stat.name}
                <h5>
                  <span className="badge badge-primary badge-pill">
                    {item.base_stat}
                  </span>
                </h5>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer text-muted">
        {Object.values(data.sprites)
          .filter((item) => typeof item === "string")
          .map((icon, index) => (
            <img src={icon} key={index} />
          ))}
      </div>
    </div>
  );
};

export default SinglePokeCard;
