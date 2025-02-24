import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleViewReport = () => {
    navigate('/report');
  };

  return (
    <div>
      <h1>Welcome to the Movie Reservation System</h1>
      <button onClick={() => navigate('/movies')}>Buy Tickets</button>
      <button onClick={handleViewReport}>View Reservation Report</button>
    </div>
  );
};

export default HomePage;