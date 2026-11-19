import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart2, Award, CheckCircle, Play, Star, ShieldCheck } from 'lucide-react';
import './CourseHero.css';

const CourseHero = ({ course }) => {
  if (!course) return null;

  return (
    <section className="course-hero-section">
      <div className="course-hero-bg-glow" />
      <div className="course-hero-container">
        
        {/* Left Column: Course Details */}
        <motion.div 
          className="course-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="course-badges">
            <span className="course-category-badge">{course.category || "Professional Training"}</span>
            <span className="course-level-badge"><BarChart2 size={14} /> {course.level || "All Levels"}</span>
          </div>

          <h1 className="course-hero-title">{course.title}</h1>
          
          <p className="course-hero-subtitle">
            {course.subtitle || "Master industry-standard workflows, advanced cinematic techniques, and build a world-class showreel under expert mentorship."}
          </p>

          <div className="course-meta-grid">
            <div className="meta-item">
              <Clock className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">{course.duration || "12 Weeks (60+ Hours)"}</span>
              </div>
            </div>
            <div className="meta-item">
              <Award className="meta-icon" />
              <div>
                <span className="meta-label">Certificate</span>
                <span className="meta-value">Industry Recognized</span>
              </div>
            </div>
            <div className="meta-item">
              <Star className="meta-icon gold" />
              <div>
                <span className="meta-label">Rating</span>
                <span className="meta-value">4.9 / 5.0 (1,240+ Students)</span>
              </div>
            </div>
          </div>

          <div className="software-tags-wrapper">
            <span className="software-label">Software Covered:</span>
            <div className="software-tags">
              {course.software && course.software.map((sw, index) => (
                <span key={index} className="software-tag">{sw}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Preview / Sticky Enrollment Card */}
        <motion.div 
          className="course-hero-card-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="course-enroll-card">
            <div className="card-video-preview">
              <div className="video-thumbnail-placeholder">
                <div className="play-button-overlay">
                  <Play size={28} fill="currentColor" />
                </div>
                <span className="preview-text">Preview Course Trailer</span>
              </div>
            </div>

            <div className="card-body">
              <div className="pricing-box">
                <span className="current-price">{course.price || "₹46,600"}</span>
                <span className="original-price">{course.originalPrice || "₹74,600"}</span>
                <span className="discount-badge">38% OFF</span>
              </div>

              <ul className="card-features-list">
                <li><CheckCircle size={16} className="check-icon" /> Full Lifetime Access</li>
                <li><CheckCircle size={16} className="check-icon" /> 60+ Hours of HD Lessons</li>
                <li><CheckCircle size={16} className="check-icon" /> Raw Footage & Project Files</li>
                <li><CheckCircle size={16} className="check-icon" /> 1-on-1 Mentor Feedback</li>
                <li><CheckCircle size={16} className="check-icon" /> Verified Completion Certificate</li>
              </ul>

              <button className="enroll-btn-primary" onClick={() => alert("Enrollment gateway triggered!")}>
                Enroll Now
              </button>

              <div className="money-back-guarantee">
                <ShieldCheck size={16} /> 30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CourseHero;
