import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailMovies from "../pages/DetailMovie";
import MyFavorite from "../pages/MyFavorite";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:movie_id" element={<DetailMovies />} />
          <Route path="/Favorite" element={<MyFavorite />} />
          <Route path="*" element={<div>404 error not found</div>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
