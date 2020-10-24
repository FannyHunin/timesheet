import React, { useRef } from 'react';
import "./taches.css"

const Taches = ({pText, pDate, pStart, pEnd}) => {
    
    const divTache = useRef(null)
    const valider = () => {
        let laDivTache = divTache.current
        laDivTache.style.border = "#00D1B2 solid"
        laDivTache.lastElementChild.lastElementChild.style.display = "none"
    }

    const supprimer = () => {
        let laDivTache = divTache.current
        laDivTache.remove()
    }

    return (
        <div ref = {divTache} className="taches has-text-center">
            <div className='tachesTitle is-size-2'>{pText}</div>
            <div className='tachesReste'>
                <p>Date de début: {pDate}</p>
                <p>Début: {pStart} Fin: {pEnd}</p>
                <div>
                    <button onClick={valider} className="btnTaches">Valider</button>
                    <button onClick={supprimer} className="btnTaches">Supprimer</button>
                </div>
            </div>
            
        </div>
    );
}

export default Taches;