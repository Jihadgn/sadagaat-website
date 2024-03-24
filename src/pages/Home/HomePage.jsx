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
import LazyLoad from 'react-lazy-load'; 

function Home() {

  return (
    <>
      <div className="main">
        <FixedButton />
        <TopBar />
        <NavBar />
        <MainSlider />
        <Hubs />
        <About />
        <LazyLoad once={true}>
        <ProjectsSlider />
        </LazyLoad> 
        <LazyLoad once={true}>
        <ProjectsStatistics />
        </LazyLoad>
        <LazyLoad once={true}>
        <Partners />
        </LazyLoad>
        <LazyLoad once={true}>
        <PhotoGallary />
        </LazyLoad>
        <Video />
        <LazyLoad once={true}>
        <NewsAndEvents />
        </LazyLoad>
        <Volunteering />
        <Footer />
      </div>
    </>
  )
}

export default Home
