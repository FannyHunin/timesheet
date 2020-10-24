import React, { useRef, useState } from 'react';
import Taches from '../taches/Taches';
import "./ajoutTaches.css"


const AjoutTaches = () => {
    const[toDos, setToDos] = useState([[],[],[],[]])
    console.log(toDos[1]);
    const inpValue = useRef(null);
    const inpDate = useRef(null);
    const inpStart = useRef(null);
    const inpEnd = useRef(null);
    const [pText, setPText] = useState('');
    const [valDate, setValDate] = useState(0);
    const [valStart, setValStart] = useState(0);
    const [valEnd, setValEnd] = useState(0);

    const addTask = () => {
        let valeurP = inpValue.current.value
        let valeurD = inpDate.current.value
        let valeurS = inpStart.current.value
        let valeurE = inpEnd.current.value
        let leP = pText
        let laD = valDate
        let laS = valStart
        let laE = valEnd
        let TabToDos = toDos
        leP = valeurP
        laD = valeurD
        laS = valeurS
        laE = valeurE
        inpValue.current.value = ''
        TabToDos[0].push(leP)
        TabToDos[1].push(laD)
        TabToDos[2].push(laS)
        TabToDos[3].push(laE)
        setValDate(laD)
        setPText(leP)
        setToDos(TabToDos)
    }

    const toDosMap = toDos[0].map ((e, i) => (
        <Taches inpValue={inpValue} key={i} toDos={e} pText={toDos[0][i]} pDate={toDos[1][i]} pStart={toDos[2][i]} pEnd={toDos[3][i]} />
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
                            <input ref={inpStart} type="time" name="" id=""/>
                        </label>
                        <label htmlFor="">
                            Entrez une heure de fin
                            <input ref={inpEnd} type="time" name="" id=""/>
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
