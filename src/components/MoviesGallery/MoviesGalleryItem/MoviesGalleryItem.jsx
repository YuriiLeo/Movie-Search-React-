import React from 'react';
import PropTypes from "prop-types";
import { Item, Image, Wrapper, Title } from './MoviesGalleryItem.styled';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesGalleryItem({ movieId, img, title }) {
  const location = useLocation();
  return (
    <Item key={movieId}>
      <Link to={`/movies/${movieId}`} state={{from: location}} >
        <Wrapper>
          {img ? <Image src={`https://image.tmdb.org/t/p/w342${img}`} alt={title} />
            : <Image src={`http://dummyimage.com/100x150/99cccc.gif&text=Not+image! `} />}
         
        </Wrapper>
                   <Title>{title}</Title> 
      </Link>
    </Item>
    )
}

MoviesGalleryItem.propTypes = {
  movieId: PropTypes.number,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}