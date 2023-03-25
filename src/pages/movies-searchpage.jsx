import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetchMovieApi';

export const Movies = () => {
  const [movies, SetAMovies] = useState([]);
  const [movieName, setAMovieName] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    fetchMovieByQuery(query)
      .then(response => SetAMovies(response.results))
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(
      movieName !== '' ? { query: form.elements.query.value } : {}
    );
    setAMovieName('');
    form.reset();
  };

  const onChangeInput = value => {
    setAMovieName(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={movieName}
          onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
