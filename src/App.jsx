/* eslint-disable no-unused-vars */
import { lazy, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import { Routes, Route } from 'react-router-dom';
import TutorialLayout from './layouts//TutorialLayout.jsx';
const NotFoundLayout = lazy(() => {
  return import('./layouts/NotFoundLayout.jsx');
});

const Tutorial = lazy(() => {
  return import('./layouts//TutorialLayout.jsx');
});

const ServicesLayout = lazy(() => {
  return import('./layouts/ServicesLayout.jsx');
});

const ExercisesLayout = lazy(() => {
  return import('./layouts/ExercisesLayout.jsx');
});

const CertificatesLayout = lazy(() => {
  return import('./layouts/CertificatesLayout.jsx');
});


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorials" element={<TutorialLayout />} />
        <Route path="/services" element={<ServicesLayout />} />
        <Route path="/exercises" element={<ExercisesLayout />} />
        <Route path="/certificates" element={<CertificatesLayout />} />
        <Route path="/*" element={<NotFoundLayout />} />
      </Routes>
    </>
  );
}

export default App;
