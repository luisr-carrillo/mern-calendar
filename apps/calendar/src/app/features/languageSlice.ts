import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Locales } from '../i18n/locales';

export interface LanguageState {
  locale: Locales;
}

const initialState: LanguageState = {
  locale: Locales.ENGLISH,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<Locales>) {
      state.locale = action.payload;
    },
  },
});

const { actions, reducer } = languageSlice;
export const { changeLanguage } = actions;
export default reducer;
