import React from 'react'; // Import de la bibliothèque React
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate pour la navigation
import './CombienDeTemps.css'; // Import du fichier de styles CSS

const CombienDeTemps = ({ onDurationSelect, onBackButtonClick }) => { // Déclaration du composant CombienDeTemps avec deux fonctions comme propriétés

    const navigate = useNavigate(); // Initialisation du hook useNavigate pour la navigation

    const handleDurationSelect = (duration) => { // Fonction appelée lorsqu'une durée est sélectionnée
        onDurationSelect(duration); // Appel de la fonction onDurationSelect avec la durée sélectionnée comme argument
        navigate('/humeur'); // Redirection vers la page Humeur
    };

    const handleBackButtonClick = () => { // Fonction appelée lorsqu'on clique sur le bouton Retour
        onBackButtonClick(); // Appel de la fonction onBackButtonClick
        navigate('/'); // Redirection vers la page d'accueil
    };

    return (
        <div className="CombienDeTemps"> {/* Début du conteneur principal du composant CombienDeTemps */}
            <h1>Combien de temps avez-vous devant vous ?</h1> {/* Titre de la page */}
            <div> {/* Début du conteneur des boutons de durée */}
                <button onClick={() => handleDurationSelect(1)}>30 minutes</button> {/* Bouton pour sélectionner 30 minutes, avec la fonction handleDurationSelect comme gestionnaire d'événements onClick */}
                <button onClick={() => handleDurationSelect(2)}>1 heure</button> {/* Bouton pour sélectionner 1 heure, avec la fonction handleDurationSelect comme gestionnaire d'événements onClick */}
                <button onClick={() => handleDurationSelect(3)}>2 heures</button> {/* Bouton pour sélectionner 2 heures, avec la fonction handleDurationSelect comme gestionnaire d'événements onClick */}
            </div> {/* Fin du conteneur des boutons de durée */}
            <button className="back-button" onClick={handleBackButtonClick}>Retour</button> {/* Bouton Retour, avec la fonction handleBackButtonClick comme gestionnaire d'événements onClick */}
        </div> // Fin du conteneur principal du composant CombienDeTemps
    );
};

export default CombienDeTemps; // Exportation du composant CombienDeTemps pour une utilisation dans d'autres fichiers
