import { React, useEffect, useState } from "react";
import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function Learning() {

        const [news, setNews] = useState([]);


        async function fetchData() {
            const fetcher = await window.fetch(`${address()}cisco-category/`);
            const response = await fetcher.json();
            setNews(response);
        }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                <section className="py-10 bg-gray-500 ">
                    <div className="py-10 text-center">
                        <h3 className="text-3xl font-bold text-white">  Sudanese Learning Hub   </h3>
                    </div>
                </section>
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10 border px-9 py-5 ">
                        <h2 className="text-gray-500 font-bold pt-6">In response to the recent conflict in Sudan, numerous Sudanese individuals, particularly the youth, have been displaced, leading to interruptions in their education and careers. Many are seeking avenues to acquire new skills or pursue different career paths.</h2>
                        <h2 className="text-gray-500 font-bold pt-6">To address this, Sadagaat is proud to collaborate with Cisco Networking Academy in launching the Sudanese Learning Hub. This initiative aims to provide top-tier practical education from Cisco, a global technology leader powering the Internet. The courses offered are strategically designed to equip learners with the skills necessary for success in various job roles. Cisco Networking Academy has a longstanding reputation for its IT skills-to-jobs programs. Through robust public-private partnerships and high-quality curriculum, they've been instrumental in inclusive workforce development since 1997.</h2>
                        <h2 className="text-gray-500 font-bold pt-6 ">The Sudanese Learning Hub is committed to providing a range of Cisco Network Academy courses focusing on high-demand IT subjects like Cybersecurity, Networking, Data Science, Programming, and Operating Systems. These courses aim to pave the way for employment opportunities in the IT sector. The Learning Hub will offer three types of courses under the 'Skills for All' platform, all of which are free of charge.</h2>

                        <div className="pt-9">
                            {news.map((cate, index) => (
                                <div className="pt-9 pb-6 px-4">
                                    <h2 className="font-bold text-gray-800 text-xl">{index + 1}- {cate.description}</h2>
                                    <div className="pt-1 md:px-10 px-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-5">
                                        {cate.ciscoCourses.map((course, index) => (
                                            <div className="max-w-md border-2 border-blue-800">
                                                <h2 className=" py-3 font-bold text-white text-center text-xl course-card ">Course {index + 1} </h2>
                                                <div className="pt-4">
                                                    <h2 className="font-bold text-gray-800 text-left px-3 text-md"> {course.description} </h2>
                                                </div>
                                                <div className="pt-4 pb-5 flex">
                                                    <h2 className="text-gray-800 text-left px-3 text-sm">From: {course.startDate} -  to : {course.endDate} </h2>
                                                </div>
                                                {course.link ? (
                                                    <div className="py-4 px-10 text-center w-full bg-gray-200">
                                                        <Link className="hover:bg-blue-700  flex hover:text-white course-card text-white px-4 py-3 w-full text-center" to={course.link}>Get Started</Link>
                                                    </div>
                                                ) : (
                                                    <div className="py-4 px-10 text-center w-full bg-gray-200">
                                                        <Link className="hover:bg-blue-700  flex hover:text-white course-card text-white px-4 py-3 w-full text-center" to="/course-form">Register</Link>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Learning
