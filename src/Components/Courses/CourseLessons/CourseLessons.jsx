import React from 'react';
import { useParams } from 'react-router-dom';
import LessonData from './../data/Lessons.json';

const CourseLessons = () => {
  const { courseId } = useParams();
  const lessons = LessonData.filter((lesson) => lesson.courseId == courseId);
  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
            <ul>
              {lesson.resources.map((resource) => (
                <li key={resource.id}>
                  <a href={resource.url} target="_blank">
                    {resource.type}: {resource.filename}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseLessons;
