import React from 'react';

const PreferencesPage = ({ onMoodSelect, onBackButtonClick }) => {
    const handleMoodSelect = (mood) => {
        onMoodSelect(mood); // Appeler la fonction onMoodSelect lorsque l'utilisateur sélectionne une humeur
    };

    return (
        <div>
            <h1>Comment vous sentez-vous aujourd'hui ?</h1>
            <div>
                <button onClick={() => handleMoodSelect('Joyeux')}>Joyeux</button>
                <button onClick={() => handleMoodSelect('Colère')}>Colère</button>
                <button onClick={() => handleMoodSelect('Triste')}>Triste</button>
                <button onClick={() => handleMoodSelect('Peur')}>Peur</button>
                <button onClick={() => handleMoodSelect('Surpris')}>Surpris</button>
            </div>
            <button onClick={onBackButtonClick}>Retour</button>
        </div>
    );
};

export default PreferencesPage;
