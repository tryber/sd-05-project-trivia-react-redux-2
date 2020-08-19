import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import TelaJogo from './Paginas/Tela-Jogo';
import Config from './Paginas/Config';
import Feedback from './Paginas/Feedback';
import Ranking from './Paginas/Ranking';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/game" component={TelaJogo} />
        <Route path="/config" component={Config} />
        <Route path="/feedback" component={Feedback} />
        <Route parth="/ranking" component={Ranking} />
      </Switch>
    </div>
  );
}
