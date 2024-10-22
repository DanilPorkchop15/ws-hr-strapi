import React from "react";
import { RouterProvider } from "react-router";
import { useAsync } from "react-use";


import "./index.scss";
import { PLUGIN_ID } from 'shared/config';
import { PluginIcon } from 'shared/ui';
import { Initializer } from 'app/ui/Initializer';
import { getTranslation } from 'shared/lib';
import { Loader } from '@strapi/icons';

export const App = React.memo(function App() {
  const { value: configModule } = useAsync(async () => import("./config"));

  if (!configModule?.browserRouter) return null;

  return <RouterProvider fallbackElement={<Loader/>} router={configModule.browserRouter} />;
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
        const { default: data } = await import(`shared/translations/${locale}.json`);
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
    })
  );
}
