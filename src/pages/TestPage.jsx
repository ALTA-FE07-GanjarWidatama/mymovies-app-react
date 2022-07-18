import React from "react";
import { useSelector } from "react-redux";

import Card from "../component/Card";
import Header from "../component/Header";
import { WithRouter } from "../utils/Navigations";

const MyFavorite = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="w-full h-screen overflow-auto bg-white dark:bg-black">
      <Header />
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {favorites.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default WithRouter(MyFavorite);
