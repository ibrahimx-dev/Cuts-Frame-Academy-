import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './StudentSuccess.css';
import alexPortrait from './assets/student-portraits/alex-rivera.jpg';
import elenaPortrait from './assets/student-portraits/elena-rostova.jpg';
import marcusPortrait from './assets/student-portraits/marcus-chen.jpg';
import sarahPortrait from './assets/student-portraits/sarah-jenkins.jpg';
import priyaPortrait from './assets/student-portraits/priya-sharma.jpg';

const STUDENTS = [
  {
    id: 1,
    name: 'Alex Rivera',
    course: 'Video Editing Masterclass',
    position: 'Assistant Editor',
    company: 'Netflix Partner Studio',
    testimonial: 'The raw footage labs and real-world project workflows completely changed how I edit. Landed my first studio gig within a month of graduating!',
    image: alexPortrait,
  },
  {
    id: 2,
    name: 'Elena Rostova',
    course: 'Color Grading & ACES',
    position: 'Junior Colorist',
    company: 'Framestore',
    testimonial: 'Learning ACES and DaVinci Resolve from an industry veteran gave me the exact technical foundation and portfolio I needed to break into high-end post-production.',
    image: elenaPortrait,
  },
  {
    id: 3,
    name: 'Marcus Chen',
    course: 'Motion Graphics Pro',
    position: 'Motion Designer',
    company: 'Epic Games',
    testimonial: 'The transition from basic design to high-impact motion graphics was seamless. The mentorship and feedback loops pushed my creative boundaries.',
    image: marcusPortrait,
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    course: 'Video Editing Masterclass',
    position: 'Commercial Editor',
    company: 'VaynerMedia',
    testimonial: 'Cuts & Frames Academy gave me the confidence to handle high-budget commercial clients. My turnaround time and storytelling precision skyrocketed.',
    image: sarahPortrait,
  },
  {
    id: 5,
    name: 'Priya Sharma',
    course: 'Complete Post-Production',
    position: 'VFX Compositor',
    company: 'Dneg',
    testimonial: 'The depth of the curriculum and professional software training gave me a massive edge during studio interviews. Truly the best investment in my career.',
    image: priyaPortrait,
  },
];

const StudentSuccess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite looping autoplay every 3.5 seconds.
  // Note: intentionally omitted hover pause handlers so autoplay never stops.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % STUDENTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="student-success-section" id="success-stories">
      <div className="success-container">
        {/* Section Header */}
        <div className="success-header">
          <motion.span 
            className="success-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            STUDENT SUCCESS STORIES & PLACEMENTS
          </motion.span>
          <motion.h2 
            className="success-main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From Academy Student to <span className="gold-accent">Industry Professional</span>
          </motion.h2>
          <motion.p 
            className="success-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore where our graduates are working and how practical industry training shaped their careers.
          </motion.p>
        </div>

        {/* Carousel Viewport with Peeking Adjacent Slides */}
        <div className="carousel-viewport">
          <motion.div 
            className="carousel-track"
            animate={{ 
              x: `calc(-${currentIndex * 100}% - ${currentIndex * 30}px)` 
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
          >
            {STUDENTS.map((student, index) => {
              const isActive = index === currentIndex;
              return (
                <motion.div 
                  key={student.id} 
                  className={`carousel-card ${isActive ? 'active' : 'inactive'}`}
                  animate={{ 
                    opacity: isActive ? 1 : 0.45,
                    scale: isActive ? 1 : 0.94
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Left Side: Profile Image & Course Badge */}
                  <div className="card-left-visual">
                    <img 
                      src={student.image} 
                      alt={student.name}
                      loading="lazy"
                    />
                    <div className="image-gradient-overlay" />
                    <span className="student-course-badge">{student.course}</span>
                  </div>

                  {/* Right Side: Testimonial & Professional Info */}
                  <div className="card-right-content">
                    <div className="quote-mark">“</div>
                    <p className="student-testimonial">{student.testimonial}</p>
                    
                    <div className="student-details">
                      <h3 className="student-name">{student.name}</h3>
                      <div className="student-career-row">
                        <span className="job-position">{student.position}</span>
                        <span className="at-symbol">@</span>
                        <span className="company-name">{student.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Pagination Dots with Orange Active Indicator */}
        <div className="carousel-pagination">
          {STUDENTS.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to student slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;
