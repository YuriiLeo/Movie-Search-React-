import React from 'react';
import PropTypes from "prop-types";
import ImageGalleryItem from 'components/MoviesGallery/MoviesGalleryItem/MoviesGalleryItem';
import { Gallery } from './MoviesGallery.styled';


export default function MoviesGallery({ items }) {
  const urlImg = "https://image.tmdb.org/t/p/w342";
  return (
  <Gallery>
    {
        items.map(({ id, backdrop_path, title }) => {
          const img = urlImg + backdrop_path;
          return (
        <ImageGalleryItem
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