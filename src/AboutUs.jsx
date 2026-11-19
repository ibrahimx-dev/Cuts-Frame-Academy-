import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const ABOUT_US_CARDS = [
  {
    id: '01',
    icon: '⚡',
    title: 'Our Story',
    category: 'Who We Are',
    description:
      'Cuts & Frames Academy is a creative learning space for people who want to understand how thoughtful editing shapes the way a story is seen and felt.',
    highlight: 'A home for post-production',
  },
  {
    id: '02',
    icon: '🎬',
    title: 'Our Focus',
    category: 'What We Teach',
    description:
      'We teach the craft of video editing and post-production, including color grading, motion graphics, visual effects, and sound design.',
    highlight: 'Editing, color, motion, sound',
  },
  {
    id: '03',
    icon: '📜',
    title: 'Our Approach',
    category: 'How We Teach',
    description:
      'We connect creative decision-making with the tools and workflows used in post-production, helping learners understand both how to edit and why each choice matters.',
    highlight: 'Craft and technique together',
  },
  {
    id: '04',
    icon: '🚀',
    title: 'Our Community',
    category: 'What We Value',
    description:
      'We bring curious learners and experienced creatives together to share ideas, give thoughtful feedback, and keep growing their craft.',
    highlight: 'A place to learn together',
  },
];

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-container">
        {/* Section Header */}
        <div className="about-us-header">
          <motion.span 
            className="about-us-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ABOUT CUTS &amp; FRAMES
          </motion.span>
          <motion.h2 
            className="about-us-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <span className="gold-accent">Cuts &amp; Frames Academy</span>
          </motion.h2>
          <motion.p 
            className="about-us-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help aspiring editors and post-production artists develop the creative judgment and technical understanding to bring stories to life, one frame at a time.
          </motion.p>
        </div>

        {/* About Us cards with scroll reveal */}
        <div className="about-us-grid">
          {ABOUT_US_CARDS.map((item, index) => (
            <motion.article 
              key={item.id}
              className="about-us-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="about-us-card-top">
                <span className="about-us-icon">{item.icon}</span>
                <span className="about-us-number">{item.id}</span>
              </div>

              <div className="about-us-card-body">
                <span className="about-us-category">{item.category}</span>
                <h3 className="about-us-card-title">{item.title}</h3>
                <p className="about-us-description">{item.description}</p>
              </div>

              <div className="about-us-card-footer">
                <span className="about-us-highlight">✓ {item.highlight}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
