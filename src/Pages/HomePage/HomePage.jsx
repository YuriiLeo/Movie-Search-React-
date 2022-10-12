import Loader from 'components/Loader/Loader';
import { getMovieTranding } from 'services/ApiMovie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Warnings from "components/Warnings/Warnings";
import React, { useState, useEffect } from 'react';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Title, Wrapper } from './HomePage.styled';

export default function HomePage() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);
  // const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
    
      try {
        const data = await getMovieTranding();

        if (data.results.length === 0) {
          // setNotFound(true);
        } else {
          setMovies((prevMovies) => {
            return [...prevMovies, ...data.results]
          });
          // setNotFound(false);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
    }
  
    fetchMovies();
      
  }, []);


const isMovies = Boolean(movies.length);
  
  return (
    <Wrapper>
        <Title>Trending today
        </Title>
        <ToastContainer position="top-right" autoClose={5000} />
        {isLoading && <Loader/>}
        {error && <Warnings text="Please, try again later"/>}
        {isMovies && <MoviesGallery items={movies} />}
        {/* {(isMovies && movies.length < totalMovies) && <Button loadMore={loadMore} />} */}
    </Wrapper>
  )
}
