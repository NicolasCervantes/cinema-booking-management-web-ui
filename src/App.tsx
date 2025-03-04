import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieSelectionPage from './pages/MovieSelectionPage';
import TheaterSelectionPage from './pages/TheaterSelectionPage';
import ShowtimeSelectionPage from './pages/ShowtimeSelectionPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import ReservationPage from './pages/ReservationPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ReservationReportPage from './pages/ReservationReportPage';
import ReportMovieListPage from './pages/ReportMovieListPage';
import ReportTheaterListPage from './pages/ReportTheaterListPage';
import ReportShowtimeListPage from './pages/ReportShowtimeListPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSelectionPage />} />
        <Route path="/theaters/:movieId" element={<TheaterSelectionPage />} />
        <Route path="/showtimes/:movieId/:theaterId" element={<ShowtimeSelectionPage />} />
        <Route path="/seats" element={<SeatSelectionPage />} />
        <Route path="/reservations/create" element={<ReservationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/report" element={<ReportMovieListPage />} />
        <Route path="/report/theaters/:movieId" element={<ReportTheaterListPage />} />
        <Route path="/report/showtimes/:movieId/:theaterId" element={<ReportShowtimeListPage />} />
        <Route path="/report/by-showtime/:showtimeId" element={<ReservationReportPage />} />
      </Routes>
    </Router>
  );
};

export default App;