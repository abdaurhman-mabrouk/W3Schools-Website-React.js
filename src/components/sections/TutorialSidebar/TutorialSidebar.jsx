/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TutorialSidebar.css';

function TutorialSidebar({ tutorialData }) {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Simulate fetching lessons data
    setLessons(tutorialData.lessons || []);
  }, [tutorialData.lessons]);

  useEffect(() => {
    // Simulate fetching lessons data
    setLessons(tutorialData.lessions || []);
  }, [tutorialData]);

  const handleFinishLesson = (lessonId) => {
    setLessons((prevLessons) =>
      prevLessons.map((lesson) =>
        lesson.id === lessonId
          ? { ...lesson, isFinished: !lesson.isFinished }
          : lesson
      )
    );
  };

  return (
    <aside>
      <h2>{tutorialData.tutorial.title}</h2>

      <div className="tutorial-sidebar-links-wrapper-container">
        {lessons.map((lesson) => (
          <Link
            to=""
            className="tutorial-sidebar-link"
            id={`lesson${lesson.id}`}
            key={lesson.id}
            onClick={(e) => {
              e.preventDefault();
              handleFinishLesson(lesson.id);
            }}>
            <span className={lesson.isFinished ? 'finished' : ''}>|</span>
            {lesson.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default TutorialSidebar;
