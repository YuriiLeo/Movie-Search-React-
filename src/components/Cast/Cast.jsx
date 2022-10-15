import Loader from 'components/Loader/Loader';
import Warnings from 'components/Warnings/Warnings';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/ApiMovie';
import { Wrapper } from './Cast.styled';
import CastGallery from './CastGallery/CastGallery';

export default function CastPage() {

  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const id = movieId;
  
  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieCast(id);
        setMovieCast(result.cast);

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [id]);

  if (!movieCast) {
    return null;
  }


  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <Warnings text="Please, try again later"/>}
      {<p>{movieCast.length} actors starred in this film!</p>}
      {<CastGallery items={movieCast} />}
    </Wrapper>
  )
}
