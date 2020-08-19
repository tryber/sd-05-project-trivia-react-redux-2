import React from 'react';
import './App.css';
import Inicio from './Paginas/Inicio';
import { Switch, Route } from 'react-router-dom';
import TelaJogo from './Paginas/Tela-Jogo';
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/game" component={TelaJogo} />
      </Switch>
    </div>
  );
}
