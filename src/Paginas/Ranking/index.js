import React from 'react';
import HeaderJogo from '../Tela-Jogo/components/HeaderJogo';

const Ranking = () => (
  <div>
    <HeaderJogo />
    <div data-testid="ranking-title">Ranking</div>
    <button type="button" data-testid="btn-go-home">
      Voltar ao inicio
    </button>
  </div>
);

export default Ranking;
