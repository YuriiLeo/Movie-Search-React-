import axios from 'axios';
import PropTypes from "prop-types";

const KEY = '2bec22f10b981066f1b82ccd0874c542';
const URL = 'https://api.themoviedb.org/3';
const Tranding = '/trending/movie/day';
const Search = '/search/movie?';
const SearchId = '/movie/';
const Credits = '/credits';
const Reviews = '/reviews';

const instance = axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
    page: 1,
  },
});

export const getMovieTranding = async () => {
  const { data } = await instance.get(`${Tranding}`);

  return data;
};

export const getMovieById = async (id) => {
    const { data } = await instance.get(`${SearchId}${id}?`);

  return data;
}

export const getSearchMovie = async (query, page ) => {
  const { data } = await instance.get(`${Search}?`, {
    params: {
        page,
        query,
      }
    });

  return data;
}

export const getMovieCast = async (id) => {
    const { data } = await instance.get(`${SearchId}${id}${Credits}?`);

  return data;
}

export const getMovieReviews = async (id) => {
    const { data } = await instance.get(`${SearchId}${id}${Reviews}?`);

  return data;
}


getMovieById.PropTypes = {
  id: PropTypes.number
}


getSearchMovie.PropTypes = {
  page: PropTypes.number,
  query: PropTypes.string.isRequired
}

getMovieCast.PropTypes = {
  id: PropTypes.number
}

getMovieReviews.PropTypes = {
  id: PropTypes.number
}