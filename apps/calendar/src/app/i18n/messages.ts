import { Locales } from './locales';
import { calendar } from './calendar';
import { form } from './form';
import { events } from './events';

export const messages = {
  [Locales.SPANISH]: {
    ...calendar.spa,
    ...form.spa,
    ...events.spa,
    showMore: 'Ver más',
    spanish: 'Español',
    english: 'Inglés',
    logout: 'Cerrar sesión',
  },
  [Locales.ENGLISH]: {
    ...calendar.eng,
    ...form.eng,
    ...events.eng,
    spanish: 'Spanish',
    english: 'English',
    logout: 'Logout',
  },
};
