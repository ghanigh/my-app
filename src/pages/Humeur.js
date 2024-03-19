import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Humeur.css'; // Importez le fichier CSS ici

const Humeur = ({ onMoodSelect }) => {
    const navigate = useNavigate();

    const handleMoodSelect = (mood) => {
        onMoodSelect(mood);
        navigate('/'); // Redirection vers la page d'accueil
    };

    const handleBackButtonClick = () => {
        navigate('/combien-de-temps'); // Redirection vers la page CombienDeTemps.js
    };

    return (
        <div className="Humeur">
            <h1>Quelle est votre humeur ?</h1>
            <div>
                <button onClick={() => handleMoodSelect("Joyeux")}>Joyeux</button>
                <button onClick={() => handleMoodSelect("Triste")}>Triste</button>
                <button onClick={() => handleMoodSelect("En Colère")}>En Colère</button>
                <button onClick={() => handleMoodSelect("Surpris")}>Surpris</button>
                <button onClick={() => handleMoodSelect("Peur")}>Peur</button>
            </div>
            <button className="back-button" onClick={handleBackButtonClick}>Retour</button>
        </div>
    );
};

export default Humeur;
