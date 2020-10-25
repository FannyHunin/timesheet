import React, { useRef } from 'react';
import "./taches.css"

const Taches = ({ pText, pDate, pStart, pEnd, pName }) => {

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

    // 

    return (
        <div ref={divTache} className="taches has-text-center">
            <ol>
                <li className='columns'>
                    <p className='column'><b>Nom: </b> {pName} </p>
                    <p className='column'><b> Tache: </b> {pText} </p>
                    <p className='column'><b> Date: </b> {pDate} </p>
                    <p className='column'><b> Début: </b> {pStart} </p>
                    <p className='column'><b> Fin: </b> {pEnd} </p>
                </li>
            </ol>

        </div>
    );
}

export default Taches;