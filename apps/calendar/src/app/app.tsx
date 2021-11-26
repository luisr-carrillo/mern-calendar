import { IntlProvider } from 'react-intl';
import { useAppSelector } from './hooks/use-apps';
import { messages } from './i18n/messages';
import { AppRouter } from './router';

export default function App() {
  const { locale } = useAppSelector((state) => state.language);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
      <AppRouter />
    </IntlProvider>
  );
}
