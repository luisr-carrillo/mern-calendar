import es from 'date-fns/esm/locale/es';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar as BigCalendar, dateFnsLocalizer, Event } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar } from '../../components/ui';
import { useCalendarMsgs } from '../../hooks/useCalendarMsgs';
import styles from './calendar.module.css';

type CalendarEvents = Event & { bgcolor: string };

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

const events: CalendarEvents[] = [
  {
    title: 'Cumpleaños amigo',
    start: new Date('11/01/2021'),
    end: new Date('11/03/2021'),
    bgcolor: '#fafafa',
  },
];

export default function Calendar() {
  const messages = useCalendarMsgs();

  return (
    <div className={styles.calendar}>
      <Navbar />
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        culture={navigator.language}
        messages={messages}
      />
    </div>
  );
}
