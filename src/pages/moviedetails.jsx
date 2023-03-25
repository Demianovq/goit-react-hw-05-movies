import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from 'services/fetchMovieApi';
import { MovieCard } from 'components/moviecard/moviecard';
export const MovieDetails = () => {
  const [movie, SetAMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieById(movieId)
      .then(response => {
        SetAMovie(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return <div>{movie && <MovieCard data={movie} />}</div>;
};
