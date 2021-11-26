import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { Locales } from './i18n/locales';
import { messages } from './i18n/messages';
import { AppRouter } from './router';

export default function App() {
  const locale = Locales.SPANISH;

  return (
    <IntlProvider messages={messages[locale]} locale="es" defaultLocale="en">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </IntlProvider>
  );
}
