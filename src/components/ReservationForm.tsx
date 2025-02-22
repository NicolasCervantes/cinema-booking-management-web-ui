import React, { useState } from 'react';
import { createReservation } from '../services/api';

interface ReservationFormProps {
  onReserve: (selectedSeats: string[]) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onReserve }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatSelection = (seat: string) => {
    setSelectedSeats((prev) => 
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createReservation({ name, email, seats: selectedSeats });
      onReserve(selectedSeats);
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <h3>Select Seats</h3>
        {['A1', 'A2', 'A3'].map(seat => (
          <button 
            type="button" 
            key={seat} 
            onClick={() => handleSeatSelection(seat)} 
            style={{ backgroundColor: selectedSeats.includes(seat) ? 'green' : 'gray' }}
          >
            {seat}
          </button>
        ))}
      </div>
      <div>
        <label>Seats:</label>
        <input type="text" value={selectedSeats.join(', ')} readOnly />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;