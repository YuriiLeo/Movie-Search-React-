import React from 'react';
import PropTypes from "prop-types";
import { Item, Image, Wrapper, Title } from './MoviesGalleryItem.styled';
import { Link } from 'react-router-dom';

export default function MoviesGalleryItem({ movieId, img, title }) {

  return (
    <Item key={movieId}>
      <Link to={`/movies/${movieId}`} >
        <Wrapper>
            <Image  src={img} alt={title} />
           <Title>{title}</Title>          
      </Wrapper>
      </Link>
    </Item>
    )
}

MoviesGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  imgLarge: PropTypes.string.isRequired,
}