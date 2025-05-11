import React from 'react';
import TutorialSidebar from '../components/sections/TutorialSidebar/TutorialSidebar';
import MainNavScrollbar from '../components/sections/MainNavScrollbar/MainNavScrollbar';
import MainNav from '../components/sections/MainNav/MainNav';
import HTMLLessions from '../data/HTMLLessions.json';

function TutorialLayout() {
  return (
    <>
      <MainNav />
      <MainNavScrollbar />
      <TutorialSidebar tutorialData={HTMLLessions} />
    </>
  );
}

export default TutorialLayout;
