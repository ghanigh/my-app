import React, { useState } from 'react'; // Import de la bibliothèque React et du hook useState
import HomePage from './pages/HomePage'; // Import du composant HomePage depuis le fichier HomePage.js
import CombienDeTemps from './pages/CombienDeTemps'; // Import du composant CombienDeTemps depuis le fichier CombienDeTemps.js
import Humeur from './pages/Humeur'; // Import du composant Humeur depuis le fichier Humeur.js

import './App.css'; // Import du fichier de styles CSS

function App() { // Déclaration du composant App

  const [currentPage, setCurrentPage] = useState('home'); // Déclaration de l'état currentPage avec comme valeur par défaut 'home'
  const [selectedPlatform, setSelectedPlatform] = useState(''); // Déclaration de l'état selectedPlatform avec comme valeur par défaut une chaîne vide

  const handlePlatformSelect = (platform) => { // Fonction appelée lorsqu'une plateforme est sélectionnée
    setSelectedPlatform(platform); // Mise à jour de l'état selectedPlatform avec la plateforme sélectionnée
    setCurrentPage('duration'); // Mise à jour de l'état currentPage à 'duration'
  };

  const handlePreferencesSubmit = (mood, genre) => { // Fonction appelée lorsqu'une préférence est soumise
    setSelectedPlatform(''); // Réinitialisation de l'état selectedPlatform avec une chaîne vide
    setCurrentPage('duration'); // Mise à jour de l'état currentPage à 'duration'
  };

  const handleDurationSelect = (duration) => { // Fonction appelée lorsqu'une durée est sélectionnée
    setCurrentPage('mood'); // Mise à jour de l'état currentPage à 'mood', redirigeant l'utilisateur vers la page Humeur
  };

  const handleBackButtonClick = () => { // Fonction appelée lorsqu'on clique sur le bouton Retour
    setCurrentPage('home'); // Mise à jour de l'état currentPage à 'home'
  };

  return (
    <div className="App"> {/* Début du conteneur principal du composant App */}
      {currentPage === 'home' && <HomePage onSelectPlatform={handlePlatformSelect} />} {/* Affichage du composant HomePage si currentPage est 'home', en passant handlePlatformSelect en tant que prop onSelectPlatform */}
      {currentPage === 'duration' && <CombienDeTemps onDurationSelect={handleDurationSelect} onBackButtonClick={handleBackButtonClick} />} {/* Affichage du composant CombienDeTemps si currentPage est 'duration', en passant handleDurationSelect et handleBackButtonClick en tant que props */}
      {currentPage === 'mood' && <Humeur />} {/* Affichage du composant Humeur si currentPage est 'mood' */}
    </div> // Fin du conteneur principal du composant App
  );
}

export default App; // Exportation du composant App pour une utilisation dans d'autres fichiers
