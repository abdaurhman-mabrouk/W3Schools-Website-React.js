import React from 'react';
import TutorialSidebar from '../components/sections/TutorialSidebar/TutorialSidebar';
import MainNavScrollbar from '../components/sections/MainNavScrollbar/MainNavScrollbar';
import MainNav from '../components/sections/MainNav/MainNav';
import HTMLLessons from '../data/Lessions/HTMLLesson.json';
import CSSLessons from '../data/Lessions/CSSLesson.json';
import '../assets/styles/TutorialLayout.css';

function TutorialLayout() {
  return (
    <>
      <MainNav />
      <MainNavScrollbar />
      <main className="tutorial-main-content-wrapper-container">
        <span className="left-container">
          <TutorialSidebar tutorialData={CSSLessons} />
        </span>
        <span className="right-container">
          <div className="tutorial-content">
            <h1>HTML Tutorial</h1>
            <p>
              This is a simple HTML tutorial. It covers the basics of HTML,
              including elements, attributes, and structure.
            </p>
            <p>
              You can learn more about HTML by visiting the official
              documentation or other online resources.
            </p>
          </div>
        </span>
      </main>
    </>
  );
}

export default TutorialLayout;
