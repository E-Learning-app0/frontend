import React from 'react';
import { useParams } from 'react-router-dom';
import CourseData from './../data/Courses.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';
import CourseLessons from '../CourseLessons/CourseLessons';
import LessonBar from './LessonBar';

const CourseDetails = () => {
  const { t, i18n } = useTranslation();

  const { courseId } = useParams();
  const Course = CourseData.find((course) => course.id == courseId);

  if (Course) {
    return (
      <div>
        <div className="container">
          <div className="mt-20 mb-16 md:mb-32 text-center">
            <h1 className="font-bold">{t('lessons')}</h1>
            <LessonBar
              lessons={Course.lessons}
              courseTitle={Course.name}
              about={Course.about}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-4">
              <CourseLessons />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{t('course_not_found')}</div>;
  }
};

export default CourseDetails;
