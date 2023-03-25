import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Homepage } from 'pages/homepage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {/* <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};
