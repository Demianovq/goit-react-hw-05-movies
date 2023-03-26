import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './layout/layout';
import { Loader } from './loader/loader';

const Homepage = lazy(() => import('pages/homepage/homepage'));
const Movies = lazy(() => import('pages/movies-searchpage/movies-searchpage'));
const MovieDetails = lazy(() => import('pages/moviedetails/moviedetails'));
const Cast = lazy(() => import('./Cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
