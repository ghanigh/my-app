import React from 'react';
import { useNavigate } from 'react-router-dom';

const CombienDeTemps = ({ onDurationSelect, onBackButtonClick }) => {
  const navigate = useNavigate();

  const handleDurationSelect = (duration) => {
    onDurationSelect(duration);
    navigate('/');
  };

  const handleBackButtonClick = () => {
    onBackButtonClick();
    navigate('/');
  };

  return (
    <div>
      <h1>Combien de temps ?</h1>
      <div>
        <button onClick={() => handleDurationSelect(1)}>1 heure</button>
        <button onClick={() => handleDurationSelect(2)}>2 heures</button>
        <button onClick={() => handleDurationSelect(3)}>3 heures</button>
      </div>
      <button onClick={handleBackButtonClick}>Retour</button>
    </div>
  );
};

export default CombienDeTemps;