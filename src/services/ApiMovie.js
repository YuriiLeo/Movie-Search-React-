import axios from 'axios';

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
  console.log("id",data);

  return data;
}

export const getSearchMovie = async (page, query='batman') => {
  const { data } = await instance.get(`${Search}?`, {
      params: {
        query,
      }
    });
  console.log("id",data);

  return data;
}

export const getMovieCast = async (id) => {
    const { data } = await instance.get(`${SearchId}${id}${Credits}?`);
  console.log("id",data);

  return data;
}

export const getMovieReviews = async (id) => {
    const { data } = await instance.get(`${SearchId}${id}${Reviews}?`);
  console.log("id",data);

  return data;
}

// https://api.themoviedb.org/3/movie/414906/credits?api_key=2bec22f10b981066f1b82ccd0874c542&

// https://api.themoviedb.org/3/search/movie?api_key=2bec22f10b981066f1b82ccd0874c542&query=batman