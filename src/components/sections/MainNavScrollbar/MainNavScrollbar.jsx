/* eslint-disable no-unused-vars */
import React from 'react';
import './MainNavScrollbar.css';

function MainNavScrollbar() {
  // Function to handle the scroll left button click
  const handleScrollLeft = (e) => {
    const scrollbarContainer = document.getElementById('mainNavScrollbar');
    do {
      scrollbarContainer.scrollBy({ left: -10, behavior: 'smooth' });
    } while (e.type === 'mousedown');
  };

  return (
    <nav id="mainNavScrollbar">
      <button
        type="button"
        id="scrollLeftBtn"
        className="main-nav-scrollbar-btn"
        onMouseDown={handleScrollLeft}
        onMouseUp={handleScrollLeft}>
        <span data--h-bstatus="0OBSERVED">❮</span>
      </button>

      <a href="#" className="main-nav-scrollbar-link">
        HTML
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        CSS
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        JAVASCRIPT
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        SQL
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        PYTHON
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        JAVA
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        PHP
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        HOW TO
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        W3.CSS
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        C
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        C++
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        C#
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        BOOTSTRAP
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        REACT
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        MYSQL
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        JQUERY
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        EXCEL
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        XML
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        DJANGO
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        NUMPY
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        PANDAS
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        NODEJS
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        DSA
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        TYPESCRIPT
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        ANGULAR
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        GIT
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        POSTGRESQL
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        MONGODB
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        ASP
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        AI
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        R
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        GO
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        KOTLIN
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        SASS
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        VUE
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        GEN AI
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        SCIPY
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        CYBERSECURITY
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        DATA SCIENCE
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        INTRO TO PROGRAMMING
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        BASH
      </a>

      <a href="#" className="main-nav-scrollbar-link">
        RUST
      </a>

      <button
        type="button"
        id="scrollRightBtn"
        className="main-nav-scrollbar-btn">
        <span data--h-bstatus="0OBSERVED">❯</span>
      </button>
    </nav>
  );
}

export default MainNavScrollbar;
