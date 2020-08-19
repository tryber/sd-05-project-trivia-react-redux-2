export const PLAYERDADOS = 'PLAYERDADOS';
export const dadosJogador = (name, email) => ({
  type: PLAYERDADOS,
  name,
  email,
});
