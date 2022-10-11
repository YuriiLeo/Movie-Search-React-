import React from 'react';
import { MdOutlineSentimentDissatisfied, MdOutlineTravelExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
      <div>
          <Link to="/">Home page</Link>
          <MdOutlineTravelExplore size="80"/>
              Not Found Page
          <MdOutlineSentimentDissatisfied size="80"/>
      </div>
  )
}
