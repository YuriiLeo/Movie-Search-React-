import React from 'react';
import PropTypes from "prop-types";
import { Gallery } from './MoviesGallery.styled';
import MoviesGalleryItem from 'components/MoviesGallery/MoviesGalleryItem/MoviesGalleryItem';


export default function MoviesGallery({ items }) {
  return (
  <Gallery>
    {
        items.map(({ id, backdrop_path, title, poster_path }) => {

          const img = poster_path || backdrop_path ;
          return (
        <MoviesGalleryItem
          key={id}
          movieId={id}
          img={img}
          title={title}  />)
        })}
      </Gallery>
  );
};

MoviesGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        backdrop_path: PropTypes.string,
        id: PropTypes.number,
        title: PropTypes.string,
        poster_path: PropTypes.string,
    }))
}