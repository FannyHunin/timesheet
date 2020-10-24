import userEvent from '@testing-library/user-event';
import React, {useRef} from 'react';
import "./taches.css"

const Taches = ({pText, pDate, pStart, pEnd}) => {
    
    return (
        <div className="taches">
            <h3 className="has-text-white has-text-weight-bold is-size-3">{pText}</h3>
            <h4 className="subtitle has-text-white is-size-4">Date : {pDate}</h4>
            <p>Heure de début : {pStart}</p>
            <p>Heure de fin : {pEnd}</p>
            <div>
                <button className="btnTaches">Valider</button>
                <button className="btnTaches">Supprimer</button>
            </div>
        </div>
    );
}

export default Taches;
