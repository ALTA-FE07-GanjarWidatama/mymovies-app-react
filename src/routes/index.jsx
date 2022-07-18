import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "../pages/HomePage";
import DetailMovies from "../pages/DetailMovie";
import MyFavorite from "../pages/MyFavorite";
import TestPage from "../pages/TestPage";

import { ThemeContext } from "../utils/context";
import { reduxAction } from "../utils/redux/actions/action";

const App = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");

  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(reduxAction("ADD_FAVORITE", JSON.parse(getMovies)));
    }
  }, []);
  return (
    <ThemeContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:movie_id" element={<DetailMovies />} />
          <Route path="/Favorite" element={<MyFavorite />} />
          <Route path="*" element={<div>404 error not found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
