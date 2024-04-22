import React, { useState, useEffect } from "react";
import address from '../../services';
import axios from 'axios';
import { Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/images/logo.png"
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
                <Navbar fluid rounded>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <div className="flex md:order-1">
                        <button className="flex primary font-medium rounded-lg text-md pt-3  px-4 text-center text-white hove:text-white"
                            onClick={() => { window.location.href = '/donate' }}>
                            <svg className="w-6 h-6 text-red-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            <span className="px-4">Donate</span>
                        </button>
                        <Navbar.Toggle className="bg-white" />
                    </div>
                    <Navbar.Collapse className="text-gray-800 gap-4 ">
                            <Navbar.Link href="#" >
                                <img src={logo} className="h-18 w-40 sm:h-10" />
                            </Navbar.Link>
                            <Navbar.Link href="/" className="text-gray-700 flex font-bold text-md mt-3 px-3">Home</Navbar.Link>
                            <Dropdown label="About_Us" inline className="text-gray-800 text-md font-bold">
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/about">
                                    About_Us</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/contact-us">
                                    Contact</Dropdown.Item>
                            </Dropdown>

                            <Dropdown
                                label="Sectors" inline className="text-gray-800 text-md font-bold">
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/wash">
                                    Wash</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/education">
                                    Education</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/health">
                                    Health</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/feeding">
                                    Feeding</Dropdown.Item>
                            </Dropdown>

                            <Dropdown
                                label="Projects" inline className="text-gray-800 text-md font-bold">
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/ongoin-projects">
                                    Ongoing</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/planned-projects">
                                    Planned</Dropdown.Item>
                            </Dropdown>

                            <Dropdown
                                label="Ongoing_Featured_Projects" inline className="text-gray-800 text-md font-bold">
                                {featuredOnGoingProjects.map((project, index) => {
                                    return (
                                        <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3"
                                            href={`/single-project/${project.id}`}> {project.name}</Dropdown.Item>
                                    )
                                })}
                            </Dropdown>

                            <Dropdown
                                label="Media" inline className="text-gray-800 text-md font-bold">
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/news">
                                    News and Impact stories</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/gallery">
                                    Photo Galary</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href={magazineLinks.allMagazineLink}>
                                    Check out our monthly magazine</Dropdown.Item>
                            </Dropdown>

                            <Dropdown
                                label="Join_Us" inline className="text-gray-800 text-md font-bold">
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/ongoin-projects">
                                    Donate to a project</Dropdown.Item>
                                <Dropdown
                                    label="Become a volunteer" inline className="text-gray-800 text-md font-bold">
                                    <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/Volunteers">
                                        About Volunteers</Dropdown.Item>
                                    <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/volunteerForm">
                                        volunteers form</Dropdown.Item>
                                    <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/volunteers-programs">
                                        Volunteers programs</Dropdown.Item>
                                </Dropdown>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/events">
                                    Attend an event</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="careers">
                                    Careers</Dropdown.Item>
                            </Dropdown>

                            <Navbar.Link href="/sudanese-learning-hub" className="text-gray-700 flex text-md mt-3">Sudanese_Learning_Hub</Navbar.Link>
                        
                    </Navbar.Collapse>
                </Navbar>
            </main >
        </>
    )
}

export default NavBar
