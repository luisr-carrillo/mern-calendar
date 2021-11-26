import { Messages } from 'react-big-calendar';
import { useIntl } from 'react-intl';

export const useCalendarMsgs = (): Messages => {
  const intl = useIntl();

  const showMore = intl.formatMessage({ id: 'showMore' });

  return {
    allDay: intl.formatMessage({ id: 'allDay' }),
    previous: '<',
    next: '>',
    today: intl.formatMessage({ id: 'today' }),
    month: intl.formatMessage({ id: 'month' }),
    week: intl.formatMessage({ id: 'week' }),
    day: intl.formatMessage({ id: 'day' }),
    agenda: intl.formatMessage({ id: 'agenda' }),
    date: intl.formatMessage({ id: 'date' }),
    time: intl.formatMessage({ id: 'time' }),
    event: intl.formatMessage({ id: 'event' }),
    noEventsInRange: intl.formatMessage({ id: 'noEventsInRange' }),
    showMore: (count: number) => `+ ${showMore} (${count})`,
  };
};
