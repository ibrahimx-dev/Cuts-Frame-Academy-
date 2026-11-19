import React from 'react';
import { motion } from 'framer-motion';
import './InstructorSpotlight.css';

const INSTRUCTORS = [
  {
    id: '01',
    name: 'Marcus Vance',
    role: 'Lead Colorist & Cinematic Finisher',
    credits: 'Netflix Originals, HBO Documentaries, Major Studio Features',
    bio: 'With over 12 years in high-end post-production, Marcus specializes in advanced color grading, ACES pipelines, and translating raw camera sensor data into breathtaking cinematic atmospheres.',
    software: ['DaVinci Resolve Studio', 'ACES', 'Premiere Pro'],
    image: 'src/assets/instructor-01.jpg',
    badge: 'Master Colorist',
  },
  {
    id: '02',
    name: 'Sarah Lin',
    role: 'Senior Narrative Editor',
    credits: 'Cannes Lion Commercials, A24 Trailers, Global Brand Campaigns',
    bio: 'Sarah is a master of rhythm, emotional pacing, and visual storytelling. She teaches students how to cut through the noise, structure complex narratives, and edit like top industry professionals.',
    software: ['Adobe Premiere Pro', 'Avid Media Composer', 'Audition'],
    image: 'src/assets/instructor-02.jpg',
    badge: 'Senior Editor',
  },
  {
    id: '03',
    name: 'David Kalu',
    role: 'Motion Graphics & VFX Director',
    credits: 'Marvel Studios VFX Pipeline, AAA Game Cinematic Trailers',
    bio: 'Bridging the gap between design and technology, David guides students through complex compositing, dynamic typography, and high-impact visual effects used in modern commercial production.',
    software: ['After Effects', 'Cinema 4D', 'Illustrator'],
    image: 'src/assets/instructor-03.jpg',
    badge: 'VFX & Motion Lead',
  },
];

const InstructorSpotlight = () => {
  return (
    <section className="instructor-section" id="instructors">
      <div className="instructor-container">
        {/* Section Header */}
        <div className="instructor-header">
          <motion.span 
            className="instructor-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            WORLD-CLASS MENTORSHIP
          </motion.span>
          <motion.h2 
            className="instructor-main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Learn Directly From <span className="gold-accent">Industry Veterans</span>
          </motion.h2>
          <motion.p 
            className="instructor-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Scroll down to explore our lead instructors and their professional industry background.
          </motion.p>
        </div>

        {/* Sticky Stacked Container */}
        <div className="instructor-stack">
          {INSTRUCTORS.map((instructor, index) => {
            const isEven = index % 2 === 1;
            // Calculates a sequential sticky top offset so cards stack nicely with a slight offset card edge visible
            const stickyTopOffset = 110 + index * 25; 

            return (
              <div 
                key={instructor.id}
                className="instructor-sticky-wrapper"
                style={{ top: `${stickyTopOffset}px` }}
              >
                <div className={`instructor-card ${isEven ? 'reverse-layout' : ''}`}>
                  {/* Visual / Portrait Column */}
                  <div className="instructor-visual-col">
                    <div className="instructor-image-wrapper">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="instructor-image-overlay" />
                      <span className="instructor-number-tag">{instructor.id}</span>
                      <span className="instructor-badge">{instructor.badge}</span>
                    </div>
                  </div>

                  {/* Content / Bio Column */}
                  <div className="instructor-content-col">
                    <div className="instructor-content-inner">
                      <span className="instructor-role">{instructor.role}</span>
                      <h3 className="instructor-name">{instructor.name}</h3>
                      
                      <div className="instructor-credits-box">
                        <span className="credits-label">Key Credits:</span>
                        <p className="credits-text">{instructor.credits}</p>
                      </div>

                      <p className="instructor-bio">{instructor.bio}</p>

                      <div className="instructor-software-tags">
                        {instructor.software.map((tool, idx) => (
                          <span key={idx} className="software-pill">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstructorSpotlight;