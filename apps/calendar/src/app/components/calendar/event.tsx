import { CalendarEvent } from '../../models/Calendar';

interface EventProps {
  event: CalendarEvent;
}

export const Event = ({ event }: EventProps) => {
  const {
    title,
    user: { name },
  } = event;
  return (
    <div>
      <strong>{title}</strong>
      {' - '}
      <span> {name}</span>
    </div>
  );
};
