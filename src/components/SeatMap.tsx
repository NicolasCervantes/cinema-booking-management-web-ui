import React from 'react';
import { Seat } from '../types';

interface SeatMapProps {
  seats: Seat[];
  onSeatSelect: (seatId: string) => void;
}

const SeatMap: React.FC<SeatMapProps> = ({ seats, onSeatSelect }) => {
  return (
    <div className="seat-map">
      {seats.map(seat => (
        <div
          key={seat.id}
          className={`seat ${seat.isAvailable ? 'available' : 'unavailable'}`}
          onClick={() => seat.isAvailable && onSeatSelect(seat.id.toString())}
        >
          {seat.number}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;