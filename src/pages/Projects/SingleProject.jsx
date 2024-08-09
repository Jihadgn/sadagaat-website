import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Tabs, } from 'flowbite-react';
import { Precision, getNumber } from "../../services/getMonthName";
import i18n from "i18next";
import '../../i18next/i18n';
import { useTranslation } from "react-i18next";

import {
    Link,
    Outlet,
    Navigate,
    useParams,
} from "react-router-dom";

function SingleProject() {

  const { t, i18n } = useTranslation();

    const [project, setProject] = useState([]);
    const [data, setData] = useState([]);

    const [images, setImages] = useState([]);

    const params = useParams();
    const id = params.project_id
    async function fetchData() {
        // debugger;
        //  Get id of project from url
        const fetcher = await window.fetch(`${address()}projects/${id}`, {
            headers: { "accept-language": `${i18n.language}` },
        });
        const res1 = await fetcher.json();
        const data = res1.projectTranslations.find((sub) => sub.locale === i18n.language)
        const data2 = res1.images;
        setProject(data);
        setData(res1);
        let currentLocation = [data.locationLat, data.locationLng];
        setImages(data2)
    }

    // get project on page load
    useEffect(() => {
        fetchData()

    }, [i18n.language])


    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />

                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="px-10  py-10 col-span-10 gap-4">
                        <div className="text-gray-800">
                            <div className="event-content pb-6">
                                <h2 className="font-bold text-3xl pb-3">
                                    {project.name}
                                </h2>
                                <hr className="eventsHr w-10" />
                                <div className="overflow-x-auto pt-7">
                                    <Tabs aria-label="Full width tabs" >
                                        <Tabs.Item active title={t("Project Details")}>
                                            <div className=" causes grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 gap-4 pb-9 ">
                                                <div
                                                    className="post-thumb   "
                                                    style={{ mxaHeight: "200px" }}
                                                >
                                                    <img
                                                        className="img-responsive"
                                                        src={`${address()}projects/${id}/image`}
                                                        alt="project image"
                                                        style={{ height: "500px", width: "500px" }}
                                                    />
                                                </div>
                                                <div className="py-4">
                                                    <span className="text-gray-600 text-md px-4">{project.locationName}</span>
                                                    <span className="text-gray-600 text-md px-4">{project.startAt}</span>
                                                    <p className="text-gray-900 text-md pb-10 pt-10">{project.description}</p>
                                                    <span className="text-blue-800 text-md font-bold pt-10">{t("Project Progress")}</span>
                                                    <div className="progress-item mt-0 pt-3">
                                                        <div className="progress">
                                                            <div
                                                                data-percent={data.projectProgress}
                                                                className="progress-bar"
                                                            >
                                                                <span className="percent">
                                                                    {data.projectProgress}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-item mt-0 pt-10">
                                                        <div className="progress">
                                                            <div
                                                                data-percent={data.donationProgress}
                                                                className="progress-bar"
                                                            >
                                                                <span className="percent">
                                                                    {data.donationProgress}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-5 flex">
                                                        <h3 className="pr-10 text-md font-bold">{t("Raised")}{" "} USD {data.raised}   </h3>
                                                        <h3 className="pl-10 text-md font-bold">{t("Goal")} USD {data.goal} </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </Tabs.Item>
                                        <Tabs.Item title={t("Project Timeline")} >
                                            <h4 className="text-center font-bold text-2xl">{t("No Project Timeline")}</h4>
                                        </Tabs.Item>
                                        <Tabs.Item title={t("Project Map")} >

                                            {/* <Map center={currentLocation} zoom={zoom}>
                                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                                <Marker
                                                    position={currentLocation}
                                                    icon={VenueLocationIcon}
                                                >
                                                    <Popup>
                                                        <div className="poup-text">
                                                            <h6>{project.name}</h6>
                                                            <p>{project.locationName}</p>
                                                        </div>
                                                    </Popup>
                                                </Marker>
                                            </Map> */}
                                            <h4 className="text-center font-bold text-2xl">{t("Map not available")}</h4>

                                        </Tabs.Item>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>

                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default SingleProject
