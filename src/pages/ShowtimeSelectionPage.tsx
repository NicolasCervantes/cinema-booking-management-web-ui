import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowtimes } from '../services/api';
import { Showtime } from '../types';

const ShowtimeSelectionPage: React.FC = () => {
  const { movieId, theaterId } = useParams<{ movieId: string; theaterId: string }>();
  const [showtimes, setShowtimes] = useState<Showtime[]>([]);

  useEffect(() => {
    if (movieId && theaterId) {
      fetchShowtimes(movieId, theaterId)
        .then(data => setShowtimes(data))
        .catch(error => console.error('Error fetching showtimes:', error));
    }
  }, [movieId, theaterId]);

  return (
    <div>
      <h2>Select a Showtime</h2>
      <ul>
        {showtimes.map(showtime => (
          <li key={showtime.id}>
            {new Date(showtime.startTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowtimeSelectionPage;