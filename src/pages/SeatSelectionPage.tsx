import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchSeats } from '../services/api';
import { Seat } from '../types';
import { FaChair } from 'react-icons/fa'; // Importar el ícono de silla
import './SeatSelectionPage.css'; // Importar el archivo CSS

const SeatSelectionPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const showtimeId = params.get('showtimeId');
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  useEffect(() => {
    if (showtimeId) {
      fetchSeats(showtimeId)
        .then(data => setSeats(data))
        .catch(error => console.error('Error fetching seats:', error));
    }
  }, [showtimeId]);

  const handleSeatSelect = (seatId: string) => {
    setSelectedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter(id => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const handleNext = () => {
    navigate(`/reservations/create?showtimeId=${showtimeId}&seats=${selectedSeats.join(',')}`);
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div className="seats-container">
        {seats.map(seat => (
          <div key={seat.id} className="seat-icon-container" onClick={() => handleSeatSelect(seat.id.toString())}>
            <FaChair className={`seat-icon ${selectedSeats.includes(seat.id.toString()) ? 'selected' : ''}`} />
            <span className="seat-number">{seat.number}</span>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SeatSelectionPage;