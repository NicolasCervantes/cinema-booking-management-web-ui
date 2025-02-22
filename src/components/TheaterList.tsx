import React, { useEffect, useState } from 'react';
import { fetchTheaters } from '../services/api';
import { Theater } from '../types';

interface TheaterListProps {
  onSelect: (theater: Theater) => void;
}

const TheaterList: React.FC<TheaterListProps> = ({ onSelect }) => {
  const [theaters, setTheaters] = useState<Theater[]>([]);

  useEffect(() => {
    fetchTheaters()
      .then(data => setTheaters(data))
      .catch(error => console.error('Error fetching theaters:', error));
  }, []);

  return (
    <div>
      <h2>Theaters</h2>
      <ul>
        {theaters.map(theater => (
          <li key={theater.id} onClick={() => onSelect(theater)}>
            {theater.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheaterList;