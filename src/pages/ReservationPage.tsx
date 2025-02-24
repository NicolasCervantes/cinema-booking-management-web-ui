import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';

const ReservationPage: React.FC = () => {
  const { showtimeId } = useParams<{ showtimeId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const selectedSeats = location.state?.selectedSeats || [];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para guardar la reserva en la base de datos
    navigate('/congrats');
  };

  return (
    <div>
      <h1>Reservations</h1>
      <ReservationForm onReserve={(selectedSeats) => console.log('Reserved seats:', selectedSeats)} />
      <ReservationList />
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <div>
          <h3>Selected Seats</h3>
          <ul>
            {selectedSeats.map((seatId: number) => (
              <li key={seatId}>{seatId}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationPage;