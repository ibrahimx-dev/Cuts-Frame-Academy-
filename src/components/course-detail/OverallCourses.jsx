import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BarChart2 } from 'lucide-react';
import './OverallCourses.css';
import videoEditingImage from '../../assets/course-cards/video-editing.jpg';
import colorGradingImage from '../../assets/course-cards/color-grading.jpg';
import motionGraphicsImage from '../../assets/course-cards/motion-graphics.jpg';
import soundDesignImage from '../../assets/course-cards/sound-design.jpg';
import commercialEditingImage from '../../assets/course-cards/commercial-editing.jpg';
import vfxCompositingImage from '../../assets/course-cards/vfx-compositing.jpg';
import documentaryImage from '../../assets/course-cards/documentary-storytelling.jpg';
import resolveImage from '../../assets/course-cards/davinci-resolve.jpg';
import premiereImage from '../../assets/course-cards/premiere-mastery.jpg';
import freelanceImage from '../../assets/course-cards/freelance-post-production.jpg';

// INR prices converted from the previous USD list at ₹93.3461 per USD and rounded to ₹100.
export const COURSES_DATA = {
  "video-editing": {
    image: videoEditingImage,
    title: "Professional Video Editing Masterclass",
    category: "Video Editing",
    level: "Beginner to Advanced",
    duration: "12 Weeks (60+ Hours)",
    subtitle: "Master fundamental cuts, advanced pacing, audio mixing, and professional storytelling workflows used in top production studios.",
    software: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve"],
    price: "₹46,600",
    originalPrice: "₹74,600",
    description: "Designed for aspiring editors, this masterclass takes you from the absolute basics of timeline organization to cutting high-end commercial spots, short films, and digital content with professional polish."
  },
  "color-grading": {
    image: colorGradingImage,
    title: "Cinematic Color Grading & ACES",
    category: "Color Grading",
    level: "Intermediate",
    duration: "10 Weeks (50+ Hours)",
    subtitle: "Transform raw footage into breathtaking cinematic visuals. Learn color theory, primary/secondary balancing, and node-based grading.",
    software: ["DaVinci Resolve Studio", "ACES"],
    price: "₹51,200",
    originalPrice: "₹79,300",
    description: "Learn the science and art of color grading. Master DaVinci Resolve node trees, color spaces, skin tone isolation, and industry-standard ACES workflows for feature films and ads."
  },
  "motion-graphics": {
    image: motionGraphicsImage,
    title: "Motion Graphics & Visual Effects",
    category: "Motion Graphics",
    level: "Intermediate",
    duration: "14 Weeks (70+ Hours)",
    subtitle: "Bring static designs to life with dynamic motion, kinetic typography, 3D camera tracking, and high-end visual effects.",
    software: ["Adobe After Effects", "Cinema 4D Lite"],
    price: "₹55,900",
    originalPrice: "₹83,900",
    description: "Bridge the gap between design and motion. Learn advanced animation principles, expression coding, green screen keying, and VFX tracking used in Hollywood trailers."
  },
  "sound-design": {
    image: soundDesignImage,
    title: "Professional Audio & Sound Design",
    category: "Audio Post",
    level: "All Levels",
    duration: "6 Weeks (30+ Hours)",
    subtitle: "Sculpt immersive acoustic environments, clean dialogue, and mix cinematic soundtracks that elevate visual storytelling.",
    software: ["Adobe Audition", "Pro Tools", "Fairlight"],
    price: "₹37,200",
    originalPrice: "₹55,900",
    description: "Audio is 50% of the film experience. Learn dialogue cleanup, Foley recording, sound effects layering, and multi-channel mixing for cinematic impact."
  },
  "commercial-editing": {
    image: commercialEditingImage,
    title: "High-Impact Commercial & Brand Editing",
    category: "Video Editing",
    level: "Advanced",
    duration: "8 Weeks (40+ Hours)",
    subtitle: "Cut fast-paced brand anthems, social media ad campaigns, and high-conversion commercial media for global agencies.",
    software: ["Adobe Premiere Pro", "After Effects"],
    price: "₹42,000",
    originalPrice: "₹70,000",
    description: "Focus purely on commercial storytelling. Learn hook structures, rhythm matching for brand spots, client revision management, and fast agency turnaround habits."
  },
  "vfx-compositing": {
    image: vfxCompositingImage,
    title: "Advanced VFX & Compositing",
    category: "Visual Effects",
    level: "Advanced",
    duration: "12 Weeks (65+ Hours)",
    subtitle: "Master rotoscoping, wire removal, CGI integration, and multi-pass compositing for seamless visual effects shots.",
    software: ["Adobe After Effects", "Nuke Basics"],
    price: "₹60,600",
    originalPrice: "₹93,300",
    description: "Dive deep into the invisible art of visual effects. Learn advanced matte painting integration, matchmoving, and photorealistic CGI composition."
  },
  "documentary-storytelling": {
    image: documentaryImage,
    title: "Documentary Editing & Narrative Pacing",
    category: "Storytelling",
    level: "Intermediate",
    duration: "8 Weeks (35+ Hours)",
    subtitle: "Uncover narrative structure in massive raw interview archives and shape compelling, emotionally resonant documentary films.",
    software: ["Adobe Premiere Pro", "Avid Media Composer"],
    price: "₹39,200",
    originalPrice: "₹60,700",
    description: "Documentary editing is writing with footage. Learn how to structure long-form stories, manage transcripts, build dramatic tension, and pace interviews."
  },
  "davinci-resolve-pro": {
    image: resolveImage,
    title: "DaVinci Resolve Studio Masterclass",
    category: "Color & Finish",
    level: "All Levels",
    duration: "10 Weeks (50+ Hours)",
    subtitle: "An all-in-one deep dive into editing, Fusion VFX, Fairlight audio, and color grading inside the Resolve ecosystem.",
    software: ["DaVinci Resolve Studio"],
    price: "₹46,600",
    originalPrice: "₹74,600",
    description: "Master the entire post-production powerhouse. Transition from other NLEs and leverage Resolve's integrated page workflows for faster delivery."
  },
  "premiere-mastery": {
    image: premiereImage,
    title: "Adobe Premiere Pro Efficiency & Workflow",
    category: "Video Editing",
    level: "Beginner",
    duration: "6 Weeks (30+ Hours)",
    subtitle: "Eliminate repetitive tasks and streamline your editing process with advanced keyboard shortcuts, proxies, and automation.",
    software: ["Adobe Premiere Pro"],
    price: "₹32,600",
    originalPrice: "₹51,200",
    description: "Speed is king in professional editing. Learn advanced project organization, proxy workflows, dynamic linking, and collaborative team projects."
  },
  "freelance-post-production": {
    image: freelanceImage,
    title: "Freelance Business & Agency Workflow",
    category: "Career & Business",
    level: "All Levels",
    duration: "6 Weeks (25+ Hours)",
    subtitle: "Learn how to price your edits, pitch to production studios, build a killer showreel, and scale your freelance editing business.",
    software: ["Business & Client Management Tools"],
    price: "₹37,200",
    originalPrice: "₹55,900",
    description: "Turn your editing skills into a thriving business. Learn client acquisition, contract negotiation, portfolio optimization, and workflow client management."
  }
};

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <div className="courses-header-section">
        <div className="courses-container">
          <motion.span 
            className="courses-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ACADEMY CURRICULUM
          </motion.span>
          <motion.h1 
            className="courses-page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore Our Professional <span className="gold-accent">Creative Programs</span>
          </motion.h1>
          <motion.p 
            className="courses-page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Industry-crafted training programs designed to transform beginners and editors into high-demand post-production professionals.
          </motion.p>
        </div>
      </div>

      <div className="courses-container courses-grid-wrapper" id="course-catalog">
        <div className="courses-catalog-grid">
          {Object.entries(COURSES_DATA).map(([slug, course], index) => (
            <Link
              key={slug}
              to={`/courses/${slug}`}
              className="course-catalog-link"
            >
            <motion.div 
              className="course-catalog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="catalog-image-wrap">
                <img
                  className="catalog-image"
                  src={course.image}
                  alt={`${course.title} course preview`}
                  loading="lazy"
                />
              </div>
              <div className="catalog-card-header">
                <span className="catalog-category">{course.category}</span>
                <span className="catalog-level"><BarChart2 size={13} /> {course.level}</span>
              </div>

              <h3 className="catalog-title">{course.title}</h3>

              <div className="catalog-meta">
                <span className="catalog-duration">
                  <Clock size={14} />
                  {course.duration.match(/\(([^)]+)\)/)?.[1] ?? course.duration}
                </span>
                <div className="catalog-pricing">
                  <span className="catalog-price">{course.price}</span>
                </div>
              </div>

              <div className="catalog-software-list">
                {course.software.map((software) => (
                  <span key={software} className="catalog-sw-pill">{software}</span>
                ))}
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
