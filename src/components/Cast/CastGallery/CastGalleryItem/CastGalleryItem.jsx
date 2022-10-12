import React from 'react';
import PropTypes from "prop-types";
import { Image, Item, Title } from './CastGalleryItem.styled';

export default function CastGalleryItem({ movieId, img, name, character }) {
  


  return (
    <Item key={movieId}>
      <div>
        <Image src={img} alt={name} />
      </div>
      <div>
      <Title>{name}</Title>
        <Title>Character: {character}</Title>
      </div>
    </Item>
    )
}

CastGalleryItem.propTypes = {
  movieId: PropTypes.number,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
}