import React from 'react';
import { Seat } from '../types';

interface SeatMapProps {
  seatMap: Seat[];
  onSeatSelect: (seatId: string) => void;
}

const SeatMap: React.FC<SeatMapProps> = ({ seatMap, onSeatSelect }) => {
  return (
    <div className="seat-map">
      {seatMap.map(seat => (
        <div
          key={seat.id}
          className={`seat ${seat.isAvailable ? 'available' : 'unavailable'}`}
          onClick={() => seat.isAvailable && onSeatSelect(seat.id)}
        >
          {seat.number}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;