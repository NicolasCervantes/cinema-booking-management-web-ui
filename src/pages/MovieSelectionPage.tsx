import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../services/api';
import { Movie } from '../types';

const MovieSelectionPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies()
      .then(data => {
        console.log('Fetched movies:', data); // Agregar depuración
        setMovies(data);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h2>Select a Movie</h2>
      <ul>
        {movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/theaters/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))
        ) : (
          <li>No movies available</li>
        )}
      </ul>
    </div>
  );
};

export default MovieSelectionPage;