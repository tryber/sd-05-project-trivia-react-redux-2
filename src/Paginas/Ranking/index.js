import React from 'react';
import { Link } from 'react-router-dom';
import HeaderJogo from '../Tela-Jogo/components/HeaderJogo';

const Ranking = () => (
  <div>
    <HeaderJogo />
    <div data-testid="ranking-title">Ranking</div>
    <Link to="/">
      <button type="button" data-testid="btn-go-home">
        Voltar ao inicio
      </button>
    </Link>
  </div>
);

export default Ranking;
