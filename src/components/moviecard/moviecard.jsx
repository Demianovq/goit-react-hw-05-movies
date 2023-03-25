import { Link, Outlet } from 'react-router-dom';
export const MovieCard = ({ data }) => {
  const getAGenres = genres => {
    if (!genres) return 'No info';
    return genres.map(genre => genre.name).join(', ');
  };
  return (
    <div>
      <img
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w400/${data.poster_path}`
            : 'https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_960_720.png'
        }
        width="400"
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
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </div>
  );
};
