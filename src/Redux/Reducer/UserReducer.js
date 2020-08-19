import { PLAYERDADOS } from '../Action/UserAction';

const initialState = {
  name: '',
  email: '',
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYERDADOS:
      return { ...state, name: action.name, email: action.email };
    default:
      return state;
  }
};
export default userReducer;
