import { React, useEffect, useState } from "react";
import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import cisco from "../../assets/1234.png"
import { Link } from "react-router-dom";

function Learning() {

    const [news, setNews] = useState([]);

    function convertDateTime(dateTime) {
        var date = new Date(dateTime);
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var day = String(date.getDay()).padStart(2, '0');
        const formatedDate = year + "-" + month + "-" + day;
        return formatedDate;
    }

    async function fetchData() {
        const fetcher = await window.fetch(`${address()}cisco-category/`);
        const response = await fetcher.json();
        setNews(response);
    }

    useEffect(() => {
        fetchData();
    }, [])



    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* coursesPage */}
                <section className="py-10 bg-gray-500 ">
                    <div className="py-10 text-center grid grid-cols-6  gap-6">
                        <div></div>
                        <img src={cisco} className="h-24 w-24" />
                        <h3 className="text-3xl pt-5 font-bold text-white col-span-2">Cisco Networking Academy</h3>
                        <div></div>
                    </div>
                </section>
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10 border px-9 py-5 ">
                        <h2 className="text-gray-500 font-bold pt-6">In response to the recent conflict in Sudan, numerous Sudanese individuals, particularly the youth, have been displaced, leading to interruptions in their education and careers. Many are seeking avenues to acquire new skills or pursue different career paths.</h2>
                        <h2 className="text-gray-500 font-bold pt-6">To address this, Sadagaat is proud to collaborate with Cisco Networking Academy in launching the Sudanese Learning Hub. This initiative aims to provide top-tier practical education from Cisco, a global technology leader powering the Internet. The courses offered are strategically designed to equip learners with the skills necessary for success in various job roles. Cisco Networking Academy has a longstanding reputation for its IT skills-to-jobs programs. Through robust public-private partnerships and high-quality curriculum, they've been instrumental in inclusive workforce development since 1997.</h2>
                        <h2 className="text-gray-500 font-bold pt-6 ">The Sudanese Learning Hub is committed to providing a range of Cisco Network Academy courses focusing on high-demand IT subjects like Cybersecurity, Networking, Data Science, Programming, and Operating Systems. These courses aim to pave the way for employment opportunities in the IT sector. The Learning Hub will offer three types of courses under the 'Skills for All' platform, all of which are free of charge.</h2>
                        <h2 className="text-red-600 text-xl text-center font-bold p-6 ">ONLY SUDANESE PEOPLE CAN APPLY</h2>

                        <div className="pt-9">
                            {news.map((cate, index) => (
                                <div className="pt-9 pb-6 px-4">
                                    <h2 className="font-bold text-gray-800 text-xl">{index + 1}- {cate.title}</h2>
                                    <div className="pt-4">
                                        <h2 className="text-gray-600 text-left px-3 text-md"> {cate.description} </h2>
                                    </div>
                                    <div className="pt-1 md:px-10 px-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-5">
                                        {cate.ciscoCourses.map((course, index) => (
                                            <div className="max-w-md border-2 border-blue-800">
                                                <h2 className=" py-3 font-bold text-white text-center text-md course-card "> {course.title} </h2>
                                                <div className="pt-4">
                                                    <h2 className=" text-gray-600 text-left px-3 text-md"> {course.description} </h2>
                                                </div>

                                                {course.startDate ? (
                                                    <div className="pt-4 pb-5 flex">
                                                        <h2 className="text-gray-800 text-left px-3 text-sm">
                                                            From: {convertDateTime(course.startDate)} ...  to : {convertDateTime(course.endDate)} </h2>
                                                    </div>
                                                ) : (
                                                    <div className="pt-4 pb-5 ">
                                                        <h2 className="text-gray-800 text-center px-3 text-md font-bold">Comming Soon...</h2>
                                                    </div>
                                                )}
                                                {course.link ? (
                                                    <div className="py-4 px-10 text-center w-full mb-4">
                                                        <Link className="hover:bg-blue-700 flex-wrap hover:text-white course-card text-white px-4 py-3 w-full text-center" to={course.link}>Get Started</Link>
                                                    </div>
                                                ) : (
                                                    <div className="py-4 px-10 text-center w-full mb-4">
                                                        <Link className="hover:bg-blue-700 flex-wrap hover:text-white course-card text-white px-4 py-3 w-full text-center" to="/course-form">Register</Link>
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
