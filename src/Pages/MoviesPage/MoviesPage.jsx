import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Searchbar from 'components/Searchbar/Searchbar'
import Warnings from 'components/Warnings/Warnings';
import { Wrapper } from 'Pages/HomePage/HomePage.styled';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getSearchMovie } from 'services/ApiMovie';
import { Container } from './MoviesPage.styled'

export default function MoviesPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    if (!queryName) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setIsLoading(true);
    
      try {
        const data = await getSearchMovie(queryName, page);

        if (data.results.length === 0) {
          setNotFound(true);
        } else {
          setMovies((prevMovies) => {
            return [...prevMovies, ...data.results]
          });
          setNotFound(false);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
    }
    
    if (queryName) {
      fetchMovies();
    }
  }, [queryName, page]);

  const changeURL = value => {
    setSearchParams(value !== "" ? { query: value } : {});
    setMovies([]);
    setPage(1);
  };

  const isMovies = Boolean(movies.length);

  return (
    <div>
    <Container>
        <Searchbar changeURL={changeURL} />
    </Container>
      <Wrapper>
      <ToastContainer position="top-right" autoClose={5000} />
      {notFound && <Warnings text="Nothing found for this query, try again" />}
      {isLoading && <Loader />}
      {error && <Warnings text="Please, try again later"/>}
      {!isMovies && !notFound && <Warnings text="Enter key word for images search"/>}
      {isMovies && <MoviesGallery items={movies} />}
      </Wrapper>
    </div>
  )
}
