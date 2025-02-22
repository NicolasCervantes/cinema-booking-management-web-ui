import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import ReservationForm from '../components/ReservationForm';
import { createReservation, fetchSeatMap } from '../services/api';
import { Seat } from '../types';

const SeatSelectionPage: React.FC = () => {
  const { movieId, theaterId, showTime } = useParams<{ movieId: string; theaterId: string; showTime: string }>();
  const [seatMap, setSeatMap] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSeatMap = async () => {
      if (!movieId || !theaterId) {
        setError('Invalid movie or theater ID');
        setLoading(false);
        return;
      }
      try {
        const data = await fetchSeatMap(movieId, theaterId);
        setSeatMap(data);
      } catch (err) {
        setError('Failed to load seat map');
      } finally {
        setLoading(false);
      }
    };

    loadSeatMap();
  }, [movieId, theaterId, showTime]);

  const handleReserveSeats = async (selectedSeats: string[]) => {
    try {
      await createReservation({ movieId, theaterId, showTime, seats: selectedSeats });
      alert('Reservation successful!');
    } catch (err) {
      alert('Failed to reserve seats');
    }
  };

  if (loading) return <div>Loading seat map...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Select Seats</h1>
      <SeatMap seatMap={seatMap} onSeatSelect={(seatId) => setSeatMap(seatMap.map(seat => seat.id === seatId ? { ...seat, isAvailable: !seat.isAvailable } : seat))} />
      <ReservationForm onReserve={handleReserveSeats} />
    </div>
  );
};

export default SeatSelectionPage;