import { configureStore } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import languageReducer from '../features/language-slice';
import { Locales } from '../i18n/locales';
import { messages } from '../i18n/messages';

const rtlRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  es = false,
  store = configureStore({ reducer: { language: languageReducer } }),
) => {
  const AllTheProviders: React.FC = ({ children }) => {
    const locale = es ? Locales.SPANISH : Locales.ENGLISH;

    return (
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <MemoryRouter>{children}</MemoryRouter>
        </IntlProvider>
      </Provider>
    );
  };
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { rtlRender as render };
