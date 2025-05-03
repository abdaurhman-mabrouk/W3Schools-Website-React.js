/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import HomePage from './pages/Home.jsx';
import MainNav from './components/sections/MainNav/MainNav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
