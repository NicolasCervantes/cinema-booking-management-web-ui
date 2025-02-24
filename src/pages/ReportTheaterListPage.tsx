import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTheatersByMovie } from '../services/api';
import { Theater } from '../types';

const ReportTheaterListPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [theaters, setTheaters] = useState<Theater[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (movieId) {
      fetchTheatersByMovie(movieId)
        .then(data => setTheaters(data))
        .catch(error => console.error('Error fetching theaters:', error));
    }
  }, [movieId]);

  const handleTheaterClick = (theaterId: number) => {
    navigate(`/report/showtimes/${movieId}/${theaterId}`);
  };

  return (
    <div>
      <h2>Theaters</h2>
      <ul>
        {theaters.map(theater => (
          <li key={theater.id} onClick={() => handleTheaterClick(theater.id)}>
            {theater.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportTheaterListPage;