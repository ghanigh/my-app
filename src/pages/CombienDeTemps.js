import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CombienDeTemps.css'; // Importez le fichier CSS ici

const CombienDeTemps = ({ onDurationSelect, onBackButtonClick }) => {
    const navigate = useNavigate();

    const handleDurationSelect = (duration) => {
        onDurationSelect(duration);
        navigate('/humeur'); // Redirection vers la page Humeur
    };

    const handleBackButtonClick = () => {
        onBackButtonClick();
        navigate('/');
    };

    return (
        <div className="CombienDeTemps"> {/* Ajoutez la classe CSS ici */}
            <h1>Combien de temps ?</h1>
            <div>
                <button onClick={() => handleDurationSelect(1)}>1 heure</button>
                <button onClick={() => handleDurationSelect(2)}>2 heures</button>
                <button onClick={() => handleDurationSelect(3)}>3 heures</button>
            </div>
            <button className="back-button" onClick={handleBackButtonClick}>Retour</button> {/* Ajoutez la classe CSS ici */}
        </div>
    );
};

export default CombienDeTemps;
