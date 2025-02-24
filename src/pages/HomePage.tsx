import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import TheaterList from '../components/TheaterList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Movie Reservation App</h1>
      <Link to="/movies">
        <button>Buy Tickets</button>
      </Link>
    </div>
  );
};

export default HomePage;