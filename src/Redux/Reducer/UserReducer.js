import { PLAYERDADOS, GIVE_ANSWER, GIVE_SCORE, NEXT_QUESTION } from '../Action/UserAction';

const initialState = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  respondido: false,
};

const loginStorage = (state, action) =>
  localStorage.setItem(
    'state',
    JSON.stringify({
      ...state,
      player: {
        ...state.player,
        name: action.name,
        assertions: 0,
        gravatarEmail: action.email,
      },
    }),
  );

const playerStorage = (state, action) =>
  localStorage.setItem(
    'state',
    JSON.stringify({
      ...state,
      player: {
        ...state.player,
        score: action.value,
        assertions: state.player.assertions,
      },
    }),
  );

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYERDADOS:
      loginStorage(state, action);
      return {
        ...state,
        player: { ...state.player, name: action.name, gravatarEmail: action.email },
      };
    case GIVE_ANSWER:
      return { ...state, respondido: true };
    case GIVE_SCORE:
      playerStorage(state, action);
      return {
        ...state,
        player: {
          ...state.player,
          assertions: (state.player.assertions + 1),
          score: (state.player.score + action.value),
        },
      };
    case NEXT_QUESTION:
      return {
        ...state,
        respondido: false,
      };
    default:
      return state;
  }
};

export default userReducer;
