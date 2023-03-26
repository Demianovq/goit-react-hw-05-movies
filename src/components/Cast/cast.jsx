import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetchMovieApi';
import { Loader } from 'components/loader/loader';
import { CastList } from './cast.styled';
const Cast = () => {
  const [movieCast, setAMovieCast] = useState([]);
  const [loader, setALoader] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    setALoader(true);
    fetchMovieCast(movieId)
      .then(response => {
        setAMovieCast(response.cast);
        setALoader(false);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      {loader && <Loader />}
      <CastList>
        {movieCast &&
          movieCast.map(data => {
            console.log('sdsd');
            return (
              <li key={data.id}>
                <img
                  src={
                    data.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${data.profile_path}`
                      : 'https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_960_720.png'
                  }
                  width="200"
                  height="250"
                  alt={data.name}
                />
                <p>Name: {data.name}</p>
                <p>Role: {data.character}</p>
              </li>
            );
          })}
        {movieCast.length === 0 && <h3>No cast</h3>}
      </CastList>
      <Suspense fallback={<Loader />} />
    </>
  );
};

export default Cast;
