import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetchMovieApi';
export const Cast = () => {
  const [movieCast, setAMovieCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    fetchMovieCast(movieId)
      .then(response => {
        setAMovieCast(response.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      <ul>
        {movieCast &&
          movieCast.map(data => {
            return (
              <li key={data.id}>
                <img
                  src={
                    data.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${data.profile_path}`
                      : 'https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_960_720.png'
                  }
                  width="200"
                  alt={data.name}
                />
                <p>{data.name}</p>
                <p>{data.character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};
