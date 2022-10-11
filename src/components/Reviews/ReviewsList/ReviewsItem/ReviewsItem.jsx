import React from 'react';
import PropTypes from "prop-types";

export default function ReviewsItem({movieId, author, content}) {
  return (
      <li key={movieId}>
          <div>
              <h4>Author: {author}.</h4>
              <p>{content}</p>
          </div>
    </li>
    )
}

ReviewsItem.propTypes = {
  movieId: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string
}