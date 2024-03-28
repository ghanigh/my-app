import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CombienDeTemps from './pages/CombienDeTemps';
import Humeur from './pages/Humeur';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setCurrentPage('duration');
  };

  const handleDurationSelect = (duration) => {
    setCurrentPage('mood');
  };

  const handleBackButtonClick = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onSelectPlatform={handlePlatformSelect} />}
      {currentPage === 'duration' && <CombienDeTemps onDurationSelect={handleDurationSelect} onBackButtonClick={handleBackButtonClick} />}
      {currentPage === 'mood' && <Humeur onMoodSelect={() => {}} />} {/* Ajout temporaire pour éviter l'erreur */}
    </div>
  );
}

export default App;
