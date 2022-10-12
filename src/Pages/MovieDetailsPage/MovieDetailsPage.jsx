import { useState,  useEffect } from 'react';
import { getMovieById } from 'services/ApiMovie';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Warnings from 'components/Warnings/Warnings';
import { Img, LinkStyled, List, Poster, PosterWrapper, Wrapper, WrapperSection } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const id = movieId;
  console.log(movieId);
  
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieById (id);
        console.log("result", result);
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

  const { poster_path, title, vote_average, overview, genres } = movie;
  const genreFilter = genres.map(genre => genre.name).join(", ");

  return (
    < div >
      {loading && <Loader />}
      {error && <Warnings text="Please, try again later"/>}
     {<div>
          <LinkStyled to="/">Go home</LinkStyled> 
        <Wrapper>
          <WrapperSection>
          <Img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={movie.title} />
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
            <LinkStyled><NavLink to={'cast'}>Cast</NavLink></LinkStyled>
            <LinkStyled><NavLink to={'reviews'}>Reviews</NavLink></LinkStyled>
          </List>
          <Outlet/>
        </div>}
    </div>
  )
}
