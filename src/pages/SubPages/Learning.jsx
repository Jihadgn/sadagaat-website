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
        // format month
        if (month == 1) {
            var formatedMonth = "Jan"
        } else if (month == 2) {
            var formatedMonth = "Feb"
        } else if (month == 3) {
            var formatedMonth = "Mar"
        } else if (month == 4) {
            var formatedMonth = "Apr"
        } else if (month == 5) {
            var formatedMonth = "May"
        } else if (month == 6) {
            var formatedMonth = "Jun"
        } else if (month == 7) {
            var formatedMonth = "Jul"
        } else if (month == 8) {
            var formatedMonth = "Aug"
        } else if (month == 9) {
            var formatedMonth = "Sept"
        } else if (month == 10) {
            var formatedMonth = "Oct"
        } else if (month == 11) {
            var formatedMonth = "Nov"
        } else {
            var formatedMonth = "Des"
        }
        // format day
        if (day == 1) {
            var formatedDay = "1st"
        } else if (day == 2) {
            var formatedDay = "2nd"
        } else if (day == 3) {
            var formatedDay = "3ed"
        } else if (day == 4) {
            var formatedDay = "4th"
        } else if (day == 5) {
            var formatedDay = "5th"
        } else if (day == 6) {
            var formatedDay = "6th"
        } else if (day == 7) {
            var formatedDay = "7th"
        } else if (day == 8) {
            var formatedDay = "8th"
        } else if (day == 9) {
            var formatedDay = "9th"
        } else if (day == 10) {
            var formatedDay = "10th"
        } else if (day == 11) {
            var formatedDay = "11th"
        } else if (day == 12) {
            var formatedDay = "12th"
        } else if (day == 13) {
            var formatedDay = "13th"
        } else if (day == 14) {
            var formatedDay = "14th"
        } else if (day == 15) {
            var formatedDay = "15th"
        } else if (day == 16) {
            var formatedDay = "16th"
        } else if (day == 17) {
            var formatedDay = "17th"
        } else if (day == 18) {
            var formatedDay = "18th"
        } else if (day == 19) {
            var formatedDay = "19th"
        } else if (day == 20) {
            var formatedDay = "20th"
        } else if (day == 21) {
            var formatedDay = "21th"
        } else if (day == 22) {
            var formatedDay = "22th"
        } else if (day == 23) {
            var formatedDay = "23th"
        } else if (day == 24) {
            var formatedDay = "24th"
        } else if (day == 25) {
            var formatedDay = "25th"
        } else if (day == 26) {
            var formatedDay = "26th"
        } else if (day == 27) {
            var formatedDay = "27th"
        } else if (day == 28) {
            var formatedDay = "28th"
        } else if (day == 29) {
            var formatedDay = "29th"
        } else if (day == 30) {
            var formatedDay = "30th"
        } else if (day == 31) {
            var formatedDay = "31th"
        } else {
            var formatedDay = " "
        }
        const formatedDate = formatedMonth + "    " + formatedDay + ", " + year;
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
                <section className="py-10 bg-blue-100 ">
                    <div className="py-10 text-center grid grid-cols-3 gap-1">
                        <div></div>
                        <img src={cisco} className="h-42 w-42" />
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
                                    <div className="pt-1 md:px-10 px-1 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 pt-5">
                                        {cate.ciscoCourses.map((course, index) => (
                                            <div className="border-2 border-blue-800">
                                                <h2 className=" py-3 font-bold text-white text-center text-md course-card h-14"> {course.title} </h2>
                                                <div className="pt-4">
                                                    <h2 className=" text-gray-600 text-left px-3 text-md h-24 overflow-hidden"> {course.description} </h2>
                                                </div>

                                                {course.startDate ? (
                                                    <div>
                                                        <div className="pt-4 pb-5 flex">
                                                            <h2 className="text-gray-800 text-center px-3 text-sm">
                                                                <span className="font-bold">From:</span> {convertDateTime(course.startDate)} - <span className="font-bold">To:</span> {convertDateTime(course.endDate)} </h2>
                                                        </div>
                                                        <div className="py-5 px-2 text-center grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-2">
                                                            <span className="text-white  text-xs course-card py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                            <span><svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg></span>
                                                                <span className="mx-1 pt-1">{course.numberOfHours}</span> <span className=" pt-1">Hours</span></span>
                                                            <span className="text-white gap-1 text-xs bg-green-500 py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                                <span><svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                                                                </svg></span>
                                                                <span className="pt-1">{course.level}</span></span>
                                                            {course.lab ? (
                                                                <span className="text-white  text-xs bg-gray-500 py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                                    <span><svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                                                                    </svg></span>
                                                                    <span className="mx-1 pt-1">{course.lab}</span><span className="mx-1 pt-1">Labs</span></span>
                                                            )
                                                                :
                                                                (
                                                                    <span className="text-white  text-xs bg-gray-500 py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                                       <span> <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                                                                        </svg></span>

                                                                        <span className="mx-1 pt-1">0</span><span className="mx-1 pt-1">Labs</span></span>
                                                                )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div className="pt-4 pb-5 ">
                                                            <h2 className="text-gray-800 text-center px-3 text-md font-bold">Comming Soon...</h2>
                                                        </div>
                                                        <div className="py-5 text-center grid md:grid-cols-2 grid-cols-3 xl:grid-cols-3">
                                                            <span className="text-white text-xs  font-bold course-card py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                            <span><svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg></span>
                                                                <span className="mx-1 pt-1">{course.numberOfHours}</span> <span className=" pt-1">Hours</span></span>
                                                            <span className="text-white gap-1 text-xs bg-green-500 py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                                <span><svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                                                                </svg></span>
                                                                <span className="pt-1">{course.level}</span></span>
                                                            {course.lab ? (
                                                                <span className="text-white text-xs bg-gray-500 py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                                    <span><svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                                                                    </svg></span>
                                                                    <span className="mx-1 pt-1">{course.lab}</span><span className="mx-1 pt-1">Labs</span></span>
                                                            )
                                                                :
                                                                (
                                                                    <span className="text-white text-xs bg-gray-500 py-2 mt-3 px-3 flex rounded-lg mx-2">
                                                                       <span> <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                                                                        </svg></span>

                                                                        <span className="mx-1 pt-1">0</span><span className="mx-1 pt-1">Labs</span></span>
                                                                )}
                                                        </div>
                                                    </div>
                                                )}
                                                {course.link ? (
                                                    <div className="py-4 px-10 text-center w-full relative mb-0">
                                                        <Link className="hover:bg-blue-700 flex-wrap hover:text-white course-card text-white px-4 py-3 w-full text-center" to={course.link}>Get Started</Link>
                                                    </div>
                                                ) : (
                                                    <div className="py-4 px-10 text-center w-full  relative mb-0">
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
