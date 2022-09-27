import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import rocketsReducer from './rockets/rocketsReducer';
import missionsReducer from './missions/missionsReducer';

const rootReducer = combineReducers({
  // rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
