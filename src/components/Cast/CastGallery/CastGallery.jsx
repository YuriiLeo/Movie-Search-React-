import React from 'react';
import PropTypes from 'prop-types';
import CastGalleryItem from './CastGalleryItem/CastGalleryItem';
import { List } from './CastGallery.styled';

export default function CastGallery({ items }) {
  return (
    <List>
      {items.map(({ id, name, character, profile_path }) => {
        console.log(id, name, character, profile_path);
        const img = profile_path;

        return (
          <CastGalleryItem
            key={id}
            movieId={id}
            img={img}
            name={name}
            character={character}
          />
        );
      })}
    </List>
  );
}

CastGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
