import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Searchbar from 'components/Searchbar/Searchbar'
import Warnings from 'components/Warnings/Warnings';
import { Wrapper } from 'Pages/HomePage/HomePage.styled';
import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { getSearchMovie } from 'services/ApiMovie';
import { Container } from './MoviesPage.styled'

export default function MoviesPage() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
  const fetchMovies = async () =>  {
    setIsLoading(true);
    
      try {
        const data = await getSearchMovie(search, page);

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
    
    if (search) {
       fetchMovies();
    }
}, [search, page])



  const onSearch = search => {
    setMovies([]);
    setSearch(search);
    console.log("search", search);
    setPage(1);
  }
  // const [searchParams, setSearchParams] = useSearchParams();

  const isMovies = Boolean(movies.length);
  return (
    <div>
    <Container>
        <Searchbar onSearch={onSearch} />
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
