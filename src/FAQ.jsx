import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    id: '01',
    question: 'Do I need any prior experience in video editing?',
    answer: 'No prior experience is required. Our training is designed for beginners as well as those who want to improve their existing editing skills.',
  },
  {
    id: '02',
    question: 'What software will I learn?',
    answer: "You'll learn industry-standard tools such as Adobe Premiere Pro, Adobe After Effects, and DaVinci Resolve.",
  },
  {
    id: '03',
    question: 'Will I work on real-world projects?',
    answer: "Yes! You'll work on practical projects and creative assignments to apply what you learn throughout the training.",
  },
  {
    id: '04',
    question: 'Will I receive a certificate after completing the course?',
    answer: 'Yes, students who successfully complete the program will receive a course completion certificate.',
  },
  {
    id: '05',
    question: 'Can I build a professional portfolio during the course?',
    answer: "Absolutely! You'll create practical projects that can be included in your portfolio to showcase your editing skills and creativity.",
  },
  {
    id: '06',
    question: 'Do I need my own laptop or computer?',
    answer: 'A laptop or desktop capable of running professional video editing software is recommended. Specific system requirements depend on the software you use.',
  },
  {
    id: '07',
    question: 'Will I get career guidance after completing the course?',
    answer: 'Yes, we aim to help students prepare for creative career opportunities through portfolio development, industry insights and career guidance.',
  },
  {
    id: '08',
    question: 'How can I enroll in the academy?',
    answer: 'You can contact our team through the enquiry form or contact details on our website. Our team will guide you through the enrollment process.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Section Header */}
        <div className="faq-header">
          <motion.span 
            className="faq-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.span>
          <motion.h2 
            className="faq-main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything You Need to Know <span className="gold-accent">Before Starting</span>
          </motion.h2>
          <motion.p 
            className="faq-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Got questions about our curriculum, software, or enrollment process? Find your answers below.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={item.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-id">{item.id}</span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className={`faq-icon ${isOpen ? 'rotate' : ''}`}>+</span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer-content">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;