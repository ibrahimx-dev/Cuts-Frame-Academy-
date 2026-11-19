import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container ">
        {/* Top Grid Area */}
        <div className="footer-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              CUTS & FRAMES <span className="gold-accent">ACADEMY</span>
            </div>
            <p className="footer-bio">
              Master the art of professional video editing, color grading, and motion graphics through industry workflows and real-world project mentorship.
            </p>
            <div className="footer-socials">
              <a href="#youtube" aria-label="YouTube" className="social-icon"><i className="bi bi-youtube" aria-hidden="true" /></a>
              <a href="#instagram" aria-label="Instagram" className="social-icon"><i className="bi bi-instagram" aria-hidden="true" /></a>
              <a href="#vimeo" aria-label="Vimeo" className="social-icon"><i className="bi bi-vimeo" aria-hidden="true" /></a>
              <a href="#linkedin" aria-label="LinkedIn" className="social-icon"><i className="bi bi-linkedin" aria-hidden="true" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#learning-experience">Learning Journey</a></li>
              <li><a href="#instructors">Instructors</a></li>
              <li><a href="#success-stories">Success Stories</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Creative Disciplines */}
          <div className="footer-col">
            <h4 className="footer-heading">Programs</h4>
            <ul className="footer-links">
              <li><a href="#courses">Video Editing Masterclass</a></li>
              <li><a href="#courses">Color Grading & ACES</a></li>
              <li><a href="#courses">Motion Graphics Pro</a></li>
              <li><a href="#courses">Raw Footage Labs</a></li>
              <li><a href="#courses">Studio Mentorship</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="newsletter-desc">
              Get industry tips, editing tutorials, and academy updates directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            {subscribed && (
              <motion.span 
                className="success-message"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✨ Thank you for subscribing!
              </motion.span>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Cuts & Frames Academy. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
