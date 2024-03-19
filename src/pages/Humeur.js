import React from 'react'; // Import de la bibliothèque React
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate depuis react-router-dom
import './Humeur.css'; // Import du fichier de styles CSS

const Humeur = ({ onMoodSelect }) => { // Déclaration du composant Humeur, prenant une prop onMoodSelect

    const navigate = useNavigate(); // Initialisation du hook useNavigate pour la navigation

    const handleMoodSelect = (mood) => { // Fonction appelée lorsqu'une humeur est sélectionnée
        onMoodSelect(mood); // Appel de la fonction onMoodSelect avec l'humeur sélectionnée comme argument
        navigate('/'); // Redirection vers la page d'accueil
    };

    const handleBackButtonClick = () => { // Fonction appelée lorsqu'on clique sur le bouton Retour
        navigate(-1); // Revenir en arrière dans l'historique des pages
    };

    return (
        <div className="Humeur"> {/* Début du conteneur principal du composant Humeur */}
            <h1>De quelle humeur êtes-vous ?</h1> {/* Titre */}
            <div> {/* Début de la liste de boutons pour les différentes humeurs */}
                <button onClick={() => handleMoodSelect("Joyeux")}>Joyeux</button> {/* Bouton pour l'humeur Joyeux */}
                <button onClick={() => handleMoodSelect("Triste")}>Triste</button> {/* Bouton pour l'humeur Triste */}
                <button onClick={() => handleMoodSelect("En Colère")}>En Colère</button> {/* Bouton pour l'humeur En Colère */}
                <button onClick={() => handleMoodSelect("Surpris")}>Surpris</button> {/* Bouton pour l'humeur Surpris */}
                <button onClick={() => handleMoodSelect("Peur")}>Peur</button> {/* Bouton pour l'humeur Peur */}
            </div> {/* Fin de la liste de boutons */}
            <button className="back-button" onClick={handleBackButtonClick}>Retour</button> {/* Bouton Retour */}
        </div> // Fin du conteneur principal du composant Humeur
    );
};

export default Humeur; // Exportation du composant Humeur pour une utilisation dans d'autres fichiers
