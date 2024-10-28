import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Page } from '@strapi/strapi/admin';
import { Layout } from '../shared/ui';

export const App = React.memo(function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Page.Error />} />
        </Routes>
      </Layout>
    </Provider>
  );
});
