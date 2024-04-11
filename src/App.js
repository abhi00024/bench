import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import AppRoutes from './component/routes';
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;