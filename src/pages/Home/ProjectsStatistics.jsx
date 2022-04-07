import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import address from '../../services';
import CountUp from "react-countup";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

function ProjectsStatistics() {

    const {t} = useTranslation();
    const [doneProjects, setDoneProjects] = useState([]);
    const [notDoneProjects, setNotDoneProjects] = useState([]);
    const [dooners, setDooners] = useState([]);
    const [volunteer, setVolunteer] = useState([]);
    const [planedProjects, setPlanedProjects] = useState([]);

    async function fetchData() {
        const pro1 = await window.fetch(`${address()}projects/finished`);
        const res3 = await pro1.json();
        setDoneProjects(res3);
        const pro2 = await window.fetch(`${address()}projects/notFinished`);
        const res4 = await pro2.json();
        setNotDoneProjects(res4);
        const pro3 = await window.fetch(`${address()}donors`);
        const res5 = await pro3.json();
        setDooners(res5);
        const pro4 = await window.fetch(`${address()}totalMembers`);
        const res6 = await pro4.json();
        setVolunteer(res6);
        const pro5 = await window.fetch(`${address()}projects/plan`);
        const res7 = await pro5.json();
        setPlanedProjects(res7);
    }


    // get sliders on page load
    useEffect(() => {
        fetchData();
    }, [i18n.language])

    return (
       <>
            <main>
                {/* projects fixed background */}
                <section className="fixedBackGround pt-6 pb-6 pb-10 grid grid-cols-12 text-center ">
                    <div></div>
                    <div className="col-span-10 text-gray-900 grid lg:grid-cols-5 grid-cols-2 pt-5 pb-5 text-center">
                        <div className="pt-5">
                            <h2 className="grid grid-cols-9 justify-content-center">
                                <div className="col-span-4"></div>
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                                </svg>
                            </h2>
                            <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">
                                <CountUp end={doneProjects} duration={5} />
                            </h2>
                            <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white"> {t("Completed Projects")} </h2>
                        </div>
                        <div className="pt-5 pb-6">
                            <h2 className="grid grid-cols-9 justify-content-center">
                                <div className="col-span-4"></div>
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                                </svg>
                            </h2>
                            <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">
                                <CountUp end={notDoneProjects} duration={5} />
                            </h2>
                            <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">{t("Ongoing Projects")} </h2>
                        </div>
                        <div className="pt-5 pb-6">
                            <h2 className="grid grid-cols-9 justify-content-center">
                                <div className="col-span-4"></div>
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                                </svg>
                            </h2>
                            <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">
                                <CountUp end={planedProjects} duration={5} />
                            </h2>
                            <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">{t("Planned Projects")} </h2>
                        </div>
                        <div className="pt-5 pb-6">
                            <h2 className="grid grid-cols-9 justify-content-center">
                                <div className="col-span-4"></div>
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                                </svg>
                            </h2>
                            <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">
                                <CountUp end={dooners} duration={5} />
                            </h2>
                            <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">{t("Donors")} </h2>
                        </div>
                        <div className="pt-5 pb-6">
                            <h2 className="grid grid-cols-9 justify-content-center">
                                <div className="col-span-4"></div>
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32 " fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
                                </svg>
                            </h2>
                            <h2 className="text-left text-md text-center font-bold pb-6 pt-8 text-white">
                                <CountUp end={volunteer} duration={5} /> </h2>
                            <h2 className="text-left text-md font-bold text-center pb-4 pt-5 text-white">{t("Volunteer")} </h2>
                        </div>

                    </div>
                </section>
            </main>
            </>
    )
}

export default ProjectsStatistics
