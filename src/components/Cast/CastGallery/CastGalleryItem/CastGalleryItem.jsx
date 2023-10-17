import React from 'react';
import PropTypes from 'prop-types';
import { Character, Image, Item, Title } from './CastGalleryItem.styled';

export default function CastGalleryItem({ movieId, img, name, character }) {
  return (
    <Item key={movieId}>
      <div>
        {img ? (
          <Image src={`https://image.tmdb.org/t/p/w342${img}`} alt={name} />
        ) : (
          <Image
            src={`http://dummyimage.com/200x300/99cccc.gif&text=Not+image! `}
          />
        )}
      </div>
      <div>
        <Title>{name}</Title>
        <Character>{character}</Character>
      </div>
    </Item>
  );
}

CastGalleryItem.propTypes = {
  movieId: PropTypes.number,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
