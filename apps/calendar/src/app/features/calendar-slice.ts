import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarEvent } from '../models/Calendar';

export type CalendarEventState = Omit<CalendarEvent, 'start' | 'end'> & {
  start: string;
  end: string;
};

interface CalendarState {
  events: CalendarEventState[];
  activeEvent?: CalendarEventState;
}

const initialState: CalendarState = {
  events: [
    {
      title: '1222',
      notes: '',
      start: '2021-11-29T18:00:00.000Z',
      end: '2021-11-29T19:00:00.000Z',
      id: 1638166789080,
      user: {
        id: 1,
        name: 'Luis Carrillo',
      },
    },
  ],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addNewEvent(state, action: PayloadAction<CalendarEventState>) {
      state.events = [...state.events, action.payload];
    },
    updateEvent(state, action: PayloadAction<CalendarEventState>) {
      state.events = state.events.map((event) =>
        event.id === action.payload.id ? action.payload : event,
      );
    },
    deleteEvent(state) {
      state.events = state.events.filter((event) => event.id !== state.activeEvent?.id);
      delete state.activeEvent;
    },
    setActiveEvent(state, action: PayloadAction<CalendarEventState>) {
      state.activeEvent = action.payload;
    },
    clearActiveEvent(state) {
      delete state.activeEvent;
    },
  },
});

const { reducer, actions } = calendarSlice;
export const { addNewEvent, updateEvent, deleteEvent, setActiveEvent, clearActiveEvent } =
  actions;
export default reducer;
