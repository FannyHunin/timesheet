import React from 'react';
import AjoutTaches from '../ajoutTaches/AjoutTaches';
import ListeTaches from '../listeTaches/ListeTaches';

const PageCactus = () => {
    return (
        <div style={{width:"100%", display : "flex", flexDirection:"column", alignItems : "center"}}>
            <AjoutTaches/>
            <ListeTaches/>
        </div>
    );
}

export default PageCactus;
