import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import { Movie } from '../types';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies()
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;