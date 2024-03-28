import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './showfinder_logo.png';
import './Humeur.css';

const Humeur = ({ onMoodSelect }) => {
  const navigate = useNavigate();

  const handleMoodSelect = (mood) => {
    onMoodSelect(mood);
    navigate('/');
  };

  const handleBackButtonClick = () => {
    navigate('/combien-de-temps'); // Modifier la route en fonction de votre configuration
  };

  return (
    <div className="Humeur">
      <img src={logo} alt="Logo" />
      <h1>De quelle humeur êtes-vous ?</h1>
      <div>
        <button onClick={() => handleMoodSelect("Joyeux")}>Joyeux</button>
        <button onClick={() => handleMoodSelect("Triste")}>Triste</button>
        <button onClick={() => handleMoodSelect("En Colère")}>En Colère</button>
        <button onClick={() => handleMoodSelect("Surpris")}>Surpris</button>
        <button onClick={() => handleMoodSelect("Peur")}>Peur</button>
      </div>
      <button className="back-button" onClick={handleBackButtonClick}>Retour</button>
    </div>
  );
};

export default Humeur;
