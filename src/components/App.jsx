import { Routes, Route } from "react-router-dom";
// import HomePage from "Pages/HomePage/HomePage";
// import MoviesPage from "Pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "Pages/MovieDetailsPage/MovieDetailsPage";
// import Cast from "components/Cast/Cast";
// import Reviews from "components/Reviews/Reviews";
// import NotFoundPage from "Pages/NotFoundPage/NotFoundPage";
import SharedLayout from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../Pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage/NotFoundPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <div >
      <Routes>
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage/>}/>
      <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
        </Route> 
      </Routes>
    </div>
  );
};
