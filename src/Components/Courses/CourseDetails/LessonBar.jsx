import React, { useState } from 'react';

const LessonBar = ({ lessons, courseTitle, about }) => {
  const [currentView, setCurrentView] = useState('about'); // default is 'about'

  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  const lessonContent =
    currentView !== 'about' ? lessons.find((l) => l.id === currentView) : null;

  return (
    <div className="flex flex-row mt-20 px-6 items-start">
      {/* Sidebar */}
      <aside className="w-72 p-4 bg-white rounded-lg shadow absolute top-0 left-0 z-10 overflow-y-auto h-screen mt-36">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          {courseTitle}
        </h2>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">{progress}% COMPLETE</p>

        {/* About */}
        <div
          className={`p-2 rounded mb-1 cursor-pointer ${
            currentView === 'about'
              ? 'bg-blue-100 border-l-4 border-blue-500'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => setCurrentView('about')}
        >
          <span className="text-sm text-gray-700">📘 About This Course</span>
        </div>

        {/* Lessons */}
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`p-2 rounded mb-1 cursor-pointer ${
              currentView === lesson.id
                ? 'bg-blue-100 border-l-4 border-blue-500'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => setCurrentView(lesson.id)}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{lesson.title}</span>
              {lesson.completed && (
                <span className="text-green-500 text-sm">✓</span>
              )}
            </div>
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-white rounded-lg shadow ml-80">
        {currentView === 'about' ? (
          <>
            <h2 className="text-xl font-bold mb-4">About This Course</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {about?.en || 'No description available.'}
            </p>
          </>
        ) : lessonContent ? (
          <>
            <h2 className="text-xl font-bold mb-4">{lessonContent.title}</h2>
            <video
              controls
              src={lessonContent.video}
              className="w-full rounded-lg shadow"
            />
            <a
              href={lessonContent.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-blue-600 hover:underline"
            >
              📄 Télécharger PDF
            </a>
          </>
        ) : (
          <p>No lesson selected.</p>
        )}
      </main>
    </div>
  );
};

export default LessonBar;
