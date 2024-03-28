import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './showfinder_logo.png'; // Import de l'image du logo
import './CombienDeTemps.css';

const CombienDeTemps = ({ onDurationSelect, onBackButtonClick }) => {
    const navigate = useNavigate();

    const handleDurationSelect = (duration) => {
        onDurationSelect(duration);
        navigate('/humeur');
    };

    const handleBackButtonClick = () => {
        onBackButtonClick();
        navigate('/');
    };

    return (
        <div className="CombienDeTemps">
            <img src={logo} alt="Logo" /> {/* Affichage du logo */}
            <h1>Combien de temps avez-vous devant vous ?</h1>
            <div>
                <button onClick={() => handleDurationSelect(1)}>30 minutes</button>
                <button onClick={() => handleDurationSelect(2)}>1 heure</button>
                <button onClick={() => handleDurationSelect(3)}>2 heures</button>
            </div>
            <button className="back-button" onClick={handleBackButtonClick}>Retour</button>
        </div>
    );
};

export default CombienDeTemps;
