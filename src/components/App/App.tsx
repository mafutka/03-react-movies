import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import type { Movie } from '../../types/movie';
import { fetchMovies } from '../../services/movieService';
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const results = await fetchMovies(query);

      if (results.length === 0) {
        toast.error('No movies found for your request.');
        setMovies([]);
        return;
      }

      setMovies(results);
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}
