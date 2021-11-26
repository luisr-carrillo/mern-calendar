import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './features/languageSlice';

const rootReducer = combineReducers({
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
