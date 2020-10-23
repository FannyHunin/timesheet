import React, { useRef, useState } from 'react';
import Taches from '../taches/Taches';
import "./ajoutTaches.css"
import pTask from "../taches/Taches";


const AjoutTaches = () => {
    const[toDos, setToDos] = useState([
    ])
    const inpValue = useRef(null)

    const addTask = () => {
        let toDosPanier = [...toDos];
        pTask = inpValue.current.value 
        inpValue.current.value = ""
        toDosPanier.push(toDosMap);
        setToDos(toDosPanier);
        setPAddTask(pTask);
    }

    const toDosMap = toDos.map ((e, i) => (
        <Taches inpValue={inpValue} key={i} toDos={e}/>
    ))
    
    

    return (
       <div style={{width:"100%", display:"flex", flexDirection: "column", alignItems:"center"}}>
            <div className = "planningUtilisateur">
               <div className = "inputs">
                    <div className = "forms1">
                        <label htmlFor="">
                            Entrez une tâche
                            <input ref={inpValue} type="text" placeholder="Ex : Dire à Cactus qu'il est bg."/>
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
               <button onClick={() => addTask()}
                    className="btnAjouter">Ajouter la tâche
                </button>
                </div>
            <div className="listeTaches">
                {toDosMap}
            </div>
       </div>
    );
}

export default AjoutTaches;
