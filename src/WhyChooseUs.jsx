
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import "./WhyChooseUs.css";
import industryTrainingImage from "./assets/industry-training.jpg";
import realProjectsImage from "./assets/real-projects.jpg";
import portfolioImage from "./assets/portfolio.jpg";
import realSoftwareImage from "./assets/real-software.jpg";

const features = [
  {
    id: "01",
    title: "Industry-Level Training",
    description:
      "Learn professional editing workflows used in real production environments. Develop the creative and technical skills needed to produce high-quality visual content.",
    image: industryTrainingImage,
    tag: "PROFESSIONAL LEARNING",
  },
  {
    id: "02",
    title: "Hands-on Real Projects",
    description:
      "Go beyond theory and work on practical editing projects. Apply your knowledge to real-world creative challenges and gain confidence through experience.",
    image: realProjectsImage,
    tag: "LEARN BY DOING",
  },
  {
    id: "03",
    title: "Portfolio Development",
    description:
      "Build a professional portfolio featuring your best creative work. Showcase your editing abilities to potential clients, production houses and studios.",
    image: portfolioImage,
    tag: "SHOWCASE YOUR TALENT",
  },
  {
    id: "04",
    title: "Industry-Standard Software",
    description:
      "Get familiar with the professional tools used across the creative industry, including Adobe Premiere Pro, After Effects and DaVinci Resolve.",
    image: realSoftwareImage,
    tag: "MASTER THE TOOLS",
  },
];

function FeatureItem({ feature }) {
  return (
    <motion.article
      className="why-feature-item"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <span className="why-feature-number">
        {feature.id}
      </span>

      <span className="why-feature-tag">
        {feature.tag}
      </span>

      <h3>{feature.title}</h3>

      <p>{feature.description}</p>

      <div className="why-feature-line"></div>
    </motion.article>
  );
}

function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState("01");

  useEffect(() => {
    let frame = 0;

    const updateActiveFeature = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const items = document.querySelectorAll(".why-feature-trigger[data-feature-id]");
        const viewportCenter = window.innerHeight / 2;
        let centeredId = null;

        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom > viewportCenter) {
            centeredId = item.dataset.featureId;
          }
        });

        if (centeredId) setActiveFeature(centeredId);
      });
    };

    updateActiveFeature();
    window.addEventListener("scroll", updateActiveFeature, { passive: true });
    window.addEventListener("resize", updateActiveFeature);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveFeature);
      window.removeEventListener("resize", updateActiveFeature);
    };
  }, []);

  const active = features.find(
    (feature) => feature.id === activeFeature
  );

  return (
    <section className="why-section" id="why-us">
      <div className="why-container">

        {/* Section Heading */}
        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <span className="why-eyebrow">
            THE CUTS & FRAMES DIFFERENCE
          </span>

          <h3>
            More Than Just
            <span> Editing.</span>
          </h3>

          <p>
            We don't just teach you how to edit.
            We help you develop the skills, creativity
            and confidence to stand out.
          </p>
        </motion.div>

        {/* Sticky Image + Scroll Content */}
        <div className="why-scroll-layout">

          {/* Sticky Image */}
          <div className="why-visual-column">
            <div className="why-sticky-visual">

              <div className="why-image-frame">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.id}
                    src={active.image}
                    alt={active.title}
                    className="why-main-image"
                    initial={{
                      clipPath: "inset(0 100% 0 0)",
                      scale: 1.08,
                    }}
                    animate={{
                      clipPath: "inset(0 0% 0 0)",
                      scale: 1,
                    }}
                    exit={{
                      clipPath: "inset(0 0 0 100%)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                </AnimatePresence>

                <div className="why-image-overlay"></div>

                <div className="why-image-caption">
                  <span>WHY CUTS & FRAMES</span>
                  <h3>{active.title}</h3>
                </div>

                <div className="why-image-counter">
                  <span>{active.id}</span>
                  <span>/ 04</span>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="why-progress">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`why-progress-item ${
                      activeFeature === feature.id
                        ? "active"
                        : ""
                    }`}
                  >
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Scroll Content */}
          <div className="why-content-column">
            <div className="why-feature-triggers" aria-hidden="true">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="why-feature-trigger"
                  data-feature-id={feature.id}
                />
              ))}
            </div>
            <div className="why-content-sticky">
              <AnimatePresence mode="wait" initial={false}>
                <FeatureItem key={active.id} feature={active} />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
