import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '71c93644ec2284a1c063a4cc462c4087';

export async function fetchTrends() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return response.data;
}

export async function fetchMovieById(movieId) {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
}

export async function fetchMovieByQuery(query) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return response.data;
}
