import React from 'react';

import { PLUGIN_ID } from '../shared/config';
import { PluginIcon } from '../shared/ui';
import { Initializer } from './lib';
import { getTranslation } from '../shared/lib';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, Routes } from 'react-router-dom';
import { Page } from '@strapi/strapi/admin';
import { HomePage } from '../pages/HomePage';

const App = React.memo(function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Page.Error />} />
      </Routes>
    </Provider>
  );
});

export function register(app: any) {
  app.addMenuLink({
    to: `plugins/${PLUGIN_ID}`,
    icon: PluginIcon,
    intlLabel: {
      id: `${PLUGIN_ID}.plugin.name`,
      defaultMessage: PLUGIN_ID,
    },
    Component: async () => {
      return App;
    },
  });

  app.registerPlugin({
    id: PLUGIN_ID,
    initializer: Initializer,
    isReady: false,
    name: PLUGIN_ID,
  });
}

export async function registerTrads(app: any) {
  const { locales } = app;

  return await Promise.all(
    (locales as string[]).map(async (locale) => {
      try {
        const { default: data } = await import(`@/shared/translations/${locale}.json`);
        return {
          data: getTranslation(data),
          locale,
        };
      } catch {
        return {
          data: {},
          locale,
        };
      }
    }),
  );
}
