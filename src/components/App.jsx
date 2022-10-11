import { Routes, Route } from "react-router-dom";
import HomePage from "Pages/HomePage/HomePage";
import MoviesPage from "Pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "Pages/MovieDetailsPage/MovieDetailsPage";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import NotFoundPage from "Pages/NotFoundPage/NotFoundPage";
import SharedLayout from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    // <div

    // >
    //   React homework template
    // </div>
    <div
        style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
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
