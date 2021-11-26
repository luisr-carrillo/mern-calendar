import { addHours } from 'date-fns';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import { enUS, es } from 'date-fns/locale';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { SyntheticEvent, useState } from 'react';
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  EventPropGetter,
  View,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Event } from '../../components/calendar/event';
import { Navbar } from '../../components/ui';
import { useAppSelector } from '../../hooks/use-apps';
import { useCalendarMsgs } from '../../hooks/use-calendar-msgs';
import { CalendarEvents } from '../../models/Calendar';
import styles from './calendar.module.css';

const locales = {
  'en-US': enUS,
  es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const today = new Date(2021, 10, 25, 12);
const events: CalendarEvents[] = [
  {
    title: 'Cumpleaños amigo',
    start: today,
    end: addHours(today, 4),
    bgcolor: '#fafafa',
    notes: 'Comprar pastel',
    user: {
      id: '123',
      name: 'Luis Carrillo',
    },
  },
];

export default function Calendar() {
  const messages = useCalendarMsgs();
  const { locale } = useAppSelector((state) => state.language);
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('udemy-calendar-last-view') as View | null) || 'month',
  );

  const onDoubleClick = (
    event: CalendarEvents,
    e: SyntheticEvent<HTMLElement, Event>,
  ) => {
    console.log('onDoubleClick:', { event, e });
  };
  const onSelectEvent = (
    event: CalendarEvents,
    e: SyntheticEvent<HTMLElement, Event>,
  ) => {
    console.log('onSelectEvent:', { event, e });
  };
  const onViewChange = (view: View) => {
    setLastView(view);
    localStorage.setItem('udemy-calendar-last-view', view);
  };

  const eventStyleGet: EventPropGetter<CalendarEvents> = () => {
    const style = {
      display: 'block',
      color: 'white',
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
    };

    return { style };
  };

  return (
    <div className={styles.calendar}>
      <Navbar />
      <BigCalendar
        components={{ event: Event }}
        culture={locale}
        endAccessor="end"
        eventPropGetter={eventStyleGet}
        events={events}
        localizer={localizer}
        messages={messages}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        startAccessor="start"
        view={lastView}
      />
    </div>
  );
}
