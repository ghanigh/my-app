import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CombienDeTemps = () => {
  const history = useHistory();

  const handleDurationSelect = () => {
    // Mettre à jour l'état ou exécuter toute logique supplémentaire si nécessaire

    // Rediriger vers la page PreferencesPage
    history.push('/preferences');
  };

  return (
    <div>
      <h1>Choisissez la durée de votre session :</h1>
      <button onClick={handleDurationSelect}>30 minutes</button>
      <button onClick={handleDurationSelect}>45 minutes</button>
      <button onClick={handleDurationSelect}>+1h30</button>
      <button onClick={() => history.push('/')}>Retour</button>
    </div>
  );
};

export default CombienDeTemps;
