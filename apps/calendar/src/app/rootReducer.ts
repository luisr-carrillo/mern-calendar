import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './features/language-slice';
import uiReducer from './features/ui-slice';

const rootReducer = combineReducers({
  language: languageReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
