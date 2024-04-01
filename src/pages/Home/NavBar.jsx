import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import address from '../../services';
import axios from 'axios';
import { Collapse } from 'flowbite';

function NavBar() {

    const [featuredOnGoingProjects, setFeaturedOnGoingProjects] = useState([]);
    async function fetchFeaturedOnGoingProjects() {
        const url = `${address()}projects/featured-ongoing`;
        const response = await axios.get(url, {
            headers: { "accept-language": `en` },
        });
        setFeaturedOnGoingProjects(response.data);
        console.log(response.data);
    }

    const [magazineLinks, setMagazineLinks] = useState({
        allMagazineLink: "",
        currentMagazineLink: ""
    });
    // const magazineLink = magazineLinks.allMagazineLink ;

    async function fetchMagazine() {
        try {
            const url = `${address()}magazine`;
            const res = await axios.get(url);
            setMagazineLinks(res.data);
        } catch (ex) {
            console.log("Unable to fetch magazine links!");
        }
    }

    useEffect(() => {
        fetchMagazine();
        fetchFeaturedOnGoingProjects();
    }, []);

    return (  
        <>
            <main>
                {/* navbar */}
                <section className="px-4 bg-white nav z-40 ">
                    <div className="flex flex-wrap items-center lg:justify-center sm:justify-between xs:justify-between gap-4 mx-auto px-4 py-2">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse px-10">
                            <img src="src/assets/images/logo.png" className="h-16 w-40" />
                        </Link>
                        <button id="triggerEl" aria-expanded="false" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                            <span className="sr-only">main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full lg:block md:w-auto" id="targetEl">
                            <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg  md:space-x-8  md:flex-row">
                                <li className="py-3">
                                    <Link to="/" className="flex block py-2 px-3 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Home</Link>
                                </li>
                                <li className="py-3">
                                    <button id="dropAbout" data-dropdown-toggle="dropDownAbout"
                                        className="inline-flex items-center nav justify-between w-full py-2 px-1 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                        About_Us <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="dropDownAbout" className="z-10 hidden font-normal nav divide-y divide-gray-100 rounded-lg shadow w-60">
                                        <ul className="py-2 pt-5 text-md text-gray-900 " aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <Link to="/about" className="block  px-4 py-2 hover:bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold ">about us</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact-us" className="block  px-4 py-2 hover:bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold">contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <button id="dropSectors" data-dropdown-toggle="dropdownSectors"
                                        className="flex items-center nav justify-between w-full py-2 px-1 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                        Sectors <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="dropdownSectors" className="z-10 hidden font-normal nav divide-y divide-gray-100 rounded-lg shadow w-60">
                                        <ul className="py-2 pt-5 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <Link to="/wash" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">WASH</Link>
                                            </li>
                                            <li>
                                                <Link to="/education" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Education</Link>
                                            </li>
                                            <li>
                                                <Link to="/health" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Health</Link>
                                            </li>
                                            <li>
                                                <Link to="/feeding" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Feeding</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <button id="dropProjects" data-dropdown-toggle="dropdownProjects"
                                        className="flex items-center nav justify-between w-full py-2 px-1 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                        Projects <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="dropdownProjects" className="z-10 hidden font-normal nav divide-y divide-gray-100 rounded-lg shadow w-60">
                                        <ul className="py-2 pt-5 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <Link to="/ongoin-projects" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Ongoing</Link>
                                            </li>
                                            <li>
                                                <Link to="/planned-projects" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Planned</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <button id="FeaturedProjects" data-dropdown-toggle="dropFeaturedProjects"
                                        className="flex items-center nav justify-between w-full py-2 px-1 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                        Ongoing_Featured_Projects <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>

                                    <div id="dropFeaturedProjects" className="z-10 hidden font-normal nav divide-y divide-gray-100 rounded-lg shadow w-60">
                                        <ul className="dropdown">
                                            {featuredOnGoingProjects.map((project, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link
                                                            to={`/single-projects/${project.id}`}>
                                                            {project.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <button id="dropMedia" data-dropdown-toggle="dropdownMedia"
                                        className="flex items-center nav justify-between w-full py-2 px-1 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                        Media <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="dropdownMedia" className="z-10 hidden font-normal nav divide-y divide-gray-100 rounded-lg shadow w-70">
                                        <ul className="py-2 pt-5 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <Link to="/news" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">News and Impact stories</Link>
                                            </li>
                                            <li>
                                                <Link to="/gallery" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Photo Galary</Link>
                                            </li>
                                            <li>
                                                <Link t to={magazineLinks.allMagazineLink}
                                                    target="_blank" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Check out our monthly magazine</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <button id="dropJoinUs" data-dropdown-toggle="dropdownJoinUs"
                                        className="flex items-center nav justify-between w-full py-2 px-1 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                        Join_Us <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="dropdownJoinUs" className="z-10 hidden font-normal nav divide-y divide-gray-100 rounded-lg shadow w-60">
                                        <ul className="py-2 pt-5 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <Link to="/ongoin-projects" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Donate to a project</Link>
                                            </li>
                                            <li className="py-3">
                                                <button id="dropJoin" data-dropdown-toggle="dropdownJoin"
                                                    className="flex items-center nav justify-between w-full py-2 px-4 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                                    Become a volunteer 
                                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                    </svg></button>
                                                <div id="dropdownJoin" className="z-10 hidden font-normal nav divide-y divide-gray-100 rounded-lg shadow w-70">
                                                    <ul className="py-2 pt-5  text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                        <li>
                                                            <Link to="/Volunteers" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">About Volunteers</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/volunteerForm" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">volunteers form</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/volunteers-programs" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Volunteers programs</Link >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="/events" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">attend an event</Link>
                                            </li>
                                            <li>
                                                <Link to="/careers" className="block  py-2 text-gray-900 hover:text-gray-900 hover:bg-gray-200 text-sm font-bold px-4">Careers</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="py-3">
                                    <a href="#" className="flex block py-2 px-3 font-bold text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        Sudanese_Learning_Hub</a>
                                </li>
                                <button className="flex primary font-medium rounded-lg text-md pt-3  px-4 text-center text-white hove:text-white"
                                    onClick={() => { window.location.href = '/donate' }}>
                                    <svg className="w-6 h-6 text-red-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                    </svg>
                                    <span className="px-4">Donate</span>
                                </button>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default NavBar
