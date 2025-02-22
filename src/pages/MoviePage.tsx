import React from 'react';
import MovieList from '../components/MovieList';

const MoviePage: React.FC = () => {
  return (
    <div>
      <h1>Movies</h1>
      <MovieList />
    </div>
  );
};

export default MoviePage;