import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
  modal: boolean;
}

const initialState: UiState = {
  modal: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
  },
});

const { actions, reducer } = uiSlice;
export const { openModal, closeModal } = actions;
export default reducer;
