
import { useEffect, useState } from "react";
import "./Achievements.css";

const achievements = [
  {
    number: "500+",
    title: "Students Trained",
    badge: "Global",
    badgeType: "cyan",
    description:
      "Creative minds trained in broadcast-grade video editing & post-production."
  },
  {
    number: "50+",
    title: "Industry Projects",
    badge: "Commercial",
    badgeType: "orange",
    description:
      "Real-world editing, color grading, and commercial delivery completed."
  },
  {
    number: "95%",
    title: "Student Satisfaction",
    badge: "5-Star",
    badgeType: "green",
    description:
      "Consistently verified positive student reviews & career mentorship feedback."
  },
  {
    number: "5+",
    title: "Years of Excellence",
    badge: "Legacy",
    badgeType: "cyan",
    description:
      "Proven curriculum experience in film cutting & creative post-education."
  }
];

function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [exitingIndex, setExitingIndex] = useState(null);

  const totalSlides = achievements.length;
  const slideDuration = 3800;

  const changeSlide = (nextIndex) => {
    if (nextIndex === currentIndex) return;

    setExitingIndex(currentIndex);
    setCurrentIndex(nextIndex);
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + totalSlides) % totalSlides);
  };

  // Automatic sliding
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setExitingIndex(prev);
        return (prev + 1) % totalSlides;
      });
    }, slideDuration);

    return () => clearInterval(interval);
  }, [paused, currentIndex]);

  // Remove exiting slide after animation
  useEffect(() => {
    if (exitingIndex === null) return;

    const timeout = setTimeout(() => {
      setExitingIndex(null);
    }, 650);

    return () => clearTimeout(timeout);
  }, [exitingIndex]);

  return (
    <section className="achievements-section">

      {/* Achievement Card */}
      <div
        className="achievements-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div className="achievement-glow orange-glow"></div>
        <div className="achievement-glow cyan-glow"></div>

        {/* Top Meta Row */}
        <div className="achievement-meta">
          <div>
            <span className="meta-cyan">
              ACHV_REGISTRY // 04
            </span>
            <span className="meta-dot">•</span>
            <span>ACADEMY MILESTONES</span>
          </div>

          <div className="record-info">
            <span className="record-dot"></span>
            <span>
              REC [0{currentIndex + 1}/04]
            </span>
          </div>
        </div>

        {/* Sliding Content */}
        <div className="slide-wrapper">

          {achievements.map((item, index) => {
            const isActive = currentIndex === index;
            const isExiting = exitingIndex === index && !isActive;

            return (
              <div
                key={item.title}
                className={`slide-item
                  ${isActive ? "active" : ""}
                  ${isExiting ? "exiting" : ""}
                `}
                aria-hidden={!isActive}
              >

                <div className="achievement-number">
                  {item.number}
                </div>

                <div className="achievement-divider"></div>

                <div className="achievement-content">
                  <h3>
                    {item.title}

                    <span className={`achievement-badge ${item.badgeType}`}>
                      {item.badge}
                    </span>
                  </h3>

                  <p>{item.description}</p>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Controls */}
        <div className="achievement-controls">

          {/* Progress Indicators */}
          <div className="indicators">
            {achievements.map((item, index) => (
              <button
                key={item.title}
                className={`indicator-btn ${
                  currentIndex === index ? "selected" : ""
                }`}
                onClick={() => changeSlide(index)}
                aria-label={`Show ${item.title}`}
                aria-current={currentIndex === index ? "true" : undefined}
              >
                <span
                  className="bar-progress"
                  style={{
                    width: currentIndex === index ? "100%" : "0%"
                  }}
                ></span>
              </button>
            ))}
          </div>

          {/* Previous / Next */}
          <div className="arrow-controls">

            <button
              onClick={prevSlide}
              className="arrow-btn"
              aria-label="Previous achievement"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="arrow-btn"
              aria-label="Next achievement"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;
