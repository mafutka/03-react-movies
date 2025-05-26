import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data.results;
};