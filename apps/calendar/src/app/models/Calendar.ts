export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  notes: string;
  user: { id: number | string; name: string };
  id?: number | string;
  allDay?: boolean;
}
