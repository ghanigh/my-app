import React from 'react';

const HomePage = ({ onSelectPlatform }) => {
    const platforms = ['Netflix', 'Disney+', 'Prime Video', 'OCS']; // Liste des plateformes

    const handlePlatformSelect = (platform) => {
        onSelectPlatform(platform); // Appeler la fonction onSelectPlatform lorsque l'utilisateur sélectionne une plateforme
    };

    return (
        <div>
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
