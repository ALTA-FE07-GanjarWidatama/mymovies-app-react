import React, { useState, useEffect } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigations";
import Header from "../component/Header";
// import axios from axios

const DetailMovie = (props) => {
  const [DetailMovie, setDetailMovie] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const { movie_id } = props.params;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        const { data } = response;
        setDetailMovie(data);
        setVideos(data.videos.results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <Header />
      <p>{DetailMovie.title}</p>
      {videos.map((video) => (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
};

export default WithRouter(DetailMovie);
