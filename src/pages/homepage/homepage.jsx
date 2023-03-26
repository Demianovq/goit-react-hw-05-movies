import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrends } from 'services/fetchMovieApi';
import { HomeList, StyledHomeLink } from './homepage.styled';

const Homepage = () => {
  const [movies, setAMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrends()
      .then(response => setAMovies(response.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <HomeList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledHomeLink
                to={`movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </StyledHomeLink>
            </li>
          );
        })}
      </HomeList>
    </>
  );
};

export default Homepage;
