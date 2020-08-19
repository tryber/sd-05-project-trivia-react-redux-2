import {
  REQUEST_TOKEN,
  RECEIVE_TOKEN,
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
} from '../Action/apiAction';

const initialState = {
  isFetching: false,
  token: '',
  questions: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return { ...state, isFetching: true };
    case RECEIVE_TOKEN:
      return { ...state, token: action.token, isFetching: false };
    case REQUEST_QUESTIONS:
      return { ...state, isFetching: true };
    case RECEIVE_QUESTIONS:
      return { ...state, isFetching: false, questions: action.payload };
    default:
      return state;
  }
};
export default apiReducer;
