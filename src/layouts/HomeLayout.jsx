import React from 'react';
import MainNav from '../components/sections/MainNav/MainNav';
import MainNavScrollbar from '../components/sections/MainNavScrollbar/MainNavScrollbar';
import MainFooter from '../components/sections/MainFooter/MainFooter';
import '../assets/styles/HomeLayout.css';

function HomeLayout() {
  return (
    <>
      <MainNav />
      <MainNavScrollbar />
      <MainFooter />
    </>
  );
}

export default HomeLayout;
