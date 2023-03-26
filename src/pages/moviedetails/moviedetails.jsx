import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { fetchMovieById } from 'services/fetchMovieApi';
import { MovieCard } from 'components/moviecard/moviecard';
import { BackBtn } from './moviedetails.styled';
import { Loader } from 'components/loader/loader';
export const MovieDetails = () => {
  const [movie, SetAMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!movieId) return;
    fetchMovieById(movieId)
      .then(response => {
        SetAMovie(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          <BackBtn
            type="button"
            onClick={() => {
              navigate(location.state?.from ?? '/');
            }}
          >
            Go Back
          </BackBtn>
          <MovieCard data={movie} state={location.state} />
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
