import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/loader/loader';
import { fetchMovieReviews } from 'services/fetchMovieApi';

export const Reviews = () => {
  const [reviews, setAReviews] = useState([]);
  const [loader, setALoader] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setALoader(true);
    if (!movieId) return;
    fetchMovieReviews(movieId)
      .then(response => {
        setAReviews(response.results);
        setALoader(false);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>Review: {review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>No reviews</h3>
      )}
    </>
  );
};

export default Reviews;
