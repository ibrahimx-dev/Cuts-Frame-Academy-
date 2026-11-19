import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import CourseHero from '../components/course-detail/CourseHero';
import { COURSES_DATA } from '../components/course-detail/OverallCourses';
import Navbar from '../Navbar';
import Footer from '../Footer';

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const course = COURSES_DATA[courseSlug];

  if (!course) return <Navigate to="/courses" replace />;

  return (
    <div className="course-detail-page">
      <Navbar />
      <CourseHero course={course} />
      <Footer />
    </div>
  );
};

export default CourseDetail;
