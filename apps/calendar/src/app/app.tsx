import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { useAppSelector } from './hooks/useApps';
import { messages } from './i18n/messages';
import { AppRouter } from './router';

export default function App() {
  const { locale } = useAppSelector((state) => state.language);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </IntlProvider>
  );
}
