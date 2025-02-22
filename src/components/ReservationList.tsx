import React, { useEffect, useState } from 'react';
import { fetchReservations } from '../services/api';
import { Reservation } from '../types';

const ReservationList: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const userId = 'someUserId'; // Replace with actual user ID logic

  useEffect(() => {
    fetchReservations(userId)
      .then(data => setReservations(data))
      .catch(error => console.error('Error fetching reservations:', error));
  }, []);

  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations.map(reservation => (
          <li key={reservation.id}>
            {reservation.name} - {reservation.movie} - {reservation.theater} - {reservation.seats.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;