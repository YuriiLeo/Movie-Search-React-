import React from 'react';
import PropTypes from "prop-types";
import { Item, Image } from './MoviesGalleryItem.styled';
import { Link } from 'react-router-dom';

export default function MoviesGalleryItem({ movieId, img, title }) {

  return (
    <Item key={movieId}>
      <Link to={`/movies/${movieId}`} >
      <Image  src={img} alt="" />
        <p>{title}</p>
      </Link>
    </Item>
    )
}

MoviesGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  imgLarge: PropTypes.string.isRequired,
}