import React, {useRef, useState} from 'react';
import "./taches.css"

const Taches = () => {
    const [pAddTask , setPAddTask] = useState("");
    let pTask = pAddTask;
    return (
        <div className="taches">
            <p>{pTask}</p>
            <div>
                <button className="btnTaches">Valider</button>
                <button className="btnTaches">Supprimer</button>
            </div>
        </div>
    );
}

export default Taches;
