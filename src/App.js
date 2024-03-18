import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CombienDeTemps from './pages/CombienDeTemps';
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
    // Vous pouvez ajouter ici la logique pour gérer la durée sélectionnée
    console.log('Durée sélectionnée:', duration);
  };

  const handleBackButtonClick = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onSelectPlatform={handlePlatformSelect} />}
      {currentPage === 'duration' && <CombienDeTemps onDurationSelect={handleDurationSelect} onBackButtonClick={handleBackButtonClick} />}
    </div>
  );
}

export default App;