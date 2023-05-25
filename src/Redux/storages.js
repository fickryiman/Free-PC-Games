import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gamesReducer from './Games/games';
// import gameDetailsReducer from './Game/details';

const reducer = combineReducers({
  games: gamesReducer,
  // details: gameDetailsReducer,
});

const store = configureStore({ reducer });

export default store;
