import React from 'react';
import PropTypes from "prop-types";
import { Item, Image, Wrapper, Title } from './MoviesGalleryItem.styled';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesGalleryItem({ movieId, img, title }) {
  const location = useLocation();
  return (
    <Item key={movieId}>
      <Link to={`/movies/${movieId}`} state={{from: location}} >
        <Wrapper>
            <Image  src={img} alt={title} />
           <Title>{title}</Title>          
      </Wrapper>
      </Link>
    </Item>
    )
}

MoviesGalleryItem.propTypes = {
  movieId: PropTypes.number,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}