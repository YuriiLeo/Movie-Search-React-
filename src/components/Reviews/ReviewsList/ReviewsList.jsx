import React from 'react';
import PropTypes from "prop-types";
import ReviewsItem from './ReviewsItem/ReviewsItem';

export default function ReviewsList({items}) {
  return (
  <ul>
    {
    items.map(({ id, author, content }) => {
    return (
        <ReviewsItem
          key={id}
          movieId={id}
          author={author}
          content={content}
          />)
        })}
  </ul>
  );
};

ReviewsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string
    }))
}