import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './features/language-slice';
import uiReducer from './features/ui-slice';
import calendarReducer from './features/calendar-slice';

const rootReducer = combineReducers({
  language: languageReducer,
  ui: uiReducer,
  calendar: calendarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
