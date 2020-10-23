import React, { useRef, useState } from 'react';
import Taches from '../taches/Taches';
import "./ajoutTaches.css"


const AjoutTaches = () => {
    const[toDos, setToDos] = useState([
    ])
    const inpValue = useRef(null);
    const inpDate = useRef(null);
    const [pText, setPText] = useState('');
    const [valDate, setValDate] = useState(0);

    const addTask = () => {
        let valeurP = inpValue.current.value
        let valeurD = inpDate.current.value
        let leP = pText
        let laD = valDate
        let TabToDos = toDos

        leP = valeurP
        laD = valeurD
        inpValue.current.value = ''
        TabToDos.push(leP)

        setValDate(laD)
        setPText(leP)
        setToDos(TabToDos)
    }

    const toDosMap = toDos.map ((e, i) => (
        <Taches inpValue={inpValue} key={i} toDos={e} pText={toDos[i]} pDate={valDate}/>
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
                            <input ref={inpDate} type="date" name="" id=""/>
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
