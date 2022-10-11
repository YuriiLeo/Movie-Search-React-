import React from 'react';
import PropTypes from "prop-types";
import CastGalleryItem from './CastGalleryItem/CastGalleryItem';

export default function CastGallery({items}) {

 const urlImg = "https://image.tmdb.org/t/p/w500";
  return (
  <ul>
    {
              items.map(({ id, name, character, profile_path }) => {
              if (!profile_path) {
    return null;
  }
          const img = urlImg + profile_path;
          
          return (
        <CastGalleryItem
          key={id}
          movieId={id}
          img={img}
          name={name}
          character={character}/>)
        })}
      </ul>
  );
};

CastGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        character: PropTypes.string,
        profile_path: PropTypes.string
    }))
}