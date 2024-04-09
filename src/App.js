import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactInfo from './component/reactInfo';
import JavascriptPractice from './component/javascriptPractice';


function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<ReactInfo />} />
          <Route path="/practiceJS" element={<JavascriptPractice />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
