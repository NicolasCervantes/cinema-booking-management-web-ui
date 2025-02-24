import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchShowtimesByTheaterAndMovie } from '../services/api';
import { Showtime } from '../types';

const ReportShowtimeListPage: React.FC = () => {
  const { movieId, theaterId } = useParams<{ movieId: string; theaterId: string }>();
  const [showtimes, setShowtimes] = useState<Showtime[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (movieId && theaterId) {
      fetchShowtimesByTheaterAndMovie(theaterId, movieId)
        .then(data => setShowtimes(data))
        .catch(error => console.error('Error fetching showtimes:', error));
    }
  }, [movieId, theaterId]);

  const handleShowtimeClick = (showtimeId: number) => {
    navigate(`/report/by-showtime/${showtimeId}`);
  };

  return (
    <div>
      <h2>Showtimes</h2>
      <ul>
        {showtimes.map(showtime => (
          <li key={showtime.id} onClick={() => handleShowtimeClick(showtime.id)}>
            {new Date(showtime.startTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportShowtimeListPage;