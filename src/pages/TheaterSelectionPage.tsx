import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchTheaters } from '../services/api';
import { Theater } from '../types';

const TheaterSelectionPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [theaters, setTheaters] = useState<Theater[]>([]);

  useEffect(() => {
    fetchTheaters()
      .then(data => setTheaters(data))
      .catch(error => console.error('Error fetching theaters:', error));
  }, []);

  return (
    <div>
      <h2>Select a Theater</h2>
      <ul>
        {theaters.map(theater => (
          <li key={theater.id}>
            <Link to={`/showtimes/${movieId}/${theater.id}`}>
              {theater.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheaterSelectionPage;