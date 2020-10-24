import React from 'react';
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
              </div>
          </nav>
        </div>

        <Switch>
          <Route path="/cactus">
            <PageCactus/>
          </Route>
          <Route path="/fanny">
            <PageFanny/>
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
