import React from 'react';
import "./taches.css"

const Taches = ({pText, pDate, pStart, pEnd}) => {
    
    return (
        <div className="taches has-text-center">
            <div className='tachesTitle is-size-2'>{pText}</div>
            <div className='tachesReste'>
                <p>Date de début: {pDate}</p>
                <p>Début: {pStart} Fin: {pEnd}</p>
                <div>
                    <button className="btnTaches">Valider</button>
                    <button className="btnTaches">Supprimer</button>
                </div>
            </div>
            
        </div>
    );
}

export default Taches;
