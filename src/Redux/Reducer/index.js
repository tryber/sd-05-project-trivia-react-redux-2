import { combineReducers } from 'redux';
import api from './apiReducer';
import user from './UserReducer';

const rootReducer = combineReducers({ api, user });

export default rootReducer;
