import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieCardBlock, CastLink, ReviewsLink } from './moviecard.styled';
import { Loader } from 'components/loader/loader';
export const MovieCard = ({ data }) => {
  const location = useLocation();
  const getAGenres = genres => {
    if (!genres) return 'No info';
    return genres.map(genre => genre.name).join(', ');
  };
  return (
    <MovieCardBlock>
      <img
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w400/${data.poster_path}`
            : 'https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_960_720.png'
        }
        width="400"
        height="400"
        alt={data.title}
      />
      <div>
        <h2>
          {data.title}({new Date(data.release_date).getFullYear()})
        </h2>

        <p>User Score: {Math.round(data.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{data.overview}</p>
        <h2>Gengres</h2>
        <p>{getAGenres(data.genres)}</p>
        <CastLink to="cast" state={location.state}>
          Cast
        </CastLink>
        <ReviewsLink to="reviews" state={location.state}>
          Reviews
        </ReviewsLink>

        <Suspense fallback={<Loader />} />
      </div>
    </MovieCardBlock>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,

    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};
