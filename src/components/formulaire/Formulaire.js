import React, { useState } from 'react';

const Formulaire = () => {
    const [user, setUser] = useState({
        name : ""
    })
    const setData = (e) => {
        const input = document.getElementsByTagName("input")[0];
        const userName = {...user}
        setUser(input.value)
        localStorage.setItem("userName", input.value)
        console.log(input.value);
    }
    const getData = () => {
        const divNom = document.getElementById("affichage")
        const data = localStorage.getItem("userName");
        console.log(data);
        divNom.innerText = data;
    }
    return (
        <div>
           <form action="">
               <label htmlFor="">Username
                    <input type="text"/>
                    <button onClick={() => setData()} >Remember me</button>
                    <button onClick={() => getData()} >log In</button>
               </label>
           </form>
            <div id = "affichage"></div>
        </div>
    );
}

export default Formulaire;
