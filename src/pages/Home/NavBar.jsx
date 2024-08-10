import React, { useState, useEffect } from "react";
import address from '../../services';
import axios from 'axios';
import { Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/logo.png"
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import "../../i18next/i18n.js"

function NavBar() {

    const {t} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const [featuredOnGoingProjects, setFeaturedOnGoingProjects] = useState([]);
    async function fetchFeaturedOnGoingProjects() {
        const url = `${address()}projects/featured-ongoing`;
        const response = await axios.get(url, {
            headers: { "accept-language": `${i18n.language}` },
        });
        setFeaturedOnGoingProjects(response.data);
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
        }
    }

    useEffect(() => {
        fetchMagazine();
        fetchFeaturedOnGoingProjects();
    }, [i18n.language]);


    return (
        <>
            <main>
                {/* navbar */}
                <Navbar fluid rounded>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <div className="flex md:order-1 ml-auto ">
                        <button className="flex primary font-medium rounded-lg text-md pt-3  px-4 text-center text-white hove:text-white"
                            onClick={() => { window.location.href = '/donate' }}>
                            <svg className="w-6 h-6 text-red-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            <span className="px-4"> {t("Donate")}</span>
                        </button>
                        <Navbar.Toggle className="bg-white" />
                    </div>
                    <Navbar.Collapse className="text-gray-800 gap-4 flex-wrap">
                        <Navbar.Link href="/" >
                            <img src={logo} className="h-16 w-24" 
                            style={{
                                [i18n.dir() === "ltr" ? "left" : "right"]: 0,
                                top: 0
                            }}/>
                        </Navbar.Link>
                        <Navbar.Link href="/" className="text-gray-700 flex font-bold text-md mt-6 px-3"> {t("Home")}</Navbar.Link>
                        <Dropdown label= {t("About Us")} inline className="text-gray-800 text-md font-bold">
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/about">
                            {t("About Us")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/contact-us">
                            {t("Contact")}</Dropdown.Item>
                        </Dropdown>

                        <Dropdown
                            label={t("Sectors")} inline className="text-gray-800 text-md font-bold">
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/wash">
                            {t("Water Sector")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/education">
                            {t("Education Sector")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/health">
                            {t("Health Sector")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/feeding">
                            {t("Feeding Sector")}</Dropdown.Item>
                        </Dropdown>

                        <Dropdown
                            label={t("Projects")} inline className="text-gray-800 text-md font-bold">
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/ongoin-projects">
                            {t("Ongoing")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/planned-projects">
                            {t("Planned")}</Dropdown.Item>
                        </Dropdown>

                        <Dropdown
                            label= {t("featured_ongoing_projects")} inline className="text-gray-800 text-md font-bold">
                            {featuredOnGoingProjects.map((project, index) => {
                                return (
                                    <Dropdown.Item key={index} className="text-gray-700 flex font-bold text-md mt-3"
                                        href={`/single-project/${project.id}`}> {project.name}</Dropdown.Item>
                                )
                            })}
                        </Dropdown>

                        <Dropdown
                            label={t("Media")} inline className="text-gray-800 text-md font-bold">
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/gallery">
                            {t("Photo")}{" "}{t("Gallery")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/news">
                            {t("News")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href={magazineLinks.allMagazineLink}>
                            {t("checkout_monthly_magazine")}</Dropdown.Item>
                        </Dropdown>

                        <Dropdown
                            label={t("join_us")} inline className="text-gray-800 text-md font-bold">
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3 " href="/ongoin-projects">
                            {t("donate_to_project")}</Dropdown.Item>
                            <Dropdown
                                label={t("Become a Volunteer")} inline className="text-gray-800 ml-16 w-full text-md font-bold">
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/Volunteers">
                                {t("About") + " " + t("Volunteers")}</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/volunteerForm">
                                {t("Volunteers Form")}</Dropdown.Item>
                                <Dropdown.Item className="text-gray-700 font-bold text-md mt-3" href="/volunteers-programs">
                                {t("Volunteers Programs")}  </Dropdown.Item>
                            </Dropdown>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="/events">
                            {t("attend_an_event")}</Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3" href="careers">
                            {t("Careers")}</Dropdown.Item>
                        </Dropdown>

                        <Dropdown
                            label={t("sudanese_learning_hub")} inline className="text-gray-800 text-md font-bold">
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3 " href="/sudanese-learning-hub">
                                Cisco Network Academy</Dropdown.Item>
                        </Dropdown>
                        <Dropdown label={i18n.language === "en" ? "en" : "ar"} inline className="text-gray-800 text-md font-bold">
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3">
                               <a
                               className={`bg-white text-gray-700 hover:bg-white hover:border-none${i18n.language === "ar" ? "d-none" : ""}`} 
                               
                               onClick={(event) => changeLanguage("ar")}>العربية</a>
                             </Dropdown.Item>
                            <Dropdown.Item className="text-gray-700 flex font-bold text-md mt-3"
                                >
                                 <a className={`bg-white text-gray-700 hover:bg-white hover:border-none${i18n.language === "en" ? "d-none" : ""}`} 
                              
                              onClick={(event) => (
                                
                                changeLanguage("en")
                       
                                
                                )}>English</a>
                                </Dropdown.Item>
                        </Dropdown>

                    </Navbar.Collapse>
                </Navbar>
            </main >
        </>
    )
}

export default NavBar
