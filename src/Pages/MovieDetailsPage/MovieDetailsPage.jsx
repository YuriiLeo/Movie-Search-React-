import { useState,  useEffect, Suspense } from 'react';
import { getMovieById } from 'services/ApiMovie';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Warnings from 'components/Warnings/Warnings';
import { BackgraundPost, Img, LinkStyled, List, Poster, PosterWrapper, Wrapper, WrapperSection } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const id = movieId;

  const location = useLocation();

  const isCastPage = location.pathname.includes('cast' || 'reviews');
  const castLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;
  const isReviewsPage = location.pathname.includes('reviews' || 'cast');
  const reviewsLink = isReviewsPage ? `/movies/${id}` : `/movies/${id}/reviews`;

  const backLink = location?.state?.from ?? "/";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieById (id);
        setMovie(result);

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);
  
  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres, backdrop_path } = movie;
  const genreFilter = genres.map(genre => genre.name).join(", ");

  const posterPathImg = `https://image.tmdb.org/t/p/w342${poster_path}`;
  const backdropPathImg = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  console.log(backdropPathImg);


  return (
    < BackgraundPost path={backdropPathImg}>
      {loading && <Loader />}
      {error && <Warnings text="Please, try again later"/>}
     {<div>
          <LinkStyled  to={backLink} >Go back</LinkStyled> 
        <Wrapper >
          <WrapperSection >
            {poster_path ? <Img src={posterPathImg} alt={movie.title}/> : <Img src={`http://dummyimage.com/100x150/99cccc.gif&text=Not+image! `}/>  }
          <PosterWrapper>
            <Poster>
            <h2>{title}</h2>
            <p>User Score: {((vote_average / 10) * 100).toFixed(0)} %</p>
            <h3>Overviev</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            {/* {genres.map(genre => (
             <p key={genre.id}>{genre.name}</p>
            ))} */}
            <p>{genreFilter}</p>
              </Poster>
              </PosterWrapper>
            </WrapperSection>
          </Wrapper>
        <List>
            <LinkStyled><NavLink to={castLink} state={{from: backLink}} >Cast</NavLink></LinkStyled>
            <LinkStyled><NavLink to={reviewsLink} state={{from: backLink}} >Reviews</NavLink></LinkStyled>
            {/* <LinkStyled><NavLink to={castLink} state={{from: location.state.from}} >Cast</NavLink></LinkStyled>
            <LinkStyled><NavLink to={reviewsLink} state={{from: location.state.from}} >Reviews</NavLink></LinkStyled> */}
        </List>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        </div>}
    </BackgraundPost>
  )
}
