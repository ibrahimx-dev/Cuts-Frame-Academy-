
import Hero from "../Hero";
import Navbar from "../Navbar";
import FeaturedCourses from "../FeaturedCourses";
import WhyChooseUs from "../WhyChooseUs";
import LearningExperience from "../LearningExperience";
import InstructorSpotlight from "../InstructorSpotlight";
import AboutUs from "../AboutUs";
import StudentSuccess from "../StudentSuccess";
import FAQ from "../FAQ";
import Footer from "../Footer";

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedCourses />
            <WhyChooseUs />
            <LearningExperience />
            <InstructorSpotlight />
            <StudentSuccess />
            <AboutUs />
            <FAQ />
            <Footer />
        </>
    );
}

export default HomePage;
