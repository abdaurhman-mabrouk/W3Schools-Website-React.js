import React from 'react';
import TutorialSidebar from '../components/sections/TutorialSidebar/TutorialSidebar';
import MainNavScrollbar from '../components/sections/MainNavScrollbar/MainNavScrollbar';
import MainNav from '../components/sections/MainNav/MainNav';

function TutorialLayout() {
  return (
    <>
      <MainNav />
      <MainNavScrollbar />
      <TutorialSidebar />
    </>
  );
}

export default TutorialLayout;
