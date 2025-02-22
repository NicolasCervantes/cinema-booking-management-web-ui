import React from 'react';
import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';

const ReservationPage: React.FC = () => {
  return (
    <div>
      <h1>Reservations</h1>
      <ReservationForm onReserve={(selectedSeats) => console.log('Reserved seats:', selectedSeats)} />
      <ReservationList />
    </div>
  );
};

export default ReservationPage;