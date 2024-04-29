import React from 'react';

// const ReactInfo = React.lazy(() => import('../reactInfo'));
// const JavascriptPractice = React.lazy(() => import('../javascriptPractice'));

// const Dashboard = React.lazy(()=> import('../Dashboard/index'));
// const ComponentsTab = React.lazy(()=> import("../Dashboard/dependencies/InterractiveTabs/dependencies/components"));
// const JsxTab = React.lazy(()=> import("../Dashboard/dependencies/InterractiveTabs/dependencies/jsx"));
// const PropsTab = React.lazy(()=> import("../Dashboard/dependencies/InterractiveTabs/dependencies/props"));
// const StateTab = React.lazy(()=> import("../Dashboard/dependencies/InterractiveTabs/dependencies/state"));
// const Project =React.lazy(()=>import('../TicTacToeProject'))
const Project =React.lazy(()=>import('../InvestmentCalculator'))


export const ROUTES = [
    // { path: '/', element: <ReactInfo /> },
    // { path: '/practiceJS', element: <JavascriptPractice /> },
    // { path: '/', element: <Dashboard /> },
    // { path: '/componenttab', element: <ComponentsTab /> },
    // { path: '/jsxtab', element: <JsxTab /> },
    // { path: '/propstab', element: <PropsTab /> },
    // { path: '/statetab', element: <StateTab /> },
    {path :'/',element:<Project />}
  ];