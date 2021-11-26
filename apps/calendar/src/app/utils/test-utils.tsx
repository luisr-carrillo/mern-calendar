import { render, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Locales } from '../i18n/locales';
import { messages } from '../i18n/messages';

const rtlRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  es = false,
) => {
  const AllTheProviders: React.FC = ({ children }) => {
    const locale = es ? Locales.SPANISH : Locales.ENGLISH;

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    );
  };
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { rtlRender as render };
