import {
  Footer,
  Navbar,
  Carousel,
  Button,
  Progress,
  Card,
} from 'flowbite-react';
import React from "react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const secSettings = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false
  };

  return (
    <>
      <div className="main">
        {/* navbar */}
        <section className="px-4 py-6 top h-50">
          <div>fdfdf</div>
          <div>fvsnlknsnd</div>
        </section>
        <section className="px-4 bg-white nav">
          <Navbar className="container items-center">
            <Navbar.Brand href="# ">
              <img className="w-40 h-20" src="public/1-header.png" alt=""></img>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link className="text-lg" href="#" active>
                Home
              </Navbar.Link>
              <Navbar.Link className="text-lg" href="#">About Us</Navbar.Link>
              <Navbar.Link className="text-lg" href="#">Sectors</Navbar.Link>
              <Navbar.Link className="text-lg" href="#">Projects</Navbar.Link>
              <Navbar.Link className="text-lg" href="#">Media</Navbar.Link>
              <Navbar.Link className="text-lg" href="#">Volunteers</Navbar.Link>
              <Navbar.Link className="text-lg" href="#">How To Be Involved</Navbar.Link>
              <Navbar.Link >
                <div className=" order-2 px-4">
                  <Button className="bg-green-500">Donate
                  </Button>
                </div>
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </section>
        {/* Carousel */}
        <section className="pb-10 bg-white">
          <div className="">
            <div className="h-90 sm:h-64 xl:h-90 2xl:h-96 pt-9">
              <Carousel>
                <img className="w-full h-full" src="public/slide1.png" alt="..." />
                <img className="w-full h-full" src="public/slide2.png" alt="..." />
                <img className="w-full h-full" src="public/slide3.png" alt="..." />
                <img className="w-full h-full" src="public/slide4.png" alt="..." />
              </Carousel>
            </div>
          </div>
        </section>
        {/* projects cards */}
        <section className="pt-10 pb-10 grid grid-cols-12 bg-white">
          <div></div>
          <div className="pt-9 col-span-10 grid lg:grid-cols-4 md:grid-cols-2 xs  :grid-cols-2">
            <a href="#" className="curser-pointer">
              <img src="src/assets/1.png" className="w-auto h-auto" alt="" />
            </a>
            <a href="#" className="curser-pointer">
              <img src="src/assets/2.png" className="w-auto h-auto" alt="" />
            </a>
            <a href="#" className="curser-pointer">
              <img src="src/assets/3.png" className="w-auto h-auto" alt="" />
            </a>
            <a href="#" className="curser-pointer">
              <img src="src/assets/4.png" className="w-auto h-auto" alt="" />
            </a>
          </div>
        </section>
        {/* about Sadagaat */}
        <section className="pt-10 pb-10 grid grid-cols-12 bg-white">
          <div></div>
          <div className="col-span-10 grid xl:grid-cols-2 md:grid-cols-1 pt-8">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
              <div className="border-1 w-full ">
                <img className="w-auto " src="src/assets/r.png" alt="" />
              </div>
              <div className="grid grid-rows-2 sm:hidden md:block border-1 w-full h-full ">
                <div className="border-1 w-full">
                  <img className="w-auto" src="src/assets/l1.png" alt="" />
                </div>
                <div className="border-1 w-full">
                  <img className="w-auto pt-3" src="src/assets/l2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="text-black px-4 xl:pt-0 md:pt-6 sm:pt-6">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">ABOUT SADAGAAT</h1>
              <p className="pt-7 font-normal text-gray-700">
                Sadagaat Charity organazation is a registered charity of the Voluntary and
                Humanitarian Action Commission, which has been active in assisting vulnerable
                groups for more than 15 years, during which many successful projects, whether
                seasonal or ongoing, have been implemented through the support of
                philanthropists from within and outside Sudan, Under 4 Divisions: Feeding, Health,
                Wash, and Education. The implementation of these projects is by an integrated
                administrative body, starting with membership in the Sadagaat community and ending
                with an executive unit that directly supervises daily activities. The small
                executive body that implements the projects depends on: Administrative
                competence in coordination and scientific methodology.
              </p>
              <div className="grid grid-cols-4 gap-2 pt-6">
                <button className="bg-white border-black text-blue-900 py-3">Read More</button>
                <button className="btn border-black text-white px-7 py-3">Donate</button>
              </div>
            </div>
          </div>
        </section>
        {/* our projects */}
        <section className=" pt-10 pb-10 grid grid-cols-12 text-center bg-gray-100 ">
          <div></div>
          <div className="col-span-10">
            <span className="text-3xl font-bold tracking-tight text-gray-900 px-2">OUR </span>
            <span className="text-3xl font-bold tracking-tight text-blue-800 "> PROJECTS </span>
            <div className="pt-9">
              <Slider {...settings}>
                <Card className="max-w-md text-gray-900">
                  <div className="w-auto h-auto"><img src="src/assets/l2.png" alt="" /></div>
                  <div className="grid grid-cols-2 pt-1">
                    <h3 className="text-left text-lg font-bold">Raised :  140 </h3>
                    <h3 className="text-right text-lg font-bold">Target :  18,810 </h3>
                  </div>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-lg font-bold pt-1">Project Progress</h2>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-xl font-bold pt-1">Distributing Food Package for 70 families in Shendi</h2>
                  <h2 className="text-left text-md font-normal">
                    The project aims to distribute bags containing food supplies
                    to 100 families in the city of Shendi
                  </h2>
                  <div className="items-center px-4 pt-1">
                    <button className="bg-white border-2 border-gray-900 rounded-0">Donate
                    </button>
                  </div>
                </Card>
                <Card className="max-w-md text-gray-900">
                  <div className="w-auto h-auto"><img src="src/assets/l2.png" alt="" /></div>
                  <div className="grid grid-cols-2 pt-1">
                    <h3 className="text-left text-lg font-bold">Raised :  140 </h3>
                    <h3 className="text-right text-lg font-bold">Target :  18,810 </h3>
                  </div>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-lg font-bold pt-1">Project Progress</h2>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-xl font-bold pt-1">Distributing Food Package for 70 families in Shendi</h2>
                  <h2 className="text-left text-md font-normal">
                    The project aims to distribute bags containing food supplies
                    to 100 families in the city of Shendi
                  </h2>
                  <div className="items-center px-4 pt-1">
                    <button className="bg-white border-2 border-gray-900 rounded-0">Donate
                    </button>
                  </div>
                </Card>
                <Card className="max-w-md text-gray-900">
                  <div className="w-auto h-auto"><img src="src/assets/l2.png" alt="" /></div>
                  <div className="grid grid-cols-2 pt-1">
                    <h3 className="text-left text-lg font-bold">Raised :  140 </h3>
                    <h3 className="text-right text-lg font-bold">Target :  18,810 </h3>
                  </div>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-lg font-bold pt-1">Project Progress</h2>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-xl font-bold pt-1">Distributing Food Package for 70 families in Shendi</h2>
                  <h2 className="text-left text-md font-normal">
                    The project aims to distribute bags containing food supplies
                    to 100 families in the city of Shendi
                  </h2>
                  <div className="items-center px-4 pt-1">
                    <button className="bg-white border-2 border-gray-900 rounded-0">Donate
                    </button>
                  </div>
                </Card>
                <Card className="max-w-md text-gray-900">
                  <div className="w-auto h-auto"><img src="src/assets/l2.png" alt="" /></div>
                  <div className="grid grid-cols-2 pt-1">
                    <h3 className="text-left text-lg font-bold">Raised :  140 </h3>
                    <h3 className="text-right text-lg font-bold">Target :  18,810 </h3>
                  </div>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-lg font-bold pt-1">Project Progress</h2>
                  <div className="progress">
                    <Progress progress={80} size="lg" labelProgress color="gray" />
                  </div>
                  <h2 className="text-left text-xl font-bold pt-1">Distributing Food Package for 70 families in Shendi</h2>
                  <h2 className="text-left text-md font-normal">
                    The project aims to distribute bags containing food supplies
                    to 100 families in the city of Shendi
                  </h2>
                  <div className="items-center px-4 pt-1">
                    <button className="bg-white border-2 border-gray-900 rounded-0">Donate
                    </button>
                  </div>
                </Card>
              </Slider>
            </div>
          </div>
        </section>
        {/* projects fixed background */}
        <section className="fixedBackGround pt-6 pb-6 pb-10 grid grid-cols-12 text-center ">
          <div></div>
          <div className="col-span-10 text-gray-900 grid grid-cols-5 pt-5 pb-5 text-center">
            <div className="pt-5">
              <h2 className="grid grid-cols-9 justify-content-center">
                <div className="col-span-4"></div>
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                </svg>
              </h2>
              <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white"> 19 </h2>
              <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white"> COMPLETED PROJECTS </h2>
            </div>
            <div className="pt-5 pb-6">
              <h2 className="grid grid-cols-9 justify-content-center">
                <div className="col-span-4"></div>
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                </svg>
              </h2>
              <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">19 </h2>
              <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">ONGOING PROJECTS </h2>
            </div>
            <div className="pt-5 pb-6">
              <h2 className="grid grid-cols-9 justify-content-center">
                <div className="col-span-4"></div>
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                </svg>
              </h2>
              <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">19 </h2>
              <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">PLANNED PROJECTS </h2>
            </div>
            <div className="pt-5 pb-6">
              <h2 className="grid grid-cols-9 justify-content-center">
                <div className="col-span-4"></div>
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                </svg>
              </h2>
              <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">19 </h2>
              <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">DONERS </h2>
            </div>
            <div className="pt-5 pb-6">
              <h2 className="grid grid-cols-9 justify-content-center">
                <div className="col-span-4"></div>
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                </svg>
              </h2>
              <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">19 </h2>
              <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">VOLUNTEERS </h2>
            </div>

          </div>
        </section>
        {/* our Partners */}
        <section className=" pt-10 pb-10 grid grid-cols-12 text-center bg-gray-100 ">
          <div></div>
          <div className="col-span-10">
            <span className="text-3xl font-bold tracking-tight text-gray-900 px-2">OUR </span>
            <span className="text-3xl font-bold tracking-tight text-blue-800 "> PARTNERS </span>
            <div className="pt-9">
              <Slider {...secSettings}>
                <div className="px-4 "><img src="src/assets/partners/1.png" alt="" /></div>
                <div className="px-4 "><img src="src/assets/partners/2.png" alt="" /></div>
                <div className="px-4 "><img src="src/assets/partners/3.png" alt="" /></div>
                <div className="px-4 "><img src="src/assets/partners/4.png" alt="" /></div>
                <div className="px-4 "><img src="src/assets/partners/5.png" alt="" /></div>
                <div className="px-4 "><img src="src/assets/partners/6.png" alt="" /></div>
                <div className="px-4 "><img src="src/assets/partners/7.png" alt="" /></div>
                <div className="px-4 "><img src="src/assets/partners/8.png" alt="" /></div>
              </Slider>
            </div>
          </div>
        </section>
        {/* Photo Gallery */}
        <section className="pt-10 pb-10 grid grid-cols-12 text-center bg-white  ">
          <div></div>
          <div className="col-span-10">

            <span className="text-3xl font-bold tracking-tight text-gray-900 px-2">PHOTO </span>
            <span className="text-3xl font-bold tracking-tight text-blue-800 "> GALLARY </span>
            <div className="grid grid-cols-3 px-10 pt-9">
              <div className="h-auto h-auto px-4"><img src="src/assets/image1.jpeg" alt="" /></div>
              <div className="h-auto h-auto px-4"><img src="src/assets/image2.jpeg" alt="" /></div>
              <div className="h-auto h-auto px-4"><img src="src/assets/image3.jpeg" alt="" /></div>
            </div>
            <div className="items-center px-4 pt-5  ">
              <button className="btn text-white rounded-0">More Images
              </button>
            </div>
          </div>
        </section>
        {/* Video */}
        <section className="pt-10 pb-10 text-center fixedBackGround">
          <div className="pt-10 pb-10 grid grid-cols-9 justify-content-center " >
            <div className="col-span-4"></div>
            <a href="#" className="cursor-pointer ">
              <svg className="w-24 h-24 p-3 col-span-1 rounded-full border-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 18V6l8 6-8 6Z" />
              </svg>
            </a>
          </div>
          <h2 className="text-xl font-bold pb-4 text-white  ">
            We always provide our best solutions for our community and achieve our society's trust and satisfaction.
          </h2>
        </section>
        {/* Events and News */}
        <section className="pt-10 pb-10 grid grid-cols-12 bg-white">
          <div></div>
          <div className="col-span-10 grid xl:grid-cols-2 md:grid-cols-1 pt-8">
            <div>
              <h2 className="text-left text-3xl font-bold pb-4 text-gray-900 ">EVENTS</h2>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
                <div className="border-1 w-full ">
                  <img className="w-auto " src="src/assets/r.png" alt="" />
                </div>
                <div className="grid grid-rows-2 sm:hidden md:block border-1 w-full h-full ">
                  <div className="border-1 w-full">
                    <img className="w-auto" src="src/assets/l1.png" alt="" />
                  </div>
                  <div className="border-1 w-full">
                    <img className="w-auto pt-3" src="src/assets/l2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-left text-3xl font-bold pb-4 pl-8 text-gray-900 ">Latest News and Impact stories</h2>
              <div className="text-black px-4 xl:pt-0 md:pt-6 sm:pt-6">
                <p className=" font-normal text-gray-700">
                  Sadagaat Charity organazation is a registered charity of the Voluntary and
                  Humanitarian Action Commission, which has been active in assisting vulnerable
                  groups for more than 15 years, during which many successful projects, whether
                  seasonal or ongoing, have been implemented through the support of
                  philanthropists from within and outside Sudan, Under 4 Divisions: Feeding, Health,
                  Wash, and Education. The implementation of these projects is by an integrated
                  administrative body, starting with membership in the Sadagaat community and ending
                  with an executive unit that directly supervises daily activities. The small
                  executive body that implements the projects depends on: Administrative
                  competence in coordination and scientific methodology.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Volunteering */}
        <section className="pt-10 pb-10 grid grid-cols-12  fixedBackGround2">
          <div></div>
          <div className="col-span-10 grid xl:grid-cols-4 md:grid-cols-4 xs:grid-cols-1 pt-8">
            <h2 className="col-span-3  text-2xl font-bold text-blue-900">Join Us Now As Volunteer</h2>
            <button className="fixedBackGround2 border-black border-2 rounded-full text-blue-900 py-3 hover:bg-blue-700 hover:text-white text-lg font-bold"> Become a Volunteer</button>
          </div>
        </section>
        {/* footer */}
        <section className="pt-10 pb-10 footer">
          <div className="grid grid-cols-12">
            <div></div>
            <div className="col-span-10 grid xl:grid-cols-4 md:grid-cols-4 xs:grid-cols-2 pt-8 pb-8 px-10   gap-9">
              <div>
                <h1 className="text-2xl font-bold text-white">SADAGAAT</h1>
                <h2 className="text-md pt-5 font-bold text-white" >مجتمع_فكرة #</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                  <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                  <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                  
                  </a>
                  <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">

                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-md font-bold text-white">Sectors</h2>
                <div className="grid grid-cols-2  pt-3">
                  <hr />
                </div>
                <div className="pt-5">
                  <a href="" className="text-md text-white hover:text-gray-400 pt-6">WASH Sector</a>
                  <hr className="hrNew" />
                </div>
                <div className="pt-5">
                  <a href="" className="text-md text-white hover:text-gray-400 pt-6">Health Sector</a>
                  <hr className="hrNew" />
                </div>
                <div className="pt-5">
                  <a href="" className="text-md text-white hover:text-gray-400 pt-6">Feeding Sector</a>
                  <hr className="hrNew" />
                </div>
                <div className="pt-5  ">
                  <a href="" className="text-md text-white hover:text-gray-400 pt-6">Education Sector</a>
                  <hr className="hrNew" />
                </div>
              </div>
              <div>
                <h2 className="text-md font-bold text-white">Quick Links</h2>
                <div className="grid grid-cols-2  pt-3">
                  <hr />
                </div>
                <div className="pt-5">
                  <a href="" className="text-md text-white hover:text-gray-400 pt-6">About Us </a>
                  <hr className="hrNew" />
                </div>
                <div className="pt-5">
                  <a href="" className="text-md text-white hover:text-gray-400 pt-6">Projects</a>
                  <hr className="hrNew" />
                </div>
                <div className="pt-5  ">
                  <a href="" className="text-md text-white hover:text-gray-400 pt-6">Our Magazine</a>
                  <hr className="hrNew" />
                </div>
              </div>
              <div>
                <h2 className="text-md font-bold text-white">Contact Us</h2>
                <div className="grid grid-cols-2  pt-3">
                  <hr />
                </div>
                <div>
                  <h6 className="text-md text-white pt-6">+447884060063  </h6>
                  <hr className="hrNew" />
                </div>
                <div>
                  <h6 className="text-md text-white pt-6">info@sadagaat-uk.org</h6>
                  <hr className="hrNew" />
                </div>
                <div>
                  <h6 className="text-md text-white pt-6">https://sadagaat-uk.org/  </h6>
                  <hr className="hrNew" />
                </div>
              </div>

            </div>
          </div>
          <div className="text-right  px-7 pt-10 grid grid-cols-3 ">
            <div></div>
            <h2 className="col-span-2 text-md font-bold text-white" >All Rights Reserved Sadagaat Community of Charity - 2023</h2>
          </div>

        </section>


      </div>
    </>
  )
}

export default App
