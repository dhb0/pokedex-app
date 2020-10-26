import React from "react";
import SinglePokeCard from "./SinglePokeCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Alert from "../../Alert";
import Modal from "./Modal";

const Main = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const alert = useSelector((state) => state.alert);
  return (
    <div className="container">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            My Pokemons
          </li>
        </ol>
      </nav>
      {alert.show === true && <Alert />}
      <h1 className="text-center">MY POKEMONS</h1>
      {bookmarks.length !== 0 ? (
        <>
          <button
            type="button"
            className="btn btn-danger d-flex align-items-center mx-auto"
            data-toggle="modal"
            data-target="#areyousureModal"
          >
            REMOVE ALL
            <i className="fa fa-trash fa-lg ml-2" aria-hidden="true"></i>
          </button>
          <Modal />
        </>
      ) : <p className="lead text-center no-item">No items here</p>}
      <div className="card-deck">
        {bookmarks.map((item, index) => (
          <SinglePokeCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
