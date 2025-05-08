import React from 'react';
import NotFoundPage from '../pages/NotFoundPage';
import MainNav from '../components/sections/MainNav/MainNav';
import MainNavScrollbar from '../components/sections/MainNavScrollbar/MainNavScrollbar';

function NotFoundLayout() {
  return (
    <>
      <MainNav />
      <MainNavScrollbar />
      <NotFoundPage />
    </>
  );
}

export default NotFoundLayout;
