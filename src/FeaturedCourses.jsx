
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./FeaturedCourses.css";
import videoEditingImage from "./assets/course-cards/video-editing.jpg";
import colorGradingImage from "./assets/course-cards/color-grading.jpg";
import motionGraphicsImage from "./assets/course-cards/motion-graphics.jpg";
import commercialEditingImage from "./assets/course-cards/commercial-editing.jpg";

const courses = [
  {
    id: 1,
    slug: "video-editing",
    number: "01",
    category: "VIDEO EDITING",
    title: "Professional Video Editing",
    description:
      "Learn professional editing techniques, transitions, storytelling and create videos that stand out.",
    level: "Beginner to Advanced",
    duration: "8 Weeks",
    image: videoEditingImage,
    software: "Adobe Premiere Pro",
  },
  {
    id: 2,
    slug: "color-grading",
    number: "02",
    category: "COLOR GRADING",
    title: "Cinematic Color Grading",
    description:
      "Master cinematic looks, color correction and professional grading workflows for stunning visuals.",
    level: "Intermediate",
    duration: "6 Weeks",
    image: colorGradingImage,
    software: "DaVinci Resolve",
  },
  {
    id: 3,
    slug: "motion-graphics",
    number: "03",
    category: "MOTION GRAPHICS",
    title: "Motion Graphics & Visual Effects",
    description:
      "Master cinematic looks, color correction and professional grading workflows for stunning visuals.",
    level: "Intermediate",
    duration: "6 Weeks",
    image: motionGraphicsImage,
    software: "After Effects",
  },
  {
    id: 4,
    slug: "video-editing",
    number: "04",
    category: "VIDEO EDITING",
    title: "High-Impact Commercial & Brand Editing",
    description: "Cut fast-paced brand anthems, social media ad campaigns, and high-conversion commercial media for global agencies.",
    level: "Advanced",
    duration: "8 Weeks",
    image: commercialEditingImage,
    software: "Adobe Premiere Pro, After Effects",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function FeaturedCourses() {
  return (
    <section className="featured-section" id="courses">
      <div className="featured-container">

        {/* Section Heading */}
        <motion.div
          className="featured-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="featured-label"
            variants={fadeUpVariants}
          >
            <span className="label-line"></span>
            OUR PROGRAMS
          </motion.span>

          <motion.h3 variants={fadeUpVariants}>
            Learn. Create.
            <span> Inspire.</span>
          </motion.h3>

          <motion.p variants={fadeUpVariants}>
            Explore our carefully designed courses and turn your
            creative passion into professional editing skills.
          </motion.p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.slug}`}
              className="course-card-link"
            >
            <motion.article
              className="course-card"
              variants={fadeUpVariants}
              whileHover={{
                scale: 1.15,
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="course-image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                  loading="lazy"
                />

                <span className="course-number">
                  {course.number}
                </span>

                <span className="course-category">
                  {course.category}
                </span>
              </div>

              <div className="course-content">
                <span className="course-software">
                  {course.software}
                </span>

                <h3>{course.title}</h3>

                <p className="course-description">
                  {course.description}
                </p>

                <div className="course-details">
                  <span>
                    <span className="detail-dot"></span>
                    {course.level}
                  </span>

                  <span>{course.duration}</span>
                </div>

                <span className="course-link">
                  Explore Course
                  <span>↗</span>
                </span>
              </div>
            </motion.article>
            </Link>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          className="featured-footer"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link to="/courses#course-catalog" className="all-courses-btn">
            Explore All Courses
            <span>→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedCourses;
