import React from "react";

import Button from "./Button";
import { WithRouter } from "../utils/Navigations";

const Card = ({ data, navigate, onClick }) => {
  return (
    <div className="p-3 bg-rose-500 rounded shadow-lg shadow-black">
      <div onClick={() => navigate(`/detail/${data.id}`, { replace: true })}>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={data.title}
          height="750"
        />
        <p className="text-center text-white font-bold">{data.title}</p>
      </div>
      <Button label="Add to favorite" onClick={onClick} />
    </div>
  );
};

// 1. export default
// export default Card;
// 2. named export
export default WithRouter(Card);
