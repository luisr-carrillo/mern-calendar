import { Locales } from './locales';
import { calendar } from './calendar';
import { form } from './form';

export const messages = {
  [Locales.SPANISH]: {
    ...calendar.spa,
    ...form.spa,
    showMore: 'Ver más',
    spanish: 'Español',
    english: 'Inglés',
    logout: 'Cerrar sesión',
  },
  [Locales.ENGLISH]: {
    ...calendar.eng,
    ...form.eng,
    spanish: 'Spanish',
    english: 'English',
    logout: 'Logout',
  },
};
