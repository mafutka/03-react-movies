import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query,
      language: 'en-US',
      include_adult: false,
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`, 
      Accept: 'application/json',
    },
  });

  return response.data.results;
};