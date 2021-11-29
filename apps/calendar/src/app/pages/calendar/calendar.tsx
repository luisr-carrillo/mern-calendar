import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import { enUS, es } from 'date-fns/locale';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { useState } from 'react';
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  EventPropGetter,
  SlotInfo,
  View,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Event } from '../../components/calendar/event';
import { Modal } from '../../components/calendar/modal';
import { Navbar } from '../../components/ui';
import { AddNewFab } from '../../components/ui/add-new-fab/add-new-fab';
import { DeleteFab } from '../../components/ui/delete-fab/delete-fab';
import { clearActiveEvent, setActiveEvent } from '../../features/calendar-slice';
import { openModal } from '../../features/ui-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/use-apps';
import { useCalendarMsgs } from '../../hooks/use-calendar-msgs';
import { CalendarEvent } from '../../models/Calendar';
import { convertDateToState, convertStateToDate } from '../../utils/utils';
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

export default function Calendar() {
  const dispatch = useAppDispatch();
  const messages = useCalendarMsgs();
  const { locale } = useAppSelector((state) => state.language);
  const { events, activeEvent } = useAppSelector((state) => state.calendar);
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('udemy-calendar-last-view') as View | null) || 'month',
  );

  const eventStyleGet: EventPropGetter<CalendarEvent> = () => {
    const style = {
      display: 'block',
      color: 'white',
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
    };

    return { style };
  };

  const clearEvent = () => {
    dispatch(clearActiveEvent());
  };

  const onDoubleClick = () => {
    dispatch(openModal());
  };

  const onSelectEvent = (event: CalendarEvent) => {
    dispatch(setActiveEvent(convertDateToState(event)));
  };

  const onViewChange = (view: View) => {
    clearEvent();
    setLastView(view);
    localStorage.setItem('udemy-calendar-last-view', view);
  };

  const onSelectSlot = () => {
    clearEvent();
  };

  return (
    <div className={styles.calendar}>
      <Navbar />
      <BigCalendar
        components={{ event: Event }}
        culture={locale}
        endAccessor="end"
        eventPropGetter={eventStyleGet}
        events={events.map(convertStateToDate)}
        localizer={localizer}
        messages={messages}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        startAccessor="start"
        view={lastView}
        selectable
        onSelectSlot={onSelectSlot}
      />
      {activeEvent && <DeleteFab />}
      <AddNewFab />
      <Modal />
    </div>
  );
}
