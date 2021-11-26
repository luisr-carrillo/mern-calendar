import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './features/language-slice';

const rootReducer = combineReducers({
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
