import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSeats } from '../services/api';
import { Seat } from '../types';

const SeatSelectionPage: React.FC = () => {
  const { showtimeId } = useParams<{ showtimeId: string }>();
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (showtimeId) {
      fetchSeats(showtimeId)
        .then(data => setSeats(data))
        .catch(error => console.error('Error fetching seats:', error));
    }
  }, [showtimeId]);

  const handleSeatClick = (seatId: number) => {
    setSelectedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter(id => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const handleProceedToReservation = () => {
    navigate(`/reservation/${showtimeId}`, { state: { selectedSeats } });
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div className="seat-map">
        {seats.map(seat => (
          <button
            key={seat.id}
            className={selectedSeats.includes(seat.id) ? 'selected' : ''}
            onClick={() => handleSeatClick(seat.id)}
            disabled={!seat.isAvailable}
          >
            {seat.number}
          </button>
        ))}
      </div>
      <button onClick={handleProceedToReservation}>Proceed to Reservation</button>
    </div>
  );
};

export default SeatSelectionPage;