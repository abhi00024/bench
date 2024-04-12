import React from 'react';

// const ReactInfo = React.lazy(() => import('../reactInfo'));
// const JavascriptPractice = React.lazy(() => import('../javascriptPractice'));

const Dashboard = React.lazy(()=> import('../Dashboard/index'));

export const ROUTES = [
    // { path: '/', element: <ReactInfo /> },
    // { path: '/practiceJS', element: <JavascriptPractice /> },
    { path: '/', element: <Dashboard /> },
  ];