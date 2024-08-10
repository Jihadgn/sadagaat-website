import React from "react";
import About from "./About";
import MainSlider from "./MainSlider";
import Hubs from './Hubs';
import ProjectsSlider from './ProjectsSlider';
import ProjectsStatistics from './ProjectsStatistics';
import Partners from './Partners';
import PhotoGallary from './PhotoGallary';
import Video from './Video';
import NewsAndEvents from './NewsAndEvents';
import TopBar from './TopBar';
import NavBar from './NavBar';
import FixedButton from './FixedButton';
import Volunteering from './Volunteering';
import Footer from './Footer';

function Home() {

  return (
    <>
      <div className="main bg-white ">
        <FixedButton />
        <TopBar />
        <NavBar />
        <MainSlider />
        <Hubs />
        <About />
        <ProjectsSlider />
        <ProjectsStatistics />
        <Partners />
        <PhotoGallary />
        <Video />
        <NewsAndEvents />
        <Volunteering />
        <Footer />
      </div>
    </>
  )
}

export default Home
