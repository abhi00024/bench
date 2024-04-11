import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './util';

const AppRoutes = () => (
  <Routes>
    {ROUTES.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
  </Routes>
);

export default AppRoutes;
