import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "./Actions/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home/Main";
import MyPokemons from "./Components/Pages/MyPokemons/Main";
import PokemonDetails from "./Components/Pages/PokemonDetails/Main";

const App = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/myPokemons" component={MyPokemons} />
          <Route path="/pokemonDetails/:name" component={PokemonDetails} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
