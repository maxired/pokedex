import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
} from "react-router-dom";
import PokemonPage from './pages/Pokemon'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokemon/:pokemonId/prev">
            {({ match : { params = {} }}) => <Redirect to={`/pokemon/${-1 + Number(params.pokemonId)}`} />}
          </Route>
          <Route path="/pokemon/:pokemonId/next">
          {({ match : { params = {} }}) => <Redirect to={`/pokemon/${1 + Number(params.pokemonId)}`} />}
          </Route>
          <Route path="/pokemon/:pokemonId">
            <PokemonPage />
          </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
