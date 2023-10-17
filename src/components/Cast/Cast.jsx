import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import Warnings from 'components/Warnings/Warnings';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/ApiMovie';
import { Wrapper } from './Cast.styled';
import CastGallery from './CastGallery/CastGallery';
import Pagination from 'components/Pagination/Pagination';

export default function CastPage() {
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 12;

  const { movieId } = useParams();
  const id = movieId;

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieCast(id);
        setMovieCast(result.cast);
        console.log(1);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [id]);

  useEffect(() => {
    if (movieCast) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentItems(movieCast.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [movieCast, currentPage, itemsPerPage]);

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  if (!movieCast) {
    return null;
  }

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <Warnings text="Please, try again later" />}
      {<p>{movieCast.length} actors starred in this film!</p>}
      {movieCast && <CastGallery items={currentItems} />}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(movieCast.length / itemsPerPage)}
        onPageChange={onPageChange}
      />
    </Wrapper>
  );
}
