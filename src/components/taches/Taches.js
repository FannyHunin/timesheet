import React from 'react';
import "./taches.css"

const Taches = () => {
    return (
        <div className="taches">
            <h3>Tâche x</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, dolores iure eos distinctio id quis.</p>
            <div>
                <button className="btnTaches">Valider</button>
                <button className="btnTaches">Supprimer</button>
            </div>
        </div>
    );
}

export default Taches;
