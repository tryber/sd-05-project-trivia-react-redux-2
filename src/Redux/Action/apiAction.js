import { getToken, getQuestions } from '../../APi/api';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const requestToken = () => ({ type: REQUEST_TOKEN });
const receiveToken = (token) => ({ type: RECEIVE_TOKEN, token });
const requestQuestions = () => ({ type: REQUEST_QUESTIONS });
const receiveQuestions = (payload) => ({ type: RECEIVE_QUESTIONS, payload });
export const fetchToken = () => (dispatch) => {
  dispatch(requestToken());
  return getToken().then((data) => dispatch(receiveToken(data.token)));
};

export const fetchQuestions = (token) => (dispatch) => {
  dispatch(requestQuestions());
  return getQuestions(token).then((data) =>
    dispatch(receiveQuestions(data.results)),
  );
};
