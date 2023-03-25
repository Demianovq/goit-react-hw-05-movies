import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/fetchMovieApi';

export const Homepage = () => {
  const [movies, setAMovies] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(response => setAMovies(response.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              {movie.title}
              {/* <Link to={movie.id}>{movie.title}</Link> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};
