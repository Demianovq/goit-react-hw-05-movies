import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetchMovieApi';
import { Loader } from 'components/loader/loader';
import {
  SearchBtn,
  Form,
  FormInput,
  MoviesList,
  StyledMovieLink,
} from './movies-searchpage.styled';

const Movies = () => {
  const [movies, SetAMovies] = useState([]);
  const [movieName, setAMovieName] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
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
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="query"
          value={movieName}
          onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
      <MoviesList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledMovieLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledMovieLink>
            </li>
          );
        })}
      </MoviesList>
      <Suspense fallback={<Loader />} />
    </>
  );
};

export default Movies;
