import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Wash from "./pages/Hubs/WashPage";
import Health from "./pages/Hubs/HealthPage";
import Education from "./pages/Hubs/EducationPage";
import Feeding from "./pages/Hubs/FeedingPage";
import SinglSubHub from "./pages/SubHubs/SinglSubHub";
import AboutUs from "./pages/SubPages/AboutUs";
import Projects from "./pages/Projects/Ongoing";
import Planned from "./pages/Projects/Planned";
import SingleProject from "./pages/Projects/SingleProject";
import Donate from "./pages/SubPages/Donate";
import Rrgisteration from "./pages/SubPages/Registration";
import Volunteers from "./pages/SubPages/AboutVolunteers";
import Careers from "./pages/SubPages/Careers";
import Events from "./pages/SubPages/Events";
import News from "./pages/SubPages/News";
import SingleNews from "./pages/SubPages/SingleNews";
import Gallery from "./pages/SubPages/Gallery";
import Contact from "./pages/SubPages/Contact";
import VolunteersPrograms from "./pages/SubPages/VolunteersPrograms";
import Learning from "./pages/SubPages/Learning"
import CourseForm from "./pages/SubPages/CourseForm";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/volunteerForm",
    element: <Rrgisteration />,
  },
  {
    path: "/volunteers",
    element: <Volunteers />,
  },
  {
    path: "/volunteers-programs",
    element: <VolunteersPrograms />
  },
  {
    path: "/sudanese-learning-hub",
    element: <Learning />
  },
  {
    path: "/course-form",
    element: <CourseForm />
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <SingleNews />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/ongoin-projects",
    element: <Projects />,
  },
  {
    path: "/planned-projects",
    element: <Planned />,
  },
  {
    path: "/single-project/:id",
    element: <SingleProject />
  },
  {
    path: "/wash",
    element: <Wash />,
  },
  {
    path: "/feeding",
    element: <Feeding />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/health",
    element: <Health />,
  },
  {
    path: "/single-subhub/:subhub_id",
    element: <SinglSubHub />,
  },
]);

export default router;
