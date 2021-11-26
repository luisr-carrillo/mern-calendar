import type { Event } from 'react-big-calendar';

export type CalendarEvents = Event & {
  bgcolor: string;
  notes: string;
  user: { id: string; name: string };
};
