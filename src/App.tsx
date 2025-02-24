import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieSelectionPage from './pages/MovieSelectionPage';
import TheaterSelectionPage from './pages/TheaterSelectionPage';
import ShowtimeSelectionPage from './pages/ShowtimeSelectionPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import ReservationPage from './pages/ReservationPage';
import CongratsPage from './pages/CongratsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSelectionPage />} />
        <Route path="/theaters/:movieId" element={<TheaterSelectionPage />} />
        <Route path="/showtimes/:movieId/:theaterId" element={<ShowtimeSelectionPage />} />
        <Route path="/seats/:showtimeId" element={<SeatSelectionPage />} />
        <Route path="/reservation/:showtimeId" element={<ReservationPage />} />
        <Route path="/congrats" element={<CongratsPage />} />
      </Routes>
    </Router>
  );
};

export default App;