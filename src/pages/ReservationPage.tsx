import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeReservation } from '../services/reservationService';
import { FaChair } from 'react-icons/fa'; // Importar el ícono de silla
import './ReservationPage.css'; // Importar el archivo CSS

const ReservationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const showtimeId = params.get('showtimeId');
  const seats = params.get('seats')?.split(',').map(Number) || [];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reservationComplete, setReservationComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await makeReservation({ name, email, showtimeId: Number(showtimeId), seatIds: seats });
      navigate('/confirmation'); // Redirigir a una página de confirmación
    } catch (error) {
      console.error('Error creating reservation:', error);
      alert('Failed to create reservation');
    }
  };

  return (
    <div>
      <h2>Create a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <h3>Selected Seats</h3>
          <div className="seats-container">
            {seats.map(seat => (
              <div key={seat} className="seat-icon-container">
                <FaChair className="seat-icon" />
                <span className="seat-number">{seat}</span>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default ReservationPage;