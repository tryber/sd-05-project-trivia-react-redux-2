import React from 'react';
import { Link } from 'react-router-dom';
import { MD5 } from 'crypto-js';

const Ranking = () => {
  const rank = JSON.parse(localStorage.getItem('ranking')).sort((a, b) => b.score - a.score);
  return (
    <div>
      <div data-testid="ranking-title">Ranking</div>
      {rank.map((player, index) => {
        const hash = MD5(player.picture).toString();
        return (
          <div>
            <img src={`https://www.gravatar.com/avatar/${hash}`} alt="gratavar img" />
            <span data-testid={`player-name-${index}`}>{player.name}</span>
            <span data-testid={`player-score-${index}`}>{player.score}</span>
          </div>
        );
      })}
      <Link to="/">
        <button type="button" data-testid="btn-go-home">
          Voltar ao inicio
        </button>
      </Link>
    </div>
  );
};
export default Ranking;
