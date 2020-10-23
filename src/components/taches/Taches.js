import userEvent from '@testing-library/user-event';
import React, {useRef} from 'react';
import "./taches.css"

const Taches = ({pText, pDate, pStart, pEnd}) => {
    
    return (
        <div className="taches">
            <p> {pText} </p>
            <p>{pDate}</p>
            <p>{pStart}</p>
            <p>{pEnd}</p>
            <div>
                <button className="btnTaches">Valider</button>
                <button className="btnTaches">Supprimer</button>
            </div>
        </div>
    );
}

export default Taches;
