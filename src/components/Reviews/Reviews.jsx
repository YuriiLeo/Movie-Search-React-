import Loader from 'components/Loader/Loader';
import Warnings from 'components/Warnings/Warnings';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/ApiMovie';
import { Wrapper } from './Reviews.styled';
import ReviewsList from './ReviewsList/ReviewsList';

export default function Reviews() {
 const [movieReviews, setMovieReviews] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const { movieId } = useParams();
const id = movieId;
  
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieReviews(id);
        setMovieReviews(result.results);

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [id]);

  if (!movieReviews) {
    return null;
  }

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <Warnings text="Please, try again later" />}
      {movieReviews.length === 0 && <Warnings text="We don't have any reviews for this movie." />}
      {movieReviews.length > 0 && <h2>We have {movieReviews.length} reviews for this movie</h2>}
      {movieReviews.length > 0 && <ReviewsList items={movieReviews} />}
    </Wrapper>
  )
}
