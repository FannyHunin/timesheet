import React, { useRef, useState } from 'react';
import './app.css'
import Home from './components/Home/home'
import '../node_modules/bulma/css/bulma.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageCactus from './components/pageCactus/PageCactus';
import PageFanny from './components/pageFanny/PageFanny';


function App() {

  const [inputSaDaronne, setSaDaronne] = useState("");
  const [para, setPara] = useState('');
  const refSaDaronne = useRef(null)
  const ninja = useRef(null);
  const samourai = useRef(null)

  const handleChange = (e) => {

    let myInput = inputSaDaronne
    myInput = e.target.value
    console.log(myInput);
    setSaDaronne(myInput)
    localStorage.setItem('username', myInput)
    console.log(inputSaDaronne);
  }


  const succes = () => {
    let myP = para
    let username = localStorage.getItem("username");
    myP = 'Bienvenue ' + username
    setPara(myP);
    ninja.current.style.display = "none"
    samourai.current.style.display = "flex"
  }

  const deco = () =>{
    refSaDaronne.current.value = ""
    ninja.current.style.display = "flex"
    ninja.current.style.marginTop = "18px"
    samourai.current.style.display = "none"
  }

  return (
    <div>
      <Router>
        <div className="navi pb-3">
          <nav className='is-size-3 is-flex '>
            <div className='is-flex is-justify-content-space-between testsadada'>
              <div>
                <Link id='home' className="ml-4 has-text-black" to="/"><span>Home</span></Link>
                <Link id='cactus' className="ml-4 has-text-black" to="cactus"><span>TimeSheet</span></Link>
              </div>
              <div ref={ninja}>
                <input ref={refSaDaronne} onChange={handleChange} className='mr-4 tailleSaMere' type="text" placeholder='Utilisateur' />
                <input className='mr-4 tailleSaMere' type="password" placeholder='mot de passe' />
                <button onClick={succes} className='mr-4 tailleSaMere btnsamaman'>Connexion</button>
              </div>
              <div style={{ display: "none" }} ref={samourai}>
                <p className='pDePapa'>{para}</p>
                <button onClick={deco} className='bDeBouton'>deconnexion</button>
              </div>
            </div>
            <div>
            </div>
          </nav>
        </div>

        <Switch>
          <Route path="/cactus">
            <PageCactus />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
