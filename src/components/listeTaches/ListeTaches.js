import React from 'react';
import Taches from '../taches/Taches';
import "./listeTaches.css"

const ListeTaches = () => {
    return (
        <div className="listeTaches">
            <h1>Choses à faire :</h1>
            <div className="divTaches">
                <Taches/>
                <Taches/>
                <Taches/>
                <Taches/>
            </div>
        </div>
    );
}

export default ListeTaches;
