import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Breadcrumb  from './components/Breadcrumb';
import HomePage from './homepage';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breadcrumb" element={<Breadcrumb />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
