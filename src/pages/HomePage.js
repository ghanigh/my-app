import React from 'react'; // Import de la bibliothèque React

import './HomePage.css'; // Import du fichier de styles CSS
import logo from './showfinder_logo.png'; // Import de l'image du logo

const HomePage = ({ onSelectPlatform }) => { // Déclaration du composant HomePage avec une fonction onSelectPlatform comme propriété

    const platforms = ['Netflix', 'Disney+', 'Prime Video', 'OCS']; // Liste des plateformes de streaming disponibles

    const handlePlatformSelect = (platform) => { // Fonction appelée lorsqu'une plateforme est sélectionnée
        onSelectPlatform(platform); // Appel de la fonction onSelectPlatform avec la plateforme sélectionnée comme argument
    };

    return (
        <div className="HomePage"> {/* Début du conteneur principal du composant HomePage */}
            <img src={logo} alt="Logo" /> {/* Affichage du logo */}
            <h1>Choisissez votre plateforme de streaming :</h1> {/* Titre de la page */}
            <div className="platforms"> {/* Début du conteneur des boutons de plateforme */}
                {platforms.map(platform => ( // Boucle pour créer des boutons pour chaque plateforme
                    <button key={platform} onClick={() => handlePlatformSelect(platform)}>{platform}</button> // Bouton pour sélectionner une plateforme, avec la fonction handlePlatformSelect comme gestionnaire d'événements onClick
                ))}
            </div> {/* Fin du conteneur des boutons de plateforme */}
        </div> // Fin du conteneur principal du composant HomePage
    );
};

export default HomePage; // Exportation du composant HomePage pour une utilisation dans d'autres fichiers
