import React from 'react';
import PropTypes from "prop-types";

export default function CastGalleryItem({ movieId, img, name, character }) {
  


  return (
    <li key={movieId}>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
    )
}

CastGalleryItem.propTypes = {
  movieId: PropTypes.number,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
}