import Navbar from "../Navbar";
import Footer from "../Footer";
import OverallCourses from "../components/course-detail/OverallCourses";

function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <OverallCourses />
      </main>
      <Footer />
    </>
  );
}

export default CoursesPage;
