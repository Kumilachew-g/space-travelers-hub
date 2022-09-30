import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/rockets';
import missionsReducer from './missions/missionsReducer';

export const rootReducer = combineReducers({
  Rockets: reducerRockets,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
