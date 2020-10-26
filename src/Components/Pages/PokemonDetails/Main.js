import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmarks,
  deleteFromBookmarks,
  setAlert,
} from "../../../Actions/index";
import Spinner from "./Spinner";
import Alert from "../../Alert";
import axios from "axios";

const PokemonDetails = () => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const url = location.state.url;
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { bookmarks, alert } = useSelector((state) => state);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setIsLoaded(true);
    });
  }, []);
  const bookMarkIncludeCondition =
    bookmarks.map((item) => item.name).indexOf(data.name) !== -1;
  return (
    <div className="container poke-details">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Pokemon Detail</li>
          <li
            className="breadcrumb-item active text-capitalize"
            aria-current="page"
          >
            {params.name}
          </li>
        </ol>
      </nav>
      {isLoaded ? (
        <>
          {alert.show === true && <Alert />}
          <button type="button" className="btn btn-outline-warning mb-2">
            <Link to="/">Go Back</Link>
          </button>
          <div className="card text-center">
            <div className="card-header text-capitalize">
              <h4>{data.name}</h4>
              {!bookMarkIncludeCondition ? (
                <button
                  className="btn btn-warning d-flex align-items-center mx-auto"
                  onClick={() => {
                    dispatch(addToBookmarks(data));
                    dispatch(
                      setAlert(
                        "primary",
                        `${data.name} was succesfully added to MyPokemons`
                      )
                    );
                  }}
                >
                  Add to My Pokemons
                  <i
                    className="fa fa-bookmark fa-lg ml-2"
                    aria-hidden="true"
                  ></i>
                </button>
              ) : (
                <button
                  className="btn btn-danger d-flex align-items-center mx-auto"
                  onClick={() => {
                    dispatch(deleteFromBookmarks(data.id));
                    dispatch(
                      setAlert(
                        "danger",
                        `${data.name} was deleted from MyPokemons`
                      )
                    );
                  }}
                >
                  Delete from my Pokemons
                  <i className="fa fa-trash fa-lg ml-2" aria-hidden="true"></i>
                </button>
              )}
            </div>
            <img
              className="card-img-top mx-auto"
              src={data.sprites.other["official-artwork"].front_default}
              alt="Card image cap"
            ></img>
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
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default PokemonDetails;
