import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CombienDeTemps from './pages/CombienDeTemps';
import Humeur from './pages/Humeur'; // Importez la page Humeur

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setCurrentPage('duration');
  };

  const handlePreferencesSubmit = (mood, genre) => {
    setSelectedPlatform('');
    setCurrentPage('duration');
  };

  const handleDurationSelect = (duration) => {
    setCurrentPage('mood'); // Rediriger l'utilisateur vers la page Humeur
  };

  const handleBackButtonClick = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onSelectPlatform={handlePlatformSelect} />}
      {currentPage === 'duration' && <CombienDeTemps onDurationSelect={handleDurationSelect} onBackButtonClick={handleBackButtonClick} />}
      {currentPage === 'mood' && <Humeur />} {/* Afficher la page Humeur lorsque la page mood est active */}
    </div>
  );
}

export default App;
