import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Breadcrumb  from './components/Breadcrumb';
import HomePage from './homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breadcrumb" element={<Breadcrumb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
