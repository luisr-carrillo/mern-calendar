import { Locales } from './locales';

type Message = {
  [locale: string]: {
    calendar: {
      allDay: string;
      today: string;
      month: string;
      week: string;
      day: string;
      agenda: string;
      date: string;
      time: string;
      event: string;
      noEventsInRange: string;
      showMore: string;
    };
  };
};

export const messages = {
  [Locales.SPANISH]: {
    allDay: 'Todo el día',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'No hay eventos en este rango',
    showMore: 'Ver más',
  },
  [Locales.ENGLISH]: {
    allDay: 'All day',
    today: 'Today',
    month: 'Month',
    week: 'Week',
    day: 'Day',
    agenda: 'Agenda',
    date: 'Date',
    time: 'Time',
    event: 'Event',
    noEventsInRange: 'There are no more events for the selected range',
    showMore: 'Show more',
  },
};
