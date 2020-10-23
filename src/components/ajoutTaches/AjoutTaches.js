import React from 'react';
import "./ajoutTaches.css"

const AjoutTaches = () => {
    return (
        <div className = "planningUtilisateur">
           <div className = "inputs">
                <div className = "forms1">
                    <label htmlFor="">
                        Entrez une tâche
                        <input type="text"/>
                    </label>
                    <label htmlFor="">
                        Entrez une date de début
                        <input type="date" name="" id=""/>
                    </label>
                </div>
                <div className = "forms2">
                    <label htmlFor="">
                        Entrez une heure de début
                        <input type="time" name="" id=""/>
                    </label>
                    <label htmlFor="">
                        Entrez une heure de fin
                        <input type="time" name="" id=""/>
                    </label>
                </div>
           </div>
           <button className="btnAjouter">Ajouter la tâche</button>
        </div>
    );
}

export default AjoutTaches;
