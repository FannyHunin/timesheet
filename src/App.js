import React from 'react';
import './app.css'
import Home from './components/Home/home'
import Cactus from './components/Cactus/cactus'
import Fanny from './components/Fanny/Fanny';
import '../node_modules/bulma/css/bulma.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <div className="navi">
          <nav className='is-size-3 is-flex '>
              <div>
                <img id='logo' className='ml-4 mt-2' src="img/calendar.png" alt=""/>
                <Link id='home' className="ml-4 has-text-black" to="/"><span>Home</span></Link>
                <Link id='cactus' className="ml-4 has-text-black" to="cactus"><span>Cactus</span></Link>
                <Link id='fanny' className="ml-4 has-text-black" to="fanny"><span>Fanny</span></Link>
              </div>
              <div>
              <div class="dropdown is-hoverable posiDrop">
                <div class="dropdown-trigger">
                  <button class="button has-background-primary has-text-white is-size-3 is-shadowless" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Theme</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <div>
                      hello
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </nav>
        </div>

        <Switch>
          <Route path="/cactus">
            <Cactus/>
          </Route>
          <Route path="/fanny">
            <Fanny/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
