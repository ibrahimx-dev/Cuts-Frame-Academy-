import React, { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import './LearningExperience.css';
import fundamentalsImage from './assets/course-cards/video-editing.jpg';
import softwareImage from './assets/course-cards/premiere-mastery.jpg';
import projectsImage from './assets/course-cards/documentary-storytelling.jpg';
import creativeStyleImage from './assets/course-cards/motion-graphics.jpg';
import portfolioImage from './assets/course-cards/freelance-post-production.jpg';

const STAGES = [
  {
    id: 1,
    number: '01',
    title: 'Learn the Fundamentals',
    subtitle: 'Foundations of Cinema',
    description:
      'Understand editing basics, visual storytelling, rhythm, composition, and professional video production workflows from the ground up.',
    image: fundamentalsImage,
    tag: 'Pacing & Story',
  },
  {
    id: 2,
    number: '02',
    title: 'Master the Tools',
    subtitle: 'Industry Software',
    description:
      'Gain fluency in Premiere Pro, After Effects, and DaVinci Resolve—mastering shortcuts, timeline organization, and non-destructive editing.',
    image: softwareImage,
    tag: 'Premiere • AE • Resolve',
  },
  {
    id: 3,
    number: '03',
    title: 'Practice with Real Projects',
    subtitle: 'Hands-On Production',
    description:
      'Go beyond theory by cutting raw multi-cam footage, commercial spots, music videos, and documentary sequences under real deadlines.',
    image: projectsImage,
    tag: 'Raw Footage Labs',
  },
  {
    id: 4,
    number: '04',
    title: 'Develop Your Creative Style',
    subtitle: 'Polish & Atmosphere',
    description:
      'Experiment with cinematic color grading, seamless transitions, layered sound design, and custom motion graphics to craft your signature look.',
    image: creativeStyleImage,
    tag: 'Color & Sound',
  },
  {
    id: 5,
    number: '05',
    title: 'Build Your Portfolio',
    subtitle: 'Career Launch',
    description:
      'Assemble a high-impact showreel and client-ready case studies designed to attract creative agencies, brands, and studios.',
    image: portfolioImage,
    tag: 'Showreel Ready',
  },
];

const LearningExperience = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Motion value for continuous looping translation
  const baseX = useMotionValue(0);
  const cardWidth = 440; // width (410px) + gap (30px)
  const totalWidth = STAGES.length * cardWidth;

  // Continuous auto-scroll animation loop (pauses on hover)
  useAnimationFrame((t, delta) => {
    if (isPaused) return;
    let moveBy = baseX.get() - (delta * 0.05); // Speed multiplier (adjust 0.05 to speed up/slow down)

    // Loop seamlessly when it hits the total width of one set
    if (moveBy <= -totalWidth) {
      baseX.set(0);
    } else {
      baseX.set(moveBy);
    }

    // Calculate active stage based on current translation
    const currentPos = Math.abs(baseX.get());
    const calculatedIndex = Math.floor((currentPos + cardWidth / 2) / cardWidth) % STAGES.length;
    if (calculatedIndex !== activeIndex) {
      setActiveIndex(calculatedIndex);
    }
  });

  return (
    <section className="learning-experience-section" id="learning-experience">
      <div className="learning-wrapper">
        {/* Section Header */}
        <div className="learning-header">
          <div className="learning-header-left">
            <span className="learning-eyebrow">YOUR LEARNING JOURNEY</span>
            <h2 className="learning-title">
              From First Cut to <span className="gold-accent">Industry Pro</span>
            </h2>
          </div>

          <div className="learning-counter">
            <span className="counter-current">0{activeIndex + 1}</span>
            <span className="counter-divider">/</span>
            <span className="counter-total">0{STAGES.length}</span>
          </div>
        </div>

        {/* Continuously Moving Track with Hover Pause */}
        <div 
          className="learning-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div className="learning-track" style={{ x: baseX }}>
            {/* Render items twice to create a seamless infinite loop */}
            {[...STAGES, ...STAGES].map((stage, index) => {
              const actualIndex = index % STAGES.length;
              const isActive = actualIndex === activeIndex;

              return (
                <div
                  key={`${stage.id}-${index}`}
                  className={`timeline-stage ${isActive ? 'is-active' : ''}`}
                >
                  <div className="stage-node-wrapper">
                    <div className="stage-node">
                      <span className="stage-node-dot" />
                    </div>
                    <span className="stage-node-label">STAGE {stage.number}</span>
                  </div>

                  <article className="stage-card">
                    <div className="stage-card-visual">
                      <img
                        src={stage.image}
                        alt={stage.title}
                        loading="lazy"
                      />
                      <div className="stage-card-visual-overlay" />
                      <span className="stage-tag">{stage.tag}</span>
                      <span className="stage-watermark">{stage.number}</span>
                    </div>

                    <div className="stage-card-body">
                      <span className="stage-subtitle">{stage.subtitle}</span>
                      <h3 className="stage-title">{stage.title}</h3>
                      <p className="stage-description">{stage.description}</p>
                    </div>
                  </article>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const cardWidth = 344; // 320px width + 24px gap
export default LearningExperience;
