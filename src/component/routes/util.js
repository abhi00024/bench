import React from 'react';

const ReactInfo = React.lazy(() => import('../reactInfo'));
const JavascriptPractice = React.lazy(() => import('../javascriptPractice'));

export const ROUTES = [
    { path: '/', element: <ReactInfo /> },
    { path: '/practiceJS', element: <JavascriptPractice /> },
  ];