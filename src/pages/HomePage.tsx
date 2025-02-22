import React from 'react';
import MovieList from '../components/MovieList';
import TheaterList from '../components/TheaterList';
import { Theater } from '../types';

const HomePage: React.FC = () => {
  const handleSelectTheater = (theater: Theater) => {
    console.log('Selected theater:', theater);
    // Aquí puedes agregar la lógica para manejar la selección del teatro
  };

  return (
    <div>
      <h1>Welcome to Movie Reservation App</h1>
      <MovieList />
      <TheaterList onSelect={handleSelectTheater} />
    </div>
  );
};

export default HomePage;