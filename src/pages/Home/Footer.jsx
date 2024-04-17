import React from "react";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import address from '../../services';

function Footer() {

    const [footer, setFooter] = useState([]);
    const [contact, setContact] = useState({})
    const [location, setLocation] = useState({})


    async function fetchTable() {
        const fetcher = await window.fetch(`${address()}copy-right`,
            {
                headers: { 'accept-language': `en` }
            });
        const response = await fetcher.json();
        setFooter(response);
    }

    async function fetchContact() {
        const fetcher = await window.fetch(`${address()}contact-info/UK`,
            {
                headers: { 'accept-language': `en` }
            });
        const response = await fetcher.json();
        setContact(response);
        setLocation(contact.location)
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
        fetchTable();
        fetchContact();
        fetchMagazine();

    }, [])

    return (
        <>
            <main>
                <section className="pt-10 pb-10 footer">
                    <div className="grid grid-cols-12">
                        <div></div>
                        <div className="col-span-10 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 pt-8 pb-8 px-10   gap-9">
                            <div>
                                <h1 className="text-2xl font-bold text-white">SADAGAAT</h1>
                                <h2 className="text-md pt-5 font-bold text-white" >مجتمع_فكرة #</h2>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1">
                                    <div className="grid lg:grid-cols-4 grid-cols-4 md:grid-cols-2">
                                        <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                            </svg>
                                        </a>
                                        <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">
                                            <svg className="w-6 h-6 text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a className="text-md pt-5 font-bold text-white hover:text-gray-500" href="#">

                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-md font-bold text-white">Sectors</h2>
                                <div className="grid grid-cols-2  pt-3">
                                    <hr />
                                </div>
                                <div className="pt-5">
                                    <Link to="/wash" className="text-md text-white hover:text-gray-400 pt-6">WASH Sector</Link>
                                    <hr className="hrNew" />
                                </div>
                                <div className="pt-5">
                                    <Link to="/health" className="text-md text-white hover:text-gray-400 pt-6">Health Sector</Link>
                                    <hr className="hrNew" />
                                </div>
                                <div className="pt-5">
                                    <Link to="/feeding" className="text-md text-white hover:text-gray-400 pt-6">Feeding Sector</Link>
                                    <hr className="hrNew" />
                                </div>
                                <div className="pt-5  ">
                                    <Link to="/education" className="text-md text-white hover:text-gray-400 pt-6">Education Sector</Link>
                                    <hr className="hrNew" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-md font-bold text-white">Quick Links</h2>
                                <div className="grid grid-cols-2  pt-3">
                                    <hr />
                                </div>
                                <div className="pt-5">
                                    <Link to="/about" className="text-md text-white hover:text-gray-400 pt-6">About Us </Link>
                                    <hr className="hrNew" />
                                </div>
                                <div className="pt-5">
                                    <Link to="/ongoin-projects" className="text-md text-white hover:text-gray-400 pt-6">Projects</Link>
                                    <hr className="hrNew" />
                                </div>
                                <div className="pt-5  ">
                                    <Link to={magazineLinks.allMagazineLink}
                                        target="_blank" className="text-md text-white hover:text-gray-400 pt-6">Our Magazine</Link>
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
                    <div className=" px-7 pt-7 text-center ">
                        {footer.length !== 0 ?
                            parse(`${footer.text}`) :
                            "All Rights Reserved © Sadagaat Community of Charity - 2020"}
                    </div>

                </section>
            </main>
        </>
    )
}

export default Footer
