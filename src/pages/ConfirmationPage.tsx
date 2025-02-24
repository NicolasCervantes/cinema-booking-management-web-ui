import React from 'react';
import './ConfirmationPage.css'; // Importar el archivo CSS

const ConfirmationPage: React.FC = () => {
  return (
    <div className="confirmation-box">
      <h3>Reservation complete!</h3>
      <p>Please check your email for details.</p>
    </div>
  );
};

export default ConfirmationPage;