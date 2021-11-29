import { CalendarEventState } from '../features/calendar-slice';
import { CalendarEvent } from '../models/Calendar';

export const convertStateToDate = (event: CalendarEventState): CalendarEvent => ({
  ...event,
  start: new Date(event.start),
  end: new Date(event.end),
});

export const convertDateToState = (event: CalendarEvent): CalendarEventState => ({
  ...event,
  start: event.start.toISOString(),
  end: event.end.toISOString(),
});
