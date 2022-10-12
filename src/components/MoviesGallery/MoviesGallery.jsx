import React from 'react';
import PropTypes from "prop-types";
import { Gallery } from './MoviesGallery.styled';
import MoviesGalleryItem from 'components/MoviesGallery/MoviesGalleryItem/MoviesGalleryItem';


export default function MoviesGallery({ items }) {
  const urlImg = "https://image.tmdb.org/t/p/w342";
  return (
  <Gallery>
    {
        items.map(({ id, backdrop_path, title }) => {
          const img = urlImg + backdrop_path;
          return (
        <MoviesGalleryItem
          key={id}
          movieId={id}
          img={img}
          imgLarge={backdrop_path}
          title={title}  />)
        })}
      </Gallery>
  );
};

MoviesGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        webformatURL: PropTypes.string,
        id: PropTypes.number,
        largeImageURL: PropTypes.string
    }))
}