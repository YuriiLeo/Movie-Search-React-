import React from 'react';
import PropTypes from "prop-types";
import { Title, Wrapper } from './ReviewsItem.styled';

export default function ReviewsItem({movieId, author, content}) {
  return (
      <li key={movieId}>
          <Wrapper>
              <Title>Author: {author}.</Title>
              <p>{content}</p>
          </Wrapper>
    </li>
    )
}

ReviewsItem.propTypes = {
  movieId: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string
}