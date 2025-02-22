import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import TheaterPage from './pages/TheaterPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import ReservationPage from './pages/ReservationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/theaters" element={<TheaterPage />} />
        <Route path="/seats/:movieId/:theaterId/:showTime" element={<SeatSelectionPage />} />
        <Route path="/reservations" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
};

export default App;