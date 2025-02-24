import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReservationsByShowtime } from '../services/api';

interface ReservationReport {
  reservationId: number;
  name: string;
  email: string;
  createdAt: string;
  seatNumber: number;
}

const ReservationReportPage: React.FC = () => {
  const { showtimeId } = useParams<{ showtimeId: string }>();
  const [reservations, setReservations] = useState<ReservationReport[]>([]);

  useEffect(() => {
    if (showtimeId) {
      fetchReservationsByShowtime(showtimeId)
        .then(data => {
          const transformedData = data.map((reservation: any) => ({
            reservationId: reservation.id,
            name: reservation.name,
            email: reservation.email,
            createdAt: reservation.createdAt,
            seatNumber: reservation.seatId,
          }));
          setReservations(transformedData);
        })
        .catch(error => console.error('Error fetching reservations:', error));
    }
  }, [showtimeId]);

  return (
    <div>
      <h2>Reservation Report</h2>
      <ul>
        {reservations.length === 0 ? (
          <li>No reservations found for this showtime.</li>
        ) : (
          reservations.map(reservation => (
            <li key={reservation.reservationId}>
              {reservation.name} - {reservation.email} - {new Date(reservation.createdAt).toLocaleString()} - Seat: {reservation.seatNumber}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReservationReportPage;