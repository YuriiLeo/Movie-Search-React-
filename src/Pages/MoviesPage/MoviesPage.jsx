import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import Warnings from 'components/Warnings/Warnings';
import { Wrapper } from 'Pages/HomePage/HomePage.styled';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getSearchMovie } from 'services/ApiMovie';
import { Container } from './MoviesPage.styled';
import Pagination from 'components/Pagination/Pagination';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!queryName) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const data = await getSearchMovie(queryName, currentPage);

        if (data.results.length === 0) {
          setNotFound(true);
        } else {
          setMovies(data.results);
          setTotalPages(data.total_pages);

          setNotFound(false);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (queryName) {
      fetchMovies();
    }
  }, [queryName, currentPage]);
  console.log(totalPages);

  const changeURL = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setMovies([]);
    setCurrentPage(1);
    setTotalPages(0);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isMovies = Boolean(movies.length);

  return (
    <div>
      <Container>
        <Searchbar changeURL={changeURL} />
      </Container>
      <Wrapper>
        <ToastContainer position="top-right" autoClose={5000} />
        {notFound && (
          <Warnings text="Nothing found for this query, try again" />
        )}
        {isLoading && <Loader />}
        {error && <Warnings text="Please, try again later" />}
        {!isMovies && !notFound && (
          <Warnings text="Enter key word for images search" />
        )}
        {isMovies && <MoviesGallery items={movies} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Wrapper>
    </div>
  );
}
