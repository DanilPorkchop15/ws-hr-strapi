import { createBrowserRouter } from 'react-router-dom';
import { Page } from '@strapi/strapi/admin';


export const browserRouter = createBrowserRouter([
  {
    path: "*",
    element: <Page.Error />
  },
  {
    path: "/",
    index: true,
    lazy: () => import("pages/HomePage")
  }
])
