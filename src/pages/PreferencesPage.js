import React from 'react'; // Import de la bibliothèque React

const PreferencesPage = ({ onMoodSelect, onBackButtonClick }) => { // Déclaration du composant PreferencesPage, prenant deux props : onMoodSelect et onBackButtonClick

    const handleMoodSelect = (mood) => { // Fonction appelée lorsqu'une humeur est sélectionnée
        onMoodSelect(mood); // Appeler la fonction onMoodSelect avec l'humeur sélectionnée comme argument
    };

    return (
        <div> {/* Début du conteneur principal du composant PreferencesPage */}
            <h1>Comment vous sentez-vous aujourd'hui ?</h1> {/* Titre */}
            <div> {/* Début de la liste de boutons pour les différentes humeurs */}
                <button onClick={() => handleMoodSelect('Joyeux')}>Joyeux</button> {/* Bouton pour l'humeur Joyeux */}
                <button onClick={() => handleMoodSelect('Colère')}>Colère</button> {/* Bouton pour l'humeur Colère */}
                <button onClick={() => handleMoodSelect('Triste')}>Triste</button> {/* Bouton pour l'humeur Triste */}
                <button onClick={() => handleMoodSelect('Peur')}>Peur</button> {/* Bouton pour l'humeur Peur */}
                <button onClick={() => handleMoodSelect('Surpris')}>Surpris</button> {/* Bouton pour l'humeur Surpris */}
            </div> {/* Fin de la liste de boutons */}
            <button onClick={onBackButtonClick}>Retour</button> {/* Bouton Retour */}
        </div> // Fin du conteneur principal du composant PreferencesPage
    );
};

export default PreferencesPage; // Exportation du composant PreferencesPage pour une utilisation dans d'autres fichiers
