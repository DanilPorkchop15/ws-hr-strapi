import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { AppRoutes } from "shared/model";
import { Layout } from "shared/ui/Layout";

import { store } from "./store";

export const browserRouter = createBrowserRouter([
  {
    path: "*",
    element: "Not Found 404",
  },
  {
    path: AppRoutes.getHomeUrl(),
    element: (
      <Provider store={store}>
        <Layout>
          <Outlet />
        </Layout>
      </Provider>
    ),
    children: [
      { index: true, element: "Ссылка должна содержать uuid" },
      {
        path: AppRoutes.getTaskUrl(),
        lazy: async () => import("../pages/task"),
      },
    ],
  },
]);
