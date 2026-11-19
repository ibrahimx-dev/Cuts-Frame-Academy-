
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isGlossy, setIsGlossy] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const updateGlossyState = () => {
      const frameSequence = document.querySelector(".frame-scroll");
      const sequenceFinished = frameSequence
        ? frameSequence.getBoundingClientRect().bottom <= window.innerHeight + 1
        : window.scrollY > 40;
      setIsGlossy(window.scrollY > 40 && sequenceFinished);
    };

    const handleScroll = () => {
      updateGlossyState();
      setIsScrolling(true);
      window.clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => setIsScrolling(false), 160);
    };

    window.addEventListener("scroll", handleScroll);
    updateGlossyState();
    window.addEventListener("resize", updateGlossyState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateGlossyState);
      window.clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <header className={`main-nav ${isGlossy ? "glossy" : ""} ${isScrolling ? "is-scrolling" : ""}`}>
      <div className="nav-container">

        {/* Brand Logo */}
        <a href="#hero" className="brand-logo">
          <div className="logo-circle">
            <div className="logo-inner">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#FF5722" />
                <line x1="14.31" y1="8" x2="20.05" y2="17.94" stroke="#00E5FF" />
                <line x1="9.69" y1="8" x2="21.17" y2="8" stroke="#FF5722" />
                <line x1="7.38" y1="12" x2="13.12" y2="2.06" stroke="#00E5FF" />
                <line x1="9.69" y1="16" x2="3.95" y2="6.06" stroke="#FF5722" />
                <line x1="14.31" y1="16" x2="2.83" y2="16" stroke="#00E5FF" />
                <line x1="16.62" y1="12" x2="10.88" y2="21.94" stroke="#FF5722" />
              </svg>
            </div>
          </div>

          <div className="brand-text">
            <span>
              Cuts <span className="orange">&</span> Frames
            </span>
            <small>ACADEMY • PRO POST</small>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="nav-pill">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/courses#course-catalog">Courses</Link>
            <Link to="/#about-us">About Us</Link>
            <Link to="/#instructors">Mentors</Link>
          </div>

          <div className="nav-divider"></div>

          <a href="#enroll" className="nav-cta">
            Enroll Now
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M7 7h10v10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
