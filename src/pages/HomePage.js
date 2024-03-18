import React from 'react';
import './HomePage.css'; // Importez le fichier CSS ici

const HomePage = ({ onSelectPlatform }) => {
    const platforms = ['Netflix', 'Disney+', 'Prime Video', 'OCS']; // Liste des plateformes

    const handlePlatformSelect = (platform) => {
        onSelectPlatform(platform); // Appeler la fonction onSelectPlatform lorsque l'utilisateur sélectionne une plateforme
    };

    return (
        <div className="HomePage"> {/* Ajoutez la classe CSS ici */}
            <h1>Choisissez votre plateforme de streaming :</h1>
            <div className="platforms">
                {platforms.map(platform => (
                    <button key={platform} onClick={() => handlePlatformSelect(platform)}>{platform}</button>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
