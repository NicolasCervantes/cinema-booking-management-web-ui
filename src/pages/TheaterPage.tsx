import React from 'react';
import TheaterList from '../components/TheaterList';
import { Theater } from '../types';

const TheaterPage: React.FC = () => {
  const handleSelectTheater = (theater: Theater) => {
    console.log('Selected theater:', theater);
    // Aquí puedes agregar la lógica para manejar la selección del teatro
  };

  return (
    <div>
      <h1>Theaters</h1>
      <TheaterList onSelect={handleSelectTheater} />
    </div>
  );
};

export default TheaterPage;